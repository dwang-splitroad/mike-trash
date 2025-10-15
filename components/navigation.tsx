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
    <nav className="bg-card border-b border-border sticky top-0 z-50 shadow-sm">
      {/* Phone Number Bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-end items-center">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4" />
            <a href="tel:574-223-6429" className="hover:underline">
              (574) 223-6429
            </a>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 lg:h-28">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 flex-shrink-0">
              <Image
                src="/mikes-trash-logo-no-number.png"
                alt="Mike's Trash Logo"
                width={360}
                height={120}
                className="h-16 sm:h-20 lg:h-24 w-auto"
                priority
              />
            </Link>

            {/* Desktop Navigation (center) */}
            <div className="hidden lg:flex items-center space-x-1 justify-center flex-1 mx-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-2 xl:px-3 py-2 text-xs xl:text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Make Payment Button (right) */}
            <div className="hidden lg:block flex-shrink-0">
              <Button asChild>
                <a href="https://www.trashbilling.com" target="_blank" rel="noopener noreferrer">
                  Make a Payment
                </a>
              </Button>
            </div>

            {/* Mobile menu button (right on small screens) */}
            <div className="lg:hidden ml-auto">
              <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="h-10 w-10 p-2">
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 pb-1">
                <Button asChild className="w-full">
                  <a href="https://www.trashbilling.com" target="_blank" rel="noopener noreferrer">
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
