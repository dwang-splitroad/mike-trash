import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Users, Leaf, Clock } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary to-background py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Trusted Neighborhood
            <span className="block text-primary">Trash Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            Family-owned and operated in Fulton County and Rochester. Clean, reliable, and neighborly waste management
            services.
          </p>

          <div className="mb-16">
            <AddressChecker />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Complete Waste Management Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From weekly residential pickup to large commercial roll-offs, we handle all your waste management needs
              with care and professionalism.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Truck className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Residential Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Weekly curbside pickup for homes and small businesses
                </CardDescription>
                <Button asChild variant="outline" size="sm">
                  <Link href="/residential">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-primary rounded-sm"></div>
                </div>
                <CardTitle>Dumpster Rentals</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Perfect for home renovations and construction projects
                </CardDescription>
                <Button asChild variant="outline" size="sm">
                  <Link href="/dumpsters">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 border-2 border-primary rounded"></div>
                </div>
                <CardTitle>Bulk Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">Large item removal - furniture, appliances, and more</CardDescription>
                <Button asChild variant="outline" size="sm">
                  <Link href="/bulk-pickup">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 border-4 border-primary rounded-lg"></div>
                </div>
                <CardTitle>Roll-Off Containers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Large-scale commercial and industrial waste solutions
                </CardDescription>
                <Button asChild variant="outline" size="sm">
                  <Link href="/roll-offs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Mike's Trash Service?</h2>
            <p className="text-lg text-muted-foreground">
              We're not just a trash service - we're your neighbors who care about our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Family Owned & Operated</h3>
              <p className="text-muted-foreground">
                We live in the community we serve. When you call, you're talking to neighbors who care about keeping our
                area clean and beautiful.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Clean & Professional</h3>
              <p className="text-muted-foreground">
                We take pride in our clean trucks, professional service, and attention to detail. Trash service doesn't
                have to be messy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Reliable Service</h3>
              <p className="text-muted-foreground">
                Count on us for consistent, on-time pickup. We're here when you need us, with flexible scheduling and
                responsive customer service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to experience the difference?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join hundreds of satisfied customers who trust Mike's Trash Service for all their waste management needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Get Started Today</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/about">Meet Our Family</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">M</span>
                </div>
                <span className="font-bold text-xl text-foreground">Mike's Trash</span>
              </div>
              <p className="text-muted-foreground">
                Your trusted neighborhood waste management service in Fulton County and Rochester.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/residential" className="hover:text-foreground">
                    Residential Pickup
                  </Link>
                </li>
                <li>
                  <Link href="/dumpsters" className="hover:text-foreground">
                    Dumpster Rentals
                  </Link>
                </li>
                <li>
                  <Link href="/bulk-pickup" className="hover:text-foreground">
                    Bulk Pickup
                  </Link>
                </li>
                <li>
                  <Link href="/roll-offs" className="hover:text-foreground">
                    Roll-Off Containers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-foreground">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/holiday-calendar" className="hover:text-foreground">
                    Holiday Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-foreground">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/referral" className="hover:text-foreground">
                    Referral Program
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Fulton County & Rochester, NY</li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Make a Payment
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>
              &copy; 2025 Mike's Trash Service. All rights reserved. Proudly serving our neighbors in Fulton County and
              Rochester.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
