import { Navigation } from "@/components/navigation"
import { AddressChecker } from "@/components/address-checker"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"
import Image from "next/image"

export default function RollOffsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Page Title */}
      <section className="py-8 sm:py-12 px-4 mt-0">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground text-center px-2">Roll-Off Dumpsters</h1>
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
          <div className="mb-12 sm:mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr,1fr] gap-8 sm:gap-12 items-start">
              <Card className="border-2 border-primary/20">
                <CardHeader className="text-center bg-primary/5 rounded-t-2xl">
                  <CardTitle className="text-xl sm:text-2xl text-primary">Clean Out Dumpsters/Roll-Offs</CardTitle>
                </CardHeader>
                <CardContent className="pt-4 sm:pt-6">
                  <div className="grid grid-cols-2 text-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-primary">3 Yard</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">4×6×7 ft</p>
                    </div>
                    <div className="bg-green-50 p-3 sm:p-4 rounded-lg border border-green-200">
                      <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-primary">15 Yard</h3>
                      <p className="text-xs sm:text-sm text-muted-foreground mt-1">4×7×16 ft</p>
                    </div>
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 font-semibold">
                    Mike's Trash offers 2 different sized dumpsters for your clean out/remodel projects:
                  </p>

                  <div className="space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    <p>
                      <strong className="text-foreground">3-Yard Dumpster:</strong> Great for small clean outs. Approximately 4ft tall × 6ft long with a 3ft long door for easy access.
                    </p>
                    <p>
                      <strong className="text-foreground">15-Yard Roll-Off:</strong> Perfect for bigger projects. Approximately 4ft tall × 7ft wide × 16ft long. Features a door that swings open on one end to make loading easier than throwing items over the side.
                    </p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                      <p className="text-sm sm:text-base text-yellow-800">
                        Please contact the office for pricing and to schedule a clean out dumpster.
                      </p>
                    </div>
                  </div>

                  <div className="bg-primary text-primary-foreground p-4 sm:p-5 rounded-xl text-sm sm:text-base leading-relaxed">
                    Mike's Trash has you covered when the projects get big. Whether you're cleaning out the garage, remodeling, or tackling a yard project, our roll-off dumpsters make it easy—drop it in, and we'll haul it away.
                  </div>
                </CardContent>
              </Card>

              {/* Roll-off Photo - Hidden on mobile */}
              <div className="hidden lg:block rounded-2xl shadow-xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/large-roll-off-container-at-commercial-constructio.jpg"
                  alt="Roll-off container for large projects"
                  fill
                  sizes="40vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* Service in Action Photos - Hidden on mobile */}
          <div className="mb-12 sm:mb-16 hidden md:block">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center px-2">Professional Roll-Off Service</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <div className="rounded-2xl shadow-xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/higher angle of large trash truck emptying large dumpster.jpg"
                  alt="Mike's Trash roll-off service in action"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
              <div className="rounded-2xl shadow-xl overflow-hidden relative aspect-[4/3]">
                <Image
                  src="/Large trash truck emptying large dumpster in front of city hall.jpg"
                  alt="Commercial roll-off dumpster service"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  quality={95}
                />
              </div>
            </div>
          </div>

          {/* Additional Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Easy Drop & Go</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  We deliver, you fill at your pace, and we haul it away when you're ready.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Flexible Sizing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Choose from 3-yard for small cleanouts or 15-yard for major projects.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CardTitle className="text-lg">Convenient Door Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our 15-yard dumpster has a swing door for easy loading without climbing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sign Up Section */}
      <section className="py-12 sm:py-16 px-4 bg-secondary/50" id="address-form">
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">Ready for your roll-off dumpster?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            Contact us today to schedule delivery and make your cleanup project easy.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <AddressChecker />
        </div>
      </section>
    </div>
  )
}