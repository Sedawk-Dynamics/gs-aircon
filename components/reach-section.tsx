"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { regions, notableEngagements, founderQuote } from "@/lib/company-data"

export function ReachSection() {
  return (
    <section id="reach" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Global Footprint &amp; Contact
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Our Reach
          </h2>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {regions.map((region, index) => (
            <motion.div
              key={region.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
              className="rounded-md bg-navy px-6 py-8 text-center text-navy-foreground"
            >
              <h3 className="font-heading text-lg font-bold">{region.name}</h3>
              <p className="mt-1.5 text-[0.7rem] uppercase tracking-[0.1em] text-navy-foreground/60">
                {region.detail}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t-2 border-primary bg-secondary/50 p-8"
          >
            <Quote className="size-6 text-primary" aria-hidden="true" />
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">{founderQuote}</p>
            <footer className="mt-6">
              <p className="font-heading text-base font-bold text-navy">Ganesh Appikonda</p>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                Founder &amp; Managing Director, GS Aircon Private Limited
              </p>
            </footer>
          </motion.blockquote>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Notable Engagements
            </span>
            <ul className="mt-5 flex flex-col gap-4">
              {notableEngagements.map((item) => (
                <li key={item.name} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                  <div>
                    <p className="font-heading text-sm font-semibold text-navy">{item.name}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
