"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Quote } from "lucide-react"

export function LeadershipSection() {
  return (
    <section className="bg-navy py-20 text-navy-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-lg"
          >
            <Image
              src="/images/leadership-ganesh.png"
              alt="Ganesh, Founder and Technical Director of GS Aircon"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Leadership &amp; Technical Pedigree
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Led by OEM-Trained Engineering Leadership
            </h2>
            <p className="text-pretty leading-relaxed text-navy-foreground/75">
              GS Aircon is led by <span className="font-semibold text-navy-foreground">Ganesh</span>, whose
              background spans OEM technical training and international consulting across chiller manufacturing
              and after-market service. That pedigree now drives cross-border operations spanning Muscat, Sri
              Lanka, and India — bringing factory-grade engineering discipline to every plant we service.
            </p>

            <div className="relative rounded-lg border border-navy-foreground/15 bg-navy-foreground/[0.06] p-6">
              <Quote className="size-6 text-primary" aria-hidden="true" />
              <p className="mt-3 text-pretty text-lg font-medium leading-relaxed text-navy-foreground">
                &quot;Reliability isn&apos;t a promise, it&apos;s a maintenance discipline. Our job is to make sure
                our clients&apos; chillers outlast their operating targets.&quot;
              </p>
              <p className="mt-3 text-sm font-semibold text-navy-foreground/70">
                Ganesh, Founder &amp; Technical Director
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
