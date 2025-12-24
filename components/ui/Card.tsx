import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
}

export function Card({ children, className = '', hover = true }: CardProps) {
  return (
    <motion.div
      className={`bg-zinc-900 rounded-xl shadow-lg p-6 ${className}`}
      whileHover={hover ? { y: -4, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.15)' } : {}}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  )
}
