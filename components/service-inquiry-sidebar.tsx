"use client"

import { useState, type FormEvent } from "react"
import { toast } from "sonner"
import { Loader2, PhoneCall, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { submitInquiry } from "@/lib/submit-inquiry"

export function ServiceInquirySidebar({ serviceTitle }: { serviceTitle: string }) {
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (submitting) return
    const form = event.currentTarget
    setSubmitting(true)
    setResult("")

    try {
      await submitInquiry(form, `GS Aircon - ${serviceTitle} Inquiry`)
      setResult("Thank you! Your request has been sent. Our engineering desk will contact you shortly.")
      toast.success("Request received", {
        description: `Our engineering desk will follow up on your ${serviceTitle} request shortly.`,
      })
      form.reset()
    } catch {
      const message = "Unable to send your request. Please try again or call +91 98855 66835."
      setResult(message)
      toast.error(message)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="sticky top-24 flex flex-col gap-5 rounded-lg border border-border bg-card p-6">
      <div>
        <h3 className="font-heading text-lg font-semibold text-navy">
          Request Part or Schedule Service
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
          For {serviceTitle.toLowerCase()}, submit your plant details and our engineering desk will respond
          with availability and next steps.
        </p>
      </div>

      <form onSubmit={handleSubmit} aria-busy={submitting}>
        <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden="true" />
        <input type="hidden" name="service" value={serviceTitle} />
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="sidebar-name">Client Name</FieldLabel>
            <Input id="sidebar-name" name="name" placeholder="Full name" autoComplete="name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="sidebar-email">Email Address</FieldLabel>
            <Input id="sidebar-email" type="email" name="email" placeholder="you@company.com" autoComplete="email" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="sidebar-location">Company / Plant Location</FieldLabel>
            <Input id="sidebar-location" name="plantLocation" placeholder="City, country" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="sidebar-requirement">Requirement Details</FieldLabel>
            <Textarea
              id="sidebar-requirement"
              name="message"
              placeholder="Chiller brand, model, and what you need"
              rows={3}
              required
            />
          </Field>
          <Button type="submit" className="h-10 w-full rounded-md" disabled={submitting}>
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
          <p role="status" aria-live="polite" className="text-sm text-muted-foreground">{result}</p>
        </FieldGroup>
      </form>

      <div className="flex items-center gap-2 rounded-md border border-border bg-secondary/50 p-3 text-sm">
        <PhoneCall className="size-4 shrink-0 text-primary" aria-hidden="true" />
        <a href="tel:+919885566835" className="font-medium text-navy hover:text-primary">
          Emergency support: +91 98855 66835
        </a>
      </div>
    </div>
  )
}
