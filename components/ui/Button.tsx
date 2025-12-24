import { forwardRef, MouseEvent } from 'react'
import { motion } from 'framer-motion'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children?: React.ReactNode
  onClick?: (e?: MouseEvent<HTMLButtonElement>) => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'md', className = '', onClick, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white'

    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-blue-500 text-white hover:from-blue-700 hover:to-blue-600 active:from-blue-800 active:to-blue-700',
      secondary: 'bg-zinc-900 text-white hover:bg-zinc-800 active:bg-zinc-700',
      outline: 'bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700',
    }

    const sizes = {
      sm: 'px-6 py-2 text-sm',
      md: 'px-8 py-3 text-base',
      lg: 'px-10 py-4 text-lg',
    }

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        onClick(e)
      }
    }

    return (
      <motion.button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleClick}
        {...props}
      >
        {children}
      </motion.button>
    )
  }
)

Button.displayName = 'Button'
