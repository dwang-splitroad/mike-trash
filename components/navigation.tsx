"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/residential", label: "Residential" },
    { href: "/dumpsters", label: "Dumpsters" },
    { href: "/bulk-pickup", label: "Bulk Pickup" },
    { href: "/roll-offs", label: "Roll-Offs" },
    { href: "/holiday-calendar", label: "Holiday Calendar" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
    { href: "/referral", label: "Referral" },
    { href: "/about", label: "About" },
  ]

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      {/* Phone Number Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-end items-center">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <a href="tel:574-223-6429" className="hover:underline">
              (574)223-6429
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-3 lg:grid-cols-[auto,1fr,auto] items-center h-28 w-full px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 justify-self-start">
            <Image
              src="/mikes-trash-logo-no-number.png"
              alt="Mike's Trash Logo"
              width={360}
              height={120}
              className="h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation (center) */}
          <div className="hidden lg:flex items-center space-x-1 justify-center justify-self-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors whitespace-nowrap"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Make Payment Button (right) */}
          <div className="hidden lg:block justify-self-end">
            <Button asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Make a Payment
              </a>
            </Button>
          </div>

          {/* Mobile menu button (right on small screens) */}
          <div className="lg:hidden justify-self-end">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2">
                <Button asChild className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    Make a Payment
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
