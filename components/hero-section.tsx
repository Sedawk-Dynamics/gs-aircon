"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, FileText, PhoneCall } from "lucide-react"
import { Button } from "@/components/ui/button"
import { company, brandsSupported } from "@/lib/company-data"

const heroDocuments = [
  { label: "FAWAZ", href: "/documents/fawaz.pdf" },
  { label: "My Carrier Awards", href: "/documents/my-carrier-awards.pdf" },
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100svh-5.3125rem)] lg:min-h-[calc(100dvh-5.3125rem)] items-center overflow-hidden bg-navy text-navy-foreground"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero-chiller-plant.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-linear-to-r from-navy via-navy/95 to-navy/70" />
      </div>

      <p className="absolute right-4 top-6 hidden text-right text-[0.65rem] uppercase tracking-[0.16em] text-navy-foreground/50 sm:right-6 lg:right-8 lg:block">
        {company.regionsLine}
      </p>

      <div className="relative mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex max-w-3xl flex-col gap-5 sm:gap-6"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.16em] text-primary">{company.tagline}</span>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
            Keeping critical cooling systems running —{" "}
            <span className="font-normal text-primary">every brand, every time.</span>
          </h1>

          <p className="max-w-2xl text-pretty text-sm leading-relaxed text-navy-foreground/75 sm:text-base lg:text-lg">
            {company.intro}
          </p>

          <div className="flex flex-wrap gap-2.5 pt-2">
            {brandsSupported.slice(0, 7).map((brand) => (
              <span
                key={brand}
                className="rounded-xs border border-navy-foreground/25 px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] text-navy-foreground/85"
              >
                {brand}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-3">
            <Button
              render={<Link href="/#services" />}
              nativeButton={false}
              size="lg"
              className="h-11 rounded-md px-5 text-sm sm:text-base"
            >
              Explore Spare Parts &amp; Services
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/#contact" />}
              nativeButton={false}
              variant="outline"
              size="lg"
              className="h-11 rounded-md border-navy-foreground/25 bg-transparent px-5 text-sm text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground sm:text-base"
            >
              <PhoneCall data-icon="inline-start" />
              Talk to an Engineer
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-2">
            {heroDocuments.map((doc) => (
              <a
                key={doc.href}
                href={doc.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-navy-foreground/80 underline-offset-4 transition-colors hover:text-primary hover:underline"
              >
                <FileText data-icon="inline-start" />
                {doc.label}
              </a>
            ))}
          </div>
        </motion.div>
      </div>

    </section>
  )
}
