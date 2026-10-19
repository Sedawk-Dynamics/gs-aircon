import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { company } from "@/lib/company-data"
import { getPartBySlug, spareParts } from "@/lib/parts-data"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return spareParts.map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const part = getPartBySlug((await params).slug)
  return { title: `${part?.title ?? "Part Not Found"} | GS Aircon`, description: part?.overview }
}

export default async function SparePartPage({ params }: Props) {
  const part = getPartBySlug((await params).slug)
  if (!part) notFound()
  const Icon = part.icon

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="flex flex-wrap gap-2 text-sm text-navy-foreground/70">
              <Link href="/" className="hover:text-primary">Home</Link><span>/</span>
              <Link href="/#spare-parts" className="hover:text-primary">Spare Parts</Link><span>/</span>
              <span aria-current="page">{part.title}</span>
            </nav>
            <Icon className="mt-8 size-10 text-primary" aria-hidden="true" />
            <h1 className="mt-4 font-heading text-3xl font-bold sm:text-5xl">{part.title}</h1>
            <p className="mt-4 text-lg text-navy-foreground/75">{part.detail}</p>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <div className="space-y-10">
            <figure className="overflow-hidden rounded-lg border border-border bg-white">
              <div className="relative aspect-video">
                <Image
                  src={`/images/spare-parts/${part.slug}.png`}
                  alt={`${part.title} equipment and components`}
                  fill
                  preload
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="object-contain"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-3 text-sm text-muted-foreground">
                {part.title} — illustrative equipment and components. Exact items depend on your equipment model.
              </figcaption>
            </figure>
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Overview</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{part.overview}</p>
            </section>
            {[{ title: "Parts & Support", items: part.components }, { title: "Details to Share for a Quote", items: part.selection }].map((section) => (
              <section key={section.title}>
                <h2 className="font-heading text-2xl font-semibold text-navy">{section.title}</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5 leading-relaxed text-muted-foreground">
                  {section.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </section>
            ))}
            <section>
              <h2 className="font-heading text-2xl font-semibold text-navy">Explore Other Spare Parts</h2>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {spareParts.filter((item) => item.slug !== part.slug).map((item) => (
                  <Link key={item.slug} href={`/spare-parts/${item.slug}`} className="rounded-md border border-border p-4 text-sm font-medium text-navy hover:border-primary hover:text-primary">{item.title} &rarr;</Link>
                ))}
              </div>
            </section>
          </div>
          <aside className="h-fit rounded-lg border border-border bg-secondary/40 p-6 lg:sticky lg:top-28">
            <h2 className="font-heading text-xl font-semibold text-navy">Enquire About {part.title}</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Send the equipment model, part number and photographs to help us review your requirement. Availability, compatibility and lead time are confirmed with your quotation.</p>
            <a href={`mailto:${company.emails[0]}?subject=${encodeURIComponent(`${part.title} enquiry`)}`} className="mt-6 flex justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">Email Your Requirement</a>
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="mt-4 block text-center text-sm font-medium text-navy">Call {company.phones[0]}</a>
            <Link href="/services/chiller-spare-parts" className="mt-6 block text-sm font-semibold text-primary">View Spare Parts Supply Service &rarr;</Link>
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
