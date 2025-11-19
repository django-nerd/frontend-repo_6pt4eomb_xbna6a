import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rx = useSpring(x, { stiffness: 150, damping: 15 })
  const ry = useSpring(y, { stiffness: 150, damping: 15 })

  const base = 'relative inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-semibold transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
  const styles = {
    primary: 'bg-[#6B8C7A] text-white hover:brightness-110 focus-visible:ring-[#6B8C7A]',
    secondary: 'bg-transparent text-[#4a4742] hover:text-[#2e2b27] underline underline-offset-4'
  }

  const onMove = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const mx = e.clientX - rect.left - rect.width / 2
    const my = e.clientY - rect.top - rect.height / 2
    x.set(mx * 0.15)
    y.set(my * 0.15)
  }

  const onLeave = () => {
    setHovered(false)
    x.set(0); y.set(0)
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={onLeave}
      style={{ rotateX: ry, rotateY: rx }}
      className={`${base} ${styles[variant]} ${className}`}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(120px 120px at 50% 50%, rgba(255,255,255,0.25), rgba(255,255,255,0))'
          }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
      {variant === 'primary' && (
        <span className="absolute -inset-px rounded-full border border-white/20 pointer-events-none" />
      )}
    </motion.button>
  )
}
