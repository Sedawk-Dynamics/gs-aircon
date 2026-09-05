"use client"

import { motion } from "framer-motion"
import { mission, vision, values } from "@/lib/company-data"

export function MissionVisionSection() {
  return (
    <section id="mission" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">What Drives Us</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Mission, Vision &amp; Values
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg bg-navy p-8 text-navy-foreground"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-navy-foreground/60">
              Our Mission
            </span>
            <p className="mt-4 text-pretty leading-relaxed text-navy-foreground/90">{mission}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg bg-primary p-8 text-primary-foreground"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/70">
              Our Vision
            </span>
            <p className="mt-4 text-pretty leading-relaxed text-primary-foreground/95">{vision}</p>
          </motion.div>
        </div>

        <div className="mt-16">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Our Values</span>
          <div className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <motion.div
                key={value.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.06 }}
                className="flex gap-4 border-b border-border pb-6"
              >
                <span className="font-heading text-xl font-bold text-primary">{value.number}</span>
                <div>
                  <h3 className="font-heading text-base font-semibold text-navy">{value.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
