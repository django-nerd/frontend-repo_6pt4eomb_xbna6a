import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'https://api.iconify.design/mdi:meditation.svg?color=%236b8c7a',
  'https://api.iconify.design/mdi:flower-tulip-outline.svg?color=%236b8c7a',
  'https://api.iconify.design/mdi:leaf.svg?color=%236b8c7a',
  'https://api.iconify.design/mdi:yin-yang.svg?color=%236b8c7a',
  'https://api.iconify.design/mdi:heart-outline.svg?color=%236b8c7a'
]

export default function MarqueeLogos() {
  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 24, ease: 'linear' }}
        className="flex items-center gap-10 opacity-70"
      >
        {[...logos, ...logos].map((src, i) => (
          <img key={i} src={src} alt="" className="h-8 w-auto" />
        ))}
      </motion.div>
    </div>
  )
}
