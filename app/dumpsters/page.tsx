import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Clock, Wrench, Shield, AlertCircle } from "lucide-react"
import Image from "next/image"

export default function DumpstersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Title */}
      <section className="py-8 sm:py-12 px-4 mt-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center px-2">Dumpsters</h1>
        </div>
      </section>

      {/* Address Checker Section */}
      <section className="py-12 sm:py-16 px-4 bg-secondary/50">
        <div className="max-w-2xl mx-auto">
          <AddressChecker />
        </div>
      </section>

      {/* Service Details */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Permanent Placement Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-12 sm:mb-16">
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center bg-primary/5">
                <CardTitle className="text-2xl text-primary">Permanent Placement Dumpsters</CardTitle>
                <CardDescription>Reliable long-term dumpster service</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 text-center gap-4 mb-4">
                  <div className="font-semibold">2-Yard Dumpster</div>
                  <div className="font-semibold">3-Yard Dumpster</div>
                  <div className="font-semibold">6-Yard Dumpster</div>
                </div>
                <p className="text-muted-foreground mb-6">
                  Mike's Trash offers 2-yard, 3-yard, and 6-yard rear-load dumpsters for long-term Permanent
                  Placement. We can dump locations within-in the Rochester City limits up to 5x per week. For
                  locations outside Rochester City limits, please contact the office to determine dump schedule.
                </p>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Please contact the office for pricing and to schedule a clean out dumpster.
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <AlertCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      No construction debris are allowed in permanent placement dumpsters.
                    </p>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-5 rounded-xl mt-6">
                  Mike's Trash offers dumpsters for permanent placement for residential and business trash removal as
                  well as dumpster rentals for clean out or remodel projects.
                </div>
              </CardContent>
            </Card>

            {/* Dumpster Photos */}
            <div className="space-y-4">
              <div className="overflow-hidden rounded-2xl shadow-lg relative h-64">
                <Image
                  src="/Dumpster in alley with company logo.jpg"
                  alt="Mike's Trash dumpster with company logo"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg relative h-64">
                <Image
                  src="/rtc-dumpster.jpg"
                  alt="Professional dumpster placement"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* Service in Action */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">Our Service in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="overflow-hidden rounded-2xl shadow-xl relative aspect-[4/3]">
                <Image
                  src="/Dumpster being emptied by large trash truck showcasing company logo.jpg"
                  alt="Mike's Trash truck emptying dumpster"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-xl relative aspect-[4/3]">
                <Image
                  src="/Large trash truck emptying large dumpster in front of city hall.jpg"
                  alt="Commercial dumpster service"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* Dumpster Sizes */}
          {/* <div className="mb-16">
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
          </div> */}

          {/* Service Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12 sm:mb-16">
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
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center px-2">What Goes In Your Dumpster</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
      <section className="py-12 sm:py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">Ready to rent a dumpster?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
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
