"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Truck, CheckCircle, XCircle, AlertCircle } from "lucide-react"
import { checkAddressInServiceZone, type GeocodingResult } from "@/lib/geocoding"
import { ServiceZoneMapWrapper } from "@/components/service-zone-map-wrapper"

export function AddressChecker() {
  const [address, setAddress] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [checkResult, setCheckResult] = useState<"in-service" | "out-of-service" | "error" | null>(null)
  const [showSignupForm, setShowSignupForm] = useState(false)
  const [showMap, setShowMap] = useState(false)
  const [userLocation, setUserLocation] = useState<GeocodingResult | null>(null)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "residential",
  })

  const checkServiceArea = async (address: string) => {
    setIsChecking(true)
    setCheckResult(null)
    setShowMap(false)
    setUserLocation(null)

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
        setFormData((prev) => ({ ...prev, address }))
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
    // In real implementation, this would send email to client
    console.log("Signup form submitted:", formData)
    alert(
      "Thank you! Your information has been sent to Mike's Trash Service. We'll contact you soon to set up your service.",
    )

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
  }

  return (
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
            <div className="flex gap-2">
              <Input
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="flex-1"
                disabled={isChecking}
              />
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
                <Label htmlFor="serviceAddress">Service Address</Label>
                <Input
                  id="serviceAddress"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData((prev) => ({ ...prev, address: e.target.value }))}
                />
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
                <Button type="submit" className="flex-1">
                  Sign Up for Service
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
  )
}
