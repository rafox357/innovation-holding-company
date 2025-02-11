"use client"

import Image from "next/image"
import { motion } from "framer-motion"

interface SubsidiaryHeroProps {
  name: string
  description: string
  logo: string
  coverImage: string
  stats: Array<{
    label: string
    value: string
  }>
}

export function SubsidiaryHero({
  name,
  description,
  logo,
  coverImage,
  stats,
}: SubsidiaryHeroProps) {
  return (
    <div className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={coverImage}
          alt={`${name} cover`}
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="relative w-16 h-16 bg-white rounded-lg p-2">
                <Image
                  src={logo}
                  alt={`${name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="text-4xl font-bold text-white">{name}</h1>
            </div>
            <p className="text-xl text-white/90 mb-8">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/10 backdrop-blur-lg rounded-lg p-4 text-white"
              >
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
