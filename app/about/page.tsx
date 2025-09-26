import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Users, Home, Award, Leaf, Handshake } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Meet the Family</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            We're not just a trash service - we're your neighbors who live, work, and care about our community in Fulton
            County and Rochester.
          </p>
        </div>
      </section>

      {/* Family Story */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Mike's Trash Service started as a simple idea: what if trash pickup could be clean, reliable, and
                neighborly? Mike Johnson, a lifelong resident of Rochester, saw how other companies treated waste
                management as just another transaction. He knew our community deserved better.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                In 2018, Mike started the company with one truck and a commitment to treating every customer like
                family. Today, we're proud to serve hundreds of neighbors throughout Fulton County and Rochester, but
                we've never forgotten our roots or our values.
              </p>
              <p className="text-lg text-muted-foreground">
                When you call Mike's Trash Service, you're not just getting waste management - you're supporting a local
                family business that reinvests in our community and cares about keeping our neighborhoods clean and
                beautiful.
              </p>
            </div>

            <div className="bg-primary/5 p-8 rounded-2xl">
              <img
                src="/mike-and-family-with-clean-garbage-truck.jpg"
                alt="Mike Johnson and his family standing proudly next to their clean garbage truck"
                className="w-full h-80 object-cover rounded-lg mb-6"
              />
              <p className="text-center text-muted-foreground italic">
                Mike Johnson with his family and the team that keeps our community clean
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-lg text-muted-foreground">
              The friendly faces behind Mike's Trash Service - your neighbors who care about our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/mike-johnson-owner-headshot.jpg"
                    alt="Mike Johnson, Owner and Founder"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <CardTitle>Mike Johnson</CardTitle>
                <CardDescription>Owner & Founder</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  A Rochester native with 15+ years in waste management. Mike started this company to bring neighborly
                  service back to trash pickup. When he's not working, you'll find him coaching little league and
                  volunteering at local events.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/sarah-johnson-operations-manager.jpg"
                    alt="Sarah Johnson, Operations Manager"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <CardTitle>Sarah Johnson</CardTitle>
                <CardDescription>Operations Manager</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Sarah handles scheduling, customer service, and keeps everything running smoothly. She's lived in
                  Fulton County her whole life and knows our community inside and out. She's also active in the local
                  PTA and community garden.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/tom-rodriguez-lead-driver.jpg"
                    alt="Tom Rodriguez, Lead Driver"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <CardTitle>Tom Rodriguez</CardTitle>
                <CardDescription>Lead Driver</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Tom has been with us since day one and knows every street in our service area. He takes pride in
                  keeping his truck spotless and treating every property with respect. Tom volunteers with the local
                  fire department in his spare time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">
              These aren't just words on a wall - they're the principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Home className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Community First</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We live here too. This isn't just our business - it's our home. We're invested in keeping our
                  neighborhoods clean, safe, and beautiful for everyone.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Neighborly Service</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We treat every customer like family because that's what neighbors do. Friendly service, fair pricing,
                  and always going the extra mile.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Leaf className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Clean & Professional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Trash service doesn't have to be messy. We maintain clean trucks, professional appearance, and leave
                  no trace behind except satisfied customers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Reliable Excellence</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We show up when we say we will, rain or shine. Consistency and reliability aren't just goals - they're
                  promises we keep to our neighbors.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Family Values</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  As a family business, we understand the importance of trust, respect, and taking care of each other.
                  These values guide every interaction.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Handshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>Local Partnership</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We support local businesses, sponsor community events, and believe in giving back to the place that
                  has given us so much.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Giving Back to Our Community</h2>
            <p className="text-lg text-muted-foreground">
              We're proud to support the organizations and events that make Fulton County and Rochester special
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" />
                  Local Sponsorships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Rochester Little League teams</li>
                  <li>• Fulton County Community Festival</li>
                  <li>• Local high school sports programs</li>
                  <li>• Annual charity drives and fundraisers</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="h-5 w-5 text-primary" />
                  Volunteer Work
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Community cleanup days</li>
                  <li>• Free bulk pickup for seniors</li>
                  <li>• Supporting local food banks</li>
                  <li>• Participating in neighborhood watch programs</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary/10 p-8 rounded-2xl border border-primary/20">
              <blockquote className="text-lg text-foreground mb-4 italic">
                "We believe that a strong community starts with neighbors helping neighbors. When our community thrives,
                we all benefit."
              </blockquote>
              <cite className="text-muted-foreground">- Mike Johnson, Owner</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Ready to join the family?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Experience the difference of working with neighbors who care. We'd love to serve your family and help keep
            our community clean and beautiful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/">Check Service Availability</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
