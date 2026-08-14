import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CheckCircle2, ClipboardCheck, Layers } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ServiceInquirySidebar } from "@/components/service-inquiry-sidebar"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { getServiceBySlug, services } from "@/lib/services-data"

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return { title: "Service Not Found | GS Aircon" }
  }

  return {
    title: `${service.title} | GS Aircon`,
    description: service.summary,
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <>
      <SiteHeader />
      <main>
        <section className="border-b border-border bg-navy text-navy-foreground">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
            <Breadcrumb>
              <BreadcrumbList className="text-navy-foreground/60">
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link href="/#home" />}>Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink render={<Link href="/#services" />}>Services</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-navy-foreground">{service.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mt-6 flex items-center gap-4">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-md bg-navy-foreground/10 text-primary">
                <Icon className="size-7" aria-hidden="true" />
              </span>
              <div>
                <h1 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                  {service.title}
                </h1>
                <p className="mt-2 max-w-2xl text-pretty leading-relaxed text-navy-foreground/70">
                  {service.heroDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
              <div className="flex flex-col gap-12">
                <div>
                  <div className="flex items-center gap-2.5">
                    <ClipboardCheck className="size-5 text-primary" aria-hidden="true" />
                    <h2 className="font-heading text-xl font-semibold text-navy">Scope of Work</h2>
                  </div>
                  <ul className="mt-5 flex flex-col gap-3">
                    {service.scopeOfWork.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2.5">
                    <ClipboardCheck className="size-5 text-primary" aria-hidden="true" />
                    <h2 className="font-heading text-xl font-semibold text-navy">Technical Checklist</h2>
                  </div>
                  <ul className="mt-5 flex flex-col gap-3">
                    {service.technicalChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-foreground/85">
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center gap-2.5">
                    <Layers className="size-5 text-primary" aria-hidden="true" />
                    <h2 className="font-heading text-xl font-semibold text-navy">Supported Equipment Platforms</h2>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {service.supportedPlatforms.map((platform) => (
                      <Badge key={platform} variant="secondary" className="rounded-md px-3 py-1 text-sm">
                        {platform}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-border bg-secondary/50 p-6">
                  <h3 className="font-heading text-base font-semibold text-navy">Other Service Categories</h3>
                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {services
                      .filter((s) => s.slug !== service.slug)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="flex items-center gap-2.5 rounded-md border border-border bg-card px-3.5 py-3 text-sm font-medium text-foreground/85 transition-colors hover:border-primary/50 hover:text-primary"
                        >
                          <s.icon className="size-4 shrink-0 text-primary" aria-hidden="true" />
                          {s.shortTitle}
                        </Link>
                      ))}
                  </div>
                </div>
              </div>

              <div>
                <ServiceInquirySidebar serviceTitle={service.title} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
