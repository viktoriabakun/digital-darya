import { Resend } from 'resend';
import {
	RESEND_API_KEY,
	CONTACT_FORM_EMAIL_TO,
	CONTACT_FORM_EMAIL_FROM
} from '$env/static/private';

/** @satisfies {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		try {
			const data = await request.formData();

			const firstName = data.get('firstName');
			const lastName = data.get('lastName');
			const email = data.get('email');
			const message = data.get('message');
			const company = data.get('company');

			// 'company' is a honeypot field
			if (company.length > 0) {
				// TODO: add logging
				return;
			}

			const resend = new Resend(RESEND_API_KEY);

			await resend.emails.send({
				from: CONTACT_FORM_EMAIL_FROM,
				to: CONTACT_FORM_EMAIL_TO,
				subject: `${firstName} ${lastName} sent you a message`,
				html: `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>New Contact Message</title>
  </head>
  <body style="font-family: sans-serif; background: #ffffff; padding: 20px; color: #333;">
    <h2>New Contact Form Submission</h2>

    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong><br />${message}</p>
  </body>
</html>
`
			});
		} catch (error) {
			// TODO: add logging
			// add error handling
			console.log('ERROR:', error);
		}
	}
};
