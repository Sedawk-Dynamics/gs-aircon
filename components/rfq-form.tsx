"use client"

import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { toast } from "sonner"
import { Loader2, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { brands } from "@/lib/services-data"

const urgencyLevels = [
  { value: "planned", label: "Planned — within 30 days" },
  { value: "priority", label: "Priority — within a week" },
  { value: "urgent", label: "Urgent — within 48 hours" },
  { value: "emergency", label: "Emergency breakdown" },
]

export function RfqForm() {
  const [brand, setBrand] = useState<string>("")
  const [urgency, setUrgency] = useState<string>("")
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      toast.success("Request received", {
        description: "Our engineering desk will get back to you shortly with a quote.",
      })
      event.currentTarget.reset()
      setBrand("")
      setUrgency("")
    }, 900)
  }

  return (
    <section id="contact" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              Quick Part / Service RFQ
            </span>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-navy text-balance sm:text-4xl">
              Request a Spare Part or Schedule a Service
            </h2>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Share your chiller brand and requirement — our engineering desk will respond with part
              availability, lead time, or a service slot based on your stated urgency.
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-muted-foreground">
              <p>Prefer to talk directly? Call our emergency support line, available around the clock.</p>
              <a href="tel:+919885566835" className="font-semibold text-navy hover:text-primary">
                +91 98855 66835
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-border bg-card p-6 sm:p-8"
          >
            <form onSubmit={handleSubmit}>
              <FieldGroup>
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="client-name">Client Name</FieldLabel>
                    <Input id="client-name" name="clientName" placeholder="Full name" required />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="plant-location">Company / Plant Location</FieldLabel>
                    <Input id="plant-location" name="plantLocation" placeholder="City, country" required />
                  </Field>
                </div>

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <Field>
                    <FieldLabel htmlFor="chiller-brand">Chiller Brand</FieldLabel>
                    <Select value={brand} onValueChange={(value) => setBrand(value ?? "")}>
                      <SelectTrigger id="chiller-brand" className="w-full">
                        <SelectValue placeholder="Select a brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {brands.map((b) => (
                            <SelectItem key={b} value={b}>
                              {b}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="chillerBrand" value={brand} />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="urgency">Urgency Level</FieldLabel>
                    <Select value={urgency} onValueChange={(value) => setUrgency(value ?? "")}>
                      <SelectTrigger id="urgency" className="w-full">
                        <SelectValue placeholder="Select urgency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          {urgencyLevels.map((level) => (
                            <SelectItem key={level.value} value={level.value}>
                              {level.label}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <input type="hidden" name="urgency" value={urgency} />
                  </Field>
                </div>

                <Field>
                  <FieldLabel htmlFor="requirement">Part / Service Requirement</FieldLabel>
                  <Textarea
                    id="requirement"
                    name="requirement"
                    placeholder="Describe the part number, symptom, or service you need"
                    rows={4}
                    required
                  />
                </Field>

                <Button type="submit" size="lg" className="h-11 rounded-md" disabled={submitting}>
                  {submitting ? (
                    <>
                      <Loader2 data-icon="inline-start" className="animate-spin" />
                      Submitting
                    </>
                  ) : (
                    <>
                      <Send data-icon="inline-start" />
                      Submit Request
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
