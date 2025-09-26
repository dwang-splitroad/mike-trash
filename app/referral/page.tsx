import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Gift, Users, DollarSign, Heart } from "lucide-react"

export default function ReferralsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
              <Gift className="w-8 h-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Refer a Friend, Get Rewarded
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
              Help your neighbors discover reliable trash service while earning rewards for yourself. It's our way of
              saying thank you for spreading the word about Mike's Trash.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How Our Referral Program Works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>1. Refer a Friend</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tell your neighbors, friends, or family about Mike's Trash. Use our referral form or just have them
                    mention your name when they sign up.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>2. They Get Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Your referral signs up for any of our services - residential pickup, dumpster rental, or bulk
                    pickup. We'll take great care of them!
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mx-auto mb-4">
                    <DollarSign className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>3. You Both Save</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    You get a $25 credit on your next bill, and your friend gets their first month at a 20% discount.
                    Everyone wins!
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Rewards Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Referral Rewards</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-primary">For You (Referrer)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>$25 credit applied to your next bill</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>No limit on referrals - refer as many as you'd like!</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Credits stack up for multiple referrals</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-secondary/5 border-secondary/20">
                <CardHeader>
                  <CardTitle className="text-secondary-foreground">For Your Friend (New Customer)</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>20% off their first month of service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>No setup fees or hidden charges</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>Same reliable service we've provided for 30+ years</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Submit a Referral</h2>
              <p className="text-muted-foreground">
                Fill out the form below to refer someone to Mike's Trash. We'll reach out to them within 24 hours.
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Referral Information</CardTitle>
                <CardDescription>
                  Help us connect with your referral by providing their contact information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="your-name">Your Name</Label>
                    <Input id="your-name" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="your-phone">Your Phone</Label>
                    <Input id="your-phone" placeholder="(574) 555-0123" />
                  </div>
                </div>

                <div className="border-t pt-6">
                  <h3 className="font-semibold mb-4">Friend's Information</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="space-y-2">
                      <Label htmlFor="friend-name">Friend's Name</Label>
                      <Input id="friend-name" placeholder="Friend's full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="friend-phone">Friend's Phone</Label>
                      <Input id="friend-phone" placeholder="(574) 555-0123" />
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <Label htmlFor="friend-address">Friend's Address</Label>
                    <Input id="friend-address" placeholder="123 Main St, Rochester, IN 46975" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service-interest">What service are they interested in?</Label>
                    <Textarea
                      id="service-interest"
                      placeholder="Residential pickup, dumpster rental, bulk pickup, etc."
                      rows={3}
                    />
                  </div>
                </div>

                <Button className="w-full" size="lg">
                  Submit Referral
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Referral Program Terms</h3>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>• Referral credits are applied after the new customer completes their first month of service.</p>
              <p>• New customers must mention the referrer's name or be submitted through this form to qualify.</p>
              <p>• Referral discounts cannot be combined with other promotional offers.</p>
              <p>• Credits have no cash value and cannot be transferred between accounts.</p>
              <p>• Mike's Trash reserves the right to modify or discontinue this program at any time.</p>
              <p>• Both referrer and new customer must be within our service area in Fulton County.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
