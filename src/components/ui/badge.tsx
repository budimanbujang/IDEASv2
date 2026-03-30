import * as React from 'react'
import { cn } from '@/lib/utils'

const variantStyles = {
  default: 'bg-primary/20 text-primary-light border-primary/30',
  guild: 'border-transparent',
  status: 'border-transparent',
  tier: 'border-transparent',
  autonomy: 'border-transparent',
  phase: 'border-transparent',
} as const

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: keyof typeof variantStyles
  color?: string
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = 'default', color, style, ...props }, ref) => {
    const colorStyle = color
      ? { backgroundColor: `${color}20`, color, borderColor: `${color}40`, ...style }
      : style

    return (
      <span
        ref={ref}
        className={cn(
          'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors',
          variantStyles[variant],
          className
        )}
        style={colorStyle}
        {...props}
      />
    )
  }
)
Badge.displayName = 'Badge'

export { Badge }
export type { BadgeProps }
