export const WEB3FORMS_KEY = "b13517be-486e-4aa3-b064-eeb0e5f25951"

export async function submitContactForm(data: {
  name: string
  email: string
  message: string
  subject?: string
}): Promise<{ success: boolean; error?: string }> {
  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_KEY,
        name: data.name,
        email: data.email,
        message: data.message,
        subject: data.subject || `Portfolio inquiry from ${data.name}`,
      }),
    })
    if (!res.ok) return { success: false, error: "Something went wrong. Please try emailing me directly." }
    const result = await res.json()
    return result.success
      ? { success: true }
      : { success: false, error: "Something went wrong. Please try emailing me directly." }
  } catch {
    return { success: false, error: "Network error. Please try emailing me directly." }
  }
}
