import React from 'react'
import { motion } from 'framer-motion'

const photos = [
  'https://images.unsplash.com/photo-1511914265872-c40672604a2a?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519821172141-b5d8f1f7d2bf?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop'
]

export default function GalleryStrip() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#e8e2d9] bg-white/50">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ repeat: Infinity, duration: 28, ease: 'linear' }}
        className="flex gap-3 p-3"
      >
        {[...photos, ...photos].map((src, i) => (
          <div key={i} className="relative w-64 h-40 shrink-0 overflow-hidden rounded-2xl">
            <img src={src} alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
