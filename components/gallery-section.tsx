"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { gallery } from "@/lib/company-data"

export function GallerySection() {
  return (
    <section id="gallery" className="border-y border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">On Site</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Our engineers in the plant rooms they keep running — inspection rounds, chiller servicing and the team
            behind every call-out.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo, index) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`group relative aspect-4/3 overflow-hidden rounded-md bg-navy ${
                index === 0 ? "sm:col-span-2 sm:aspect-16/9" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/90 to-transparent px-3 pb-2.5 pt-8 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-navy-foreground">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
