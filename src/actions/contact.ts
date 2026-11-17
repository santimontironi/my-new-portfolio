"use server"

import transporter from "@/config/mail.config"
import { contactSchema } from "@/lib/validations/contact"

export async function sendContactEmail(data: unknown) {
    const parsed = contactSchema.safeParse(data)
    if (!parsed.success) return { ok: false }

    const { name, surname, email, message } = parsed.data

    try {
        await transporter.sendMail({
            from: email,
            replyTo: email,
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de contacto de ${name} ${surname}`,
            text: `Nombre: ${name} ${surname}\nEmail: ${email}\nMensaje: ${message}`,
        })
        return { ok: true }
    } catch (error) {
        console.error(error)
        return { ok: false }
    }
}
