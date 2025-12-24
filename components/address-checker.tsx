"use client"

import type React from "react"

import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, CheckCircle, XCircle, AlertCircle, MapPin } from "lucide-react"
import { checkAddressInServiceZone, getAddressSuggestions, type GeocodingResult, type AddressSuggestion } from "@/lib/geocoding"
import { ServiceZoneMapWrapper } from "@/components/service-zone-map-wrapper"

export function AddressChecker() {
  const [address, setAddress] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [checkResult, setCheckResult] = useState<"in-service" | "out-of-service" | "error" | null>(null)
  const [showMap, setShowMap] = useState(false)
  const [userLocation, setUserLocation] = useState<GeocodingResult | null>(null)
  const [suggestions, setSuggestions] = useState<AddressSuggestion[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [isLoadingSuggestions, setIsLoadingSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

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


  return (
    <>
      <div className="w-full max-w-2xl mx-auto">
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
                {checkResult === "in-service" && (
                  <div className="mt-4">
                    <Button
                      asChild
                      className="w-full"
                      size="lg"
                    >
                      <a
                        href="https://app.trashjoes.com/h/mikes-trash"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Sign Up for Service
                      </a>
                    </Button>
                  </div>
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
      </div>
    </>
  )
}
