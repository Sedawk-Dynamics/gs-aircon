import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { services } from "@/lib/services-data"
import { company } from "@/lib/company-data"

export function SiteFooter() {
  return (
    <footer id="contact-details" className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link
              href="/#home"
              className="inline-block w-fit rounded-md bg-white p-2 transition-opacity hover:opacity-90"
            >
              <Image
                src="/gs-aircon-logo.png"
                alt={company.legalName}
                width={150}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-navy-foreground/60">
              Specialized chiller spare parts and after-market services for industrial and commercial HVAC systems,
              engineered for uptime.
            </p>
            <a
              href="https://www.gsaircon.com"
              className="flex w-fit items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-primary"
            >
              <Globe className="size-4 shrink-0" aria-hidden="true" />
              {company.website}
            </a>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-navy-foreground/60">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-navy-foreground/60 transition-colors hover:text-primary"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-navy-foreground/60">
              Contact
            </h3>
            {company.phones.map((phone) => (
              <a
                key={phone}
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-primary"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {phone}
              </a>
            ))}
            {company.emails.map((email) => (
              <a
                key={email}
                href={`mailto:${email}`}
                className="flex items-center gap-2 text-sm text-navy-foreground/70 transition-colors hover:text-primary"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {email}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-[0.12em] text-navy-foreground/60">
              Registered Office
            </h3>
            <p className="flex gap-2 text-sm leading-relaxed text-navy-foreground/70">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {company.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {company.legalName}. All rights reserved.
          </p>
          <p>
            {company.tagline} — {company.regionsLine}
          </p>
        </div>
      </div>
    </footer>
  )
}
