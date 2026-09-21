import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { LeadershipSection } from "@/components/leadership-section"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { PartsSystemsSection } from "@/components/parts-systems-section"
import { BrandsSection } from "@/components/brands-section"
import { ServiceScopeSection } from "@/components/service-scope-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { GallerySection } from "@/components/gallery-section"
import { ReachSection } from "@/components/reach-section"
import { RfqForm } from "@/components/rfq-form"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Brochure p.1 */}
        <HeroSection />
        {/* Brochure p.2 */}
        <AboutSection />
        <LeadershipSection />
        {/* Brochure p.3 */}
        <MissionVisionSection />
        <PartsSystemsSection />
        {/* Brochure p.4 */}
        <BrandsSection />
        <ServiceScopeSection />
        <ServicesSection />
        {/* Brochure p.5-7 */}
        <ProjectsSection />
        <GallerySection />
        {/* Brochure p.8 */}
        <ReachSection />
        <RfqForm />
      </main>
      <SiteFooter />
    </>
  )
}
