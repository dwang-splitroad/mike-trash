import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Wrench, Shield } from "lucide-react"

export default function DumpstersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Dumpster Rentals</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Perfect for home renovations, cleanouts, and construction projects. Clean dumpsters delivered and picked up
            on your schedule.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Right-Sized for Your Project</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Whether you're renovating a bathroom or cleaning out an entire house, we have the right size dumpster
                for your project. Our clean, well-maintained containers are delivered promptly and picked up on
                schedule.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Multiple Sizes Available</h3>
                    <p className="text-muted-foreground">From 10-yard to 30-yard containers to fit any project</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Rental Periods</h3>
                    <p className="text-muted-foreground">Keep it as long as you need - we work with your timeline</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Professional Delivery</h3>
                    <p className="text-muted-foreground">Careful placement to protect your property and landscaping</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <img
                src="/clean-dumpster-at-residential-construction-site.jpg"
                alt="Clean dumpster at residential construction site"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-center text-muted-foreground italic">
                Clean, professional dumpsters that won't detract from your property
              </p>
            </div>
          </div>

          {/* Dumpster Sizes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Choose Your Size</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">10-Yard</CardTitle>
                  <CardDescription>Perfect for small projects</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="w-16 h-8 bg-primary/20 rounded mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">12' × 8' × 4'</p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Bathroom renovation</li>
                    <li>• Small room cleanout</li>
                    <li>• Garage cleaning</li>
                    <li>• Minor landscaping</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">20-Yard</CardTitle>
                  <CardDescription>Most popular choice</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="w-20 h-10 bg-primary/20 rounded mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">22' × 8' × 4.5'</p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Kitchen renovation</li>
                    <li>• Whole house cleanout</li>
                    <li>• Roofing projects</li>
                    <li>• Large landscaping</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">30-Yard</CardTitle>
                  <CardDescription>For major projects</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="w-24 h-12 bg-primary/20 rounded mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">22' × 8' × 6'</p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Home additions</li>
                    <li>• Major renovations</li>
                    <li>• Estate cleanouts</li>
                    <li>• Commercial projects</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Quick Delivery</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Same-day or next-day delivery available</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Wrench className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Easy Placement</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>We'll position it exactly where you need it</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Property Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Boards placed under dumpster to protect surfaces</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Fair Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Transparent pricing with no hidden fees</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* What We Accept */}
          <div className="bg-card p-8 rounded-2xl border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">What Goes In Your Dumpster</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">✓ Accepted Materials</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Construction debris</li>
                  <li>• Household junk and furniture</li>
                  <li>• Appliances (additional fee may apply)</li>
                  <li>• Yard waste and landscaping debris</li>
                  <li>• Renovation materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-4">✗ Prohibited Items</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hazardous materials</li>
                  <li>• Paint and chemicals</li>
                  <li>• Tires and batteries</li>
                  <li>• Asbestos materials</li>
                  <li>• Liquids of any kind</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to rent a dumpster?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get started with your project today. We'll help you choose the right size and schedule delivery.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AddressChecker />
        </div>
      </section>
    </div>
  )
}
