// Web3Forms access keys are public form identifiers, not SMTP credentials.
const accessKey = "3c99df72-2073-478f-939a-bc363a47ab1a"

export async function submitInquiry(form: HTMLFormElement, subject: string) {
  const formData = new FormData(form)
  formData.set("access_key", accessKey)
  formData.set("subject", subject)
  formData.set("from_name", "GS Aircon Website")

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
    signal: AbortSignal.timeout(30000),
  })
  const data = await response.json()

  if (!response.ok || data.success !== true) {
    throw new Error("Unable to send your request. Please try again or call +91 98855 66835.")
  }
}
