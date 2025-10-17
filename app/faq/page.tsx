import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Phone, Mail, Clock, Calendar } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Service & Pickup",
      questions: [
        {
          question: "Is there a trash bag limit?",
          answer:
            "Mike's Trash pick-up limit is based off of the service you choose when you signed up for service. Below are the limits for each service option:\n\nMike's Toter = Six to Eight 13-gallon kitchen bags that all fit inside the Mike's Toter picked up every week\n\nOnce A Month Service = Six to Eight 13-gallon kitchen bags that all fit inside the Mike's Toter picked up once a month",
        },
        {
          question: "What time should I put out the trash?",
          answer:
            "ALL Trash must be placed out the night before your pick-up day or by 6:00 a.m. the day of. If trash is not out, it will NOT be picked up until your next scheduled pick-up day.",
        },
        {
          question: "When will my trash be picked up?",
          answer:
            "The time of day for your trash pick-up will depend on a number of factors. Please have your trash out by 6:00 a.m. the day of to ensure your trash will be picked up.",
        },
        {
          question: "Can I leave items beside my toter?",
          answer:
            "Make sure that all trash to be taken is in the Toter/Can. Garbage or waste left beside toters or cans will not be collected unless you have called the office a day before your pick-up to arrange for extra to be taken.",
        },
      ],
    },
    {
      category: "Trash Collection Guidelines",
      questions: [
        {
          question: "What about loose trash?",
          answer:
            "ALL trash must be bagged, boxed, or bundled. NO loose trash, NO cans, or bags over 50 pounds. If a bag is too HEAVY for one person to lift, it will NOT be taken.",
        },
        {
          question: "What items do NOT go into the trash?",
          answer:
            "There are many items that the landfill will not accept, including the following: Microwaves, TV's, Refrigerators, Liquid Paint, Hazardous Waste, Yard Waste, Batteries, Tires, and Propane Tanks. We also cannot haul Concrete, Bricks, Cast Iron, and Solid Steel as it damages the compactors in our trucks.",
        },
      ],
    },
    {
      category: "Special Items & Services",
      questions: [
        {
          question: "How do I dispose of a used mattress or old toilet? Can I schedule these to be picked up?",
          answer:
            "Large item pickups are available. Terms, fees, and conditions will apply. Please call our office for pricing. Plan to make arrangements at least one day in advance to ensure pick-up.",
        },
        {
          question: "Do you offer one-time pick-ups?",
          answer:
            "Yes! We do offer irregular pick-ups. Price is based on the amount that needs to be picked up. Please call the office for pricing and to schedule a pick-up.",
        },
        {
          question: "Can you dump a dumpster that I own?",
          answer:
            "Yes! Mike's Trash can dump customer owned dumpsters on an as needed basis. Please contact the office for pricing and to schedule.",
        },
      ],
    },
    {
      category: "Equipment & Responsibility",
      questions: [
        {
          question: "Who is responsible for the toter or dumpster? Mike's Trash or me?",
          answer:
            "The customer is responsible for their toter or dumpster while in service from Mike's Trash. (Do NOT use containers for burning.) Report any suspicious activity around dumpsters. If the Mike's toter and/or dumpster is not returned when service is cancelled or terminated, the customer will be charged replacement cost for the Mike's Toter and/or dumpster.",
        },
      ],
    },
    {
      category: "Weather & Schedule Changes",
      questions: [
        {
          question: "What happens if there is bad weather?",
          answer:
            "We try our best to pick up everyone one their scheduled route days. If there is a travel ban in effect, Mike's Trash will not be able to service certain areas when unsafe or dangerous road conditions occur due to bad weather. Visit (and like) https://www.facebook.com/Mikes-Trash-LLC-102106594774291/ for up-to-date information.",
        },
      ],
    },
    {
      category: "Contact & Office Information",
      questions: [
        {
          question: "When is the office open? Where is the office located?",
          answer:
            "The office is open Monday through Thursday from 8:00 a.m. to 4:00 p.m., and Friday 8:00 a.m. to 12:00 p.m. Our office is located at 824 Main Street in Rochester, Indiana 46975 directly across from the Fulton County Courthouse. We do offer an after-hours drop slot on the office door for after-hours payments.",
        },
      ],
    },
    {
      category: "Billing & Payment",
      questions: [
        {
          question: "Do you offer email billing?",
          answer:
            "Yes! You can choose to sign up for e-billing and have your trash bill emailed directly to your inbox rather than receiving it by mail! Even better, you can access your bill online any time! Contact the office at (574) 223-6429 or email mikestrash@rtcol.com to get signed up!\n\nThe benefits of e-billing:\n• Access bills 24/7 online, including current account balance and payment history\n• Spend less time sorting through mail\n• Help us keep rates lower by avoiding postal fees",
        },
        {
          question: "Do you offer Autopay?",
          answer:
            "Yes! You can set up autopay via ACH direct draft payments or with a credit/debit card (a 3.99% fee is charged for all credit/debit card payments). Just call the office to get signed up!",
        },
      ],
    },
    {
      category: "Communication & Security",
      questions: [
        {
          question: "I just got a text from Mike's trash, is this legit?",
          answer:
            "Yes! We do send out reminders via text and you can ALSO text us any questions, if you prefer! The number to text is (574) 301-3899. Text messages will only be returned during business hours.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6 text-balance px-2">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 text-pretty px-4">
            Find answers to common questions about our services. Can't find what you're looking for? We're here to help!
          </p>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <HelpCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Need immediate help?</h3>
                <p className="text-muted-foreground mb-4">
                  Can't find the answer you're looking for? Our friendly team is ready to help with any questions about
                  our services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    Contact Us
                  </Link>
                  <a
                    href="tel:+15742236429"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call (574) 223-6429
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">{category.category}</h2>
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((faq, questionIndex) => (
                  <AccordionItem
                    key={questionIndex}
                    value={`${categoryIndex}-${questionIndex}`}
                    className="border border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-4">
                      <span className="font-medium text-foreground">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-4">
                      <div className="text-muted-foreground leading-relaxed whitespace-pre-line">{faq.answer}</div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-12 sm:py-16 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">Additional Resources</h2>
            <p className="text-base sm:text-lg text-muted-foreground px-4">Everything you need to know about our services and policies</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Holiday Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  View our complete holiday calendar and makeup days for 2025
                </CardDescription>
                <div className="text-center">
                  <Link
                    href="/holiday-calendar"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    View Calendar
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Phone className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Get in touch with our friendly customer service team
                </CardDescription>
                <div className="text-center">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="text-center">
                <Clock className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Our office hours and location
                </CardDescription>
                <div className="text-center text-sm text-muted-foreground space-y-1">
                  <p className="font-semibold">824 Main Street, Rochester, IN 46975</p>
                  <p>Mon - Thu: 8:00 AM - 4:00 PM</p>
                  <p>Fri: 8:00 AM - 12:00 PM</p>
                  <p>Sat - Sun: Closed</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 sm:mb-4 px-2">Still have questions?</h2>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 px-4">
            We're your neighbors and we're here to help. Don't hesitate to reach out with any questions about our
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors w-full sm:w-auto"
            >
              Send us a message
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors w-full sm:w-auto"
            >
              Check service availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
