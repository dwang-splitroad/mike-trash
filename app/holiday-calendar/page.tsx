import { Header } from "@/components/header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, AlertTriangle, CheckCircle } from "lucide-react"

export default function HolidayCalendarPage() {
  const holidays2024 = [
    { date: "January 1", name: "New Year's Day", status: "closed", makeup: "January 2" },
    { date: "May 27", name: "Memorial Day", status: "closed", makeup: "May 28" },
    { date: "July 4", name: "Independence Day", status: "closed", makeup: "July 5" },
    { date: "September 2", name: "Labor Day", status: "closed", makeup: "September 3" },
    { date: "November 28", name: "Thanksgiving Day", status: "closed", makeup: "November 29" },
    { date: "November 29", name: "Day After Thanksgiving", status: "closed", makeup: "November 30" },
    { date: "December 25", name: "Christmas Day", status: "closed", makeup: "December 26" },
  ]

  const holidays2025 = [
    { date: "January 1", name: "New Year's Day", status: "closed", makeup: "January 2" },
    { date: "May 26", name: "Memorial Day", status: "closed", makeup: "May 27" },
    { date: "July 4", name: "Independence Day", status: "closed", makeup: "July 5" },
    { date: "September 1", name: "Labor Day", status: "closed", makeup: "September 2" },
    { date: "November 27", name: "Thanksgiving Day", status: "closed", makeup: "November 28" },
    { date: "November 28", name: "Day After Thanksgiving", status: "closed", makeup: "November 29" },
    { date: "December 25", name: "Christmas Day", status: "closed", makeup: "December 26" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">Holiday Schedule</h1>
            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              Stay informed about our holiday schedule and pickup changes throughout the year.
            </p>
            <div className="flex items-center justify-center gap-2 text-primary">
              <Calendar className="w-6 h-6" />
              <span className="text-lg font-semibold">Always check for updates</span>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-6 h-6 text-amber-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-amber-800 mb-2">Important Holiday Information</h3>
                <p className="text-amber-700">
                  When your regular pickup day falls on a holiday, your service will be delayed by one day. Please have
                  your containers out by 7 AM on your makeup day. We appreciate your patience during holiday weeks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2025 Holiday Schedule */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">2025 Holiday Schedule</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  2025 Holidays & Makeup Days
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holidays2025.map((holiday, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        <div>
                          <div className="font-semibold">{holiday.name}</div>
                          <div className="text-sm text-muted-foreground">{holiday.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-red-600">Service Closed</div>
                        <div className="text-sm text-muted-foreground">Makeup: {holiday.makeup}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 2024 Holiday Schedule (Reference) */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">2024 Holiday Schedule (Reference)</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  2024 Holidays & Makeup Days
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {holidays2024.map((holiday, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg opacity-75">
                      <div className="flex items-center gap-4">
                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                        <div>
                          <div className="font-semibold text-muted-foreground">{holiday.name}</div>
                          <div className="text-sm text-muted-foreground">{holiday.date}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-muted-foreground">Service Closed</div>
                        <div className="text-sm text-muted-foreground">Makeup: {holiday.makeup}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Holiday Tips */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Holiday Week Tips</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">Before the Holiday</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Check the holiday schedule above</li>
                  <li>• Note your makeup pickup day</li>
                  <li>• Set reminders for the new pickup time</li>
                  <li>• Prepare containers the night before</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold">On Makeup Day</h3>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Have containers out by 7 AM</li>
                  <li>• Place them in your usual spot</li>
                  <li>• Be patient - routes may run later</li>
                  <li>• Call if pickup is missed</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Questions About Holiday Schedule?</h2>
            <p className="text-xl mb-8 opacity-90">
              Our team is here to help with any questions about holiday pickups or schedule changes.
            </p>
            <div className="text-2xl font-bold">Call (574) 223-6429</div>
            <p className="mt-2 opacity-75">Monday - Friday, 8 AM - 5 PM</p>
          </div>
        </div>
      </section>
    </div>
  )
}
