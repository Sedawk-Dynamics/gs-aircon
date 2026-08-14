"use client"

import { motion } from "framer-motion"
import { Boxes, Wrench, Layers, Globe2, MapPinned, TrendingDown } from "lucide-react"

const strengths = [
  {
    icon: Boxes,
    title: "Spare Parts Supply",
    description: "Genuine and high-grade compatible parts — compressors, motors, sensors, control boards, and valves.",
  },
  {
    icon: Wrench,
    title: "After-Market Services",
    description: "Preventive maintenance, major overhauls, and breakdown troubleshooting delivered by trained technicians.",
  },
  {
    icon: Layers,
    title: "Multi-Brand Support",
    description: "Carrier, Trane, YORK, Daikin, McQuay, Climaveneta, SKM, and PETRA — one partner across every platform.",
  },
  {
    icon: Globe2,
    title: "International Exposure",
    description: "OEM pedigree combined with cross-border consulting experience across three continents.",
  },
  {
    icon: MapPinned,
    title: "Wide Geographic Footprint",
    description: "Active operational hubs in Muscat, Sri Lanka, and across India for fast local response.",
  },
  {
    icon: TrendingDown,
    title: "Cost & Uptime Optimization",
    description: "Preventing unplanned downtime and lowering overall life-cycle maintenance costs.",
  },
]

export function StrengthsSection() {
  return (
    <section id="about" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Why Plant Engineers Choose Us
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Engineering Reliability, Built Into Every Engagement
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Six operating strengths that keep critical chiller systems running — from genuine spares to rapid,
            cross-border field response.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-md bg-navy text-navy-foreground transition-colors group-hover:bg-primary">
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
