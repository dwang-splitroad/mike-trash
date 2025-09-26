import { Calendar } from "@/components/ui/calendar"
import { Navigation } from "@/components/navigation"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { HelpCircle, Phone, Mail, Clock } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  const faqCategories = [
    {
      category: "Service & Scheduling",
      questions: [
        {
          question: "What day is my trash picked up?",
          answer:
            "Your pickup day is assigned when you sign up for service and depends on your location within our service area. We'll provide you with your specific pickup day and remind you to have your bins out by 7 AM on that day.",
        },
        {
          question: "What if I miss my pickup day?",
          answer:
            "If you miss your scheduled pickup, please contact us as soon as possible. We may be able to arrange a special pickup for an additional fee, or you can wait until your next scheduled pickup day.",
        },
        {
          question: "Do you provide trash bins?",
          answer:
            "We can provide standard trash bins for an additional monthly fee, or you can use your own bins. We recommend wheeled bins for easier handling and to protect your back.",
        },
        {
          question: "What time should I put my bins out?",
          answer:
            "Please have your bins at the curb by 7 AM on your pickup day. Our routes start early to avoid traffic and complete service efficiently. You can put bins out the night before if preferred.",
        },
      ],
    },
    {
      category: "Billing & Pricing",
      questions: [
        {
          question: "How much does service cost?",
          answer:
            "Our pricing varies based on the type and frequency of service you need. Contact us for a personalized quote based on your specific requirements. We offer competitive rates with no hidden fees.",
        },
        {
          question: "How do I pay my bill?",
          answer:
            "We offer convenient monthly billing with multiple payment options including online payments, automatic bank draft, and traditional mail-in payments. Use the 'Make a Payment' button in our navigation to access our payment portal.",
        },
        {
          question: "Is there a contract required?",
          answer:
            "We don't require long-term contracts for residential service. We believe in earning your business through reliable service, not binding agreements. Commercial accounts may have different terms.",
        },
        {
          question: "Are there any additional fees?",
          answer:
            "Our standard pricing includes regular pickup service. Additional fees may apply for extra bags beyond your plan, special pickups, or bin rental. We'll always discuss any additional charges upfront.",
        },
      ],
    },
    {
      category: "What We Accept",
      questions: [
        {
          question: "What can I put in my regular trash?",
          answer:
            "Regular household waste including kitchen scraps, paper, cardboard, plastic containers, and general household items. Items should be bagged and placed in your bin.",
        },
        {
          question: "Do you take large items like furniture?",
          answer:
            "Yes! We offer bulk pickup service for large items like furniture, appliances, and other bulky items. This requires special scheduling and may have additional fees. We're the only company in the area that provides this service with professional care.",
        },
        {
          question: "What about hazardous materials?",
          answer:
            "We cannot accept hazardous materials including paint, chemicals, batteries, motor oil, or medical waste. Contact your local waste management authority for proper disposal of these items.",
        },
        {
          question: "Can you take construction debris?",
          answer:
            "Small amounts of construction debris can go in our dumpster rentals. For larger construction projects, consider our roll-off container service. Regular trash pickup cannot accommodate construction materials.",
        },
      ],
    },
    {
      category: "Service Area & Coverage",
      questions: [
        {
          question: "Do you serve my area?",
          answer:
            "We serve Fulton County and Rochester, NY. Use our address checker on the homepage to see if we serve your specific location. We're always expanding our service area.",
        },
        {
          question: "What if you don't serve my area yet?",
          answer:
            "Contact us to be added to our expansion list. We're continuously growing our service area and will notify you when we begin serving your neighborhood.",
        },
        {
          question: "Do you serve businesses?",
          answer:
            "Yes! We provide commercial service including regular pickup, dumpster rentals, and roll-off containers for businesses of all sizes. Contact us for a commercial service quote.",
        },
      ],
    },
    {
      category: "Weather & Holidays",
      questions: [
        {
          question: "What happens during bad weather?",
          answer:
            "We make every effort to maintain regular service during inclement weather. However, if conditions are unsafe, we may delay service until the next business day. Customer safety and our crew safety are our top priorities.",
        },
        {
          question: "Do you pick up on holidays?",
          answer:
            "We observe major holidays and do not provide service on New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas. Service is moved to the next business day. Check our holiday calendar for specific dates.",
        },
        {
          question: "How will I know about schedule changes?",
          answer:
            "We'll contact customers directly about any schedule changes due to holidays or weather. Make sure we have your current phone number and email address to receive updates.",
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
