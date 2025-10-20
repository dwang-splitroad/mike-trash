import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Container, Sofa, Package, Users, Leaf, Clock, Star, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/truck-street.jpg"
            alt="Mike's Trash truck on street"
            fill
            sizes="100vw"
            className="object-cover object-center opacity-40"
            quality={85}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/50 to-background/90"></div>
        </div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance">
            Your Trusted Neighborhood
            <span className="block text-primary">Trash Service</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-12 max-w-3xl mx-auto text-pretty px-2">
            In business for over 30 years, Mike's Trash has always been about serving our neighbors with honesty and care.
          </p>

          <div className="mb-8 sm:mb-16">
            <AddressChecker />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-2">Complete Waste Management Solutions</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
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
      <section className="py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">Meet Our Team & Fleet</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
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
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 px-2">What Our Neighbors Say</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <Card className="relative hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="pt-6 pb-6">
                <Quote className="h-10 w-10 text-primary/40 mb-4" />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-base text-foreground mb-6 leading-relaxed">"Mike's is great to work with. They've never missed a pickup and there very reasonably priced! Very nice people!"</p>
                <div className="flex items-center justify-center gap-3 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">D</div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">Derrell Young</p>
                    <p className="text-xs text-muted-foreground">Rochester, IN</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="pt-6 pb-6">
                <Quote className="h-10 w-10 text-primary/40 mb-4" />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-base text-foreground mb-6 leading-relaxed">"I've been with Mike's for many years. They provide excellent service. Good people to work with. Give them a try."</p>
                <div className="flex items-center justify-center gap-3 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">R</div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">Randy Rush</p>
                    <p className="text-xs text-muted-foreground">Rochester, IN</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative hover:shadow-xl transition-shadow duration-300 border-2">
              <CardContent className="pt-6 pb-6">
                <Quote className="h-10 w-10 text-primary/40 mb-4" />
                <div className="flex gap-1 mb-4 justify-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-base text-foreground mb-6 leading-relaxed">"Mikes Trash is great! They care about the local community and the garbage guys are always friendly!"</p>
                <div className="flex items-center justify-center gap-3 mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">B</div>
                  <div className="text-left">
                    <p className="text-sm font-semibold text-foreground">Bettina Zabel</p>
                    <p className="text-xs text-muted-foreground">Rochester, IN</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6 px-2">Ready to experience the difference?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            In business for over 30 years, Mike's Trash has always been about serving our neighbors with honesty and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/about">Learn About Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="/contact">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-8 sm:py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <div className="mb-4">
                <Image
                  src="/mikes-trash-logo-no-number.png"
                  alt="Mike's Trash Logo"
                  width={360}
                  height={120}
                  className="h-24 w-auto"
                />
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
                <li>Fulton County & Rochester, IN</li>
                <li>
                  <Link href="/contact" className="hover:text-foreground">
                    Get in Touch
                  </Link>
                </li>
                <li>
                  <a href="https://www.trashbilling.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
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
