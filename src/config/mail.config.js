import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
    secure: true,
    service: "gmail",
    tls: {
        rejectUnauthorized: false,
    },
})

export default transporter;