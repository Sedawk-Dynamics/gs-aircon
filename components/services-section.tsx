"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { services } from "@/lib/services-data"

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Our Service Categories
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Full-Cycle Chiller Spares &amp; Field Support
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Every category is backed by a technical checklist and equipment platform list — view the full
            specification before you request a quote.
          </p>
        </motion.div>

        <div id="spare-parts" className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="h-full border-border ring-0 transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy text-navy-foreground">
                      <service.icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="font-heading text-lg font-semibold text-navy">
                      {service.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="pt-2 text-sm leading-relaxed">{service.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    View Full Service Specs
                    <ArrowRight className="size-4" aria-hidden="true" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
