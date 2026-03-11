import { NextResponse } from "next/server";
import transporter from "../../../config/mail.config";

export async function POST(request) {
    try{
        const { name, email, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ message: "Todos los campos son requeridos" }, { status: 400 });
        }

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Nuevo mensaje de contacto de ${name}`,
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ message: "Failed to send email", error: error.message }, { status: 500 });
    }
}