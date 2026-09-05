"use client"

import { motion } from "framer-motion"
import { serviceScope, compressorExpertise } from "@/lib/company-data"

export function ServiceScopeSection() {
  return (
    <section id="service-scope" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Service Scope</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            What We Deliver, End to End
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 overflow-x-auto rounded-lg border border-border"
        >
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="bg-navy text-navy-foreground">
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em]">Service</th>
                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-[0.1em]">Scope of Work</th>
              </tr>
            </thead>
            <tbody>
              {serviceScope.map((row, index) => (
                <tr
                  key={row.service}
                  className={index % 2 === 1 ? "bg-secondary/40" : "bg-card"}
                >
                  <th
                    scope="row"
                    className="w-1/4 border-t border-border px-6 py-5 align-top font-heading text-sm font-semibold text-navy"
                  >
                    {row.service}
                  </th>
                  <td className="border-t border-border px-6 py-5 align-top text-sm leading-relaxed text-muted-foreground">
                    {row.scope}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 border-l-4 border-primary bg-secondary/50 p-6"
        >
          <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-navy">Compressor Expertise:</span> {compressorExpertise}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
