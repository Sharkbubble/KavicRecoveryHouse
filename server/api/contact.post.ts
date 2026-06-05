import { Resend } from 'resend'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { firstName, lastName, email, phone, reason, message } = body

  if (!firstName || !lastName || !email) {
    throw createError({ statusCode: 400, statusMessage: 'Missing required fields' })
  }

  const resend = new Resend(process.env.RESEND_API_KEY)
  const to = process.env.CONTACT_EMAIL || 'cj@kavichouserecovery.ca'

  await resend.emails.send({
    from: 'Kavic House Website <onboarding@resend.dev>',
    to,
    replyTo: email,
    subject: `New inquiry from ${firstName} ${lastName}`,
    text: [
      `Name: ${firstName} ${lastName}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      reason ? `Reason: ${reason}` : null,
      message ? `\nMessage:\n${message}` : null,
    ].filter(Boolean).join('\n'),
  })

  return { ok: true }
})
