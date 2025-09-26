import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, AlertTriangle, CheckCircle } from "lucide-react"

export default function HolidayCalendarPage() {
  const holidays2025 = [
    {
      date: "January 1, 2025",
      holiday: "New Year's Day",
      status: "no-pickup",
      makeup: "January 2, 2025",
    },
    {
      date: "January 20, 2025",
      holiday: "Martin Luther King Jr. Day",
      status: "regular",
      makeup: null,
    },
    {
      date: "February 17, 2025",
      holiday: "Presidents' Day",
      status: "regular",
      makeup: null,
    },
    {
      date: "May 26, 2025",
      holiday: "Memorial Day",
      status: "no-pickup",
      makeup: "May 27, 2025",
    },
    {
      date: "July 4, 2025",
      holiday: "Independence Day",
      status: "no-pickup",
      makeup: "July 5, 2025",
    },
    {
      date: "September 1, 2025",
      holiday: "Labor Day",
      status: "no-pickup",
      makeup: "September 2, 2025",
    },
    {
      date: "October 13, 2025",
      holiday: "Columbus Day",
      status: "regular",
      makeup: null,
    },
    {
      date: "November 11, 2025",
      holiday: "Veterans Day",
      status: "regular",
      makeup: null,
    },
    {
      date: "November 27, 2025",
      holiday: "Thanksgiving Day",
      status: "no-pickup",
      makeup: "November 28, 2025",
    },
    {
      date: "December 25, 2025",
      holiday: "Christmas Day",
      status: "no-pickup",
      makeup: "December 26, 2025",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-secondary to-background py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Holiday Schedule</h1>
          <p className="text-xl text-muted-foreground mb-8 text-pretty">
            Stay informed about our holiday schedule so you never miss a pickup. We're committed to keeping you updated
            and your service running smoothly.
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">Important Holiday Information</h3>
                <p className="text-muted-foreground">
                  When we don't collect on a holiday, your pickup will be moved to the next business day. Please have
                  your bins out by 7 AM on the makeup day. We appreciate your understanding as we spend time with our
                  families during these special days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Holiday Calendar */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">2025 Holiday Schedule</h2>
            <p className="text-lg text-muted-foreground">
              Plan ahead with our complete holiday calendar. We'll always notify customers of any schedule changes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays2025.map((holiday, index) => (
              <Card key={index} className={holiday.status === "no-pickup" ? "border-orange-200 bg-orange-50" : ""}>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-muted-foreground">{holiday.date}</span>
                  </div>
                  <CardTitle className="text-lg">{holiday.holiday}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      {holiday.status === "no-pickup" ? (
                        <AlertTriangle className="h-4 w-4 text-orange-500" />
                      ) : (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      )}
                      <span
                        className={`text-sm font-medium ${
                          holiday.status === "no-pickup" ? "text-orange-700" : "text-green-700"
                        }`}
                      >
                        {holiday.status === "no-pickup" ? "No Pickup" : "Regular Service"}
                      </span>
                    </div>

                    {holiday.makeup && (
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm text-muted-foreground">
                          Makeup day: <strong>{holiday.makeup}</strong>
                        </span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  Weather Delays
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Severe weather may occasionally delay service. We'll make every effort to collect on schedule, but
                  safety comes first. If weather prevents pickup, we'll collect the next business day.
                </CardDescription>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  We'll notify customers of any schedule changes due to holidays or weather. Make sure we have your
                  current contact information so you never miss an update.
                </CardDescription>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-4">Questions about the schedule?</h3>
            <p className="text-lg text-muted-foreground mb-6">
              We're here to help! Contact us if you have questions about holiday pickups or need to update your contact
              information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-accent transition-colors"
              >
                View FAQ
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
