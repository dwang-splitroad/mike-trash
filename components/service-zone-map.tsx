"use client"

import { useEffect, useRef, useState } from "react"
import { SERVICE_ZONE_GEOJSON, getServiceZoneCenter, getServiceZoneBounds } from "@/lib/service-zone"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceZoneMapProps {
  userLocation?: {
    latitude: number
    longitude: number
    displayName?: string
  }
}

export function ServiceZoneMap({ userLocation }: ServiceZoneMapProps) {
  const mapRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined" || !mapRef.current) return

    const initMap = async () => {
      // Dynamically import leaflet and react-leaflet
      const L = await import("leaflet")
      await import("leaflet/dist/leaflet.css")

      // Fix for default marker icon
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      })

      const center = getServiceZoneCenter()
      const bounds = getServiceZoneBounds()

      // Create map
      const map = L.map(mapRef.current).setView(center as [number, number], 10)

      // Add tile layer
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      // Convert GeoJSON coordinates to Leaflet format [lat, lng]
      const polygonPositions: [number, number][] = SERVICE_ZONE_GEOJSON.features[0].geometry.coordinates[0].map(
        ([lng, lat]) => [lat, lng] as [number, number]
      )

      // Add polygon
      L.polygon(polygonPositions, {
        color: "#3b82f6",
        fillColor: "#3b82f6",
        fillOpacity: 0.2,
        weight: 2,
      })
        .addTo(map)
        .bindPopup("Mike's Trash Service Zone")

      // Add marker if user location is provided
      if (userLocation) {
        L.marker([userLocation.latitude, userLocation.longitude])
          .addTo(map)
          .bindPopup(
            `Your Address${userLocation.displayName ? `<br/><span style="font-size: 0.75rem">${userLocation.displayName}</span>` : ""}`
          )
      }

      // Fit bounds
      map.fitBounds(bounds as [[number, number], [number, number]])

      setIsLoaded(true)
    }

    initMap()
  }, [userLocation])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Service Area Map</CardTitle>
        <CardDescription>
          {userLocation
            ? "Your address is outside our current service zone (marked in blue)."
            : "Our service zone is highlighted in blue."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px] rounded-lg overflow-hidden border relative">
          {!isLoaded && (
            <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
              <p className="text-sm text-muted-foreground">Loading map...</p>
            </div>
          )}
          <div ref={mapRef} className="w-full h-full" />
        </div>
        {userLocation && (
          <p className="mt-4 text-sm text-muted-foreground">
            We&apos;re always expanding our service area. Contact us to be notified when we reach your neighborhood.
          </p>
        )}
      </CardContent>
    </Card>
  )
}


