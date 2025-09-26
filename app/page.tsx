import { AddressChecker } from "@/components/address-checker"
import { ServiceIcons } from "@/components/service-icons"
import { Testimonials } from "@/components/testimonials"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/30 to-muted/60 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left side - Hero content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight">
                Your Trusted
                <span className="text-primary block">Neighborhood</span>
                Waste Service
              </h1>
              <p className="text-xl text-muted-foreground text-pretty">
                Family-owned and operated for over 30 years, serving Fulton County and Rochester with reliable,
                professional waste management services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/about">Learn About Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>

            {/* Right side - Address checker */}
            <div className="flex justify-center lg:justify-end">
              <AddressChecker />
            </div>
          </div>
        </div>
      </section>

      {/* Company Message */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            In business for over 30 years, Mike's Trash has always been about serving our neighbors with honesty and
            care.
          </h2>
          <Button size="lg" asChild>
            <Link href="/about">Learn About Us</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive waste management solutions for homes and businesses throughout Fulton County and Rochester.
            </p>
          </div>
          <ServiceIcons />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Neighbors Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by families and businesses across our community</p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of satisfied customers in Fulton County and Rochester</p>
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

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Mike's Trash</h3>
              <p className="text-sm opacity-80">
                Family-owned waste management serving Fulton County for over 30 years.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/residential" className="hover:opacity-100">
                    Residential Pickup
                  </Link>
                </li>
                <li>
                  <Link href="/dumpsters" className="hover:opacity-100">
                    Commercial Dumpsters
                  </Link>
                </li>
                <li>
                  <Link href="/bulk-pickup" className="hover:opacity-100">
                    Bulk Pickup
                  </Link>
                </li>
                <li>
                  <Link href="/roll-offs" className="hover:opacity-100">
                    Roll-Off Dumpsters
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>
                  <Link href="/about" className="hover:opacity-100">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:opacity-100">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/holiday-calendar" className="hover:opacity-100">
                    Holiday Calendar
                  </Link>
                </li>
                <li>
                  <Link href="/referral" className="hover:opacity-100">
                    Referral Program
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>(574) 223-6429</li>
                <li>
                  <Link href="/contact" className="hover:opacity-100">
                    Contact Form
                  </Link>
                </li>
                <li>Fulton County, IN</li>
                <li>Rochester, IN</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-sm opacity-60">
            <p>&copy; 2025 Mike's Trash. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
