"use client"

import { motion } from "framer-motion"
import { brands } from "@/lib/services-data"

export function BrandsSection() {
  return (
    <section id="brands" className="border-y border-border bg-secondary/50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Multi-Brand Compatibility
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Trusted Across Every Major Chiller Platform
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our spares and field engineers are cross-trained on the platforms that run the world&apos;s critical
            cooling infrastructure.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.04 }}
              className="flex h-20 items-center justify-center rounded-md border border-border bg-card px-3 text-center transition-colors hover:border-primary/50"
            >
              <span className="font-heading text-sm font-bold tracking-tight text-navy sm:text-base">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
