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
          question: "When will my trash be picked up?",
          answer:
            "Mike's Trash pick-up limit is based off of the service you choose when you signed up for service. Below are the limits for each service option: Mike's Toter = Six to Eight 13-gallon kitchen bags that all fit inside the Mike's Toter picked up every week. Once A Month Service = Six to Eight 13-gallon kitchen bags that all fit inside the Mike's Toter picked up once a month.",
        },
        {
          question: "What time should I put out the trash?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
        {
          question: "Can I leave items beside my toter?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
    {
      category: "Trash Collection Guidelines",
      questions: [
        {
          question: "Is there a trash bag limit?",
          answer:
            "Mike's Trash pick-up limit is based off of the service you choose when you signed up for service. Below are the limits for each service option: Mike's Toter = Six to Eight 13-gallon kitchen bags that all fit inside the Mike's Toter picked up every week. Once A Month Service = Six to Eight 13-gallon kitchen bags that all fit inside the Mike's Toter picked up once a month.",
        },
        {
          question: "What about loose trash?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
    {
      category: "Special Items & Services",
      questions: [
        {
          question: "How do I dispose of a used mattress or old toilet? Can I schedule these to be picked up?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
        {
          question: "Do you offer one-time pick-ups?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
        {
          question: "Can you dump a dumpster that I own?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
    {
      category: "Equipment & Responsibility",
      questions: [
        {
          question: "Who is responsible for the toter or dumpster? Mike's Trash or me?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
    {
      category: "Weather & Schedule Changes",
      questions: [
        {
          question: "What happens if there is bad weather?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
    {
      category: "Contact & Office Information",
      questions: [
        {
          question: "When is the office open? Where is the office located?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
    {
      category: "Billing & Payment",
      questions: [
        {
          question: "Do you offer email billing?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
        {
          question: "Do you offer Autopay?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
    {
      category: "Communication & Security",
      questions: [
        {
          question: "I just got a text from Mike's trash, is this legit?",
          answer:
            "Answer will be provided soon. Please contact us for information.",
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
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
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-accent transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    Call Now
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
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Additional Resources</h2>
            <p className="text-lg text-muted-foreground">Everything you need to know about our services and policies</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="text-center">
                <Calendar className="h-8 w-8 text-primary mx-auto mb-2" />
                <CardTitle>Holiday Schedule</CardTitle>
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
                <CardTitle>Service Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  Learn about our pickup times and customer service hours
                </CardDescription>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Pickup: 7 AM - 5 PM</p>
                  <p>Office: Mon-Fri 8 AM - 5 PM</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Still have questions?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            We're your neighbors and we're here to help. Don't hesitate to reach out with any questions about our
            services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Send us a message
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
            >
              Check service availability
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
