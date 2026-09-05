"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { projects } from "@/lib/company-data"

export function ProjectsSection() {
  return (
    <section id="projects" className="border-y border-border bg-secondary/40 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Field Execution</span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
            Project Showcase
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Large-capacity overhauls and critical-plant service delivered across the oil &amp; gas, retail and
            healthcare sectors.
          </p>
        </motion.div>

        <div className="mt-14 flex flex-col gap-16">
          {projects.map((project) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col gap-4 rounded-t-lg bg-navy px-6 py-5 text-navy-foreground lg:flex-row lg:items-center lg:justify-between lg:gap-8">
                <div>
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-primary">
                    {project.sector}
                  </p>
                  <h3 className="mt-1.5 font-heading text-xl font-bold tracking-tight sm:text-2xl">
                    {project.name} <span className="font-normal text-navy-foreground/70">— {project.location}</span>
                  </h3>
                </div>
                <dl className="flex shrink-0 flex-wrap gap-x-8 gap-y-3">
                  {project.stats.map((stat) => (
                    <div key={stat.label}>
                      <dd className="font-heading text-lg font-bold text-primary sm:text-xl">{stat.value}</dd>
                      <dt className="mt-0.5 text-[0.65rem] uppercase tracking-[0.1em] text-navy-foreground/60">
                        {stat.label}
                      </dt>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="grid grid-cols-1 gap-3 bg-card p-3 sm:grid-cols-2 lg:grid-cols-3">
                {project.images.map((image, index) => (
                  <figure
                    key={image.src}
                    className={`relative aspect-4/3 overflow-hidden rounded-md bg-navy ${
                      index === 0 ? "sm:col-span-2 sm:aspect-16/9" : ""
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={`${project.name} — ${image.caption}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/90 to-transparent px-3 pb-2.5 pt-8 text-[0.65rem] font-medium uppercase tracking-[0.08em] text-navy-foreground">
                      {image.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="rounded-b-lg border-l-4 border-primary bg-secondary/70 p-6">
                <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-navy">Scope delivered:</span> {project.scope}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
