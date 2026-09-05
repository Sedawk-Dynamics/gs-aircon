"use client"

import { useState, type FormEvent } from "react"
import { toast } from "sonner"
import { Loader2, PhoneCall, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"

export function ServiceInquirySidebar({ serviceTitle }: { serviceTitle: string }) {
  const [submitting, setSubmitting] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitting(true)

    setTimeout(() => {
      setSubmitting(false)
      toast.success("Request received", {
        description: `Our engineering desk will follow up on your ${serviceTitle} request shortly.`,
      })
      event.currentTarget.reset()
    }, 900)
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

      <form onSubmit={handleSubmit}>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="sidebar-name">Client Name</FieldLabel>
            <Input id="sidebar-name" name="clientName" placeholder="Full name" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="sidebar-location">Company / Plant Location</FieldLabel>
            <Input id="sidebar-location" name="plantLocation" placeholder="City, country" required />
          </Field>
          <Field>
            <FieldLabel htmlFor="sidebar-requirement">Requirement Details</FieldLabel>
            <Textarea
              id="sidebar-requirement"
              name="requirement"
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
