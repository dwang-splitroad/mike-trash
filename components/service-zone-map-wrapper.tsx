"use client"

import dynamic from "next/dynamic"
import type { GeocodingResult } from "@/lib/geocoding"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface ServiceZoneMapProps {
  userLocation?: {
    latitude: number
    longitude: number
    displayName?: string
  }
}

// Dynamically import the map component with no SSR
const ServiceZoneMapDynamic = dynamic(() => import("./service-zone-map").then((mod) => mod.ServiceZoneMap), {
  ssr: false,
  loading: () => (
    <Card>
      <CardHeader>
        <CardTitle>Service Area Map</CardTitle>
        <CardDescription>Loading map...</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[400px] bg-muted animate-pulse rounded-lg" />
      </CardContent>
    </Card>
  ),
})

export function ServiceZoneMapWrapper({ userLocation }: ServiceZoneMapProps) {
  return <ServiceZoneMapDynamic userLocation={userLocation} />
}

