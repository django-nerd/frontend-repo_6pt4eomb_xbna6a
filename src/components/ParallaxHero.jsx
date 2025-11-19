import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from './Button'

export default function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, -80])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05])

  return (
    <section ref={ref} className="relative h-[92vh] md:h-[88vh] overflow-hidden">
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=2400&auto=format&fit=crop"
          alt="Calm dunes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F0E9] via-[#F5F0E9]/60 to-[#F5F0E9]" />
      </motion.div>

      <div className="container mx-auto px-6 h-full flex items-center">
        <div className="max-w-2xl">
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl md:text-6xl font-semibold text-[#2f2c27]">
            Come home to your calm, your worth, your self.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.05 }} className="mt-4 text-lg md:text-xl text-[#524e47]">
            EFT tapping and grounded spiritual coaching to soften stress patterns and build inner safety.
          </motion.p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <Button onClick={() => document.getElementById('free-call').scrollIntoView({ behavior: 'smooth' })}>
              Book a Free Clarity Call
            </Button>
            <Button variant="secondary" onClick={() => document.getElementById('how').scrollIntoView({ behavior: 'smooth' })}>
              How it works
            </Button>
          </div>
        </div>
      </div>

      <svg className="absolute bottom-[-1px] left-0 right-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
        <path d="M0,64 C240,120 480,16 720,48 C960,80 1200,88 1440,48 L1440,120 L0,120 Z" fill="#FFFFFF" />
      </svg>
    </section>
  )
}
