import React from 'react'
import Link from 'next/link'

export function UserNav() {
  return (
    <div className="flex items-center space-x-4">
      <Link href="/">Home</Link>
      <Link href="/innovation-hub">Innovation Hub</Link>
      <Link href="/observatory">Observatory</Link>
      <Link href="/news">News</Link>
      <Link href="/contact">Contact</Link>
    </div>
  )
}
