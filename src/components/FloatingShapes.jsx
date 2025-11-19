import { motion, useScroll, useTransform } from 'framer-motion'
import React from 'react'

function Blob({ className, delay = 0, size = 240, color = 'rgba(146, 151, 128, 0.25)', x = 0, y = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6, delay, ease: 'easeOut' }}
      className={`pointer-events-none absolute blur-2xl ${className}`}
      style={{
        width: size,
        height: size,
        background: color,
        left: x,
        top: y,
        borderRadius: '9999px'
      }}
    />
  )
}

export default function FloatingShapes() {
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 600], [0, -40])
  const y2 = useTransform(scrollY, [0, 600], [0, 30])
  const y3 = useTransform(scrollY, [0, 600], [0, -20])

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div style={{ y: y1 }}>
        <Blob color="rgba(198, 189, 173, 0.28)" size={320} x={-60} y={-40} />
      </motion.div>
      <motion.div style={{ y: y2 }}>
        <Blob color="rgba(102, 125, 117, 0.20)" size={260} x={"65%"} y={80} delay={0.2} />
      </motion.div>
      <motion.div style={{ y: y3 }}>
        <Blob color="rgba(82, 101, 96, 0.18)" size={300} x={"20%"} y={500} delay={0.4} />
      </motion.div>
    </div>
  )
}
