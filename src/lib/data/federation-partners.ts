export interface FederationPartner {
  id: string
  name: string
  location: string
  country: string
  countryCode: string
  lat: number
  lng: number
  strategicRationale: string
  status: 'active' | 'negotiating' | 'planned'
  agreementType: string
  reciprocalAccess: boolean
  exchangeResidencies: boolean
  jointProgrammes: string[]
  description: string
}

export const federationPartners: FederationPartner[] = [
  {
    id: 'jtc-one-north',
    name: 'JTC one-north',
    location: 'one-north, Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    lat: 1.2996,
    lng: 103.7876,
    strategicRationale: 'Singapore\'s premier science and technology hub with established biomedical, ICT, and media clusters. Provides IBTEC tenants access to Singapore\'s deep tech ecosystem, venture capital networks, and regulatory sandbox for fintech and healthtech.',
    status: 'active',
    agreementType: 'Bilateral Innovation Partnership',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['Cross-border Clinical Trials', 'Shared IP Framework', 'Talent Exchange Programme', 'Joint Demo Days'],
    description: 'JTC one-north is a 200-hectare innovation district housing Biopolis, Fusionopolis, and Mediapolis. The partnership enables IBTEC tenants to tap into Singapore\'s world-class research infrastructure while offering Singapore startups access to Malaysia\'s manufacturing scale and cost advantages.',
  },
  {
    id: 'biopolis-fusionopolis',
    name: 'Biopolis / Fusionopolis',
    location: 'one-north, Singapore',
    country: 'Singapore',
    countryCode: 'SG',
    lat: 1.3035,
    lng: 103.7900,
    strategicRationale: 'Home to A*STAR research institutes with deep expertise in biomedical sciences, data science, and advanced manufacturing. Complements IBTEC\'s applied research focus with fundamental research capabilities and access to Singapore\'s national research infrastructure.',
    status: 'active',
    agreementType: 'Research Collaboration Agreement',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['Joint Genomics Research', 'AI Model Sharing', 'Biobank Data Federation', 'Researcher Exchange'],
    description: 'Biopolis and Fusionopolis house over 50 research organisations including A*STAR institutes. The partnership focuses on complementary research collaboration, with IBTEC providing tropical disease datasets and clinical trial infrastructure while accessing Singapore\'s advanced computational biology and materials science capabilities.',
  },
  {
    id: 'brainport-eindhoven',
    name: 'Brainport Eindhoven',
    location: 'Eindhoven, Netherlands',
    country: 'Netherlands',
    countryCode: 'NL',
    lat: 51.4416,
    lng: 5.4697,
    strategicRationale: 'Europe\'s leading high-tech ecosystem anchored by ASML, Philips, and NXP. Critical for IBTEC\'s semiconductor guild development, providing access to lithography expertise, advanced materials, and the European semiconductor supply chain.',
    status: 'active',
    agreementType: 'Strategic Innovation Alliance',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['Semiconductor R&D Exchange', 'Smart City Best Practices', 'Design Thinking Workshops', 'Supply Chain Integration'],
    description: 'Brainport Eindhoven is the technological heart of the Netherlands, generating 35% of Dutch private R&D spending. The alliance provides IBTEC\'s semiconductor guild with access to the world\'s most advanced chip-making ecosystem while offering Brainport companies a gateway to Southeast Asian markets and tropical testing environments.',
  },
  {
    id: 'pangyo-techno-valley',
    name: 'Pangyo Techno Valley',
    location: 'Seongnam, South Korea',
    country: 'South Korea',
    countryCode: 'KR',
    lat: 37.3947,
    lng: 127.1118,
    strategicRationale: 'South Korea\'s Silicon Valley with 1,300+ tech companies including Samsung, Kakao, and NCSoft. Provides access to Korea\'s battery technology, AI, and gaming ecosystems. Strategic for GreenCell Battery\'s tropical battery R&D collaboration.',
    status: 'negotiating',
    agreementType: 'Innovation Corridor MOU',
    reciprocalAccess: true,
    exchangeResidencies: false,
    jointProgrammes: ['Battery Technology Exchange', 'K-Startup ASEAN Bridge', 'AI Research Collaboration'],
    description: 'Pangyo Techno Valley houses Korea\'s top technology companies and 1,300+ startups. The MOU focuses on battery technology collaboration, AI talent exchange, and creating a pipeline for Korean startups to access Southeast Asian markets through IBTEC\'s ecosystem.',
  },
  {
    id: 'zhangjiang-hi-tech',
    name: 'Zhangjiang Hi-Tech Park',
    location: 'Shanghai, China',
    country: 'China',
    countryCode: 'CN',
    lat: 31.2047,
    lng: 121.5906,
    strategicRationale: 'China\'s premier innovation zone with 22,000+ enterprises spanning semiconductors, biotech, and AI. Key for SinoGreen Manufacturing partnership and access to China\'s advanced manufacturing and supply chain capabilities.',
    status: 'negotiating',
    agreementType: 'Bilateral Technology Partnership',
    reciprocalAccess: false,
    exchangeResidencies: false,
    jointProgrammes: ['Green Manufacturing Standards', 'Semiconductor Collaboration', 'Joint Patent Programme'],
    description: 'Zhangjiang Hi-Tech Park is Shanghai\'s flagship innovation district with particular strength in integrated circuits, pharmaceuticals, and software. The partnership provides IBTEC with access to China\'s manufacturing scale while offering Zhangjiang companies Halal market access and tropical R&D capabilities.',
  },
  {
    id: 'station-f-paris-saclay',
    name: 'Station F / Paris-Saclay',
    location: 'Paris, France',
    country: 'France',
    countryCode: 'FR',
    lat: 48.8342,
    lng: 2.3716,
    strategicRationale: 'The world\'s largest startup campus combined with Paris-Saclay\'s research cluster (home to 15% of France\'s public research). Strong in AI, deeptech, and climate tech. Provides access to European startup talent and French research excellence.',
    status: 'planned',
    agreementType: 'Startup Exchange Programme',
    reciprocalAccess: true,
    exchangeResidencies: true,
    jointProgrammes: ['Franco-Malaysian Startup Bridge', 'Climate Tech Accelerator', 'AI Ethics Research'],
    description: 'Station F is the world\'s largest startup campus with 1,000+ startups, while Paris-Saclay is France\'s premier research cluster. The planned programme will create a startup exchange pipeline and joint climate tech accelerator, leveraging France\'s deeptech expertise and IBTEC\'s tropical living lab environment.',
  },
  {
    id: 'fraunhofer-network',
    name: 'Fraunhofer Network',
    location: 'Munich, Germany',
    country: 'Germany',
    countryCode: 'DE',
    lat: 48.1351,
    lng: 11.5820,
    strategicRationale: 'Europe\'s largest applied research organisation with 76 institutes and 30,000+ researchers. Unmatched capability in industrial R&D, Industry 4.0, and technology transfer. Critical for bridging IBTEC\'s applied research to industrial-scale deployment.',
    status: 'planned',
    agreementType: 'Applied Research Partnership',
    reciprocalAccess: false,
    exchangeResidencies: true,
    jointProgrammes: ['Industry 4.0 Technology Transfer', 'Joint Applied Research Projects', 'PhD Exchange Programme'],
    description: 'The Fraunhofer-Gesellschaft is the world\'s leading applied research organisation, specialising in translating scientific discoveries into commercial applications. The planned partnership will focus on technology transfer methodologies, Industry 4.0 best practices, and joint research projects in smart manufacturing and sustainable energy systems.',
  },
]
