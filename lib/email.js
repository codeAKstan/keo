import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export const sendWelcomeEmail = async (to, name) => {
  const mailOptions = {
    from: `"KEO Accounting" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Welcome to KEO - Your Financial Operating System',
    html: `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; }
          .header { background-color: #0F1629; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
          .logo { color: white; font-size: 24px; font-weight: bold; text-decoration: none; }
          .content { background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
          .button { display: inline-block; background-color: #2563EB; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px; }
          .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <a href="#" class="logo">KEO</a>
          </div>
          <div class="content">
            <h2>Welcome, ${name}!</h2>
            <p>We're thrilled to have you on board. KEO is designed to simplify your business finances, from payroll to tax compliance.</p>
            <p>Your account has been successfully created. You can now access your dashboard and start setting up your organization.</p>
            <center>
              <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/dashboard" class="button">Go to Dashboard</a>
            </center>
            <p style="margin-top: 30px;">If you have any questions, our support team is always here to help.</p>
            <p>Best regards,<br>The KEO Team</p>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} KEO. All rights reserved.
          </div>
        </div>
      </body>
      </html>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Welcome email sent to:', to);
  } catch (error) {
    console.error('Error sending welcome email:', error);
  }
};
