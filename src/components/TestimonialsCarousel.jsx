import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  { name: 'Sofia, 31', quote: 'I feel calm in situations that used to spiral me. I finally sleep.' },
  { name: 'Armin, 38', quote: 'For the first time I felt seen and safe with my emotions.' },
  { name: 'Leah, 27', quote: 'Small daily shifts added up. Less anxiety. More choice. More me.' }
]

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000)
    return () => clearInterval(id)
  }, [])

  const item = testimonials[index]

  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#eee6db] bg-[#F9F6F1] p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.6 }}
          className="min-h-[120px]"
        >
          <p className="text-lg text-[#2f2c27]">“{item.quote}”</p>
          <p className="mt-3 text-sm text-[#6a655e]">— {item.name}</p>
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-4 right-4 flex gap-1.5">
        {testimonials.map((_, i) => (
          <span key={i} className={`h-1.5 w-6 rounded-full ${i === index ? 'bg-[#6B8C7A]' : 'bg-[#d9d3c9]'}`} />)
        )}
      </div>
    </div>
  )
}
