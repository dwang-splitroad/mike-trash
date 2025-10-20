import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, XCircle, MessageSquare, CalendarDays } from "lucide-react"
import Image from "next/image"

export default function BulkPickupPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Title */}
      <section className="py-8 sm:py-12 px-4 mt-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center px-2">Bulk Pickup</h1>
        </div>
      </section>

      {/* Address Checker Section */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <AddressChecker />
        </div>
      </section>

      {/* Main Content */}
      <section className="py-6 sm:py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 sm:mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.4fr,1fr] gap-8 sm:gap-12 items-start">
              <div>
                <Card className="mb-6 sm:mb-8">
                  <CardHeader className="text-center bg-primary/5 rounded-t-2xl">
                    <CardTitle className="text-emerald-700 text-lg sm:text-xl">One-time larger item removal</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-4 sm:pt-6 text-center text-muted-foreground text-sm sm:text-base leading-relaxed">
                    Got something too big for the curb? Schedule a one-time bulk pickup and we'll help you clear it out
                    hassle-free!
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 gap-6 mb-6 sm:mb-8">
                  {/* Common Items */}
                  <div className="bg-green-50 p-4 sm:p-5 rounded-xl border border-green-200">
                    <h3 className="font-semibold text-foreground mb-3 text-base sm:text-lg">✓ Common Items We Take:</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" /> Old furniture (couches, chairs, tables, dressers)</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" /> Mattresses and box springs</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" /> Appliances <em>(without refrigerant)</em></li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" /> Carpeting and rugs (rolled and tied)</li>
                      <li className="flex gap-2"><CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary mt-0.5 flex-shrink-0" /> Yard waste bundles (branches, sticks, bagged leaves)</li>
                    </ul>
                  </div>

                  {/* Won't Take */}
                  <div className="bg-red-50 p-4 sm:p-5 rounded-xl border border-red-200">
                    <h3 className="font-semibold text-foreground mb-3 text-base sm:text-lg">✗ Items We Cannot Accept:</h3>
                    <ul className="space-y-2 text-muted-foreground text-sm sm:text-base">
                      <li className="flex gap-2"><XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" /> Oils & Hazardous Materials</li>
                      <li className="flex gap-2"><XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" /> Tires</li>
                      <li className="flex gap-2"><XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" /> Dirt & Concrete</li>
                      <li className="flex gap-2"><XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" /> Bricks & Shingles</li>
                      <li className="flex gap-2"><XCircle className="h-4 w-4 sm:h-5 sm:w-5 text-destructive mt-0.5 flex-shrink-0" /> Electronics</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-primary text-primary-foreground p-4 sm:p-5 rounded-xl text-sm sm:text-base leading-relaxed">
                  Mike's Trash offers easy one-time bulk pickup—perfect for furniture, appliances, and other over-sized
                  items. Just set it out and we'll take care of the heavy lifting.
                </div>
              </div>

              {/* Photos - Hidden on mobile */}
              <div className="hidden lg:block space-y-6">
                <div className="overflow-hidden rounded-2xl shadow-lg relative aspect-[4/3]">
                  <Image
                    src="/owner driving large trash truck very creative shot.jpg"
                    alt="Mike's Trash driver ready for bulk pickup"
                    fill
                    sizes="40vw"
                    className="object-cover"
                    quality={95}
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-lg relative aspect-[4/3]">
                  <Image
                    src="/worker-on-truck.jpg"
                    alt="Mike's Trash team member on truck"
                    fill
                    sizes="40vw"
                    className="object-cover"
                    quality={95}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details - Hidden on mobile */}
      <section className="py-12 sm:py-16 px-4 hidden lg:block">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 sm:mb-6">Large Items, Careful Handling</h2>
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
              <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/truck-angle.jpg"
                  alt="Mike's Trash bulk pickup truck"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover rounded-lg"
                  quality={95}
                />
              </div>
              <p className="text-center text-muted-foreground italic">
                Our professional fleet ready to handle your bulk pickup needs
              </p>
            </div>
          </div>

          {/* Fleet Showcase - Hidden on mobile */}
          <div className="mb-12 sm:mb-16 hidden md:block">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">Professional Equipment & Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-2xl shadow-xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/Close up of front of large trash truck lights .jpg"
                  alt="Mike's Trash professional truck fleet"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
              <div className="rounded-2xl shadow-xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/higher angle of large trash truck emptying large dumpster.jpg"
                  alt="Mike's Trash truck in action"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* What We Remove */}
          <div className="mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">Items We Remove</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
          <div className="bg-card p-6 sm:p-8 rounded-2xl border border-border mb-12 sm:mb-16">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">How Bulk Pickup Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">1. Call Us</h3>
                <p className="text-muted-foreground">
                  Describe what you need removed and we'll provide an estimate over the phone
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarDays className="h-6 w-6 text-primary-foreground" />
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
          <div className="bg-primary/5 p-6 sm:p-8 rounded-2xl text-center mb-12 sm:mb-16">
            <blockquote className="text-base sm:text-lg text-foreground mb-4 italic px-2">
              "I was amazed at how carefully they removed our old sectional sofa. They protected our hardwood floors and
              even vacuumed up afterwards. You can tell they really care about doing the job right."
            </blockquote>
            <cite className="text-muted-foreground">- Sarah M., Rochester</cite>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-12 sm:py-16 px-4 bg-secondary/50" id="address-form">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">Need large items removed?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
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
