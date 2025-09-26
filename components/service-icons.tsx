import { Trash2, Building2, Sofa, Container } from "lucide-react"

export function ServiceIcons() {
  const services = [
    {
      icon: Trash2,
      title: "Residential Pickup",
      description: "Weekly curbside collection for homes",
    },
    {
      icon: Building2,
      title: "Commercial Dumpsters",
      description: "Regular service for businesses",
    },
    {
      icon: Sofa,
      title: "Bulk Pickup",
      description: "Large item removal service",
    },
    {
      icon: Container,
      title: "Roll-Off Dumpsters",
      description: "Construction and renovation projects",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <div key={index} className="text-center">
          <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
            <service.icon className="h-8 w-8 text-primary" />
          </div>
          <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
          <p className="text-muted-foreground text-sm">{service.description}</p>
        </div>
      ))}
    </div>
  )
}
