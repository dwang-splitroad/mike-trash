import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Home, Award, Leaf, Handshake } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">About Us</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            A local, family-owned business serving the community for over 30 years
          </p>
        </div>
      </section>

      {/* Family Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mike's Trash is a local, family-owned business that has been serving the local community for over the past 30 years. In April of 2019, current owners Steve and Mandy Metzger purchased Mike's Trash, and have been working hard to continue growing and better serving our customers.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                At Mike's Trash, we strive to provide quality, reliable trash removal to our customers.
              </p>
              <p className="text-lg text-muted-foreground">
                Mike's Trash provides a variety of affordable trash removal and dumpster services to Rochester and the surrounding areas. From residential to commercial, and even our Seasonal Lake Residents, our friendly and reliable staff can help you find the right fit for your trash removal needs.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/mike-family.jpg"
                  alt="Steve and Mandy Metzger with the Mike's Trash team"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                  quality={95}
                />
              </div>
              <p className="text-center text-muted-foreground italic">
                Steve and Mandy Metzger with the Mike's Trash family
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Owner & Fleet */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="overflow-hidden rounded-2xl shadow-xl relative aspect-[4/3]">
              <Image
                src="/Owner standing next to large trash truck.jpg"
                alt="Owner with Mike's Trash truck"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={95}
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-xl relative aspect-[4/3]">
              <Image
                src="/Large trash truck parked outside city hall.jpg"
                alt="Mike's Trash serving the community"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                quality={95}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose Mike's Trash?</h2>
            <p className="text-lg text-muted-foreground">
              Quality service and community commitment you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Family Owned</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  A local, family-owned business that has been part of the community for over 30 years.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Quality Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We strive to provide quality, reliable trash removal to all our customers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Friendly & Reliable</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Our friendly and reliable staff can help you find the right fit for your needs.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Services</h2>
            <p className="text-lg text-muted-foreground">
              From residential to commercial - we have you covered
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Residential Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Weekly pickup services for homes and small businesses. Reliable, affordable, and convenient.
                </p>
                <Button asChild variant="outline">
                  <Link href="/residential">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Commercial Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Dumpster rentals and roll-off containers for businesses and construction projects.
                </p>
                <Button asChild variant="outline">
                  <Link href="/dumpsters">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Bulk Pickup</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Large item removal services for furniture, appliances, and more.
                </p>
                <Button asChild variant="outline">
                  <Link href="/bulk-pickup">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Seasonal Lake Residents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Special services tailored for seasonal residents in the lake communities.
                </p>
                <Button asChild variant="outline">
                  <Link href="/services">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Contact us today to learn more about our services and how we can help with your trash removal needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/">Check Service Availability</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
