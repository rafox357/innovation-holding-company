import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function fetchUserByEmail(email: string) {
    return await prisma.user.findUnique({
        where: { email },
        select: { id: true, name: true, email: true, emailVerified: true, image: true, role: true, passwordHash: true },
    });
}

export async function verifyPassword(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}
