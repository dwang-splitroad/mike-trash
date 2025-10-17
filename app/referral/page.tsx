"use client"

import type React from "react"

import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Gift, Users, Share2, DollarSign, Heart, Star } from "lucide-react"
import { useState } from "react"

export default function ReferralPage() {
  const [formData, setFormData] = useState({
    // Referrer information
    referrerFirstName: "",
    referrerLastName: "",
    referrerEmail: "",
    referrerPhone: "",
    referrerAddress: "",
    // Referred customer information
    referredFirstName: "",
    referredLastName: "",
    referredEmail: "",
    referredPhone: "",
    referredAddress: "",
    relationship: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Send referral data to API
      const response = await fetch('/api/referral', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit referral')
      }

      // Success
      alert(
        "Thank you for referring a neighbor to Mike's Trash Service! We'll contact both you and your referral soon. Your referral credit will be applied once they sign up for service.",
      )

      // Reset form
      setFormData({
        referrerFirstName: "",
        referrerLastName: "",
        referrerEmail: "",
        referrerPhone: "",
        referrerAddress: "",
        referredFirstName: "",
        referredLastName: "",
        referredEmail: "",
        referredPhone: "",
        referredAddress: "",
        relationship: "",
      })
    } catch (error: any) {
      console.error('Referral form submission error:', error)
      alert(
        "We're sorry, there was an error submitting your referral. Please try again or call us at (574) 223-6429.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const shareOnSocial = (platform: string) => {
    const shareText =
      "I love Mike's Trash Service! They're clean, reliable, and truly care about our neighborhood. Check if they serve your area!"
    const shareUrl = window.location.origin

    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&quote=${encodeURIComponent(shareText)}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      email: `mailto:?subject=${encodeURIComponent("Check out Mike's Trash Service!")}&body=${encodeURIComponent(shareText + " " + shareUrl)}`,
    }

    if (urls[platform as keyof typeof urls]) {
      window.open(urls[platform as keyof typeof urls], "_blank", "width=600,height=400")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">Refer a Neighbor</h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-4">
            Love our service? Share the neighborly care with friends and family. You'll both save money when they sign
            up!
          </p>
        </div>
      </section>

      {/* Referral Benefits */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">Everyone Wins!</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              When you refer someone and they sign up for service, you both get rewarded
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <Card className="text-center border-primary/20 bg-primary/5">
              <CardHeader>
                <Gift className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">You Get $25 Credit</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Receive a $25 credit on your next bill for each successful referral. The more neighbors you refer, the
                  more you save!
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-primary/20 bg-primary/5">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle className="text-2xl">They Get $25 Off</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Your referral gets $25 off their first month of service. It's our way of welcoming new neighbors to
                  the Mike's Trash family!
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* How It Works */}
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border mb-12 sm:mb-16">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">How the Referral Program Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Fill Out the Form</h4>
                <p className="text-muted-foreground">
                  Provide your information and your referral's contact details using the form below
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">We Contact Them</h4>
                <p className="text-muted-foreground">
                  We'll reach out to your referral with their special discount and information about our services
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary-foreground font-bold">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">You Both Save</h4>
                <p className="text-muted-foreground">
                  Once they sign up, you get your $25 credit and they get their discount. Everyone wins!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-12 sm:py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-xl sm:text-2xl">Refer Someone Today</CardTitle>
              <CardDescription>
                Fill out the information below to refer a friend, family member, or neighbor to Mike's Trash Service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Referrer Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="referrerFirstName">Your First Name *</Label>
                      <Input
                        id="referrerFirstName"
                        required
                        value={formData.referrerFirstName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referrerFirstName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerLastName">Your Last Name *</Label>
                      <Input
                        id="referrerLastName"
                        required
                        value={formData.referrerLastName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referrerLastName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerEmail">Your Email *</Label>
                      <Input
                        id="referrerEmail"
                        type="email"
                        required
                        value={formData.referrerEmail}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referrerEmail: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="referrerPhone">Your Phone *</Label>
                      <Input
                        id="referrerPhone"
                        type="tel"
                        required
                        value={formData.referrerPhone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referrerPhone: e.target.value }))}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="referrerAddress">Your Service Address *</Label>
                      <Input
                        id="referrerAddress"
                        required
                        value={formData.referrerAddress}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referrerAddress: e.target.value }))}
                      />
                    </div>
                  </div>
                </div>

                {/* Referred Person Information */}
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    Person You're Referring
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="referredFirstName">Their First Name *</Label>
                      <Input
                        id="referredFirstName"
                        required
                        value={formData.referredFirstName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referredFirstName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="referredLastName">Their Last Name *</Label>
                      <Input
                        id="referredLastName"
                        required
                        value={formData.referredLastName}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referredLastName: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="referredEmail">Their Email</Label>
                      <Input
                        id="referredEmail"
                        type="email"
                        value={formData.referredEmail}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referredEmail: e.target.value }))}
                      />
                    </div>
                    <div>
                      <Label htmlFor="referredPhone">Their Phone *</Label>
                      <Input
                        id="referredPhone"
                        type="tel"
                        required
                        value={formData.referredPhone}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referredPhone: e.target.value }))}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="referredAddress">Their Address *</Label>
                      <Input
                        id="referredAddress"
                        required
                        value={formData.referredAddress}
                        onChange={(e) => setFormData((prev) => ({ ...prev, referredAddress: e.target.value }))}
                        placeholder="Where do they need service?"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <Label htmlFor="relationship">How do you know them?</Label>
                      <Input
                        id="relationship"
                        value={formData.relationship}
                        onChange={(e) => setFormData((prev) => ({ ...prev, relationship: e.target.value }))}
                        placeholder="Neighbor, friend, family member, etc."
                      />
                    </div>
                  </div>
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Referral"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Sharing */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">Spread the Word on Social Media</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Share your positive experience with Mike's Trash Service on social media and help your neighbors discover
            our clean, reliable service!
          </p>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8 px-4">
            <Button onClick={() => shareOnSocial("facebook")} variant="outline" className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-600 rounded"></div>
              Share on Facebook
            </Button>
            <Button onClick={() => shareOnSocial("twitter")} variant="outline" className="flex items-center gap-2">
              <div className="w-5 h-5 bg-sky-500 rounded"></div>
              Share on Twitter
            </Button>
            <Button onClick={() => shareOnSocial("linkedin")} variant="outline" className="flex items-center gap-2">
              <div className="w-5 h-5 bg-blue-700 rounded"></div>
              Share on LinkedIn
            </Button>
          </div>

          <Card className="max-w-3xl mx-auto border-2 shadow-lg">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md flex-shrink-0">
                  M
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between flex-wrap gap-2 mb-2">
                    <h3 className="font-bold text-lg text-foreground">Mason Barlow</h3>
                    <span className="text-sm text-muted-foreground">4 years ago</span>
                  </div>
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-foreground leading-relaxed mb-4">
                Yall. If you haven't checked out Mike's Trash Service yet, you need to! I forgot to take my trash can out to the road today. I was at work when I realized that. I had it by my house (about 50 feet from the road). I came home to see that they went out of their way, pulled their truck up to my house, and emptied the can for me! Best customer service by far!
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  ✓ Punctuality
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  ✓ Quality
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  ✓ Professionalism
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  ✓ Value
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
