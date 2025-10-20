import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "Mike's Trash Service - Your Trusted Neighborhood Waste Management",
  description:
    "Family-owned trash service in Fulton County and Rochester. Residential pickup, dumpsters, bulk pickup, and roll-offs. Clean, reliable, neighborly service.",
  keywords: "Fulton County, Rochester, Trash, Trash Pick up, Mikes Trash, Dumpster, Roll-off, couch, residential",
  generator: 'v0.app',
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
