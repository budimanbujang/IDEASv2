'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import {
  ShoppingBag, Star, Users, ChevronRight, Filter, Search,
  Factory, Ship, Cpu, Microscope, Leaf, GraduationCap,
  ShieldCheck, Lock, Eye, TrendingUp, ArrowLeft
} from 'lucide-react'
import { cn } from '@/lib/utils'

type Product = {
  id: string
  name: string
  category: string
  icon: React.ElementType
  description: string
  pricing: { tier: string; price: string }[]
  subscribers: number
  stars: number
  color: string
  featured?: boolean
}

const products: Product[] = [
  {
    id: 'mfg-intel',
    name: 'Manufacturing Intelligence Index',
    category: 'Industrial',
    icon: Factory,
    description: 'Real-time manufacturing output indices, capacity utilisation, and predictive maintenance signals across JS-SEZ industrial clusters.',
    pricing: [
      { tier: 'Basic', price: 'RM5K/mo' },
      { tier: 'Pro', price: 'RM25K/mo' },
      { tier: 'Enterprise', price: 'RM100K/mo' },
    ],
    subscribers: 12,
    stars: 4.5,
    color: '#F97316',
  },
  {
    id: 'trade-flow',
    name: 'JS-SEZ Trade Flow Analytics',
    category: 'Trade',
    icon: Ship,
    description: 'Cross-border trade flow analysis, logistics corridor performance, and customs clearance intelligence for the JS-SEZ region.',
    pricing: [
      { tier: 'Basic', price: 'RM3K/mo' },
      { tier: 'Pro', price: 'RM15K/mo' },
      { tier: 'Enterprise', price: 'RM75K/mo' },
    ],
    subscribers: 18,
    stars: 4.3,
    color: '#3B82F6',
  },
  {
    id: 'semi-supply',
    name: 'Semiconductor Supply Chain Dashboard',
    category: 'Supply Chain',
    icon: Cpu,
    description: 'End-to-end semiconductor supply chain visibility with disruption alerts, inventory forecasting, and supplier risk scoring.',
    pricing: [
      { tier: 'Pro', price: 'RM50K/mo' },
      { tier: 'Enterprise', price: 'RM200K/mo' },
    ],
    subscribers: 5,
    stars: 4.8,
    color: '#6366F1',
    featured: true,
  },
  {
    id: 'life-sci',
    name: 'Life Sciences R&D Heat Map',
    category: 'Research',
    icon: Microscope,
    description: 'Research activity mapping, clinical trial tracking, and IP landscape analysis for life sciences and biotech sectors.',
    pricing: [
      { tier: 'Basic', price: 'RM4K/mo' },
      { tier: 'Pro', price: 'RM20K/mo' },
      { tier: 'Enterprise', price: 'RM80K/mo' },
    ],
    subscribers: 9,
    stars: 4.4,
    color: '#EC4899',
  },
  {
    id: 'carbon-offset',
    name: 'Carbon Offset Marketplace',
    category: 'Sustainability',
    icon: Leaf,
    description: 'Verified carbon offset trading, emissions tracking, and ESG compliance reporting integrated with IBTEC sensor data.',
    pricing: [
      { tier: 'Transaction', price: '2% fee' },
      { tier: 'Pro', price: 'RM10K/mo' },
    ],
    subscribers: 22,
    stars: 4.6,
    color: '#22C55E',
  },
  {
    id: 'workforce',
    name: 'Workforce Skills Intelligence',
    category: 'Human Capital',
    icon: GraduationCap,
    description: 'Skills gap analysis, workforce readiness scoring, and talent pipeline intelligence for JS-SEZ employers and training providers.',
    pricing: [
      { tier: 'Basic', price: 'RM2K/mo' },
      { tier: 'Pro', price: 'RM12K/mo' },
      { tier: 'Enterprise', price: 'RM60K/mo' },
    ],
    subscribers: 15,
    stars: 4.2,
    color: '#A855F7',
  },
]

const categories = ['All', 'Industrial', 'Trade', 'Supply Chain', 'Research', 'Sustainability', 'Human Capital']
const pricingTiers = ['All Tiers', 'Basic', 'Pro', 'Enterprise']

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn('w-3 h-3', i <= Math.floor(rating) ? 'text-accent-gold fill-accent-gold' : i - 0.5 <= rating ? 'text-accent-gold fill-accent-gold/50' : 'text-border')}
        />
      ))}
      <span className="text-xs text-text-secondary ml-1">{rating}</span>
    </div>
  )
}

function TierBadge({ tier, price }: { tier: string; price: string }) {
  const colors: Record<string, string> = {
    Basic: '#22C55E',
    Pro: '#3B82F6',
    Enterprise: '#D4A847',
    Transaction: '#A855F7',
  }
  const color = colors[tier] || '#94A3B8'
  return (
    <div className="flex items-center gap-2 text-xs">
      <span className="px-1.5 py-0.5 rounded text-[10px] font-medium" style={{ backgroundColor: `${color}20`, color }}>{tier}</span>
      <span className="text-text-primary font-semibold">{price}</span>
    </div>
  )
}

export default function MarketplacePage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedTier, setSelectedTier] = useState('All Tiers')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProducts = products.filter((p) => {
    if (selectedCategory !== 'All' && p.category !== selectedCategory) return false
    if (selectedTier !== 'All Tiers' && !p.pricing.some((pr) => pr.tier === selectedTier)) return false
    if (searchQuery && !p.name.toLowerCase().includes(searchQuery.toLowerCase())) return false
    return true
  })

  const featured = products.find((p) => p.featured)

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <Link href="/monetisation" className="text-text-secondary hover:text-primary transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <span className="text-xs text-text-secondary">Monetisation Layer</span>
          </div>
          <h1 className="text-2xl font-bold text-text-primary flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-monetise/10 flex items-center justify-center">
              <ShoppingBag className="w-5 h-5 text-monetise" />
            </div>
            IBTEC Data Marketplace
          </h1>
          <p className="text-text-secondary text-sm mt-1">Premium data products and analytics powered by IBTEC&apos;s unified ecosystem</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-surface border border-border rounded-lg px-4 py-2 text-center">
            <div className="text-xs text-text-secondary">Monthly Revenue</div>
            <div className="text-lg font-bold text-monetise">RM1.56M</div>
          </div>
          <div className="bg-surface border border-border rounded-lg px-4 py-2 text-center">
            <div className="text-xs text-text-secondary">Total Subscribers</div>
            <div className="text-lg font-bold text-text-primary">81</div>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex items-center gap-3 flex-wrap">
        {[
          { label: 'AI Verify Compliant', icon: ShieldCheck, color: '#22C55E' },
          { label: 'GDPR Ready', icon: Lock, color: '#3B82F6' },
          { label: 'Differential Privacy Active', icon: Eye, color: '#A855F7' },
        ].map((badge) => (
          <div key={badge.label} className="flex items-center gap-2 px-3 py-1.5 rounded-full border" style={{ borderColor: `${badge.color}40`, backgroundColor: `${badge.color}10` }}>
            <badge.icon className="w-3.5 h-3.5" style={{ color: badge.color }} />
            <span className="text-xs font-medium" style={{ color: badge.color }}>{badge.label}</span>
          </div>
        ))}
      </div>

      {/* Featured Product Hero */}
      {featured && (
        <div className="bg-surface border border-border rounded-xl p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: featured.color }} />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-5" style={{ backgroundColor: featured.color, filter: 'blur(60px)' }} />
          <div className="flex items-center gap-2 mb-2 mt-1">
            <span className="text-[10px] uppercase tracking-wider font-semibold text-monetise">Featured Product</span>
            <TrendingUp className="w-3 h-3 text-monetise" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${featured.color}15` }}>
                  <featured.icon className="w-6 h-6" style={{ color: featured.color }} />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-text-primary">{featured.name}</h2>
                  <span className="text-xs px-2 py-0.5 rounded-full" style={{ backgroundColor: `${featured.color}20`, color: featured.color }}>{featured.category}</span>
                </div>
              </div>
              <p className="text-sm text-text-secondary mb-4">{featured.description}</p>
              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={featured.stars} />
                <div className="flex items-center gap-1 text-xs text-text-secondary">
                  <Users className="w-3 h-3" />
                  <span>{featured.subscribers} subscribers</span>
                </div>
              </div>
              <div className="flex gap-3">
                <button className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-primary-light transition-colors">
                  Subscribe Now
                </button>
                <button className="px-4 py-2 bg-surface-elevated text-text-primary text-sm font-medium rounded-lg border border-border hover:border-primary/30 transition-colors">
                  Preview Sample
                </button>
              </div>
            </div>
            <div className="bg-background rounded-lg p-4 border border-border">
              <h3 className="text-xs font-semibold text-text-secondary uppercase tracking-wide mb-3">Pricing Tiers</h3>
              <div className="space-y-3">
                {featured.pricing.map((p) => (
                  <div key={p.tier} className="flex items-center justify-between p-3 rounded-lg bg-surface border border-border">
                    <TierBadge tier={p.tier} price={p.price} />
                    <button className="text-xs text-primary hover:text-primary-light transition-colors">Select</button>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-[10px] text-text-secondary">
                Enterprise includes dedicated API access, custom dashboards, and SLA guarantee.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Filter Bar */}
      <div className="bg-surface border border-border rounded-lg p-3 flex items-center gap-3 flex-wrap">
        <div className="flex items-center gap-2 flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent text-sm text-text-primary placeholder:text-text-secondary outline-none flex-1"
          />
        </div>
        <div className="h-6 w-px bg-border" />
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-text-secondary" />
          <div className="flex gap-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-2.5 py-1 rounded-full text-xs transition-colors',
                  selectedCategory === cat
                    ? 'bg-primary text-white'
                    : 'bg-surface-elevated text-text-secondary hover:text-text-primary'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        <div className="h-6 w-px bg-border" />
        <div className="flex gap-1">
          {pricingTiers.map((tier) => (
            <button
              key={tier}
              onClick={() => setSelectedTier(tier)}
              className={cn(
                'px-2.5 py-1 rounded-full text-xs transition-colors',
                selectedTier === tier
                  ? 'bg-monetise text-white'
                  : 'bg-surface-elevated text-text-secondary hover:text-text-primary'
              )}
            >
              {tier}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-surface border border-border rounded-lg p-5 hover:border-primary/30 transition-colors relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: product.color }} />
            {/* Header */}
            <div className="flex items-start gap-3 mb-3 mt-1">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${product.color}15` }}>
                <product.icon className="w-5 h-5" style={{ color: product.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-text-primary group-hover:text-primary transition-colors">{product.name}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full inline-block mt-1" style={{ backgroundColor: `${product.color}20`, color: product.color }}>
                  {product.category}
                </span>
              </div>
            </div>
            {/* Description */}
            <p className="text-xs text-text-secondary mb-3 line-clamp-2">{product.description}</p>
            {/* Pricing Tiers */}
            <div className="space-y-1.5 mb-3">
              {product.pricing.map((p) => (
                <TierBadge key={p.tier} tier={p.tier} price={p.price} />
              ))}
            </div>
            {/* Footer */}
            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div className="flex items-center gap-3">
                <StarRating rating={product.stars} />
                <div className="flex items-center gap-1 text-xs text-text-secondary">
                  <Users className="w-3 h-3" />
                  <span>{product.subscribers}</span>
                </div>
              </div>
            </div>
            {/* Actions */}
            <div className="flex gap-2 mt-3">
              <button className="flex-1 px-3 py-1.5 bg-surface-elevated text-text-primary text-xs font-medium rounded-lg border border-border hover:border-primary/30 transition-colors">
                Preview Sample
              </button>
              <button className="flex-1 px-3 py-1.5 bg-primary text-white text-xs font-medium rounded-lg hover:bg-primary-light transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="bg-surface border border-border rounded-lg p-12 text-center">
          <ShoppingBag className="w-8 h-8 text-text-secondary mx-auto mb-3" />
          <p className="text-sm text-text-secondary">No products match your filters. Try adjusting your criteria.</p>
        </div>
      )}
    </div>
  )
}
