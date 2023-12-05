import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
	host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "bc83669b25573c",
      pass: "7e380dbc3fb9fb"
  	}
});

const mailOptions = {
	from: "mohitsankhla530@gmail.com",
	to: "one@testing.com", 
	text: "hello world!"
};

async function main() {
	const info = await transporter.sendMail(mailOptions);

	console.log(info);
}

main();
