import Image from "next/image"
import Link from "next/link"
import { equipment } from "@/lib/equipment-data"

export function EquipmentSection() {
  return (
    <section id="equipment" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">Cooling Equipment</span>
        <h2 className="mt-3 font-heading text-3xl font-bold text-navy sm:text-4xl">Precision Cooling &amp; Air-Cooled Chillers</h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">Explore equipment for server rooms, data centers, laboratories and chilled-water applications.</p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {equipment.map((item) => (
            <Link key={item.slug} href={`/equipment/${item.slug}`} className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-primary">
              <div className="relative aspect-4/3 bg-white">
                <Image src={`/images/equipment/${item.images[0]}`} alt={item.title} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-contain p-4" />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-navy group-hover:text-primary">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.summary}</p>
                <span className="mt-5 block text-sm font-semibold text-primary">View Equipment &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
