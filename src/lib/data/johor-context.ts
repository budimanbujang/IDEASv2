export interface EconomicIndicator {
  label: string
  value: string
  trend: 'up' | 'down' | 'stable'
  detail: string
}

export interface HistoricalCycle {
  name: string
  period: string
  status: 'success' | 'partial' | 'failed'
  description: string
  failureMode: string
}

export interface CompetitiveComparison {
  dimension: string
  withoutIdeas: string
  withIdeas: string
}

export const economicIndicators: EconomicIndicator[] = [
  { label: 'Johor GDP', value: 'RM138.4B', trend: 'up', detail: '5.2% growth YoY, 3rd largest state economy in Malaysia' },
  { label: 'FDI Inflow', value: 'RM28.6B', trend: 'up', detail: '18% increase driven by semiconductor and data centre investments' },
  { label: 'Manufacturing Share', value: '42%', trend: 'stable', detail: 'Manufacturing remains dominant but services sector growing' },
  { label: 'Youth Unemployment', value: '8.4%', trend: 'down', detail: 'Brain drain to Singapore remains a challenge, down from 9.1%' },
  { label: 'R&D Spending (% GDP)', value: '0.8%', trend: 'up', detail: 'Below national target of 2.5%, but improving from 0.6%' },
  { label: 'Tech Workforce', value: '45,000', trend: 'up', detail: '12% growth YoY, but 15,000 unfilled tech positions' },
  { label: 'Startup Ecosystem Value', value: 'RM2.1B', trend: 'up', detail: 'Growing but small compared to Singapore (USD 14B)' },
  { label: 'Singapore Proximity', value: '2km', trend: 'stable', detail: 'RTS Link (2027) will connect JB Sentral to Woodlands in 5 minutes' },
  { label: 'Average Monthly Wage', value: 'RM3,200', trend: 'up', detail: '40-60% lower than Singapore equivalent roles, attracting nearshoring' },
  { label: 'Special Economic Zone', value: 'JS-SEZ', trend: 'up', detail: 'Johor-Singapore SEZ established December 2024, tax incentives for tech' },
]

export const historicalCycles: HistoricalCycle[] = [
  {
    name: 'Iskandar Malaysia (2006-present)',
    period: '2006-present',
    status: 'partial',
    description: 'RM383B development corridor spanning 2,217 km² in southern Johor. Successfully attracted property development and some manufacturing, but failed to create a genuine innovation ecosystem or knowledge economy cluster.',
    failureMode: 'Over-reliance on property speculation rather than productive innovation. Insufficient focus on building an innovation ecosystem with deep institutional capabilities. Many flagship projects remain incomplete or underperforming.',
  },
  {
    name: 'Multimedia Super Corridor (1996-2020)',
    period: '1996-2020',
    status: 'partial',
    description: 'Malaysia\'s flagship ICT initiative spanning from KL to KLIA. Successfully created Cyberjaya as a tech hub and attracted multinational BPO operations, but failed to produce globally competitive tech companies or deep innovation.',
    failureMode: 'Tax incentives attracted cost-centre operations (BPO, shared services) rather than R&D centres. Cyberjaya became a dormitory town rather than a vibrant innovation district. Insufficient focus on building local capability and IP creation.',
  },
  {
    name: 'BioValley Malaysia (2005-2015)',
    period: '2005-2015',
    status: 'failed',
    description: 'Ambitious biotech initiative to position Malaysia as a global biotech hub. Invested RM2B+ but failed to produce significant commercial outcomes or attract major biotech tenants.',
    failureMode: 'Top-down government initiative without organic industry demand. Insufficient critical mass of talent and research capability. Disconnected from clinical infrastructure and market needs. No anchor tenant strategy.',
  },
  {
    name: 'Kulim Hi-Tech Park (1996-present)',
    period: '1996-present',
    status: 'partial',
    description: 'Northern Malaysia semiconductor and electronics manufacturing cluster. Successfully attracted Intel, Infineon, and other chip manufacturers. Generated significant employment but limited upstream R&D activity.',
    failureMode: 'Attracted manufacturing operations but not design or R&D centres. Limited knowledge spillovers between tenants. No mechanism for cross-company collaboration or ecosystem effects. Remains primarily a manufacturing zone.',
  },
  {
    name: 'Petronas Technology Park (2003-present)',
    period: '2003-present',
    status: 'success',
    description: 'Petronas-anchored R&D hub in Bangi that successfully built deep capabilities in upstream O&G technology. Produced genuine IP and commercial products. Strong anchor tenant model with clear industry focus.',
    failureMode: 'Success was highly dependent on single anchor tenant (Petronas). Limited spillover to non-O&G sectors. Not easily replicable without a similarly deep-pocketed and committed anchor.',
  },
]

export const competitiveComparisons: CompetitiveComparison[] = [
  {
    dimension: 'Innovation Model',
    withoutIdeas: 'Isolated industrial parks with minimal cross-tenant collaboration',
    withIdeas: 'Guild-based innovation ecosystem with structured cross-vertical collaboration',
  },
  {
    dimension: 'Talent Pipeline',
    withoutIdeas: 'Brain drain to Singapore continues at 15,000+ graduates/year',
    withIdeas: 'Talent academy + guild residencies create compelling local career paths',
  },
  {
    dimension: 'FDI Quality',
    withoutIdeas: 'Cost-centre FDI: BPO, assembly, warehousing',
    withIdeas: 'Innovation-centre FDI: R&D labs, IP creation, advanced manufacturing',
  },
  {
    dimension: 'Data Economy',
    withoutIdeas: 'Data locked in silos, no monetisation, limited AI capability',
    withIdeas: 'Data marketplace generating RM100M+ revenue, cross-sector AI innovation',
  },
  {
    dimension: 'Global Connectivity',
    withoutIdeas: 'Bilateral trade relationships, no innovation network',
    withIdeas: 'Federation of 10+ global innovation hubs with reciprocal access',
  },
  {
    dimension: 'Smart City Capability',
    withoutIdeas: 'Fragmented smart city pilots with no integration',
    withIdeas: 'AI-native city operations with autonomous management across 8 dimensions',
  },
  {
    dimension: 'Halal Economy',
    withoutIdeas: 'Manual certification, no digital intelligence, limited export facilitation',
    withIdeas: 'AI-powered Halal certification platform serving OIC countries, RM500M+ exports',
  },
  {
    dimension: 'JS-SEZ Impact',
    withoutIdeas: 'Tax incentives attract low-value manufacturing and logistics',
    withIdeas: 'IBTEC positions JS-SEZ as an innovation anchor, attracting high-value R&D investment',
  },
]
