export interface Guild {
  id: string
  name: string
  sector: string
  company: string
  description: string
  icon: string
  color: string
  phaseIntroduced: number
  challengeCount: number
  projectCount: number
  dataAssetCount: number
  memberCount: number
  metrics: { label: string; value: string }[]
}

export const guilds: Guild[] = [
  {
    id: 'healthcare',
    name: 'Healthcare Guild',
    sector: 'Healthcare',
    company: 'KPJ Healthcare',
    description: 'Driving healthcare innovation through AI-powered diagnostics, telemedicine, and clinical data analytics. Leveraging KPJ\'s network of 30+ hospitals and clinical datasets to develop next-generation healthcare solutions for tropical diseases and population health.',
    icon: 'Heart',
    color: '#E11D48',
    phaseIntroduced: 0,
    challengeCount: 5,
    projectCount: 8,
    dataAssetCount: 6,
    memberCount: 12,
    metrics: [
      { label: 'AI Models Deployed', value: '4' },
      { label: 'Clinical Trials Active', value: '3' },
      { label: 'Cost Savings', value: 'RM12M' },
    ],
  },
  {
    id: 'proptech',
    name: 'Proptech Guild',
    sector: 'Property & Real Estate',
    company: 'Johor Land Group (JLG)',
    description: 'Transforming property development with IoT-enabled smart buildings, digital twin technology, and evidence-based wellness township design. JLG manages over 10,000 acres of development land across Johor.',
    icon: 'Building2',
    color: '#3B82F6',
    phaseIntroduced: 0,
    challengeCount: 4,
    projectCount: 6,
    dataAssetCount: 5,
    memberCount: 10,
    metrics: [
      { label: 'Smart Buildings', value: '12' },
      { label: 'IoT Sensors', value: '8,400' },
      { label: 'Energy Savings', value: '22%' },
    ],
  },
  {
    id: 'agrifood',
    name: 'Agrifood Guild',
    sector: 'Agriculture & Food',
    company: 'JPG / Kulim',
    description: 'Pioneering precision agriculture and sustainable farming through AI-driven crop analytics, equatorial agricultural models, and supply chain optimisation. JPG/Kulim manages vast plantation estates with rich historical yield data.',
    icon: 'Wheat',
    color: '#22C55E',
    phaseIntroduced: 0,
    challengeCount: 4,
    projectCount: 5,
    dataAssetCount: 7,
    memberCount: 8,
    metrics: [
      { label: 'Yield Improvement', value: '18%' },
      { label: 'Data Points', value: '850K' },
      { label: 'Waste Reduction', value: '24%' },
    ],
  },
  {
    id: 'food-services',
    name: 'Food Services Guild',
    sector: 'Food Services & QSR',
    company: 'QSR Brands',
    description: 'Optimising food service operations through demand forecasting, supply chain intelligence, and Halal compliance AI. QSR Brands operates major quick-service restaurant chains across Southeast Asia with millions of POS transactions.',
    icon: 'UtensilsCrossed',
    color: '#F97316',
    phaseIntroduced: 0,
    challengeCount: 3,
    projectCount: 4,
    dataAssetCount: 4,
    memberCount: 7,
    metrics: [
      { label: 'Outlets Optimised', value: '340' },
      { label: 'Waste Reduced', value: '30%' },
      { label: 'Revenue Uplift', value: 'RM8M' },
    ],
  },
  {
    id: 'life-sciences',
    name: 'Life Sciences Guild',
    sector: 'Life Sciences & Biotech',
    company: 'KPJ + Biotech Cluster',
    description: 'NEW in Phase 1 — Advancing genomics, drug discovery, clinical trials, and tropical disease research. Anchored by KPJ Healthcare\'s clinical infrastructure and new biotech cluster tenants with GMP-certified manufacturing capabilities.',
    icon: 'Dna',
    color: '#EC4899',
    phaseIntroduced: 1,
    challengeCount: 3,
    projectCount: 3,
    dataAssetCount: 4,
    memberCount: 6,
    metrics: [
      { label: 'GMP Bays', value: '4' },
      { label: 'Biobank Samples', value: '120K' },
      { label: 'Patents Filed', value: '7' },
    ],
  },
  {
    id: 'semiconductor',
    name: 'Semiconductor Guild',
    sector: 'Semiconductor & Electronics',
    company: 'Global Semiconductor Corp',
    description: 'NEW in Phase 1 — Driving advanced packaging innovation, chip design, testing, and supply chain intelligence. Anchored by Global Semiconductor Corp as the flagship Anchor tenant with 10-year strategic co-investment commitment.',
    icon: 'Cpu',
    color: '#6366F1',
    phaseIntroduced: 1,
    challengeCount: 4,
    projectCount: 3,
    dataAssetCount: 8,
    memberCount: 5,
    metrics: [
      { label: 'Cleanroom Area', value: '2,400m\u00B2' },
      { label: 'Testing Lines', value: '6' },
      { label: 'Supply Chain Partners', value: '12' },
    ],
  },
]
