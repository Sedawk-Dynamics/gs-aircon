import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ProjectsSection } from "@/components/projects-section"

export const metadata: Metadata = {
  title: "Projects | GS Aircon",
  description: "Explore chiller overhaul and service projects across refinery, retail and healthcare facilities.",
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-navy py-14 text-navy-foreground sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Link href="/" className="text-sm text-navy-foreground/70 hover:text-primary">&larr; Back to Home</Link>
            <h1 className="mt-6 font-heading text-4xl font-bold sm:text-5xl">Our Projects</h1>
            <p className="mt-4 max-w-2xl leading-relaxed text-navy-foreground/75">Explore our field experience in large-capacity chiller overhauls, plant servicing and controls support.</p>
          </div>
        </section>
        <ProjectsSection />
      </main>
      <SiteFooter />
    </>
  )
}
