import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GallerySection } from "@/components/gallery-section"

export const metadata: Metadata = {
  title: "Gallery | GS Aircon",
  description: "Explore photographs of the GS Aircon team, chiller servicing and plant-room inspections.",
}

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm text-navy-foreground/70 hover:text-primary">&larr; Back to Home</Link>
            <h1 className="mt-6 font-heading text-4xl font-bold sm:text-5xl">Our Gallery</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-navy-foreground/75">A closer look at our engineers, chiller plants and service work on site.</p>
          </div>
        </section>
        <GallerySection />
      </main>
      <SiteFooter />
    </>
  )
}
