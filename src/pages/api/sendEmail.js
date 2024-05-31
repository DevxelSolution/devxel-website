import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { from, to, subject, html } = req.body;
console.log(process.env.GMAIL_USER)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_PASS, // Your Gmail password or App Password
      },
    });

    const mailOptions = {
      from,
      to,
      subject,
      html,
    };

    try {
      const info = await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'Email sent', info });
    } catch (error) {
      res.status(500).json({ error: 'Failed to send email', details: error });
      console.log(error)
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
