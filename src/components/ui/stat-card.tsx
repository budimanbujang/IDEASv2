import * as React from 'react'
import { cn } from '@/lib/utils'

interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value: string | number
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
  icon?: React.ReactNode
}

const StatCard = React.forwardRef<HTMLDivElement, StatCardProps>(
  ({ className, label, value, trend, icon, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        'rounded-lg border border-border bg-surface p-4 flex flex-col gap-2',
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm text-text-secondary">{label}</span>
        {icon && <span className="text-text-secondary">{icon}</span>}
      </div>
      <div className="flex items-end gap-2">
        <span className="text-2xl font-bold text-text-primary">{value}</span>
        {trend && (
          <span
            className={cn(
              'inline-flex items-center gap-0.5 text-xs font-medium mb-1',
              trend.direction === 'up' ? 'text-green-400' : 'text-red-400'
            )}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              className={cn(trend.direction === 'down' && 'rotate-180')}
            >
              <path d="M6 2.5L10 7.5H2L6 2.5Z" fill="currentColor" />
            </svg>
            {Math.abs(trend.value)}%
          </span>
        )}
      </div>
    </div>
  )
)
StatCard.displayName = 'StatCard'

export { StatCard }
export type { StatCardProps }
