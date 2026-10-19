"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { partsSystems } from "@/lib/company-data"

export function PartsSystemsSection() {
  return (
    <section id="spare-parts" className="border-y border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            Parts &amp; Systems We Support
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Every Component That Keeps a Chiller Running
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {partsSystems.map((part, index) => (
            <motion.div
              key={part.title}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="h-full"
            >
              <Link href={`/spare-parts/${part.slug}`} className="group flex h-full flex-col items-center gap-2.5 overflow-hidden rounded-md border border-border bg-card pb-5 text-center transition-colors hover:border-primary/50 focus-visible:outline-2 focus-visible:outline-primary">
              <div className="relative mb-2 aspect-video w-full bg-white">
                <Image
                  src={`/images/spare-parts/${part.slug}.png`}
                  alt={`${part.title} equipment and components`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
                  className="object-contain"
                />
              </div>
              <span className="flex size-10 items-center justify-center rounded-md bg-secondary text-navy transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <part.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-sm font-semibold text-navy sm:text-base">{part.title}</h3>
              <p className="text-xs text-muted-foreground">{part.detail}</p>
              <span className="mt-auto pt-2 text-xs font-semibold text-primary">View Details &rarr;</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
