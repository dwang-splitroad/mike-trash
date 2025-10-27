import * as turf from "@turf/turf"
import { SERVICE_ZONE_GEOJSON } from "./service-zone"

export interface GeocodingResult {
  latitude: number
  longitude: number
  displayName: string
}

export interface AddressSuggestion {
  displayName: string
  latitude: number
  longitude: number
}

// Track last request time to respect Nominatim rate limit (1 req/sec)
let lastRequestTime = 0

/**
 * Get address suggestions for autocomplete
 * Returns multiple matching addresses
 */
export async function getAddressSuggestions(query: string): Promise<AddressSuggestion[]> {
  if (!query || query.trim().length < 3) {
    return []
  }

  // Enforce 1 second minimum between requests
  const now = Date.now()
  const timeSinceLastRequest = now - lastRequestTime
  if (timeSinceLastRequest < 1000) {
    const waitTime = 1000 - timeSinceLastRequest
    await new Promise(resolve => setTimeout(resolve, waitTime))
  }
  lastRequestTime = Date.now()

  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?` +
        new URLSearchParams({
          q: query,
          format: "json",
          limit: "10", // Request more to filter down to Indiana results
          addressdetails: "1",
          countrycodes: "us", // Limit to US addresses
        }),
      {
        headers: {
          "User-Agent": "MikesTrashService/1.0",
        },
      }
    )

    if (!response.ok) {
      if (response.status === 503) {
        console.warn("Nominatim API rate limit reached. Please wait a moment before searching again.")
      } else {
        console.error("Address suggestions API error:", response.statusText)
      }
      return []
    }

    const data = await response.json()

    if (!data || data.length === 0) {
      return []
    }

    // Filter to only show Indiana addresses
    const indianaResults = data.filter((result: any) => {
      const state = result.address?.state
      const displayName = result.display_name || ""
      
      // Check if it's Indiana by state field or if "Indiana" or "IN" appears in the display name
      const isIndiana = 
        state === "Indiana" || 
        state === "IN" || 
        displayName.includes("Indiana") || 
        displayName.includes(", IN,") ||
        displayName.includes(", IN ")
      
      // Debug logging (remove after testing)
      if (!isIndiana) {
        console.log("Filtered out:", displayName, "State:", state)
      }
      
      return isIndiana
    })

    console.log(`Found ${data.length} total results, ${indianaResults.length} in Indiana`)

    // Limit to 5 results after filtering
    return indianaResults.slice(0, 5).map((result: any) => ({
      displayName: result.display_name,
      latitude: parseFloat(result.lat),
      longitude: parseFloat(result.lon),
    }))
  } catch (error) {
    console.error("Error getting address suggestions:", error)
    return []
  }
}

/**
 * Geocode an address using OpenStreetMap Nominatim API
 * Free service, no API key required
 */
export async function geocodeAddress(address: string): Promise<GeocodingResult | null> {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?` +
        new URLSearchParams({
          q: address,
          format: "json",
          limit: "1",
          addressdetails: "1",
        }),
      {
        headers: {
          "User-Agent": "MikesTrashService/1.0",
        },
      }
    )

    if (!response.ok) {
      console.error("Geocoding API error:", response.statusText)
      return null
    }

    const data = await response.json()

    if (!data || data.length === 0) {
      return null
    }

    const result = data[0]
    return {
      latitude: parseFloat(result.lat),
      longitude: parseFloat(result.lon),
      displayName: result.display_name,
    }
  } catch (error) {
    console.error("Error geocoding address:", error)
    return null
  }
}

/**
 * Check if a point (lat, lng) is inside the service zone polygon
 */
export function isPointInServiceZone(latitude: number, longitude: number): boolean {
  try {
    const pt = turf.point([longitude, latitude])
    const serviceZonePolygon = turf.polygon(SERVICE_ZONE_GEOJSON.features[0].geometry.coordinates)
    
    return turf.booleanPointInPolygon(pt, serviceZonePolygon)
  } catch (error) {
    console.error("Error checking point in polygon:", error)
    return false
  }
}

/**
 * Check if an address is within the service zone
 * Returns the geocoding result and whether it's in the service zone
 */
export async function checkAddressInServiceZone(
  address: string
): Promise<{ inZone: boolean; geocodingResult: GeocodingResult | null }> {
  const geocodingResult = await geocodeAddress(address)

  if (!geocodingResult) {
    return { inZone: false, geocodingResult: null }
  }

  const inZone = isPointInServiceZone(geocodingResult.latitude, geocodingResult.longitude)

  return { inZone, geocodingResult }
}


