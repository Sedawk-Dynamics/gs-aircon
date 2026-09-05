"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"

const navLinks = [
  { href: "/#home", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#mission", label: "Mission & Values" },
  { href: "/#spare-parts", label: "Spare Parts" },
  { href: "/#services", label: "Services" },
  { href: "/#brands", label: "Brands Supported" },
  { href: "/#projects", label: "Projects" },
  { href: "/#contact", label: "Contact Us" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="bg-navy text-navy-foreground">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-1.5 text-xs sm:px-6 lg:px-8">
          <p className="truncate font-medium tracking-wide text-navy-foreground/80">
            Hyderabad · Muscat · Sri Lanka · Middle East
          </p>
          <div className="hidden items-center gap-4 sm:flex">
            <a
              href="tel:+919885566835"
              className="flex items-center gap-1.5 text-navy-foreground/90 transition-colors hover:text-primary"
            >
              <Phone className="size-3.5" aria-hidden="true" />
              Emergency Support
            </a>
            <a
              href="mailto:info@gsaircon.com"
              className="flex items-center gap-1.5 text-navy-foreground/90 transition-colors hover:text-primary"
            >
              <Mail className="size-3.5" aria-hidden="true" />
              info@gsaircon.com
            </a>
          </div>
        </div>
      </div>

      <header className="border-b border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/#home" className="flex items-center">
            <Image
              src="/gs-aircon-logo.png"
              alt="GS Aircon Private Limited"
              width={160}
              height={46}
              priority
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button render={<Link href="/#contact" />} nativeButton={false} size="lg" className="rounded-md">
              Request a Quote
            </Button>
          </div>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={<Button variant="outline" size="icon" className="lg:hidden" aria-label="Open menu" />}
            >
              <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="sr-only">GS Aircon Navigation</SheetTitle>
                <div className="py-2">
                  <Image
                    src="/gs-aircon-logo.png"
                    alt="GS Aircon Private Limited"
                    width={140}
                    height={40}
                    className="h-9 w-auto object-contain"
                  />
                </div>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {navLinks.map((link) => (
                  <SheetClose
                    key={link.href}
                    nativeButton={false}
                    render={
                      <Link
                        href={link.href}
                        className="rounded-md px-2 py-2.5 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-primary"
                      />
                    }
                  >
                    {link.label}
                  </SheetClose>
                ))}
                <SheetClose
                  nativeButton={false}
                  render={<Link href="/#contact" />}
                  className="mt-3 inline-flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80"
                >
                  Request a Quote
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </div>
  )
}
