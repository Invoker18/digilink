import { Resend } from 'resend'

interface ContactRequest {
  firstName?: string
  lastName?: string
  email?: string
  service?: string
  message?: string
}

const resend = new Resend(process.env.RESEND_API_KEY)

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }

    return entities[character] ?? character
  })

export default defineEventHandler(async (event) => {
  const body = (await readBody<ContactRequest>(event)) || {}
  const { firstName, lastName, email, service, message } = body

  if (
    !firstName?.trim() ||
    !lastName?.trim() ||
    !email?.trim() ||
    !service?.trim() ||
    !message?.trim()
  ) {
    throw createError({ statusCode: 400, statusMessage: 'Required fields are missing' })
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address' })
  }

  const response = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || 'Digilink <onboarding@resend.dev>',
    to: [process.env.CONTACT_EMAIL || 'erickcabrera0108@gmail.com'],
    replyTo: email.trim(),
    subject: `New Digilink inquiry: ${firstName.trim()} ${lastName.trim()}`,
    html: `
      <h1>New Digilink service inquiry</h1>
      <p><strong>Name:</strong> ${escapeHtml(firstName.trim())} ${escapeHtml(lastName.trim())}</p>
      <p><strong>Email:</strong> ${escapeHtml(email.trim())}</p>
      <p><strong>Service:</strong> ${escapeHtml(service.trim())}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message.trim()).replace(/\n/g, '<br>')}</p>
        `
  })

  if (response.error) {
    throw createError({ statusCode: 500, statusMessage: 'Unable to send email' })
  }

  return { success: true }
})
