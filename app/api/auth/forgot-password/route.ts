import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { createTransport } from "nodemailer"
import { randomBytes } from "crypto"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    // Generate reset token
    const resetToken = randomBytes(32).toString("hex")
    const resetTokenExpiry = new Date(Date.now() + 3600000) // 1 hour from now

    // Store the reset token in the database
    await prisma.user.update({
      where: { email },
      data: {
        resetToken,
        resetTokenExpiry,
      },
    })

    // Create email transporter
    const transporter = createTransport({
      host: process.env.EMAIL_SERVER_HOST,
      port: Number(process.env.EMAIL_SERVER_PORT),
      auth: {
        user: process.env.EMAIL_SERVER_USER,
        pass: process.env.EMAIL_SERVER_PASSWORD,
      },
    })

    // Send reset email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Reset Your Password",
      html: `
        <h1>Reset Your Password</h1>
        <p>Click the link below to reset your password. This link will expire in 1 hour.</p>
        <a href="${process.env.NEXTAUTH_URL}/auth/reset-password?token=${resetToken}">
          Reset Password
        </a>
      `,
    })

    return NextResponse.json({ message: "Reset email sent" })
  } catch (error) {
    console.error("Password reset error:", error)
    return NextResponse.json(
      { message: "Failed to process password reset" },
      { status: 500 }
    )
  }
}
