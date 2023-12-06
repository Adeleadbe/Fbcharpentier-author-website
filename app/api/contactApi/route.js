import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    if (request.method === "POST") {
        try {
            const data = await request.json();
            console.log("Data received:", data);

            const user = process.env.EMAIL_USER;

            const transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: user,
                    pass: process.env.EMAIL_PASSWORD,
                },
                tls: {
                    rejectUnauthorized: false, // Accepter les certificats auto-signés
                },
            });

            const mail = await transporter.sendMail({
                from: user,
                to: user,
                subject: "Nouveau message du formulaire de contact",
                replyTo: data.email,
                text: `Name: ${data.lastName}\nEmail: ${data.email}\nMessage: ${data.message}`,
            });

            console.log("Message envoyé avec succès:", mail.messageId);

            // Utilisez response.json() pour renvoyer une réponse JSON
            return NextResponse.json({ data });
        } catch (error) {
            console.error("Erreur lors de l'envoi du mail:", error);

            if (error instanceof SyntaxError) {
                return NextResponse.json({ error: "Erreur de syntaxe JSON" }, { status: 400 });
            }

            return NextResponse.json(
                { error: `Erreur lors de l'envoi du mail: ${error.message || "Erreur inconnue"}` },
                { status: 500 }
            );
        }
    }
}
