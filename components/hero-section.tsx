"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, PhoneCall, Globe, Gauge, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"

const metrics = [
  {
    icon: Globe,
    label: "Pan-India & International Reach",
    detail: "Active hubs across India, Muscat, and Sri Lanka",
  },
  {
    icon: Gauge,
    label: "Multi-Brand Chiller Expertise",
    detail: "Carrier, Trane, YORK, Daikin, and more",
  },
  {
    icon: ShieldCheck,
    label: "Rapid Breakdown Support",
    detail: "24/7 diagnostic response for critical plants",
  },
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
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-navy/70" />
      </div>

      <div className="relative mx-auto grid w-full max-w-7xl gap-8 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12 lg:px-8 lg:py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-navy-foreground/20 bg-navy-foreground/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Specialized Chiller Spare Parts &amp; After-Market Services
          </span>

          <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl xl:text-6xl">
            Extending Operational Life &amp; Reliability for Industrial Chiller Systems
          </h1>

          <p className="max-w-xl text-pretty text-sm leading-relaxed text-navy-foreground/75 sm:text-base lg:text-lg">
            Deep technical expertise across major global brands (Carrier, Trane, YORK, Daikin). OEM-standard
            maintenance, genuine spares, and rapid troubleshooting across India, Middle East, and South Asia.
          </p>

          <div className="flex flex-wrap gap-3 pt-1 sm:pt-2">
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="flex flex-col gap-3.5 sm:gap-4"
        >
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="flex items-start gap-4 rounded-lg border border-navy-foreground/15 bg-navy-foreground/[0.06] p-3.5 sm:p-4 backdrop-blur-sm"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary sm:size-11">
                <metric.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold text-navy-foreground">{metric.label}</p>
                <p className="mt-0.5 text-xs text-navy-foreground/65 sm:text-sm">{metric.detail}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
