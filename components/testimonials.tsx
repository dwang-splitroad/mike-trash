import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Just amazing service! Mike's team is always reliable and professional.",
      author: "Sarah Johnson",
      location: "Rochester, IN",
    },
    {
      quote: "The best trash service in Fulton County. Family-owned and it shows!",
      author: "Mike Thompson",
      location: "Fulton County",
    },
    {
      quote: "Number one choice for waste management. Clean, efficient, and neighborly.",
      author: "Lisa Davis",
      location: "Rochester, IN",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial, index) => (
        <Card key={index} className="bg-muted/50">
          <CardContent className="p-6">
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="text-sm mb-4 italic">"{testimonial.quote}"</blockquote>
            <div className="text-sm">
              <div className="font-medium">{testimonial.author}</div>
              <div className="text-muted-foreground">{testimonial.location}</div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
