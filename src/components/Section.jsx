import React from 'react'
import { motion } from 'framer-motion'

export default function Section({ id, className = '', children }) {
  return (
    <section id={id} className={`relative py-20 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="container mx-auto px-6 max-w-6xl"
      >
        {children}
      </motion.div>
    </section>
  )
}
