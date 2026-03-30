import * as React from 'react'
import { cn } from '@/lib/utils'

interface SparklineProps extends React.SVGAttributes<SVGSVGElement> {
  data: number[]
  width?: number
  height?: number
  strokeWidth?: number
  color?: string
  fillOpacity?: number
  showFill?: boolean
}

const Sparkline = React.forwardRef<SVGSVGElement, SparklineProps>(
  (
    {
      className,
      data,
      width = 120,
      height = 32,
      strokeWidth = 1.5,
      color = 'var(--color-primary-light)',
      fillOpacity = 0.1,
      showFill = true,
      ...props
    },
    ref
  ) => {
    if (!data || data.length < 2) return null

    const min = Math.min(...data)
    const max = Math.max(...data)
    const range = max - min || 1

    const padding = 2
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    const points = data.map((value, index) => {
      const x = padding + (index / (data.length - 1)) * chartWidth
      const y = padding + chartHeight - ((value - min) / range) * chartHeight
      return { x, y }
    })

    const linePath = points
      .map((point, i) => `${i === 0 ? 'M' : 'L'}${point.x},${point.y}`)
      .join(' ')

    const fillPath = `${linePath} L${points[points.length - 1].x},${height - padding} L${points[0].x},${height - padding} Z`

    const gradientId = React.useId()

    return (
      <svg
        ref={ref}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        className={cn('inline-block', className)}
        {...props}
      >
        {showFill && (
          <>
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={fillOpacity} />
                <stop offset="100%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            </defs>
            <path d={fillPath} fill={`url(#${gradientId})`} />
          </>
        )}
        <path
          d={linePath}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  }
)
Sparkline.displayName = 'Sparkline'

export { Sparkline }
export type { SparklineProps }
