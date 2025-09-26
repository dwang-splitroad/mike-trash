import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, Truck, Calendar, DollarSign, Users } from "lucide-react"

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/30 to-muted/60 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
              <span className="text-primary">Residential</span> Pickup Service
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Reliable weekly trash pickup for homes throughout Fulton County and Rochester
            </p>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Dependable Home Trash Service</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  For over 30 years, Mike's Trash has been providing reliable residential pickup service to families
                  throughout our community. We understand that consistent, dependable waste removal is essential for
                  maintaining a clean and healthy home environment.
                </p>
                <p>
                  Our residential service includes weekly curbside pickup with flexible scheduling options to fit your
                  family's needs. We pride ourselves on being punctual, professional, and neighborly in everything we
                  do.
                </p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/contact">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-muted/50 rounded-lg p-8 w-full max-w-md">
                <Truck className="w-24 h-24 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">Weekly Pickup</h3>
                <p className="text-muted-foreground text-center">
                  Consistent, reliable service every week at the same time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What's Included</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need for hassle-free home waste management
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Weekly Pickup</h3>
                <p className="text-sm text-muted-foreground">
                  Scheduled pickup every week on the same day, so you never have to worry about missed collections
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Truck className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Curbside Service</h3>
                <p className="text-sm text-muted-foreground">
                  Simply place your trash at the curb by 7 AM on pickup day - we'll handle the rest
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Users className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Personal Service</h3>
                <p className="text-sm text-muted-foreground">
                  Local, family-owned business that treats every customer like a neighbor
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <DollarSign className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fair Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Competitive rates with no hidden fees or surprise charges
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Holiday Service</h3>
                <p className="text-sm text-muted-foreground">
                  We adjust pickup schedules for holidays and notify customers in advance
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Calendar className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">Flexible Options</h3>
                <p className="text-sm text-muted-foreground">
                  Temporary service holds, extra pickups, and other accommodations available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Simple, Fair Pricing</h2>
            <p className="text-xl text-muted-foreground mb-12">
              Transparent pricing with no hidden fees or long-term contracts required
            </p>
            <Card className="max-w-md mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Residential Service</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">Contact</div>
                  <div className="text-muted-foreground">for pricing</div>
                </div>
                <ul className="space-y-3 text-left">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Weekly curbside pickup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Holiday schedule adjustments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Personal customer service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">No long-term contracts</span>
                  </li>
                </ul>
                <Button size="lg" className="w-full" asChild>
                  <Link href="/contact">Get Your Quote</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guidelines */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Pickup Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-primary">What We Accept</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Household trash and garbage</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Bagged yard waste</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Small furniture items</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-primary" />
                      <span className="text-sm">Cardboard (broken down)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-destructive">Special Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="text-sm">• Large appliances (call ahead)</li>
                    <li className="text-sm">• Electronics (special handling)</li>
                    <li className="text-sm">• Hazardous materials (not accepted)</li>
                    <li className="text-sm">• Construction debris (roll-off service)</li>
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Contact us for guidance on special items or bulk pickup options.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Service Today</h2>
          <p className="text-xl mb-8 opacity-90">
            Join your neighbors who trust Mike's Trash for reliable residential pickup
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Check Your Address
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
            >
              Call (574) 223-6429
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
