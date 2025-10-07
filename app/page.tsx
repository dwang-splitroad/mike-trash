import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Container, Sofa, Package, Users, Leaf, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 min-h-[500px] md:min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/truck-street.jpg"
            alt="Mike's Trash truck on street"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-15"
            quality={85}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Your Trusted Neighborhood
            <span className="block text-primary">Trash Service</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty">
            In business for over 30 years, Mike's Trash has always been about serving our neighbors with honesty and care.
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
                  <Container className="h-6 w-6 text-primary" />
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
                  <Sofa className="h-6 w-6 text-primary" />
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
                  <Package className="h-6 w-6 text-primary" />
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

      {/* Fleet & Team Showcase */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">Meet Our Team & Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl shadow-xl bg-card overflow-hidden relative aspect-[4/3]">
              <Image
                src="/Owner smiling really big next to large trash truck.jpg"
                alt="Owner with Mike's Trash truck"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                quality={95}
                priority
              />
            </div>
            <div className="rounded-2xl shadow-xl bg-card overflow-hidden relative aspect-[4/3]">
              <Image
                src="/Large trash truck parked outside city hall.jpg"
                alt="Professional Mike's Trash fleet serving the community"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                quality={95}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Neighbors Say</h2>
            <p className="text-lg text-muted-foreground">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">"</div>
                <p className="text-xl font-semibold text-foreground mb-4">just amazing</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">The</p>
                    <p className="text-xs text-muted-foreground">User Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">"</div>
                <p className="text-xl font-semibold text-foreground mb-4">the best</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">The</p>
                    <p className="text-xs text-muted-foreground">User Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">"</div>
                <p className="text-xl font-semibold text-foreground mb-4">number one</p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-full"></div>
                  <div className="text-left">
                    <p className="text-sm font-medium text-foreground">The</p>
                    <p className="text-xs text-muted-foreground">User Location</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Ready to experience the difference?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            In business for over 30 years, Mike's Trash has always been about serving our neighbors with honesty and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/about">Learn About Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get Started Today</Link>
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
