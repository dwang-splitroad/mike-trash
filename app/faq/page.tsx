import { Header } from "@/components/header"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-muted/30 to-muted/60 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-balance leading-tight mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty">
              Find answers to common questions about our waste management services
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="service-area">
                <AccordionTrigger className="text-left">What areas do you serve?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We serve Fulton County and the Rochester area in Indiana. We've been proudly serving this community
                    for over 30 years. If you're unsure whether we service your specific address, please call us at
                    (574) 223-6429 or use our address checker tool to confirm availability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pickup-schedule">
                <AccordionTrigger className="text-left">What is your pickup schedule?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We provide weekly pickup service on scheduled days throughout the week. Your specific pickup day
                    will be assigned when you start service and will remain consistent. We recommend placing your trash
                    at the curb by 7:00 AM on your pickup day. We'll notify customers in advance of any holiday schedule
                    changes.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="payment">
                <AccordionTrigger className="text-left">What payment methods do you accept?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We accept cash, personal checks, and major credit cards (Visa, MasterCard, American Express,
                    Discover). We offer convenient monthly billing for regular service customers, and you can pay by
                    mail, phone, or in person. We also offer automatic payment options for your convenience.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="start-service">
                <AccordionTrigger className="text-left">How do I start service?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Starting service is easy! You can call us at (574) 223-6429, fill out our online contact form, or
                    use our address checker tool. We'll verify that we service your area, discuss your needs, provide
                    pricing information, and schedule your first pickup. Most new service can be started within a few
                    days.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="what-accept">
                <AccordionTrigger className="text-left">What items do you accept for pickup?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">We accept most household trash and garbage, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                    <li>Regular household waste and garbage</li>
                    <li>Bagged yard waste and grass clippings</li>
                    <li>Small furniture items</li>
                    <li>Cardboard (broken down and bundled)</li>
                    <li>Paper and recyclable materials</li>
                  </ul>
                  <p className="text-muted-foreground">
                    For large appliances, electronics, or construction debris, please call us to discuss special pickup
                    arrangements or our bulk/roll-off services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="not-accept">
                <AccordionTrigger className="text-left">What items do you NOT accept?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground mb-4">For safety and environmental reasons, we cannot accept:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1 mb-4">
                    <li>Hazardous materials (paint, chemicals, batteries)</li>
                    <li>Medical waste</li>
                    <li>Liquid waste</li>
                    <li>Hot ashes or coals</li>
                    <li>Large amounts of construction debris</li>
                  </ul>
                  <p className="text-muted-foreground">
                    If you have questions about specific items, please call us. We can often provide guidance on proper
                    disposal methods or alternative services.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="missed-pickup">
                <AccordionTrigger className="text-left">What if my pickup is missed?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    While missed pickups are rare, they can occasionally happen due to weather, equipment issues, or
                    other unforeseen circumstances. If your pickup is missed, please call us at (574) 223-6429 as soon
                    as possible. We'll arrange for pickup the next business day at no additional charge. We appreciate
                    your patience and understanding.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="holiday-schedule">
                <AccordionTrigger className="text-left">Do you pickup on holidays?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We observe major holidays and adjust our pickup schedule accordingly. Typically, if your regular
                    pickup day falls on a holiday, we'll collect your trash the next business day. We notify all
                    customers in advance of holiday schedule changes through phone calls, mailings, or our website.
                    Major holidays we observe include New Year's Day, Memorial Day, Independence Day, Labor Day,
                    Thanksgiving, and Christmas.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="bulk-pickup">
                <AccordionTrigger className="text-left">Do you offer bulk pickup services?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes! We offer bulk pickup services for large items that don't fit in regular trash collection. This
                    includes furniture, appliances, large amounts of yard waste, and other oversized items. Bulk pickup
                    is scheduled separately from regular service and pricing varies based on the items and quantity.
                    Call us at (574) 223-6429 to schedule bulk pickup and get pricing information.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="dumpster-rental">
                <AccordionTrigger className="text-left">Do you rent dumpsters?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Yes, we offer both commercial dumpster service and roll-off dumpster rentals. Commercial dumpsters
                    are perfect for businesses that need regular waste removal, while roll-off dumpsters are ideal for
                    construction projects, major cleanouts, and renovation work. We have various sizes available and
                    flexible rental periods. Contact us to discuss your specific needs and get pricing information.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="recycling">
                <AccordionTrigger className="text-left">Do you offer recycling services?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    We can help coordinate recycling services and provide guidance on proper waste separation and
                    recycling options in our area. While we focus primarily on waste collection, we're happy to discuss
                    recycling solutions that work for your household or business. Contact us to learn more about
                    recycling options and how we can help you reduce waste.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing">
                <AccordionTrigger className="text-left">How much does service cost?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">
                    Our pricing varies based on the type of service, pickup frequency, and specific needs. We believe in
                    fair, transparent pricing with no hidden fees. For residential pickup, commercial dumpsters, bulk
                    pickup, or roll-off rentals, please contact us for a personalized quote. We're happy to discuss your
                    needs and provide competitive pricing that fits your budget.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Our friendly team is here to help with any questions about our services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline">
                Call (574) 223-6429
              </Button>
            </div>
          </div>
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
    </div>
  )
}
