import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Truck, Users, Award, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/30 to-muted/60 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
              About <span className="text-primary">Mike's Trash</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Three decades of reliable service, built on trust and community values
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded over 30 years ago, Mike's Trash began as a simple idea: provide reliable, honest waste
                  management services to our neighbors in Fulton County and Rochester. What started as a one-truck
                  operation has grown into a trusted family business serving hundreds of satisfied customers.
                </p>
                <p>
                  We've built our reputation on dependability, fair pricing, and treating every customer like family.
                  When you call Mike's Trash, you're not just getting a service – you're joining a community of
                  neighbors who care about keeping our area clean and beautiful.
                </p>
                <p>
                  Today, we continue to operate with the same values that started our business: honesty, reliability,
                  and genuine care for our community. We're proud to be your local waste management solution.
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-muted/50 rounded-lg p-8 w-full max-w-md">
                <Truck className="w-24 h-24 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-center mb-2">Family Owned & Operated</h3>
                <p className="text-muted-foreground text-center">
                  Three decades of serving our community with pride and dedication
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  We're your neighbors, committed to keeping our community clean and thriving
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Reliability</h3>
                <p className="text-sm text-muted-foreground">
                  Consistent, on-time service you can count on, week after week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Quality Service</h3>
                <p className="text-sm text-muted-foreground">
                  Professional, thorough service that exceeds expectations
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Fair Pricing</h3>
                <p className="text-sm text-muted-foreground">
                  Honest, transparent pricing with no hidden fees or surprises
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving Fulton County & Rochester</h2>
            <p className="text-xl text-muted-foreground mb-8">
              We're proud to serve our local community with comprehensive waste management solutions. Our service area
              includes Fulton County and the Rochester area, where we've built lasting relationships with families and
              businesses for over three decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Family?</h2>
          <p className="text-xl mb-8 opacity-90">
            Experience the Mike's Trash difference – reliable service with a personal touch
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
