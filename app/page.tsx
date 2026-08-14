import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { StrengthsSection } from "@/components/strengths-section"
import { BrandsSection } from "@/components/brands-section"
import { ServicesSection } from "@/components/services-section"
import { LeadershipSection } from "@/components/leadership-section"
import { RfqForm } from "@/components/rfq-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <StrengthsSection />
        <BrandsSection />
        <ServicesSection />
        <LeadershipSection />
        <RfqForm />
      </main>
      <SiteFooter />
    </>
  )
}
