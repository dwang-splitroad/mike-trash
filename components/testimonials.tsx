import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Mike's is great to work with. They've never missed a pickup and there very reasonably priced! Very nice people!",
      author: "Derrell Young",
      location: "Rochester, IN",
    },
    {
      quote: "I've been with Mike's for many years. They provide excellent service. Good people to work with. Give them a try.",
      author: "Randy Rush",
      location: "Rochester, IN",
    },
    {
      quote: "Mikes Trash is great! They care about the local community and the garbage guys are always friendly!",
      author: "Bettina Zabel",
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
