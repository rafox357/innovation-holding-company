"use client"

import Image from "next/image"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <Image
        src="/logo.svg"
        alt="Hubverse Logo"
        width={32}
        height={32}
        className="rounded-lg"
        priority
      />
      <span className="font-bold text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Hubverse
      </span>
    </Link>
  )
}
