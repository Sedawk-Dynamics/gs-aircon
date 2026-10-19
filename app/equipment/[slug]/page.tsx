import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { equipment } from "@/lib/equipment-data"
import { company } from "@/lib/company-data"

type Props = { params: Promise<{ slug: string }> }
export function generateStaticParams() {
  return equipment.map(({ slug }) => ({ slug }))
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const item = equipment.find((item) => item.slug === slug)
  return { title: `${item?.title ?? "Equipment Not Found"} | GS Aircon`, description: item?.summary }
}

export default async function EquipmentPage({ params }: Props) {
  const { slug } = await params
  const item = equipment.find((item) => item.slug === slug)
  if (!item) notFound()
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/#services" className="text-sm text-navy-foreground/70 hover:text-primary">&larr; All Service Categories</Link>
            <h1 className="mt-6 max-w-4xl font-heading text-3xl font-bold sm:text-5xl">{item.title}</h1>
            <p className="mt-4 max-w-2xl text-navy-foreground/75">{item.summary}</p>
          </div>
        </section>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <div>
            <div className="grid gap-5 sm:grid-cols-2">
              {item.images.map((photo, index) => (
                <div key={photo} className={`relative aspect-4/3 overflow-hidden rounded-lg border border-border bg-white ${index === 0 ? "sm:col-span-2" : ""}`}>
                  <Image src={`/images/equipment/${photo}`} alt={`${item.title} — equipment view ${index + 1}`} fill preload={index === 0} sizes={index === 0 ? "(min-width: 1024px) 60vw, 100vw" : "(min-width: 640px) 30vw, 100vw"} className="object-contain p-5" />
                </div>
              ))}
            </div>
            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Equipment Overview</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{item.description}</p>
            <h2 className="mt-10 font-heading text-2xl font-semibold text-navy">Planning Your Requirement</h2>
            <ul className="mt-4 list-disc space-y-3 pl-5 text-muted-foreground">{item.requirements.map((requirement) => <li key={requirement}>{requirement}</li>)}</ul>
          </div>
          <aside className="h-fit rounded-lg border border-border bg-secondary/40 p-6 lg:sticky lg:top-28">
            <h2 className="font-heading text-xl font-semibold text-navy">Discuss Your Cooling Requirement</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Send your project details for an equipment enquiry. Model specifications, capacity, configuration and availability will be confirmed in the proposal.</p>
            <a href={`mailto:${company.emails[0]}?subject=${encodeURIComponent(`${item.title} enquiry`)}`} className="mt-6 flex justify-center rounded-md bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground">Email Your Requirement</a>
            <a href={`tel:${company.phones[0].replace(/\s/g, "")}`} className="mt-4 block text-center text-sm font-medium text-navy">Call {company.phones[0]}</a>
            <h3 className="mt-8 font-semibold text-navy">Other Equipment</h3>
            {equipment.filter((other) => other.slug !== item.slug).map((other) => <Link key={other.slug} href={`/equipment/${other.slug}`} className="mt-4 block text-sm text-primary">{other.title} &rarr;</Link>)}
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
