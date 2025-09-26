import { Header } from "@/components/header"
import { ServiceIcons } from "@/components/service-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Check, Clock, Truck, Building, Package, Trash2 } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/30 to-muted/60 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Comprehensive waste management solutions for homes and businesses throughout Fulton County
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <ServiceIcons />
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Pickup */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Truck className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Residential Pickup</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Weekly curbside pickup for homes throughout our service area. Reliable, consistent service you can
                  count on.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Weekly scheduled pickup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Flexible scheduling options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Holiday service adjustments</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Competitive pricing</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/residential">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Commercial Dumpsters */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Commercial Dumpsters</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Professional waste management solutions for businesses of all sizes. Multiple container sizes
                  available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Multiple container sizes</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Flexible pickup schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Commercial-grade containers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Reliable service</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/dumpsters">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Bulk Pickup */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Package className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Bulk Pickup</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Special pickup service for large items that don't fit in regular trash. Perfect for spring cleaning
                  and home projects.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Furniture and appliances</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Yard waste and debris</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Scheduled pickup service</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Fair, upfront pricing</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/bulk-pickup">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Roll-Off Dumpsters */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Trash2 className="w-8 h-8 text-primary" />
                  <CardTitle className="text-2xl">Roll-Off Dumpsters</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Large capacity containers for construction projects, major cleanouts, and renovation work. Various
                  sizes available.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Multiple sizes available</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Construction and renovation debris</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Flexible rental periods</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary" />
                    <span className="text-sm">Professional delivery and pickup</span>
                  </li>
                </ul>
                <Button asChild>
                  <Link href="/roll-offs">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Mike's Trash?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">30+ Years Experience</h3>
                <p className="text-muted-foreground">
                  Three decades of reliable service in Fulton County and Rochester
                </p>
              </div>
              <div className="text-center">
                <Truck className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Local & Family Owned</h3>
                <p className="text-muted-foreground">We're your neighbors, committed to our community</p>
              </div>
              <div className="text-center">
                <Check className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Reliable Service</h3>
                <p className="text-muted-foreground">Consistent, on-time pickup you can count on</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free quote on any of our services</p>
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
