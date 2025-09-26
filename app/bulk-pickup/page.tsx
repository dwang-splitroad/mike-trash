import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Phone, Calendar, Star } from "lucide-react"

export default function BulkPickupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Bulk Item Pickup</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            The only company in the area that handles large item removal with care and professionalism. We're your
            neighbors who do it right.
          </p>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="bg-primary/10 p-8 rounded-2xl border-2 border-primary/20">
            <Star className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-foreground mb-4">Why We're Different</h2>
            <p className="text-lg text-muted-foreground">
              We're the <strong>only company in the area</strong> that provides bulk pickup service with the care and
              professionalism you deserve. While others might leave a mess or damage your property, we treat your home
              like our own.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Large Items, Careful Handling</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Got a couch that won't fit through the door? Old appliances taking up space? We specialize in removing
                large, bulky items that regular trash pickup can't handle. Our experienced team knows how to safely
                remove items without damaging your home.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Professional Removal</h3>
                    <p className="text-muted-foreground">Trained crew with proper equipment and techniques</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Property Protection</h3>
                    <p className="text-muted-foreground">
                      We protect your floors, walls, and landscaping during removal
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Complete Cleanup</h3>
                    <p className="text-muted-foreground">We leave your space cleaner than we found it</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <img
                src="/professional-crew-removing-large-furniture-from-ho.jpg"
                alt="Professional crew removing large furniture from home"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <p className="text-center text-muted-foreground italic">
                Our experienced team handles even the most challenging removals with care
              </p>
            </div>
          </div>

          {/* What We Remove */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Items We Remove</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Furniture</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Couches and sofas</li>
                    <li>• Mattresses and box springs</li>
                    <li>• Dining room sets</li>
                    <li>• Dressers and armoires</li>
                    <li>• Recliners and chairs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Appliances</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Refrigerators and freezers</li>
                    <li>• Washers and dryers</li>
                    <li>• Stoves and ovens</li>
                    <li>• Dishwashers</li>
                    <li>• Water heaters</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Other Large Items</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• Exercise equipment</li>
                    <li>• Hot tubs and spas</li>
                    <li>• Swing sets</li>
                    <li>• Large electronics</li>
                    <li>• Carpeting and flooring</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-card p-8 rounded-2xl border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">How Bulk Pickup Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1. Call Us</h3>
                <p className="text-muted-foreground">
                  Describe what you need removed and we'll provide an estimate over the phone
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">2. Schedule</h3>
                <p className="text-muted-foreground">
                  We'll find a time that works for you - often same-day or next-day service
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">3. We Handle It</h3>
                <p className="text-muted-foreground">
                  Our crew arrives on time and removes your items safely and cleanly
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-primary/5 p-8 rounded-2xl text-center mb-16">
            <blockquote className="text-lg text-foreground mb-4 italic">
              "I was amazed at how carefully they removed our old sectional sofa. They protected our hardwood floors and
              even vacuumed up afterwards. You can tell they really care about doing the job right."
            </blockquote>
            <cite className="text-muted-foreground">- Sarah M., Rochester</cite>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">Need large items removed?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the difference of working with professionals who care about your property and community.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AddressChecker />
        </div>
      </section>
    </div>
  )
}
