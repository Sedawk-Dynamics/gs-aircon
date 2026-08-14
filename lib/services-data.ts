import type { LucideIcon } from "lucide-react"
import { Wrench, ShieldCheck, Cpu, Zap } from "lucide-react"

export type Service = {
  slug: string
  title: string
  shortTitle: string
  icon: LucideIcon
  summary: string
  heroDescription: string
  scopeOfWork: string[]
  technicalChecklist: string[]
  supportedPlatforms: string[]
}

export const services: Service[] = [
  {
    slug: "chiller-spare-parts",
    title: "Chiller Spare Parts",
    shortTitle: "Spare Parts",
    icon: Wrench,
    summary:
      "Compressors, control boards, sensors, expansion valves, and condenser fan motors sourced to OEM tolerance.",
    heroDescription:
      "A full-spectrum spare parts program covering critical and consumable chiller components. Every part is cross-checked against OEM specification sheets before dispatch, backed by our engineering desk for fitment queries across legacy and current-generation systems.",
    scopeOfWork: [
      "Compressor assemblies — screw, scroll, and centrifugal types",
      "Electronic control boards, HMI panels, and sensor modules",
      "Thermal expansion valves and electronic expansion valve kits",
      "Condenser and evaporator fan motors with matched blades",
      "Refrigerant-side gaskets, seals, and gasket kits",
      "Oil filters, driers, and refrigerant charge components",
    ],
    technicalChecklist: [
      "Fitment verification against original equipment drawings",
      "Pressure and continuity testing prior to dispatch",
      "Batch traceability with material test certificates on request",
      "Packaging rated for cross-border freight (Muscat / Sri Lanka lanes)",
    ],
    supportedPlatforms: ["Carrier", "Trane", "YORK", "Daikin", "McQuay", "Climaveneta", "SKM", "PETRA"],
  },
  {
    slug: "preventive-maintenance-amc",
    title: "Preventive Maintenance & AMC",
    shortTitle: "Preventive Maintenance",
    icon: ShieldCheck,
    summary: "Scheduled health audits, oil and refrigerant analysis, and calibration to protect uptime.",
    heroDescription:
      "Structured annual maintenance contracts built around measured plant data rather than fixed intervals alone. Our engineers combine scheduled inspection with lab-grade oil and refrigerant diagnostics to catch degradation before it becomes downtime.",
    scopeOfWork: [
      "Quarterly or bi-annual chiller health audits with logged readings",
      "Refrigerant charge verification and leak-rate tracking",
      "Compressor oil sampling and lab analysis for wear metals",
      "Sensor and control loop calibration against setpoints",
      "Condenser and evaporator tube-side fouling assessment",
      "Detailed AMC service reports with life-cycle recommendations",
    ],
    technicalChecklist: [
      "Vibration and thermal signature baseline recording",
      "Safety and cut-out control verification",
      "Electrical connection torque and insulation resistance checks",
      "Digital service log handover to plant maintenance teams",
    ],
    supportedPlatforms: ["Carrier", "Trane", "YORK", "Daikin", "McQuay", "Climaveneta", "SKM", "PETRA"],
  },
  {
    slug: "chiller-overhaul-repairs",
    title: "Chiller Overhaul & Repairs",
    shortTitle: "Overhaul & Repairs",
    icon: Cpu,
    summary: "Major compressor overhauling, tube cleaning, leak testing, and system retrofits.",
    heroDescription:
      "Full-scope overhaul services for chillers reaching mid-life or showing performance decline, from compressor rebuilds to shell-and-tube servicing and control system retrofits, executed to restore rated capacity and efficiency.",
    scopeOfWork: [
      "Compressor overhaul — bearings, seals, valve plates, motor windings",
      "Mechanical and chemical tube cleaning for shell-and-tube exchangers",
      "Pressure and vacuum leak testing across the refrigerant circuit",
      "Refrigerant retrofit and conversion (legacy to low-GWP blends)",
      "Control panel and BMS integration retrofits",
      "Post-overhaul performance and capacity verification",
    ],
    technicalChecklist: [
      "Eddy current tube testing before and after cleaning",
      "Vacuum decay leak test to OEM-rated hold times",
      "Full refrigerant recovery, evacuation, and recharge documentation",
      "Commissioning report with before/after performance data",
    ],
    supportedPlatforms: ["Carrier", "Trane", "YORK", "Daikin", "McQuay", "Climaveneta", "SKM", "PETRA"],
  },
  {
    slug: "emergency-breakdown-troubleshooting",
    title: "Emergency Breakdown & Troubleshooting",
    shortTitle: "Emergency Support",
    icon: Zap,
    summary: "Rapid diagnostic support to eliminate industrial downtime, wherever your plant operates.",
    heroDescription:
      "When a chiller trips, every hour of downtime carries cost. Our breakdown response combines remote diagnostic triage with dispatched field engineers, drawing on multi-brand fault libraries to isolate root cause fast and get plants back online.",
    scopeOfWork: [
      "24/7 remote diagnostic triage via phone or video support",
      "On-site fault isolation for electrical, mechanical, and refrigerant faults",
      "Emergency compressor, sensor, and control board swap-outs",
      "Temporary bypass and load-shedding guidance during repair windows",
      "Root cause analysis and failure prevention recommendations",
      "Priority dispatch across Pan-India, Muscat, and Sri Lanka hubs",
    ],
    technicalChecklist: [
      "Fault code cross-reference across Carrier, Trane, YORK, and Daikin libraries",
      "Live refrigerant pressure and temperature diagnostics",
      "Control-loop and safety-chain fault tracing",
      "Post-repair incident report with downtime and root-cause summary",
    ],
    supportedPlatforms: ["Carrier", "Trane", "YORK", "Daikin", "McQuay", "Climaveneta", "SKM", "PETRA"],
  },
]

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug)
}

export const brands = ["Carrier", "Trane", "YORK", "Daikin", "McQuay", "Climaveneta", "SKM", "PETRA"]
