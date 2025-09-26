"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Truck, CheckCircle, XCircle } from "lucide-react"

export function AddressChecker() {
  const [address, setAddress] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [checkResult, setCheckResult] = useState<"in-service" | "out-of-service" | null>(null)
  const [showSignupForm, setShowSignupForm] = useState(false)
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "residential",
  })

  const handleAddressCheck = async () => {
    if (!address.trim()) return

    setIsChecking(true)
    // Simulate API call to check service area
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // For demo purposes, assume addresses in Rochester/Fulton County are in service
    const isInService =
      address.toLowerCase().includes("rochester") || address.toLowerCase().includes("fulton") || Math.random() > 0.3 // 70% chance of being in service for demo

    setCheckResult(isInService ? "in-service" : "out-of-service")
    setIsChecking(false)

    if (isInService) {
      setFormData((prev) => ({ ...prev, address }))
      setShowSignupForm(true)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would send the form data to your backend/email service
    console.log("Signup data:", formData)
    alert("Thank you for signing up! We will contact you within 24 hours to set up your service.")

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
    <div className="w-full max-w-md">
      <Card className="shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-primary">Sign Up Today!</CardTitle>
          <CardDescription>Enter your address to check if we service your area</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {!showSignupForm ? (
            <>
              <div className="flex gap-2">
                <Input
                  placeholder="Enter Address Here"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleAddressCheck()}
                  className="flex-1"
                />
                <Button onClick={handleAddressCheck} disabled={isChecking || !address.trim()} className="px-3">
                  <Truck className={`h-5 w-5 ${isChecking ? "truck-animation" : ""}`} />
                </Button>
              </div>

              {checkResult && (
                <div
                  className={`flex items-center gap-2 p-3 rounded-lg ${
                    checkResult === "in-service"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {checkResult === "in-service" ? (
                    <>
                      <CheckCircle className="h-5 w-5" />
                      <span className="font-medium">Great! We service your area.</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="h-5 w-5" />
                      <span className="font-medium">Sorry, we don't service this area yet.</span>
                    </>
                  )}
                </div>
              )}
            </>
          ) : (
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                  required
                />
              </div>

              <div>
                <Label htmlFor="serviceType">Service Type</Label>
                <select
                  id="serviceType"
                  value={formData.serviceType}
                  onChange={(e) => setFormData((prev) => ({ ...prev, serviceType: e.target.value }))}
                  className="w-full p-2 border border-input rounded-md bg-background"
                >
                  <option value="residential">Residential Pickup</option>
                  <option value="commercial">Commercial Dumpster</option>
                  <option value="bulk">Bulk Pickup</option>
                  <option value="rolloff">Roll-Off Dumpster</option>
                </select>
              </div>

              <Button type="submit" className="w-full">
                Sign Up for Service
              </Button>

              <Button
                type="button"
                variant="outline"
                className="w-full bg-transparent"
                onClick={() => setShowSignupForm(false)}
              >
                Check Different Address
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
