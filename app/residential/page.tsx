import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Calendar, DollarSign, Truck } from "lucide-react"
import Link from "next/link"

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Residential Trash Pickup</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Reliable weekly curbside pickup for your home. Clean trucks, friendly service, and your neighbors you can
            trust.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Simple, Reliable Pickup</h2>
              <p className="text-lg text-muted-foreground mb-6">
                We make trash pickup easy for homeowners in Fulton County and Rochester. Just put your bins out by 7 AM
                on your pickup day, and we'll take care of the rest.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Weekly Pickup</h3>
                    <p className="text-muted-foreground">Consistent service every week on your scheduled day</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Clean Service</h3>
                    <p className="text-muted-foreground">Professional crews with clean trucks and proper equipment</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Neighborly Care</h3>
                    <p className="text-muted-foreground">We treat your property with respect - no mess left behind</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <img
                src="/clean-garbage-truck-on-residential-street.jpg"
                alt="Clean garbage truck on residential street"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-center text-muted-foreground italic">
                Our clean, well-maintained trucks serve neighborhoods throughout Fulton County
              </p>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card>
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Flexible Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Choose the pickup day that works best for your schedule. We'll work around your needs.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <DollarSign className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Fair Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Competitive rates with no hidden fees. Simple monthly billing that you can count on.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Reliable Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Rain or shine, we're there. Consistent pickup times and professional service every week.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* What We Accept */}
          <div className="bg-card p-8 rounded-2xl border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What We Accept</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">✓ Regular Household Trash</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Kitchen waste and food scraps</li>
                  <li>• Paper and cardboard</li>
                  <li>• Plastic containers and bags</li>
                  <li>• General household items</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-4">✗ Items We Cannot Take</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hazardous materials</li>
                  <li>• Large appliances</li>
                  <li>• Construction debris</li>
                  <li>• Electronics (see our bulk pickup service)</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Need to dispose of large items? Check out our{" "}
              <Link href="/bulk-pickup" className="text-primary hover:underline">
                bulk pickup service
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready for reliable residential pickup?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join your neighbors who trust Mike's Trash Service for clean, dependable waste management.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AddressChecker />
        </div>
      </section>
    </div>
  )
}
