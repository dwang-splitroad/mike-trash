import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Building, Truck, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function RollOffsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Roll-Off Container Service
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Large-scale waste solutions for businesses, contractors, and major projects. Professional service from your
            trusted neighborhood team.
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Built for Big Jobs</h2>
              <p className="text-lg text-muted-foreground mb-6">
                When your project generates serious waste, you need serious equipment. Our roll-off containers handle
                the largest commercial and industrial jobs while maintaining the personal service and attention to
                detail that sets us apart.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Commercial Grade Equipment</h3>
                    <p className="text-muted-foreground">Heavy-duty containers built for the toughest jobs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Flexible Scheduling</h3>
                    <p className="text-muted-foreground">
                      Regular pickups or on-call service to match your project timeline
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Local Expertise</h3>
                    <p className="text-muted-foreground">We understand local regulations and disposal requirements</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <img
                src="/large-roll-off-container-at-commercial-constructio.jpg"
                alt="Large roll-off container at commercial construction site"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-center text-muted-foreground italic">
                Professional roll-off service for commercial and industrial projects
              </p>
            </div>
          </div>

          {/* Container Sizes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Roll-Off Container Sizes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-primary">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">30-Yard Roll-Off</CardTitle>
                  <CardDescription>Standard commercial size</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="w-24 h-12 bg-primary/20 rounded mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">22' × 8' × 6'</p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Commercial renovations</li>
                    <li>• Large construction projects</li>
                    <li>• Industrial cleanouts</li>
                    <li>• Multi-unit residential projects</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-primary">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-primary">40-Yard Roll-Off</CardTitle>
                  <CardDescription>Maximum capacity</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <div className="w-28 h-14 bg-primary/20 rounded mx-auto mb-2"></div>
                    <p className="text-sm text-muted-foreground">22' × 8' × 8'</p>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1 text-left">
                    <li>• Major demolition projects</li>
                    <li>• Large commercial buildings</li>
                    <li>• Industrial facilities</li>
                    <li>• High-volume waste streams</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Industries We Serve */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Industries We Serve</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Building className="h-8 w-8 text-primary mx-auto mb-2" />
                  <CardTitle className="text-lg">Construction</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>General contractors, builders, and construction companies</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-8 h-8 bg-primary rounded mx-auto mb-2"></div>
                  <CardTitle className="text-lg">Manufacturing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Industrial facilities and manufacturing plants</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-8 h-8 border-2 border-primary rounded mx-auto mb-2"></div>
                  <CardTitle className="text-lg">Retail</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Shopping centers, stores, and commercial properties</CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <div className="w-8 h-8 bg-primary/20 rounded-full mx-auto mb-2"></div>
                  <CardTitle className="text-lg">Property Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>Apartment complexes and commercial property managers</CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Reliable Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>On-time delivery and pickup to keep your project on track</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Truck className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Professional Equipment</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Well-maintained trucks and containers for safe operation</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Fully Insured</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Complete insurance coverage for your peace of mind</CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Competitive Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Fair rates with transparent pricing and no surprises</CardDescription>
              </CardContent>
            </Card>
          </div>

          {/* What We Accept */}
          <div className="bg-card p-8 rounded-2xl border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">Accepted Materials</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary mb-4">✓ Commercial Waste</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Construction and demolition debris</li>
                  <li>• Manufacturing waste</li>
                  <li>• Office furniture and equipment</li>
                  <li>• Retail and restaurant waste</li>
                  <li>• Packaging materials</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-destructive mb-4">✗ Prohibited Materials</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Hazardous chemicals</li>
                  <li>• Medical waste</li>
                  <li>• Radioactive materials</li>
                  <li>• Liquids and sludges</li>
                  <li>• Asbestos-containing materials</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-muted-foreground mt-6">
              Questions about specific materials?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Contact us
              </Link>{" "}
              for guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready for professional roll-off service?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Partner with the local team that understands your business needs and delivers reliable results.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AddressChecker />
        </div>
      </section>
    </div>
  )
}
