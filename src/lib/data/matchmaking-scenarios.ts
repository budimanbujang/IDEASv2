export interface MatchmakingScenario {
  id: string
  seekerName: string
  seekerCountry: string
  seekerProfile: string
  matchedCapabilities: string[]
  matchScore: number
  matchReasoning: string[]
  seekerLogo: string
}

export const matchmakingScenarios: MatchmakingScenario[] = [
  {
    id: 'match-novapharma',
    seekerName: 'NovaPharma AG',
    seekerCountry: 'Switzerland',
    seekerProfile: 'Swiss pharmaceutical company specialising in tropical disease therapeutics. Seeking clinical trial infrastructure for dengue vaccine candidate, access to Southeast Asian patient populations, and biobank samples for pharmacogenomics research. Budget: CHF 5M for 2-year engagement.',
    matchedCapabilities: [
      'Clinical Trial Infrastructure (KPJ Healthcare) — 30+ hospital network for multi-site Phase II/III trials',
      'Tropical Disease Biobank (KPJ Healthcare) — 120K samples from Southeast Asian populations',
      'AI Drug Discovery Pipeline (NovaPharma AG internal + TropicAI Labs collaboration)',
      'GMP Manufacturing Bay (Pacific BioSciences) — 3 months spare capacity for biologics production',
      'Point-of-Care Diagnostics Platform (MedTech Innovations) — companion diagnostic development',
    ],
    matchScore: 94,
    matchReasoning: [
      'KPJ\'s hospital network directly addresses NovaPharma\'s need for tropical disease clinical trial sites with established regulatory relationships',
      'Biobank provides access to underrepresented Southeast Asian genomic data critical for pharmacogenomics study design',
      'GMP bay availability aligns with NovaPharma\'s timeline for small-batch biologics manufacturing',
      'Co-location with MedTech Innovations enables companion diagnostic co-development, increasing commercial value',
      'Recommended tier: Resident (1-2 year commitment with dedicated lab space in Biotech Cluster)',
    ],
    seekerLogo: '💊',
  },
  {
    id: 'match-greencell',
    seekerName: 'GreenCell Battery',
    seekerCountry: 'South Korea',
    seekerProfile: 'Korean battery technology firm developing next-generation solid-state batteries optimised for tropical climates. Seeking testing facilities that simulate equatorial conditions (35°C, 90% humidity), smart grid integration testbed, and potential manufacturing pilot site. Budget: KRW 8B for 18-month programme.',
    matchedCapabilities: [
      'Tropical Battery Testing Chamber (GreenCell Battery — co-located) — 6 environmental test chambers',
      'Microgrid Energy Marketplace (IBTEC) — real-world smart grid integration testbed',
      'Tropical Microclimate Dataset (IBTEC) — high-resolution environmental data for model calibration',
      'Sustainable Packaging Pilot Line (SinoGreen Manufacturing) — battery enclosure prototyping',
      'Smart Building IoT Network (JLG) — building-integrated battery storage pilot sites',
    ],
    matchScore: 88,
    matchReasoning: [
      'IBTEC\'s equatorial location provides authentic tropical testing conditions unavailable in Korea',
      'Live microgrid enables real-world battery-grid integration testing beyond lab simulation',
      'Co-location with SinoGreen opens sustainable battery enclosure manufacturing collaboration',
      'JLG\'s smart buildings offer pilot deployment sites for building-integrated battery storage',
      'Recommended tier: Resident (18-month commitment with dedicated space in Energy Lab)',
    ],
    seekerLogo: '🔋',
  },
  {
    id: 'match-agrimind',
    seekerName: 'AgriMind AI',
    seekerCountry: 'Singapore',
    seekerProfile: 'Singapore-based AI startup building computer vision models for tropical crop disease detection. Seeking access to labelled plantation imagery datasets, field testing environments, and agronomist domain expertise. Seed-funded with SGD 2M, team of 8 ML engineers.',
    matchedCapabilities: [
      'Tropical Crop Dataset (JPG/Kulim) — 850K records of yield, pest, and disease data',
      'Plantation Analytics Platform (JPG/Kulim) — satellite imagery and drone survey data',
      'Controlled Environment Agriculture Lab (UrbanFarm Technologies) — controlled testing environment',
      'Southeast Asian Foundation Models (TropicAI Labs) — pre-trained models for fine-tuning',
      'AI & Data Science Talent Pool (TropicAI Labs) — mentorship and collaboration network',
    ],
    matchScore: 91,
    matchReasoning: [
      'JPG/Kulim\'s 15-year crop dataset is exactly the training data AgriMind needs — unavailable commercially',
      'Plantation access enables real-world field testing and validation of computer vision models',
      'TropicAI\'s foundation models can accelerate AgriMind\'s model development by 3-6 months',
      'UrbanFarm\'s controlled environment enables reproducible testing before field deployment',
      'Recommended tier: Explorer (6-month trial with path to Resident if results are promising)',
    ],
    seekerLogo: '🌱',
  },
  {
    id: 'match-dataforge',
    seekerName: 'DataForge Analytics',
    seekerCountry: 'United States',
    seekerProfile: 'San Francisco-based analytics firm developing a next-generation city operating system platform. Seeking a living lab environment with diverse IoT sensor networks, real urban data, and willing municipal partners. Series B funded with USD 25M.',
    matchedCapabilities: [
      'Smart Building IoT Network (JLG) — 8,400+ sensors across 12 buildings',
      'Township Digital Twin (JLG) — 500-acre digital twin with BIM and IoT integration',
      'Urban Mobility Intelligence Feed (IBTEC) — traffic, pedestrian, and AV data',
      'AI-Native City Operations (IBTEC) — existing AI agent infrastructure to integrate with',
      '5G Network Slice URLLC (SmartMobility ASEAN) — ultra-low latency for real-time analytics',
    ],
    matchScore: 92,
    matchReasoning: [
      'IBTEC is a purpose-built living lab with the exact sensor diversity DataForge needs — rare globally',
      'The existing digital twin provides a foundation DataForge can extend rather than build from scratch',
      'Real urban data (not synthetic) from a functioning township validates their platform credibly',
      'AI agent infrastructure enables DataForge to demonstrate integration with autonomous city operations',
      'Recommended tier: Partner (3-year commitment to co-develop the city operating system layer)',
    ],
    seekerLogo: '📊',
  },
]
