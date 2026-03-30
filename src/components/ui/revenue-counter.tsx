'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'
import { formatCurrency } from '@/lib/utils'

interface RevenueCounterProps extends React.HTMLAttributes<HTMLDivElement> {
  amount: number
  currency?: string
  trend?: {
    value: number
    direction: 'up' | 'down'
  }
  target?: number
  label?: string
  animationDuration?: number
}

function useAnimatedNumber(value: number, duration = 1000): number {
  const [displayed, setDisplayed] = React.useState(0)
  const previousRef = React.useRef(0)

  React.useEffect(() => {
    const start = previousRef.current
    const diff = value - start
    if (diff === 0) return

    const startTime = performance.now()

    function step(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = start + diff * eased

      setDisplayed(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        previousRef.current = value
      }
    }

    requestAnimationFrame(step)
  }, [value, duration])

  return displayed
}

const RevenueCounter = React.forwardRef<HTMLDivElement, RevenueCounterProps>(
  (
    {
      className,
      amount,
      currency = 'RM',
      trend,
      target,
      label = 'Revenue',
      animationDuration = 1000,
      ...props
    },
    ref
  ) => {
    const animatedAmount = useAnimatedNumber(amount, animationDuration)
    const progress = target ? Math.min((amount / target) * 100, 100) : undefined

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-lg border border-border bg-surface p-4 flex flex-col gap-3',
          className
        )}
        {...props}
      >
        <div className="flex items-center justify-between">
          <span className="text-sm text-text-secondary">{label}</span>
          {trend && (
            <span
              className={cn(
                'inline-flex items-center gap-0.5 text-xs font-medium',
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

        <span className="text-3xl font-bold text-text-primary tabular-nums">
          {formatCurrency(Math.round(animatedAmount), currency)}
        </span>

        {target !== undefined && progress !== undefined && (
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between text-xs text-text-secondary">
              <span>Progress to target</span>
              <span>{progress.toFixed(1)}%</span>
            </div>
            <div className="relative h-2 w-full overflow-hidden rounded-full bg-surface-elevated">
              <div
                className="h-full rounded-full bg-accent-gold transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className="text-xs text-text-secondary">
              Target: {formatCurrency(target, currency)}
            </span>
          </div>
        )}
      </div>
    )
  }
)
RevenueCounter.displayName = 'RevenueCounter'

export { RevenueCounter }
export type { RevenueCounterProps }
