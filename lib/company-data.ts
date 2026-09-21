import type { LucideIcon } from "lucide-react"
import {
  Boxes,
  Wrench,
  Layers,
  Timer,
  Gauge,
  CircuitBoard,
  Thermometer,
  Droplets,
  Fan,
  MonitorCog,
  Zap,
} from "lucide-react"

/**
 * Content mirrored from the GS Aircon company brochure (2026 edition).
 * Single source of truth so the brochure and the site never drift apart.
 */

export const company = {
  legalName: "GS Aircon Private Limited",
  tagline: "Chiller Spare Parts & After-Market Services",
  headline: "Keeping critical cooling systems running — every brand, every time.",
  intro:
    "Genuine & compatible spare parts, preventive maintenance, breakdown repair and large-capacity overhauls for commercial and industrial chiller systems — delivered with OEM-trained technical expertise across the Middle East and Pan-India.",
  website: "www.gsaircon.com",
  regionsLine: "Hyderabad · Muscat · Sri Lanka · Pan-India · Middle East",
  phones: ["+91 98855 66835", "+91 98494 11646"],
  emails: ["info@gsaircon.com", "support@gsaircon.com"],
  addressLines: [
    "Ground Floor, Plot No. 16-2-100/367, Road No. 9A",
    "Gopalanagar Housing Society, Hyderanagar",
    "Kukatpally, Medchal–Malkajgiri District",
    "Telangana – 500085",
  ],
}

/** Pages 1 and 4 — every brand the brochure lists. */
export const brandsSupported = ["Carrier", "Trane", "YORK", "Daikin", "McQuay", "SKM", "PETRA", "Century"]

/** Page 2 — the four capability cards under "About GS Aircon". */
export const capabilities: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: Boxes,
    title: "Spare Parts Supply",
    description:
      "Genuine and high-quality compatible parts for compressors, motors, sensors, control boards, valves and more.",
  },
  {
    icon: Wrench,
    title: "After-Market Services",
    description: "Preventive maintenance, breakdown repair, full overhauls and precision system troubleshooting.",
  },
  {
    icon: Layers,
    title: "Multi-Brand Expertise",
    description:
      "Trained technicians experienced across diverse chiller platforms, refrigerants and compressor types.",
  },
  {
    icon: Timer,
    title: "Fast Turnaround",
    description: "Responsive, priority support engineered to minimize equipment downtime for every client.",
  },
]

/** Page 2 — founder career timeline. */
export const careerTimeline = [
  {
    stage: "Early Career",
    title: "Carrier",
    detail: "Foundational OEM training on chiller systems and controls.",
  },
  {
    stage: "Next",
    title: "YORK — Johnson Controls India",
    detail: "Hands-on service and controls experience on YORK chiller platforms.",
  },
  {
    stage: "Kuwait",
    title: "FAWAZ Trading & Engineering Co.",
    detail:
      "Consultant — Oil & Gas sector; led 2500 TR overhauls at KIPIC/KNPC, The Avenues Mall, and Amiri Hospital.",
  },
  {
    stage: "Today",
    title: "Founder & Managing Director, GS Aircon",
    detail: "Leading operations across Muscat, Sri Lanka and Pan-India.",
  },
]

/** Page 2 — headline numbers. */
export const founderStats = [
  { value: "2500 TR", label: "Largest Single Overhaul" },
  { value: "40 Nos.", label: "Chillers — Avenues Mall" },
  { value: "100%", label: "Overhaul Success Rate" },
  { value: "7", label: "Major Brands Supported" },
]

/** Page 3 — mission and vision. */
export const mission =
  "To deliver reliable, high-quality chiller spare parts and after-market services that minimize downtime, extend equipment life, and maximize energy efficiency — backed by genuine OEM expertise and honest, transparent service across every brand we support."

export const vision =
  "To become the most trusted independent chiller service and spare parts partner across India, the Middle East and South Asia — recognized for technical excellence, multi-brand expertise, and long-term client relationships."

/** Page 3 — the six core values. */
export const values = [
  {
    number: "01",
    title: "Integrity",
    description:
      "Honest advice and transparent pricing — even recommending a simpler fix over a costlier replacement.",
  },
  {
    number: "02",
    title: "Technical Excellence",
    description: "Continuous investment in skills across all major chiller brands and technologies.",
  },
  {
    number: "03",
    title: "Customer-Centricity",
    description: "Every solution minimizes client downtime and operating cost — not just closing a sale.",
  },
  { number: "04", title: "Reliability", description: "Consistent, prompt response when clients need us most." },
  {
    number: "05",
    title: "Quality Assurance",
    description: "Only genuine or thoroughly vetted compatible parts, always.",
  },
  {
    number: "06",
    title: "Multi-Brand Commitment",
    description: "Equal expertise across every brand we service, with no OEM bias.",
  },
]

/** Page 3 — "Parts & Systems We Support". */
export const partsSystems: { icon: LucideIcon; title: string; detail: string }[] = [
  { icon: Gauge, title: "Compressors", detail: "Screw & Centrifugal" },
  { icon: Zap, title: "Motors & Drives", detail: "Incl. VFDs" },
  { icon: CircuitBoard, title: "Control Systems", detail: "Boards & Panels" },
  { icon: Thermometer, title: "Sensors", detail: "Temp & Pressure" },
  { icon: Wrench, title: "Valves", detail: "Expansion & Solenoid" },
  { icon: Droplets, title: "Oil & Filtration", detail: "Filters & Refrig. Oil" },
  { icon: Fan, title: "Heat Exchangers", detail: "Coils & Condensers" },
  { icon: MonitorCog, title: "BMS Integration", detail: "Monitoring & Controls" },
]

/** Page 4 — service scope table. */
export const serviceScope = [
  {
    service: "Spare Parts Supply",
    scope:
      "Compressors, motors, sensors, control boards, valves, oil filters, refrigeration oil and other genuine / OEM-equivalent chiller components.",
  },
  {
    service: "Preventive Maintenance",
    scope: "Scheduled AMC visits, inspection and servicing to reduce failure risk and sustain rated efficiency.",
  },
  {
    service: "Breakdown Repair",
    scope: "Rapid-response diagnostics and repair to restore chiller operation and minimize downtime.",
  },
  {
    service: "Major Overhauls",
    scope: "Full compressor and system overhauls up to 2500 TR capacity, covering screw and centrifugal platforms.",
  },
  {
    service: "Retrofit & Life Extension",
    scope:
      "Retrofit solutions for aging chillers across all brands — extending operational life beyond conventional limits.",
  },
  {
    service: "Commissioning & Warranty",
    scope: "System commissioning support with defined workmanship / compressor service warranty coverage.",
  },
]

export const compressorExpertise =
  "Proven, hands-on overhaul experience across screw and centrifugal compressors for Trane, YORK, Daikin, McQuay, Carrier and Century chiller platforms — including large-scale mall, hospital and refinery installations."

/** Pages 5-7 — project showcase. */
export type Project = {
  slug: string
  sector: string
  name: string
  location: string
  stats: { value: string; label: string }[]
  scope: string
  images: { src: string; caption: string }[]
}

export const projects: Project[] = [
  {
    slug: "kipic-knpc",
    sector: "Oil & Gas Sector",
    name: "KIPIC / KNPC",
    location: "Kuwait Oil & Gas Refinery Complex",
    stats: [
      { value: "2500 TR", label: "Chiller Capacity" },
      { value: "4 Nos.", label: "Units Overhauled" },
      { value: "Centrifugal", label: "Compressor Type" },
    ],
    scope:
      "Complete teardown, inspection, precision machining and reassembly of four 2500 TR centrifugal compressor chillers at a Kuwait Oil & Gas refinery complex — executed with a 100% success rate under strict refinery HSE and shutdown-window constraints.",
    images: [
      { src: "/images/projects/kipic-centrifugal-chiller.jpg", caption: "Assembled 2500 TR centrifugal chiller" },
      { src: "/images/projects/kipic-compressor-rigging.jpg", caption: "Compressor body — rigging & lift" },
      { src: "/images/projects/kipic-impeller-housing.jpg", caption: "Impeller housing — overhaul inspection" },
      { src: "/images/projects/kipic-machined-impellers.jpg", caption: "Precision-machined impellers" },
      { src: "/images/projects/kipic-motor-rotor.jpg", caption: "Motor rotor — rigging" },
    ],
  },
  {
    slug: "avenues-mall",
    sector: "Commercial / Retail Sector",
    name: "The Avenues Mall",
    location: "Kuwait, One of the Region's Largest Malls",
    stats: [
      { value: "1000 TR", label: "Per-Unit Capacity" },
      { value: "40 Nos.", label: "Chillers Serviced" },
      { value: "Carrier", label: "AquaEdge Platform" },
    ],
    scope:
      "Service and technical support across a 40-unit Carrier AquaEdge chiller plant — roughly 40,000 TR of combined installed cooling capacity — serving one of the Middle East's largest retail and entertainment destinations, with zero disruption to mall operations.",
    images: [
      { src: "/images/projects/avenues-chiller-bank.jpg", caption: "Carrier AquaEdge chiller bank — central plant" },
      { src: "/images/projects/avenues-valve-header.jpg", caption: "Chilled water isolation valve header" },
      { src: "/images/projects/avenues-plant-corridor.jpg", caption: "Central plant room — distribution corridor" },
    ],
  },
  {
    slug: "amiri-hospital",
    sector: "Healthcare Sector",
    name: "Amiri Hospital",
    location: "Kuwait, Critical-Care Cooling Infrastructure",
    stats: [
      { value: "Trane", label: "Chiller Platform" },
      { value: "24/7", label: "Critical Uptime Requirement" },
      { value: "Screw", label: "Compressor Type" },
    ],
    scope:
      "Inspection, controls diagnostics and technical support on Trane screw-compressor chillers serving a critical-care hospital facility — where uninterrupted cooling directly supports patient safety and life-critical equipment.",
    images: [
      { src: "/images/projects/amiri-trane-chiller-bank.jpg", caption: "On-site inspection — Trane chiller bank" },
      { src: "/images/projects/amiri-central-plant.jpg", caption: "Amiri Hospital central plant room" },
      { src: "/images/projects/amiri-screw-compressor.jpg", caption: "Screw compressor & control head detail" },
      { src: "/images/projects/amiri-control-monitoring.jpg", caption: "Live chiller control & evaporator monitoring" },
    ],
  },
]

/** Page 8 — global footprint. */
export const regions = [
  { name: "India", detail: "Pan-India Clients" },
  { name: "Muscat", detail: "Sultanate of Oman" },
  { name: "Sri Lanka", detail: "Regional Service" },
  { name: "Kuwait & Middle East", detail: "Oil & Gas Sector Experience" },
]

/** Page 8 — notable engagements. */
export const notableEngagements = [
  { name: "The Avenues Mall", detail: "Kuwait — 40 Nos. Carrier AquaEdge, 1000 TR each." },
  { name: "Amiri Hospital", detail: "Kuwait — critical-care Trane chiller infrastructure." },
  { name: "KIPIC / KNPC Refinery", detail: "Kuwait — 4 × 2500 TR centrifugal overhauls." },
  { name: "Royal Court Affairs (RCA)", detail: "Sultanate of Oman — institutional chiller service." },
  { name: "InterCity Hotel", detail: "Muscat, Oman — hospitality-sector chiller maintenance." },
  {
    name: "Industrial & Food Processing Plants",
    detail: "Pan-India clients including large-scale food & process facilities.",
  },
]

/** Page 8 — founder's closing statement. */
export const founderQuote =
  "GS Aircon was built on a simple belief: clients deserve honest, expert chiller support regardless of which brand they run. From routine service visits to complex, large-capacity overhauls at malls, hospitals and refineries, our team carries technical integrity into every job. Thank you for trusting GS Aircon with your chiller systems."

/** Site gallery — team & plant-room photography. */
export const gallery: { src: string; caption: string; alt: string }[] = [
  {
    src: "/images/gallery/york-centrifugal-chiller.jpeg",
    caption: "YORK YK centrifugal chiller — plant room",
    alt: "GS Aircon engineer beside a YORK YK centrifugal chiller with insulated chilled-water headers overhead",
  },
  {
    src: "/images/gallery/chiller-plant-inspection.jpeg",
    caption: "Chiller plant inspection round",
    alt: "GS Aircon engineer recording readings during an inspection round in a water-cooled chiller plant room",
  },
  {
    src: "/images/gallery/screw-chiller-service-log.jpeg",
    caption: "Screw chiller service log reading",
    alt: "Engineer logging operating parameters at a water-cooled screw chiller control panel",
  },
  {
    src: "/images/gallery/gs-aircon-team.jpeg",
    caption: "The GS Aircon service team",
    alt: "The GS Aircon service team outside the company office beneath the GS Aircon signboard",
  },
]
