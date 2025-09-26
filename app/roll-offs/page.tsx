import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Ruler, Clock, Shield } from "lucide-react"

export default function RollOffsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Roll-Off Dumpster Rentals
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Perfect for construction projects, home renovations, and large cleanouts. Professional delivery and pickup
              included.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Get Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Dumpster Sizes */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Roll-Off Dumpster Sizes</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">10 Yard</div>
                <div className="text-sm text-muted-foreground mb-4">12' L × 8' W × 4' H</div>
                <h3 className="text-lg font-semibold mb-3">Small Projects</h3>
                <ul className="text-sm space-y-1 text-left">
                  <li>• Bathroom renovation</li>
                  <li>• Small deck removal</li>
                  <li>• Garage cleanout</li>
                  <li>• Landscaping debris</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-2xl font-bold text-primary">$275</div>
                  <div className="text-sm text-muted-foreground">7-day rental</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">20 Yard</div>
                <div className="text-sm text-muted-foreground mb-4">22' L × 8' W × 4' H</div>
                <h3 className="text-lg font-semibold mb-3">Medium Projects</h3>
                <ul className="text-sm space-y-1 text-left">
                  <li>• Kitchen renovation</li>
                  <li>• Flooring removal</li>
                  <li>• Roof shingles</li>
                  <li>• Large cleanouts</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-2xl font-bold text-primary">$325</div>
                  <div className="text-sm text-muted-foreground">7-day rental</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">30 Yard</div>
                <div className="text-sm text-muted-foreground mb-4">22' L × 8' W × 6' H</div>
                <h3 className="text-lg font-semibold mb-3">Large Projects</h3>
                <ul className="text-sm space-y-1 text-left">
                  <li>• Home additions</li>
                  <li>• Major renovations</li>
                  <li>• New construction</li>
                  <li>• Commercial projects</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-2xl font-bold text-primary">$375</div>
                  <div className="text-sm text-muted-foreground">7-day rental</div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">40 Yard</div>
                <div className="text-sm text-muted-foreground mb-4">22' L × 8' W × 8' H</div>
                <h3 className="text-lg font-semibold mb-3">Huge Projects</h3>
                <ul className="text-sm space-y-1 text-left">
                  <li>• Large construction</li>
                  <li>• Commercial demolition</li>
                  <li>• Major cleanouts</li>
                  <li>• Industrial projects</li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <div className="text-2xl font-bold text-primary">$425</div>
                  <div className="text-sm text-muted-foreground">7-day rental</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Roll-Off Service?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground text-sm">Same-day or next-day delivery available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Ruler className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Perfect Placement</h3>
              <p className="text-muted-foreground text-sm">Precise placement where you need it</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Fully Insured</h3>
              <p className="text-muted-foreground text-sm">Complete insurance coverage for peace of mind</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Local Experts</h3>
              <p className="text-muted-foreground text-sm">30+ years serving Fulton County</p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Every Rental Includes:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Professional delivery and pickup</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>7-day rental period</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Up to 2 tons of debris</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Responsible disposal</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>No hidden fees</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Additional Services:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Extended rental periods available</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Same-day delivery (when available)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Weekend and holiday pickup</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Driveway protection boards</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary" />
                      <span>Multiple dumpster discounts</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Rent a Roll-Off Dumpster?</h2>
            <p className="text-xl mb-8 opacity-90">
              Get a free quote today and see why contractors choose Mike's Trash for their projects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                Get Free Quote
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
        </div>
      </section>
    </div>
  )
}
