import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import Image from "next/image"

export default function ResidentialPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Get Services Section */}
      <section className="bg-emerald-50 py-12 sm:py-16 px-4 mt-0">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 p-6 sm:p-8 rounded-2xl shadow-lg">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 px-2">Get Services</h2>
              <p className="text-muted-foreground">Check if we serve your area</p>
            </div>
            <AddressChecker />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-8 sm:mb-12 text-center px-2">Residential</h1>

          {/* Service Plans */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {/* Weekly Service */}
            <Card className="border-2 border-primary/20">
              <CardHeader className="text-center bg-primary/5">
                <CardTitle className="text-2xl text-primary">Weekly Residential Pick-Up Service</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">$30<span className="text-xl font-normal text-muted-foreground"> per month</span></div>
                  <p className="text-muted-foreground mt-2">($90 per quarter)</p>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground mb-6">
                  A tote works well for residential families or small businesses.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>96-Gallon Mike's Toter included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Capacity: 6-8 bags, 13-gal trash bags (kitchen size)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Picked up once a week</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Need 2 toters? Add a 2nd Mike's Toter to double the amount picked up every week for an additional $15 per month.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Monthly Service */}
            <Card className="border-2 border-border">
              <CardHeader className="text-center bg-secondary/50">
                <CardTitle className="text-2xl text-primary">Once a Month Service</CardTitle>
                <div className="mt-4">
                  <div className="text-4xl font-bold text-foreground">$22<span className="text-xl font-normal text-muted-foreground"> per month</span></div>
                  <p className="text-muted-foreground mt-2">($66 per quarter)</p>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-center text-muted-foreground mb-6">
                  Once a Month Service works great for households who do not generate a lot of weekly trash and only want to have to sit trash out once a month
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>96-Gallon Mike's Toter included</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Capacity: up to 6-8 bags, 13-gal trash bags (kitchen size)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Picked up once per month of the first pick up day of the month</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Important Note */}
          <Alert className="mb-12 bg-yellow-50 border-yellow-200">
            <AlertCircle className="h-5 w-5 text-yellow-600" />
            <AlertDescription className="text-yellow-800">
              <strong>Please Note:</strong> There is a $30 toter delivery charge or you can make arrangements with the office to pick the toter up yourself to avoid the fee.
            </AlertDescription>
          </Alert>

          {/* Visual Section */}
          <div className="mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">Year-Round Reliable Service</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-lg relative h-64">
                <Image
                  src="/clean-garbage-truck-on-residential-street.jpg"
                  alt="Clean truck on residential street"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg relative h-64">
                <Image
                  src="/Trash bin in snow.jpg"
                  alt="Service even in winter weather"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-lg relative h-64">
                <Image
                  src="/Wide shot of large trash truck with driver entering.jpg"
                  alt="Professional Mike's Trash service"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* About Mike's Trash */}
          <div className="bg-primary text-primary-foreground p-6 sm:p-8 rounded-2xl mb-8 sm:mb-12">
            <p className="text-base sm:text-lg leading-relaxed">
              Mike's Trash provides a variety of affordable trash removal and dumpster services to Rochester and the surrounding counties. From residential to commercial, and even our Seasonal Lake Residents, our friendly and reliable staff can help find the right fit for you.
            </p>
          </div>

          {/* Guidelines */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 px-2">Guidelines</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Set your trash to the curb/road the night before or by 6am on your pickup day.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Make sure your toter/trash can is 4 feet way from any objects (trees, mailboxes, fences, other poles, etc.)
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Place the Toter wheels/handle facing your house/away from the road.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Items outside the toter/trash can (above your weekly limit) will not be picked up unless you have contacted the office in advance for arrangements for extra trash to be taken.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Please make sure to bag all of your trash, including any ashes and kitty litter.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  Medical Needles must be in a heavy plastic laundry detergent bottle with the lid on tight.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  We cannot take the following items to the landfill: Electronics (computers, printers, tv's, etc..), Microwaves, Refrigerators, Liquid Paint, Hazardous Waste, Yard Waste, Tires, Automotive Batteries, and Propane Tanks.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  We cannot haul concrete, bricks, cast iron, or solid steel as it damages the compactors in our trucks.
                </p>
              </div>

              <div className="flex items-start gap-3 p-4 bg-card rounded-lg border">
                <div className="w-8 h-8 flex-shrink-0">
                  <svg viewBox="0 0 24 24" className="w-full h-full fill-primary">
                    <rect x="6" y="4" width="12" height="16" rx="2" />
                    <rect x="8" y="2" width="8" height="3" rx="1" />
                    <circle cx="10" cy="18" r="1.5" />
                    <circle cx="14" cy="18" r="1.5" />
                  </svg>
                </div>
                <p className="text-muted-foreground">
                  We operate 1 day late on the following holidays: Memorial Day, 4th of July, Labor Day, Thanksgiving, Christmas and New Years Day. Holiday schedules are posted/updated on our website and Facebook Page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}