import { EmailTemplate } from "@/app/parts/estrutura/emailTemplate";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const body = await req.json();
    try {
        const data = await resend.emails.send({
            from: 'Cem Metalúrgica <noreply@cemmetalurgica.com.br>',
            to: ['contato@cemmetalurgica.com.br'],
            subject: 'Cem Metalúrgica - Contato Site',
            react: EmailTemplate(body),
        });
        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}