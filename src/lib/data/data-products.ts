export interface DataProduct {
  id: string
  name: string
  description: string
  category: string
  icon: string
  pricingTiers: { tier: string; price: string; available: boolean }[]
  subscriberCount: number
  rating: number
  revenueMtd: number
  sampleAvailable: boolean
  tags: string[]
}

export const dataProducts: DataProduct[] = [
  {
    id: 'dp-tropical-weather',
    name: 'Tropical Microclimate Dataset',
    description: 'High-resolution (100m grid) microclimate data from 200+ environmental sensors across the IBTEC township. Includes temperature, humidity, rainfall, wind, UV index, and air quality measurements at 5-minute intervals. Ideal for tropical building design, agricultural planning, and climate modelling.',
    category: 'Environmental',
    icon: 'CloudSun',
    pricingTiers: [
      { tier: 'Explorer', price: 'Free (sample)', available: true },
      { tier: 'Resident', price: 'RM2,500/month', available: true },
      { tier: 'Partner', price: 'RM1,500/month', available: true },
      { tier: 'Anchor', price: 'Included', available: true },
    ],
    subscriberCount: 14,
    rating: 4.7,
    revenueMtd: 28500,
    sampleAvailable: true,
    tags: ['weather', 'microclimate', 'tropical', 'IoT', 'environmental'],
  },
  {
    id: 'dp-urban-mobility',
    name: 'Urban Mobility Intelligence Feed',
    description: 'Real-time and historical mobility data including traffic flow, pedestrian counts, AV telemetry, cycling patterns, and public transport usage. Anonymised and aggregated to protect individual privacy. Updated every 15 minutes with 2-year historical archive.',
    category: 'Mobility',
    icon: 'Car',
    pricingTiers: [
      { tier: 'Explorer', price: 'Free (sample)', available: true },
      { tier: 'Resident', price: 'RM4,000/month', available: true },
      { tier: 'Partner', price: 'RM2,500/month', available: true },
      { tier: 'Anchor', price: 'Included', available: true },
    ],
    subscriberCount: 8,
    rating: 4.5,
    revenueMtd: 22000,
    sampleAvailable: true,
    tags: ['traffic', 'mobility', 'autonomous vehicles', 'pedestrian', 'real-time'],
  },
  {
    id: 'dp-building-performance',
    name: 'Smart Building Performance Analytics',
    description: 'Comprehensive building performance data from 12 smart buildings covering energy consumption, HVAC efficiency, occupancy patterns, indoor air quality, and water usage. Includes benchmarking against Green Building Index (GBI) standards and tropical building performance baselines.',
    category: 'PropTech',
    icon: 'Building2',
    pricingTiers: [
      { tier: 'Explorer', price: 'RM1,000/month', available: true },
      { tier: 'Resident', price: 'RM3,500/month', available: true },
      { tier: 'Partner', price: 'RM2,000/month', available: true },
      { tier: 'Anchor', price: 'Included', available: true },
    ],
    subscriberCount: 11,
    rating: 4.8,
    revenueMtd: 35200,
    sampleAvailable: true,
    tags: ['smart building', 'energy', 'HVAC', 'occupancy', 'green building'],
  },
  {
    id: 'dp-plantation-insights',
    name: 'Equatorial Plantation Insights',
    description: 'AI-enriched plantation analytics combining satellite imagery, soil sensor data, and 15 years of yield records from 50,000+ hectares. Includes crop health indices, pest risk predictions, and yield forecasts. Updated weekly with seasonal models.',
    category: 'Agriculture',
    icon: 'Wheat',
    pricingTiers: [
      { tier: 'Explorer', price: 'Free (sample)', available: true },
      { tier: 'Resident', price: 'RM5,000/month', available: true },
      { tier: 'Partner', price: 'RM3,000/month', available: true },
      { tier: 'Anchor', price: 'RM1,500/month', available: true },
    ],
    subscriberCount: 6,
    rating: 4.6,
    revenueMtd: 21000,
    sampleAvailable: true,
    tags: ['plantation', 'satellite imagery', 'yield prediction', 'palm oil', 'precision agriculture'],
  },
  {
    id: 'dp-energy-grid',
    name: 'Microgrid Energy Marketplace Data',
    description: 'Real-time energy generation, consumption, storage, and trading data from IBTEC\'s microgrid ecosystem. Covers solar output, battery state-of-charge, grid exchange, and carbon intensity metrics per zone. Enables energy optimisation algorithm development and sustainability reporting.',
    category: 'Energy',
    icon: 'Zap',
    pricingTiers: [
      { tier: 'Explorer', price: 'RM500/month', available: true },
      { tier: 'Resident', price: 'RM2,000/month', available: true },
      { tier: 'Partner', price: 'RM1,200/month', available: true },
      { tier: 'Anchor', price: 'Included', available: true },
    ],
    subscriberCount: 9,
    rating: 4.4,
    revenueMtd: 14400,
    sampleAvailable: true,
    tags: ['energy', 'solar', 'microgrid', 'battery', 'carbon', 'sustainability'],
  },
  {
    id: 'dp-halal-supply-chain',
    name: 'Halal Supply Chain Intelligence',
    description: 'Comprehensive Halal supply chain dataset covering ingredient sourcing, certification status, supplier compliance scores, and market demand signals across Southeast Asia. Includes blockchain-verified traceability records and JAKIM compliance analytics.',
    category: 'Food & Halal',
    icon: 'ShieldCheck',
    pricingTiers: [
      { tier: 'Explorer', price: 'RM2,000/month', available: true },
      { tier: 'Resident', price: 'RM6,000/month', available: true },
      { tier: 'Partner', price: 'RM4,000/month', available: true },
      { tier: 'Anchor', price: 'RM2,000/month', available: true },
    ],
    subscriberCount: 5,
    rating: 4.3,
    revenueMtd: 18000,
    sampleAvailable: false,
    tags: ['halal', 'supply chain', 'traceability', 'certification', 'JAKIM', 'food safety'],
  },
]
