import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

const variantStyles = {
  default:
    'bg-primary text-white hover:bg-primary-light focus-visible:ring-primary',
  secondary:
    'border border-border bg-transparent text-text-primary hover:bg-surface-elevated focus-visible:ring-border',
  destructive:
    'bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600',
  ghost:
    'bg-transparent text-text-primary hover:bg-surface-elevated focus-visible:ring-border',
  command:
    'bg-ops-command text-white hover:bg-ops-command/80 focus-visible:ring-ops-command',
} as const

const sizeStyles = {
  default: 'h-10 px-4 py-2 text-sm',
  sm: 'h-8 px-3 text-sm',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10',
} as const

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variantStyles
  size?: keyof typeof sizeStyles
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(
          'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium transition-colors',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
          'disabled:pointer-events-none disabled:opacity-50',
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button }
export type { ButtonProps }
