import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`
  return num.toLocaleString()
}

export function formatCurrency(amount: number, currency = 'RM'): string {
  if (amount >= 1_000_000_000) return `${currency}${(amount / 1_000_000_000).toFixed(1)}B`
  if (amount >= 1_000_000) return `${currency}${(amount / 1_000_000).toFixed(1)}M`
  if (amount >= 1_000) return `${currency}${(amount / 1_000).toFixed(1)}K`
  return `${currency}${amount.toLocaleString()}`
}

export function getGuildColor(guildId: string): string {
  const colors: Record<string, string> = {
    healthcare: '#E11D48',
    proptech: '#3B82F6',
    agrifood: '#22C55E',
    'food-services': '#F97316',
    'life-sciences': '#EC4899',
    semiconductor: '#6366F1',
    'cross-vertical': '#A855F7',
  }
  return colors[guildId] || '#007B7F'
}

export function getGuildBgClass(guildId: string): string {
  const classes: Record<string, string> = {
    healthcare: 'bg-guild-healthcare',
    proptech: 'bg-guild-proptech',
    agrifood: 'bg-guild-agrifood',
    'food-services': 'bg-guild-food',
    'life-sciences': 'bg-guild-lifesciences',
    semiconductor: 'bg-guild-semiconductor',
    'cross-vertical': 'bg-guild-crossvertical',
  }
  return classes[guildId] || 'bg-primary'
}

export function getTierColor(tier: string): string {
  const colors: Record<string, string> = {
    explorer: '#3B82F6',
    resident: '#22C55E',
    partner: '#F59E0B',
    anchor: '#D4A847',
  }
  return colors[tier] || '#94A3B8'
}

export function getAutonomyLevelColor(level: number): string {
  const colors: Record<number, string> = {
    1: '#22C55E',
    2: '#F59E0B',
    3: '#3B82F6',
  }
  return colors[level] || '#94A3B8'
}

export function getPhaseColor(phase: number): string {
  const colors: Record<number, string> = {
    0: '#007B7F',
    1: '#3B82F6',
    2: '#A855F7',
    3: '#D4A847',
  }
  return colors[phase] || '#94A3B8'
}

export function getStatusColor(status: string): string {
  const colors: Record<string, string> = {
    active: '#22C55E',
    completed: '#22C55E',
    'in-progress': '#3B82F6',
    'in_progress': '#3B82F6',
    pending: '#F59E0B',
    planned: '#94A3B8',
    'at-risk': '#EF4444',
    'at_risk': '#EF4444',
    blocked: '#EF4444',
    online: '#22C55E',
    offline: '#6B7280',
    maintenance: '#F59E0B',
  }
  return colors[status] || '#94A3B8'
}
