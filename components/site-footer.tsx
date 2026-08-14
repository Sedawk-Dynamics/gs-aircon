import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { services } from "@/lib/services-data"

const locations = [
  { country: "India", detail: "Pan-India field engineering network" },
  { country: "Muscat, Oman", detail: "Middle East operations hub" },
  { country: "Sri Lanka", detail: "South Asia service coverage" },
]

export function SiteFooter() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/#home" className="inline-block w-fit rounded-md bg-white p-2 transition-opacity hover:opacity-90">
              <Image
                src="/gs-aircon-logo.png"
                alt="GS Aircon Private Limited"
                width={150}
                height={42}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="text-sm leading-relaxed text-navy-foreground/65">
              Specialized chiller spare parts and after-market services for industrial and commercial HVAC
              systems, engineered for uptime.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-navy-foreground/80">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-navy-foreground/65 transition-colors hover:text-primary"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-navy-foreground/80">
              Operational Locations
            </h3>
            <ul className="flex flex-col gap-3">
              {locations.map((location) => (
                <li key={location.country} className="flex items-start gap-2 text-sm text-navy-foreground/65">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="font-medium text-navy-foreground">{location.country}</span>
                    <br />
                    {location.detail}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-navy-foreground/80">
              Contact
            </h3>
            <a
              href="tel:+919999999999"
              className="flex items-center gap-2 text-sm text-navy-foreground/65 transition-colors hover:text-primary"
            >
              <Phone className="size-4 shrink-0" aria-hidden="true" />
              +91 99999 99999
            </a>
            <a
              href="mailto:support@gsaircon.com"
              className="flex items-center gap-2 text-sm text-navy-foreground/65 transition-colors hover:text-primary"
            >
              <Mail className="size-4 shrink-0" aria-hidden="true" />
              support@gsaircon.com
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} GS Aircon. All rights reserved.</p>
          <p>Chiller Spare Parts &amp; After-Market Services — India · Muscat · Sri Lanka</p>
        </div>
      </div>
    </footer>
  )
}
