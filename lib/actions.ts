'use server'

import { z } from 'zod'
import { ContactFormSchema } from './schemas'
import ContactFormEmail from '@/emails/contact-form-email'
import { Resend } from 'resend'

type ContactFormInputs = z.infer<typeof ContactFormSchema>

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data)

  if (!result.success) {
    return { error: result.error.format() }
  }

  try {
    const { name, email, message } = result.data

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev', // ✅ for dev only
      to: [email],
      cc: ['johnairacruzfeleo@gmail.com'],
      subject: 'Contact form submission',
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: await ContactFormEmail({ name, email, message }) // ✅ no await needed
    })

    if (response.error) {
      throw new Error(response.error.message)
    }

    return { success: true }
  } catch (error) {
    return { error }
  }
}
