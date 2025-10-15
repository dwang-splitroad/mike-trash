"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-primary-foreground">
      {/* Top bar with phone number */}
      <div className="bg-primary/90 py-2">
        <div className="container mx-auto px-4 flex justify-end items-center">
          <div className="flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" />
            <span className="font-medium">(574) 223-6429</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold">
            Mike's Trash
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="hover:text-primary-foreground/80 transition-colors">
              Home
            </Link>
            <Link href="/residential" className="hover:text-primary-foreground/80 transition-colors">
              Residential
            </Link>
            <Link href="/dumpsters" className="hover:text-primary-foreground/80 transition-colors">
              Dumpsters
            </Link>
            <Link href="/bulk-pickup" className="hover:text-primary-foreground/80 transition-colors">
              Bulk Pickup
            </Link>
            <Link href="/roll-offs" className="hover:text-primary-foreground/80 transition-colors">
              Roll-Offs
            </Link>
            <Link href="/holiday-calendar" className="hover:text-primary-foreground/80 transition-colors">
              Holiday Calendar
            </Link>
            <Link href="/faq" className="hover:text-primary-foreground/80 transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary-foreground/80 transition-colors">
              Contact
            </Link>
            <Link href="/referral" className="hover:text-primary-foreground/80 transition-colors">
              Referral
            </Link>
          </nav>

          {/* Make Payment Button */}
          <div className="hidden md:block">
            <Button variant="secondary" asChild>
              <a href="https://www.trashbilling.com" target="_blank" rel="noopener noreferrer">
                Make a Payment
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Home
            </Link>
            <Link href="/residential" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Residential
            </Link>
            <Link href="/dumpsters" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Dumpsters
            </Link>
            <Link href="/bulk-pickup" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Bulk Pickup
            </Link>
            <Link href="/roll-offs" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Roll-Offs
            </Link>
            <Link href="/holiday-calendar" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Holiday Calendar
            </Link>
            <Link href="/faq" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              FAQ
            </Link>
            <Link href="/about" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              About
            </Link>
            <Link href="/contact" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Contact
            </Link>
            <Link href="/referral" className="block py-2 hover:text-primary-foreground/80 transition-colors">
              Referral
            </Link>
            <div className="pt-2">
              <Button variant="secondary" asChild className="w-full">
                <a href="https://www.trashbilling.com" target="_blank" rel="noopener noreferrer">
                  Make a Payment
                </a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
