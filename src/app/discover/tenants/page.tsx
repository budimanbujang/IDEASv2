'use client'

import React, { useState } from 'react'
import {
  Search, Building2, MapPin, Globe, Filter,
  ChevronRight, Users, Beaker, Factory, Cpu, Heart, Wheat, UtensilsCrossed, Dna
} from 'lucide-react'

const organisations = [
  { id: 'kpj', name: 'KPJ Healthcare', type: 'GLC Investee', country: 'Malaysia', flag: '🇲🇾', tier: 'anchor', sector: 'Healthcare', description: 'Malaysia\'s leading private healthcare group with 30+ hospitals. Anchors the Healthcare and Life Sciences guilds.', capabilities: ['Clinical Trial Infrastructure', 'Population Health Data', 'Biobank (120K samples)'], projects: 8, icon: Heart, color: '#E11D48' },
  { id: 'jlg', name: 'Johor Land Group', type: 'GLC Investee', country: 'Malaysia', flag: '🇲🇾', tier: 'anchor', sector: 'Proptech', description: 'Premier property developer managing 10,000+ acres across Johor. Smart building and wellness township pioneer.', capabilities: ['Smart Building IoT', 'Township Spatial Data', 'Green Building Labs'], projects: 6, icon: Building2, color: '#3B82F6' },
  { id: 'jpg', name: 'JPG / Kulim', type: 'GLC Investee', country: 'Malaysia', flag: '🇲🇾', tier: 'anchor', sector: 'Agrifood', description: 'Major plantation group with vast estate data. Pioneering precision agriculture and equatorial crop analytics.', capabilities: ['Tropical Crop Dataset (850K)', 'Plantation Analytics', 'Supply Chain Data'], projects: 5, icon: Wheat, color: '#22C55E' },
  { id: 'qsr', name: 'QSR Brands', type: 'GLC Investee', country: 'Malaysia', flag: '🇲🇾', tier: 'anchor', sector: 'Food Services', description: 'Major QSR operator across Southeast Asia with millions of POS transactions and extensive supply chain data.', capabilities: ['POS Transaction Data (12M)', 'Outlet-Level Demand Data', 'Supply Chain Intelligence'], projects: 4, icon: UtensilsCrossed, color: '#F97316' },
  { id: 'gsc', name: 'Global Semiconductor Corp', type: 'MNC', country: 'South Korea', flag: '🇰🇷', tier: 'anchor', sector: 'Semiconductor', description: 'Strategic anchor tenant with 10-year co-investment commitment. Board-level governance role in Semiconductor Guild.', capabilities: ['Cleanroom (2,400m²)', 'Wafer Testing', 'EDA Tools', 'Supply Chain Data'], projects: 3, icon: Cpu, color: '#6366F1' },
  { id: 'sinogreen', name: 'SinoGreen Manufacturing', type: 'MNC', country: 'China', flag: '🇨🇳', tier: 'partner', sector: 'Manufacturing', description: 'Dedicated IBTEC facility for advanced electronics manufacturing. 2-year commitment with expansion options.', capabilities: ['GMP Manufacturing Bay', 'Advanced Electronics Assembly', 'Quality Testing Lab'], projects: 2, icon: Factory, color: '#3B82F6' },
  { id: 'pacific-bio', name: 'Pacific BioSciences', type: 'MNC', country: 'USA', flag: '🇺🇸', tier: 'partner', sector: 'Life Sciences', description: 'Custom lab build-out for genomics research. 3-year commitment with biobank access agreement.', capabilities: ['Genomics Lab', 'Sequencing Equipment', 'Bioinformatics Pipeline'], projects: 2, icon: Dna, color: '#EC4899' },
  { id: 'tropicai', name: 'TropicAI Labs', type: 'Startup', country: 'Malaysia', flag: '🇲🇾', tier: 'resident', sector: 'Healthcare', description: 'Running 6-month sprint on tropical disease diagnostics using AI and KPJ clinical data.', capabilities: ['AI Diagnostic Models', 'Computer Vision for Pathology'], projects: 1, icon: Beaker, color: '#E11D48' },
  { id: 'urbanfarm', name: 'UrbanFarm Technologies', type: 'Corporate Innovation', country: 'Japan', flag: '🇯🇵', tier: 'resident', sector: 'Agrifood', description: 'Japanese conglomerate innovation team piloting vertical farming with IBTEC agritech cluster.', capabilities: ['Vertical Farming Systems', 'Indoor Agriculture Sensors'], projects: 1, icon: Wheat, color: '#22C55E' },
  { id: 'smartmobility', name: 'SmartMobility ASEAN', type: 'Startup', country: 'Singapore', flag: '🇸🇬', tier: 'resident', sector: 'Autonomous', description: 'Autonomous vehicle testing programme in the IBTEC logistics corridor.', capabilities: ['AV Software Stack', 'Lidar/Sensor Suite'], projects: 1, icon: Building2, color: '#06B6D4' },
  { id: 'novapharma', name: 'NovaPharma AG', type: 'MNC', country: 'Switzerland', flag: '🇨🇭', tier: 'explorer', sector: 'Healthcare', description: 'Evaluating IBTEC for tropical disease clinical trials. Interested in KPJ patient cohorts and biotech GMP capacity.', capabilities: [], projects: 0, icon: Heart, color: '#E11D48' },
  { id: 'greencell', name: 'GreenCell Battery Co.', type: 'Startup', country: 'South Korea', flag: '🇰🇷', tier: 'explorer', sector: 'Manufacturing', description: 'Exploring ASEAN manufacturing partnerships for biosimilar production. Interested in GMP capacity.', capabilities: [], projects: 0, icon: Factory, color: '#22C55E' },
  { id: 'agrimind', name: 'AgriMind AI', type: 'Startup', country: 'Singapore', flag: '🇸🇬', tier: 'explorer', sector: 'Agrifood', description: 'Seeking tropical crop datasets for agricultural AI model training. Interested in IBTEC field testing.', capabilities: [], projects: 0, icon: Wheat, color: '#22C55E' },
  { id: 'dataforge', name: 'DataForge Analytics', type: 'Startup', country: 'USA', flag: '🇺🇸', tier: 'explorer', sector: 'Data Analytics', description: 'Interested in equatorial agricultural AI deployment and IBTEC IoT sensor network access.', capabilities: [], projects: 0, icon: Beaker, color: '#3B82F6' },
  { id: 'medtech-innov', name: 'MedTech Innovations', type: 'MNC', country: 'UK', flag: '🇬🇧', tier: 'explorer', sector: 'Healthcare', description: 'Evaluating Southeast Asian medtech market entry through IBTEC Life Sciences Guild.', capabilities: [], projects: 0, icon: Heart, color: '#E11D48' },
  { id: 'cleanenergy', name: 'CleanEnergy Solutions', type: 'Startup', country: 'Germany', flag: '🇩🇪', tier: 'explorer', sector: 'Energy', description: 'Exploring DC cooling innovation partnerships with IBTEC data centre tenants.', capabilities: [], projects: 0, icon: Beaker, color: '#06B6D4' },
]

const tierColors: Record<string, string> = {
  explorer: '#3B82F6',
  resident: '#22C55E',
  partner: '#F59E0B',
  anchor: '#D4A847',
}

export default function TenantsPage() {
  const [search, setSearch] = useState('')
  const [tierFilter, setTierFilter] = useState<string>('all')

  const filtered = organisations.filter((org) => {
    const matchesSearch = org.name.toLowerCase().includes(search.toLowerCase()) || org.sector.toLowerCase().includes(search.toLowerCase())
    const matchesTier = tierFilter === 'all' || org.tier === tierFilter
    return matchesSearch && matchesTier
  })

  return (
    <div className="space-y-6 max-w-[1400px] mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-text-primary">Tenant & Organisation Directory</h1>
        <p className="text-text-secondary text-sm mt-1">
          {organisations.length} organisations across 4 engagement tiers — from global Explorers to strategic Anchors
        </p>
      </div>

      {/* Search and Filter */}
      <div className="flex items-center gap-3">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search organisations by name or sector..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-surface border border-border rounded-lg text-sm text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-primary"
          />
        </div>
        <div className="flex items-center gap-1">
          <Filter className="w-4 h-4 text-text-secondary" />
          {['all', 'anchor', 'partner', 'resident', 'explorer'].map((tier) => (
            <button
              key={tier}
              onClick={() => setTierFilter(tier)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                tierFilter === tier
                  ? 'bg-primary/10 text-primary border border-primary/30'
                  : 'bg-surface border border-border text-text-secondary hover:text-text-primary'
              }`}
            >
              {tier === 'all' ? 'All' : tier.charAt(0).toUpperCase() + tier.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Tier Summary */}
      <div className="grid grid-cols-4 gap-3">
        {[
          { tier: 'Explorer', count: 6, color: '#3B82F6', desc: 'Digital access' },
          { tier: 'Resident', count: 3, color: '#22C55E', desc: '3-12 month presence' },
          { tier: 'Partner', count: 2, color: '#F59E0B', desc: 'Dedicated facility' },
          { tier: 'Anchor', count: 5, color: '#D4A847', desc: 'Strategic co-investment' },
        ].map((t) => (
          <div key={t.tier} className="bg-surface border border-border rounded-lg p-3 text-center">
            <div className="text-2xl font-bold" style={{ color: t.color }}>{t.count}</div>
            <div className="text-xs font-semibold text-text-primary">{t.tier}s</div>
            <div className="text-[10px] text-text-secondary">{t.desc}</div>
          </div>
        ))}
      </div>

      {/* Organisation Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {filtered.map((org) => (
          <div key={org.id} className="bg-surface border border-border rounded-lg p-4 hover:border-primary/30 transition-colors cursor-pointer relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-0.5" style={{ backgroundColor: tierColors[org.tier] }} />
            <div className="flex items-start gap-3 mt-1">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg" style={{ backgroundColor: `${org.color}15` }}>
                <org.icon className="w-5 h-5" style={{ color: org.color }} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-text-primary truncate">{org.name}</h3>
                  <span className="text-sm">{org.flag}</span>
                </div>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-[10px] px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: `${tierColors[org.tier]}15`, color: tierColors[org.tier] }}>
                    {org.tier.toUpperCase()}
                  </span>
                  <span className="text-[10px] text-text-secondary">{org.type}</span>
                  <span className="text-[10px] text-text-secondary flex items-center gap-0.5">
                    <MapPin className="w-3 h-3" />{org.country}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-xs text-text-secondary mt-2 line-clamp-2">{org.description}</p>
            {org.capabilities.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {org.capabilities.slice(0, 3).map((cap) => (
                  <span key={cap} className="text-[9px] px-1.5 py-0.5 rounded bg-surface-elevated text-text-secondary">{cap}</span>
                ))}
              </div>
            )}
            <div className="flex items-center justify-between mt-3 text-[10px] text-text-secondary">
              <span>{org.projects} active projects</span>
              <span className="text-primary flex items-center gap-0.5">View profile <ChevronRight className="w-3 h-3" /></span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
