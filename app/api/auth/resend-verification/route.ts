import { NextResponse } from "next/server"
import { PrismaClient } from "@prisma/client"
import { createTransport } from "nodemailer"
import { randomBytes } from "crypto"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const { email } = await req.json()

    const user = await prisma.user.findUnique({
      where: { email },
    })

    if (!user) {
      return NextResponse.json(
        { message: "No account found with this email" },
        { status: 404 }
      )
    }

    if (user.emailVerified) {
      return NextResponse.json(
        { message: "Email is already verified" },
        { status: 400 }
      )
    }

    // Generate new verification token
    const verificationToken = randomBytes(32).toString("hex")
    const verificationTokenExpiry = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    // Update user with new verification token
    await prisma.user.update({
      where: { id: user.id },
      data: {
        verificationToken,
        verificationTokenExpiry,
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

    // Send verification email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: "Verify Your Email",
      html: `
        <h1>Verify Your Email</h1>
        <p>Click the link below to verify your email address. This link will expire in 24 hours.</p>
        <a href="${process.env.NEXTAUTH_URL}/auth/verify?token=${verificationToken}">
          Verify Email
        </a>
      `,
    })

    return NextResponse.json({ message: "Verification email sent" })
  } catch (error) {
    console.error("Resend verification error:", error)
    return NextResponse.json(
      { message: "Failed to resend verification email" },
      { status: 500 }
    )
  }
}
