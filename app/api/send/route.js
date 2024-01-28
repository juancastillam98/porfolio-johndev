"use server"
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({

    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    secure: true,
    secureConnection: true,
    tls: {
        ciphers: "SSLv3",
    },
    requireTLS: true,
    port:  process.env.NEXT_PUBLIC_EMAIL_PORT,
    debug: true,
    connectionTimeout: 10000,
    auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
    },
});

export const sendEmail = async (data) => {
    console.log("================================");
    console.log(data);
    console.log("datos")
    console.log("EMAIL_HOST:", process.env.NEXT_PUBLIC_EMAIL_HOST);
    console.log("EMAIL_PORT:", process.env.NEXT_PUBLIC_EMAIL_PORT);
    console.log("EMAIL_USER:", process.env.NEXT_PUBLIC_EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.NEXT_PUBLIC_EMAIL_PASS);



    const {email, subject, message}=data;
    const mailOptions = {
        from: email,
        to: "contact@johndev.dev",
        subject: subject,
        html:
            `<p>${message}</p>
        `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response);
    } catch (error) {
        console.error('Error sending email:', error);
    }
};

