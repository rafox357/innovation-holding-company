import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  throw new Error('Missing RESEND_API_KEY environment variable');
}

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendWelcomeEmail = async (email: string, name: string) => {
  try {
    await resend.emails.send({
      from: 'Hubverse <no-reply@hubverse.com>',
      to: email,
      subject: 'Welcome to Hubverse',
      html: `
        <h1>Welcome to Hubverse, ${name}!</h1>
        <p>We're excited to have you on board. Get started by exploring our platform:</p>
        <ul>
          <li>View our portfolio companies</li>
          <li>Learn about investment opportunities</li>
          <li>Connect with our team</li>
        </ul>
      `,
    });
  } catch (error) {
    console.error('Error sending welcome email:', error);
    throw error;
  }
};

export const sendPasswordResetEmail = async (email: string, resetToken: string) => {
  const resetUrl = `${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}`;
  
  try {
    await resend.emails.send({
      from: 'Hubverse <no-reply@hubverse.com>',
      to: email,
      subject: 'Reset Your Password',
      html: `
        <h1>Reset Your Password</h1>
        <p>You requested to reset your password. Click the link below to proceed:</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>If you didn't request this, please ignore this email.</p>
        <p>This link will expire in 1 hour.</p>
      `,
    });
  } catch (error) {
    console.error('Error sending password reset email:', error);
    throw error;
  }
};

export default resend;
