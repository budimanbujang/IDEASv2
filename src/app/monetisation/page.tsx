'use client'

import React from 'react'
import Link from 'next/link'
import {
  DollarSign, TrendingUp, ShoppingBag, Server, CreditCard,
  ChevronRight, ArrowUpRight, BarChart3, Target, Zap
} from 'lucide-react'
import { cn } from '@/lib/utils'

const revenueSources = [
  {
    name: 'Data Marketplace',
    icon: ShoppingBag,
    percentage: 65,
    revenue: 'RM1.56M',
    color: '#D4A847',
    description: 'Subscription-based data products and analytics dashboards',
    link: '/monetisation/marketplace',
  },
  {
    name: 'IaaP Licensing',
    icon: Server,
    percentage: 25,
    revenue: 'RM600K',
    color: '#3B82F6',
    description: 'White-label platform licensing to global innovation districts',
    link: '/monetisation/iaap',
  },
  {
    name: 'Platform Fees',
    icon: CreditCard,
    percentage: 10,
    revenue: 'RM240K',
    color: '#22C55E',
    description: 'Transaction fees, premium tier access, and API usage charges',
    link: '/monetisation/revenue',
  },
]

const monthlyRevenue = [
  { month: 'Jan', value: 1.2 },
  { month: 'Feb', value: 1.4 },
  { month: 'Mar', value: 1.5 },
  { month: 'Apr', value: 1.7 },
  { month: 'May', value: 1.8 },
  { month: 'Jun', value: 1.9 },
  { month: 'Jul', value: 2.0 },
  { month: 'Aug', value: 2.1 },
  { month: 'Sep', value: 2.2 },
  { month: 'Oct', value: 2.3 },
  { month: 'Nov', value: 2.3 },
  { month: 'Dec', value: 2.4 },
]

const maxRevenue = 3.0

const quickLinks = [
  { label: 'Data Marketplace', href: '/monetisation/marketplace', icon: ShoppingBag, color: '#D4A847' },
  { label: 'IaaP Licensing', href: '/monetisation/iaap', icon: Server, color: '#3B82F6' },
  { label: 'Revenue Analytics', href: '/monetisation/revenue', icon: BarChart3, color: '#22C55E' },
]

export default function MonetisationPage() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-monetise/10 flex items-center justify-center">
              <DollarSign className="w-5 h-5 text-monetise" />
            </div>
            Monetisation Layer
          </h1>
          <p className="text-text-secondary text-sm mt-1">Revenue generation through data products, platform licensing, and ecosystem fees</p>
        </div>
      </div>

      {/* Revenue Counters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-surface border border-border rounded-lg p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-monetise" />
          <div className="flex items-center gap-2 mb-1 mt-1">
            <TrendingUp className="w-4 h-4 text-monetise" />
            <span className="text-xs text-text-secondary uppercase tracking-wide">This Month</span>
          </div>
          <div className="text-3xl font-bold text-text-primary">RM2.4M</div>
          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight className="w-3 h-3 text-green-400" />
            <span className="text-xs text-green-400">+8.2% vs last month</span>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-primary" />
          <div className="flex items-center gap-2 mb-1 mt-1">
            <BarChart3 className="w-4 h-4 text-primary" />
            <span className="text-xs text-text-secondary uppercase tracking-wide">Year to Date</span>
          </div>
          <div className="text-3xl font-bold text-text-primary">RM28.8M</div>
          <div className="flex items-center gap-1 mt-1">
            <ArrowUpRight className="w-3 h-3 text-green-400" />
            <span className="text-xs text-green-400">On track for annual target</span>
          </div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-accent-gold" />
          <div className="flex items-center gap-2 mb-1 mt-1">
            <Target className="w-4 h-4 text-accent-gold" />
            <span className="text-xs text-text-secondary uppercase tracking-wide">Year 5 Target</span>
          </div>
          <div className="text-3xl font-bold text-text-primary">RM150–250M</div>
          <div className="flex items-center gap-1 mt-1">
            <Zap className="w-3 h-3 text-accent-gold" />
            <span className="text-xs text-text-secondary">Per year at maturity</span>
          </div>
        </div>
      </div>

      {/* Revenue by Source */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-monetise" />
          Revenue by Source
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {revenueSources.map((source) => (
            <Link
              key={source.name}
              href={source.link}
              className="bg-surface border border-border rounded-lg p-5 hover:border-monetise/30 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: source.color }} />
              <div className="flex items-center gap-3 mb-3 mt-1">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${source.color}15` }}>
                  <source.icon className="w-5 h-5" style={{ color: source.color }} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">{source.name}</div>
                  <div className="text-xs text-text-secondary">{source.description}</div>
                </div>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-bold text-text-primary">{source.revenue}</span>
                <span className="text-lg font-bold" style={{ color: source.color }}>{source.percentage}%</span>
              </div>
              <div className="w-full h-2 bg-background rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{ width: `${source.percentage}%`, backgroundColor: source.color }}
                />
              </div>
              <div className="flex items-center gap-1 mt-3 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                View details <ChevronRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Revenue Trajectory Chart */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-monetise" />
          Revenue Trajectory (12 Months)
        </h2>
        <div className="bg-surface border border-border rounded-lg p-5">
          <div className="flex items-end gap-2" style={{ height: '200px' }}>
            {monthlyRevenue.map((m) => {
              const heightPct = (m.value / maxRevenue) * 100
              return (
                <div key={m.month} className="flex-1 flex flex-col items-center gap-1 h-full justify-end group">
                  <span className="text-[10px] text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    RM{m.value}M
                  </span>
                  <div
                    className="w-full rounded-t-md transition-all duration-300 group-hover:opacity-90 relative"
                    style={{
                      height: `${heightPct}%`,
                      background: `linear-gradient(to top, #D4A84730, #D4A847)`,
                    }}
                  />
                  <span className="text-[10px] text-text-secondary mt-1">{m.month}</span>
                </div>
              )
            })}
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-border">
            <span className="text-xs text-text-secondary">Monthly average: <strong className="text-text-primary">RM1.9M</strong></span>
            <span className="text-xs text-text-secondary">Growth rate: <strong className="text-green-400">+8.2% MoM</strong></span>
            <span className="text-xs text-text-secondary">Projected Year 1: <strong className="text-monetise">RM28.8M</strong></span>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h2 className="text-sm font-semibold text-text-primary mb-3">Quick Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="bg-surface border border-border rounded-lg p-4 flex items-center gap-3 hover:border-primary/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${link.color}15` }}>
                <link.icon className="w-5 h-5" style={{ color: link.color }} />
              </div>
              <span className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors flex-1">{link.label}</span>
              <ChevronRight className="w-4 h-4 text-text-secondary group-hover:text-primary transition-colors" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
