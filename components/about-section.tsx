"use client"

import { motion } from "framer-motion"
import { capabilities } from "@/lib/company-data"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Company Profile</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            About GS Aircon
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            <span className="font-semibold text-navy">GS Aircon Private Limited</span> is a specialized provider of
            chiller spare parts and after-market services for commercial and industrial clients across the HVAC
            sector. We focus exclusively on chiller systems — giving us deep, brand-agnostic technical expertise
            across every major global platform:{" "}
            <span className="font-semibold text-navy">Carrier, Trane, YORK, Daikin, McQuay, SKM, and PETRA.</span>
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {capabilities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex gap-4 border-t-2 border-primary bg-secondary/50 p-6 transition-colors hover:bg-secondary"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-navy text-navy-foreground transition-colors group-hover:bg-primary">
                <item.icon className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-heading text-lg font-semibold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
