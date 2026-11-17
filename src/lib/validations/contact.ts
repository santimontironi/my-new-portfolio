import { z } from "zod"

export const contactSchema = z.object({
    name: z.string().trim().min(1).max(100),
    surname: z.string().trim().min(1).max(100),
    email: z.email(),
    message: z.string().trim().min(1).max(5000),
})

export type ContactData = z.infer<typeof contactSchema>
