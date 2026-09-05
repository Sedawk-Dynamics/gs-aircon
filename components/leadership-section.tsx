"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { careerTimeline, founderStats } from "@/lib/company-data"

export function LeadershipSection() {
  return (
    <section id="leadership" className="bg-navy py-20 text-navy-foreground sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-lg">
              <Image
                src="/images/leadership-ganesh.jpg"
                alt="Ganesh Appikonda, Founder and Managing Director of GS Aircon"
                fill
                sizes="(min-width: 1024px) 384px, 100vw"
                className="object-cover object-top"
              />
              <p className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/95 to-transparent px-4 pb-3 pt-10 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-foreground">
                Founder &amp; Managing Director
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
              {founderStats.map((stat) => (
                <div key={stat.label}>
                  <dd className="font-heading text-2xl font-bold text-primary">{stat.value}</dd>
                  <dt className="mt-1 text-[0.65rem] uppercase tracking-[0.1em] text-navy-foreground/60">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
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
            <div>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Ganesh Appikonda
              </h2>
              <p className="mt-2 text-sm font-semibold uppercase tracking-[0.12em] text-primary">
                Founder &amp; Managing Director
              </p>
            </div>

            <p className="text-pretty leading-relaxed text-navy-foreground/75">
              A chiller industry professional with a career built across leading OEMs and demanding international
              projects — Carrier, then YORK (Johnson Controls India), then Kuwait as a consultant with FAWAZ Trading
              &amp; Engineering Co.
            </p>
            <p className="text-pretty leading-relaxed text-navy-foreground/75">
              There, he led major overhauls up to{" "}
              <span className="font-semibold text-navy-foreground">2500 TR capacity</span> at a{" "}
              <span className="font-semibold text-navy-foreground">100% success rate</span> across Trane, YORK,
              Daikin, McQuay, Carrier and Century brands — including The Avenues Mall and Amiri Hospital in Kuwait,
              and the KIPIC/KNPC refinery complex.
            </p>

            <div className="mt-4">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                Career Experience
              </span>
              <ol className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4">
                {careerTimeline.map((entry, index) => (
                  <li key={entry.title} className="relative">
                    <div className="flex items-center gap-3">
                      <span className="size-3 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      <span
                        className={`h-px flex-1 bg-navy-foreground/20 ${
                          index === careerTimeline.length - 1 ? "xl:hidden" : ""
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                    <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-navy-foreground/50">
                      {entry.stage}
                    </p>
                    <p className="mt-1.5 font-heading text-sm font-bold text-navy-foreground">{entry.title}</p>
                    <p className="mt-1.5 text-sm leading-relaxed text-navy-foreground/65">{entry.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
