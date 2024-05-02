'use server'

import { getErrorMessage, validateString } from '@/lib/utils'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_APIKEY)


export async function sendEmail(formData: FormData) {

    const message = formData.get('message')
    const senderEmail = formData.get('senderEmail')

    if (!validateString(message, 500)) {
        return {
            error: 'Message is invalid'
        }
    }
    if (!validateString(senderEmail, 5000)) {
        return {
            error: 'Sender email is invalid'
        }
    }
    let data;
    try {
        data = await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>",
            to: "joyyujiepeng@gmail.com",
            subject: "Message from contact form",
            reply_to: senderEmail,
            text: message,

        });
    } catch (error: unknown) {
        return {
            error: getErrorMessage(error),
        };
    }

    return {
        data,
    };
}