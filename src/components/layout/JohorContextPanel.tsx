'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  TrendingUp,
  Users,
  Train,
  Home,
  X,
  ChevronUp,
} from 'lucide-react'

interface Indicator {
  icon: React.ElementType
  label: string
  value: string
  trend?: string
  trendUp?: boolean
}

const indicators: Indicator[] = [
  {
    icon: TrendingUp,
    label: 'Approved Investments',
    value: 'RM110B',
    trend: '2025',
  },
  {
    icon: Users,
    label: 'Population Growth',
    value: '12.5%',
    trendUp: true,
  },
  {
    icon: Train,
    label: 'RTS Link',
    value: '65%',
    trend: 'complete',
  },
  {
    icon: Home,
    label: 'Property Prices',
    value: '+5.3%',
    trendUp: true,
  },
]

export default function JohorContextPanel() {
  const [visible, setVisible] = useState(true)
  const [expanded, setExpanded] = useState(true)

  if (!visible) return null

  return (
    <div
      className={cn(
        'fixed bottom-0 left-0 right-0 z-40',
        'bg-surface-elevated border-t border-border',
        'transition-all duration-300 ease-in-out'
      )}
    >
      {/* Collapsed toggle bar */}
      {!expanded && (
        <button
          onClick={() => setExpanded(true)}
          className="w-full flex items-center justify-center gap-2 py-1 text-[10px] text-text-secondary hover:text-text-primary transition-colors"
        >
          <ChevronUp size={12} />
          <span>Johor Economic Context</span>
          <ChevronUp size={12} />
        </button>
      )}

      {/* Expanded content */}
      {expanded && (
        <div className="flex items-center justify-between px-6 py-2 gap-4">
          {/* Indicators */}
          <div className="flex items-center gap-6 overflow-x-auto">
            {indicators.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 whitespace-nowrap"
                >
                  <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={14} className="text-primary" />
                  </div>
                  <div>
                    <p className="text-[10px] text-text-secondary leading-tight">{item.label}</p>
                    <div className="flex items-center gap-1">
                      <span className="text-sm font-semibold text-text-primary">{item.value}</span>
                      {item.trend && (
                        <span className="text-[10px] text-text-secondary">{item.trend}</span>
                      )}
                      {item.trendUp && (
                        <TrendingUp size={10} className="text-green-400" />
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Tagline and controls */}
          <div className="flex items-center gap-3 shrink-0">
            <span className="hidden lg:block text-[10px] text-text-secondary/70 italic max-w-[200px] leading-tight">
              Johor&apos;s historic convergence window
            </span>
            <button
              onClick={() => setExpanded(false)}
              className="p-1 rounded hover:bg-surface text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Collapse panel"
            >
              <ChevronUp size={14} className="rotate-180" />
            </button>
            <button
              onClick={() => setVisible(false)}
              className="p-1 rounded hover:bg-surface text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Dismiss panel"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
