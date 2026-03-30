'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

type SensorStatus = 'online' | 'offline' | 'maintenance' | 'anomaly'

const statusConfig: Record<SensorStatus, { color: string; pulse: string; label: string }> = {
  online: {
    color: 'bg-green-400',
    pulse: 'animate-pulse',
    label: 'Online',
  },
  offline: {
    color: 'bg-gray-500',
    pulse: '',
    label: 'Offline',
  },
  maintenance: {
    color: 'bg-amber-400',
    pulse: 'animate-pulse-glow',
    label: 'Maintenance',
  },
  anomaly: {
    color: 'bg-red-500',
    pulse: 'animate-[blink_0.8s_ease-in-out_infinite]',
    label: 'Anomaly',
  },
}

interface SensorIndicatorProps extends React.HTMLAttributes<HTMLDivElement> {
  status: SensorStatus
  label?: string
  size?: 'sm' | 'md' | 'lg'
  showLabel?: boolean
}

const sizeStyles = {
  sm: 'h-2 w-2',
  md: 'h-3 w-3',
  lg: 'h-4 w-4',
} as const

const SensorIndicator = React.forwardRef<HTMLDivElement, SensorIndicatorProps>(
  ({ className, status, label, size = 'md', showLabel = true, ...props }, ref) => {
    const config = statusConfig[status]
    const displayLabel = label ?? config.label

    return (
      <div
        ref={ref}
        className={cn('inline-flex items-center gap-2', className)}
        {...props}
      >
        <span className="relative inline-flex">
          <span
            className={cn(
              'rounded-full',
              sizeStyles[size],
              config.color,
              config.pulse
            )}
          />
          {status === 'online' && (
            <span
              className={cn(
                'absolute inset-0 rounded-full bg-green-400 opacity-75 animate-ping',
                sizeStyles[size]
              )}
            />
          )}
        </span>
        {showLabel && (
          <span className="text-sm text-text-secondary">{displayLabel}</span>
        )}
      </div>
    )
  }
)
SensorIndicator.displayName = 'SensorIndicator'

export { SensorIndicator }
export type { SensorIndicatorProps, SensorStatus }
