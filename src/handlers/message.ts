import nodeMailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import excerptHtml from "excerpt-html";

async function send(req, res) {
    let {
        email,
        message,
        name,
    } = req.body;

    let transportOptions: SMTPTransport.Options = {
        service: null,
        host: "localhost",
        port: 1025,
        auth: null,
    }

    if (process.env.NODE_ENV === "production") {
        transportOptions = {
            service: 'gmail',
            host: "smtp.gmail.com",
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.PASSWORD,
            },
            port: 465,
            secure: true,
        }
    }

    const transporter = nodeMailer.createTransport(transportOptions);

    const excerpt = excerptHtml(message, {
        pruneLength: 20,
    });

    const _message = message.replace(/(?:\r\n|\r|\n)/g, '<br>');

    const substring = excerpt;

    try {
        await transporter.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GMAIL_USER,
            subject: `Website (${name}): ${substring}`,
            html: `<p>${_message}</p>`,
            cc: [email]
        });
        return res.send({});
    } catch (e) {
        console.log(e);
        return res
            .status(500)
            .send({});
    }
}

export default {
    send
};