import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, X, Calendar, Phone } from "lucide-react"

export default function BulkPickupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Bulk Item Pickup Service
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Got large items that won't fit in your regular trash? We'll pick them up for you. Schedule your bulk
              pickup today.
            </p>
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Schedule Pickup
            </Button>
          </div>
        </div>
      </section>

      {/* What We Accept */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Accept</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-green-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h3 className="text-xl font-semibold text-green-800">We Accept</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Furniture (couches, chairs, tables)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Appliances (refrigerators, washers, dryers)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Mattresses and box springs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Exercise equipment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Carpet and flooring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Water heaters</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Yard waste (bundled)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-red-200">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-6 h-6 text-red-600" />
                  <h3 className="text-xl font-semibold text-red-800">We Don't Accept</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Hazardous materials</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Paint and chemicals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Tires</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Batteries</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Electronics (TVs, computers)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Construction debris</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <X className="w-4 h-4 text-red-600" />
                    <span>Liquid waste</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How Bulk Pickup Works</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Schedule</h3>
              <p className="text-muted-foreground">
                Call us or schedule online. We'll set up a convenient pickup time.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Prepare</h3>
              <p className="text-muted-foreground">Place items at the curb by 7 AM on your scheduled pickup day.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">We Pick Up</h3>
              <p className="text-muted-foreground">Our team will collect your items and dispose of them responsibly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Simple, Fair Pricing</h2>
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Bulk Pickup Service</h3>
                <div className="text-4xl font-bold text-primary mb-2">$25</div>
                <p className="text-muted-foreground mb-6">per pickup (up to 3 large items)</p>
                <ul className="text-left space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Scheduled pickup at your convenience</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Professional removal team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>Responsible disposal</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span>No hidden fees</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Bulk Pickup Service?</h2>
            <p className="text-xl mb-8 opacity-90">
              Don't let large items clutter your space. Schedule your bulk pickup today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <Calendar className="w-4 h-4 mr-2" />
                Schedule Online
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call (574) 223-6429
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
