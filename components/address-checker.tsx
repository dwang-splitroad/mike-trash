"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Truck, CheckCircle, XCircle, AlertCircle, Lock, MapPin } from "lucide-react"
import { checkAddressInServiceZone, getAddressSuggestions, type GeocodingResult, type AddressSuggestion } from "@/lib/geocoding"
import { ServiceZoneMapWrapper } from "@/components/service-zone-map-wrapper"
import { FormSuccess } from "@/components/form-success"
import { FormError } from "@/components/form-error"

export function AddressChecker() {
  const [address, setAddress] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [checkResult, setCheckResult] = useState<"in-service" | "out-of-service" | "error" | null>(null)
  const [showSignupForm, setShowSignupForm] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [userLocation, setUserLocation] = useState<GeocodingResult | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "residential",
  })
  const [showSuccess, setShowSuccess] = useState(false)
  const [showError, setShowError] = useState(false)

  // Debounce function for address suggestions
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null)

  const fetchSuggestions = useCallback(async (query: string) => {
    if (query.trim().length < 3) {
      setSuggestions([])
      setShowSuggestions(false)
      return
    }

    setIsLoadingSuggestions(true)
    try {
      const results = await getAddressSuggestions(query)
      setSuggestions(results)
      setShowSuggestions(results.length > 0)
    } catch (error) {
      console.error("Error fetching address suggestions:", error)
      setSuggestions([])
    } finally {
      setIsLoadingSuggestions(false)
    }
  }, [])

  const handleAddressChange = (value: string) => {
    setAddress(value)
    setCheckResult(null)
    
    // Clear previous timeout
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current)
    }

    // Set new timeout for debounced search (1000ms to respect Nominatim rate limit of 1 req/sec)
    debounceTimeout.current = setTimeout(() => {
      fetchSuggestions(value)
    }, 1000)
  }

  const handleSuggestionClick = (suggestion: AddressSuggestion) => {
    setAddress(suggestion.displayName)
    setShowSuggestions(false)
    setSuggestions([])
  }

  // Click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const checkServiceArea = async (address: string) => {
    setIsChecking(true)
    setCheckResult(null)
    setShowMap(false)
    setUserLocation(null)
    setShowSuggestions(false)

    try {
      const result = await checkAddressInServiceZone(address)

      if (!result.geocodingResult) {
        setCheckResult("error")
        setIsChecking(false)
        return
      }

      setUserLocation(result.geocodingResult)

      if (result.inZone) {
        setCheckResult("in-service")
        // Use the official geocoded address (displayName) instead of user input
        setFormData((prev) => ({ ...prev, address: result.geocodingResult.displayName }))
        setShowSignupForm(true)
      } else {
        setCheckResult("out-of-service")
        setShowMap(true)
      }
    } catch (error) {
      console.error("Error checking service area:", error)
      setCheckResult("error")
    } finally {
      setIsChecking(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send signup data to API
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit signup')
      }

      // Success
      setShowSuccess(true)

      // Reset form
      setAddress("")
      setCheckResult(null)
      setShowSignupForm(false)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        serviceType: "residential",
      })
    } catch (error: any) {
      console.error('Signup submission error:', error)
      setShowError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
  }

  const handleErrorClose = () => {
    setShowError(false)
  }

  return (
    <>
      {showSuccess && (
        <FormSuccess
          title="Service Request Submitted!"
          message={`Thank you! Your information has been sent to Mike's Trash Service. We'll contact you soon to set up your service.\n\n📧 IMPORTANT: We've sent a confirmation email to ${formData.email}. If you don't see it within 5 minutes, please check your spam/junk folder and mark it as "Not Spam" to ensure you receive future updates from us.`}
          onClose={handleSuccessClose}
        />
      )}
      {showError && (
        <FormError
          title="Submission Error"
          message="We're sorry, there was an error submitting your information. Please try again or call us at (574) 223-6429."
          onClose={handleErrorClose}
        />
      )}
      <div className="w-full max-w-2xl mx-auto">
      {!showSignupForm ? (
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-balance">Check if we serve your area</CardTitle>
            <CardDescription className="text-lg">
              Enter your address to see if you're in our service area
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="relative">
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Input
                    ref={inputRef}
                    placeholder="Enter your address (e.g., 123 Main St, Rochester, IN)"
                    value={address}
                    onChange={(e) => handleAddressChange(e.target.value)}
                    className="flex-1"
                    disabled={isChecking}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && address.trim()) {
                        checkServiceArea(address)
                      }
                    }}
                  />
                  {isLoadingSuggestions && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="animate-spin h-4 w-4 border-2 border-primary border-t-transparent rounded-full"></div>
                    </div>
                  )}
                </div>
                <Button
                  onClick={() => checkServiceArea(address)}
                  disabled={!address.trim() || isChecking}
                  className="relative overflow-hidden"
                >
                  {isChecking ? (
                    <div className="flex items-center gap-2">
                      <Truck className={`h-4 w-4 ${isChecking ? "truck-animation" : ""}`} />
                      Checking...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Truck className="h-4 w-4" />
                      Check Area
                    </div>
                  )}
                </Button>
              </div>
              
              {/* Address Suggestions Dropdown */}
              {showSuggestions && suggestions.length > 0 && (
                <div
                  ref={suggestionsRef}
                  className="absolute z-[9999] w-full mt-1 bg-white dark:bg-gray-800 border-2 border-border rounded-lg shadow-2xl max-h-64 overflow-y-auto"
                  style={{ boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)' }}
                >
                  {suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      className="w-full text-left px-4 py-3 hover:bg-secondary/50 transition-colors border-b border-border last:border-b-0 flex items-start gap-2 bg-white dark:bg-gray-800"
                      onClick={() => handleSuggestionClick(suggestion)}
                    >
                      <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-foreground">{suggestion.displayName}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {checkResult && (
              <div
                className={`p-4 rounded-lg border ${
                  checkResult === "in-service"
                    ? "bg-green-50 border-green-200 text-green-800"
                    : checkResult === "error"
                      ? "bg-yellow-50 border-yellow-200 text-yellow-800"
                      : "bg-red-50 border-red-200 text-red-800"
                }`}
              >
                <div className="flex items-center gap-2">
                  {checkResult === "in-service" ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : checkResult === "error" ? (
                    <AlertCircle className="h-5 w-5" />
                  ) : (
                    <XCircle className="h-5 w-5" />
                  )}
                  <span className="font-medium">
                    {checkResult === "in-service"
                      ? "Great news! We serve your area."
                      : checkResult === "error"
                        ? "Unable to verify address."
                        : "Sorry, we don't currently serve this area."}
                  </span>
                </div>
                {checkResult === "error" && (
                  <p className="mt-2 text-sm">
                    Please check your address and try again. Make sure to include city and state.
                  </p>
                )}
              </div>
            )}

            {showMap && userLocation && (
              <div className="mt-4">
                <ServiceZoneMapWrapper userLocation={userLocation} />
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-balance">Sign up for service</CardTitle>
            <CardDescription>
              Fill out your information and we'll contact you to set up your trash service
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                />
              </div>

              <div>
                <Label htmlFor="serviceAddress" className="flex items-center gap-2">
                  Service Address
                  <span className="inline-flex items-center gap-1 text-xs font-normal text-green-600">
                    <CheckCircle className="h-3 w-3" />
                    Verified
                  </span>
                </Label>
                <div className="relative">
                  <Input
                    id="serviceAddress"
                    required
                    value={formData.address}
                    disabled
                    className="bg-green-50 border-green-200 text-foreground pr-10 cursor-not-allowed"
                  />
                  <Lock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-green-600" />
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  This is your verified address. Click "Back" to change it.
                </p>
              </div>

              <div>
                <Label htmlFor="serviceType">Service Type</Label>
                <select
                  id="serviceType"
                  className="w-full p-2 border border-input rounded-md bg-background"
                  value={formData.serviceType}
                  onChange={(e) => setFormData((prev) => ({ ...prev, serviceType: e.target.value }))}
                >
                  <option value="residential">Residential Pickup</option>
                  <option value="dumpster">Dumpster Rental</option>
                  <option value="bulk">Bulk Pickup</option>
                  <option value="rolloff">Roll-Off Container</option>
                </select>
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="submit" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Sign Up for Service"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowSignupForm(false)
                    setCheckResult(null)
                  }}
                >
                  Back
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
      </div>
    </>
  )
}
