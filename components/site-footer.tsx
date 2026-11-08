import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Globe } from "lucide-react"
import { services } from "@/lib/services-data"
import { company } from "@/lib/company-data"

const socialIcons: Record<string, React.ReactNode> = {
  Instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" />
    </>
  ),
  X: <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.5 22H2.3l8.2-9.4L.8 2h6.5l5.8 7.1L18.9 2ZM17.8 20h1.7L6.4 3.9H4.6L17.8 20Z" />,
  Facebook: <path d="M14 22v-9h3l.5-4H14V7c0-1.2.3-2 2-2h2V1.4C17.7 1.3 16.5 1 15 1c-3 0-5 1.8-5 5v3H7v4h3v9h4Z" />,
  LinkedIn: <path d="M5.4 7.8H1.8V22h3.6V7.8ZM3.6 2a2.1 2.1 0 1 0 0 4.2 2.1 2.1 0 0 0 0-4.2ZM22 13.9c0-4.3-2.3-6.3-5.3-6.3-2.5 0-3.6 1.4-4.2 2.3V7.8H9V22h3.6v-7.9c0-2.1.4-4.1 3-4.1 2.5 0 2.5 2.4 2.5 4.2V22H22v-8.1Z" />,
}

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
            <nav aria-label="Social media" className="mt-2">
              <ul className="flex flex-wrap gap-2">
                {company.socialLinks.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${company.legalName} on ${social.name} (opens in a new tab)`}
                      title={social.name}
                      className="inline-flex size-11 items-center justify-center rounded-md border border-navy-foreground/20 text-navy-foreground/80 transition-colors hover:border-primary hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden="true">
                        {socialIcons[social.name]}
                      </svg>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
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
