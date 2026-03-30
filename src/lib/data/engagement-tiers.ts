export interface EngagementTier {
  id: 'explorer' | 'resident' | 'partner' | 'anchor'
  name: string
  tagline: string
  description: string
  color: string
  icon: string
  commitmentLevel: string
  duration: string
  spaceAllocation: string
  dataAccess: string
  ipTerms: string
  investmentRange: string
  benefits: string[]
  requirements: string[]
  idealFor: string
  currentCount: number
  maxCapacity: number
}

export const engagementTiers: EngagementTier[] = [
  {
    id: 'explorer',
    name: 'Explorer',
    tagline: 'Test the waters with low-commitment access',
    description: 'The Explorer tier provides a lightweight entry point for organisations curious about IBTEC\'s ecosystem. Explorers gain access to co-working spaces, curated datasets, and the Discovery Engine to evaluate strategic fit before committing to deeper engagement. Designed for startups, research teams, and international companies exploring Southeast Asian market entry.',
    color: '#8B5CF6',
    icon: 'Compass',
    commitmentLevel: 'Low',
    duration: '3-6 months (renewable)',
    spaceAllocation: 'Hot desk / shared co-working',
    dataAccess: 'Sample datasets and public data catalogues',
    ipTerms: 'Retain full IP; non-exclusive data licence',
    investmentRange: 'RM5,000 - RM25,000/month',
    benefits: [
      'Access to Discovery Engine and capability matching',
      'Co-working space in Innovation Hub',
      'Sample dataset access from guild data catalogues',
      'Invitation to monthly ecosystem meetups and demo days',
      'Mentorship pairing with resident or partner organisations',
      'Eligibility for Grand Challenge submissions',
    ],
    requirements: [
      'Completed Expression of Interest form',
      'Alignment with at least one guild domain',
      'Designated point of contact',
    ],
    idealFor: 'International startups, research teams, and corporations evaluating IBTEC as a potential base for R&D or market entry into Southeast Asia.',
    currentCount: 7,
    maxCapacity: 50,
  },
  {
    id: 'resident',
    name: 'Resident',
    tagline: 'Establish a dedicated presence within the ecosystem',
    description: 'Residents commit to a physical presence within IBTEC, gaining dedicated lab or office space, full data access within their guild, and the ability to participate in collaborative R&D projects. Residents are expected to contribute capabilities back to the ecosystem and actively participate in guild activities.',
    color: '#3B82F6',
    icon: 'Building',
    commitmentLevel: 'Medium',
    duration: '1-3 years',
    spaceAllocation: 'Dedicated office / lab space (50-500m²)',
    dataAccess: 'Full guild datasets with governed access',
    ipTerms: 'Shared IP framework for collaborative projects; retained IP for independent work',
    investmentRange: 'RM50,000 - RM200,000/month',
    benefits: [
      'Dedicated office or lab space in relevant guild zone',
      'Full access to guild-specific datasets and data products',
      'Participation in guild challenge teams and collaborative projects',
      'Access to shared infrastructure (5G, IoT, testing facilities)',
      '5G network slice access for R&D purposes',
      'Priority access to Grand Challenge submissions',
      'Quarterly business review with PMO',
      'Talent pipeline access through university partnerships',
    ],
    requirements: [
      'Minimum 1-year lease commitment',
      'At least 3 FTE on-site',
      'Contribution of at least one capability to the Discovery Engine',
      'Active participation in guild meetings and activities',
    ],
    idealFor: 'Growth-stage startups, SMEs, and R&D teams from larger companies seeking to develop products within IBTEC\'s living lab environment.',
    currentCount: 3,
    maxCapacity: 30,
  },
  {
    id: 'partner',
    name: 'Partner',
    tagline: 'Co-invest and co-create with strategic commitment',
    description: 'Partners make a strategic co-investment commitment to IBTEC, contributing significant capital, capabilities, and data assets. In return, they gain priority access to infrastructure, co-developed IP rights, and a seat at guild leadership tables. Partners are expected to anchor collaborative projects and mentor earlier-stage tenants.',
    color: '#F59E0B',
    icon: 'Handshake',
    commitmentLevel: 'High',
    duration: '3-5 years',
    spaceAllocation: 'Dedicated facility (500-5,000m²) with custom fit-out',
    dataAccess: 'Cross-guild data access with premium analytics',
    ipTerms: 'Co-developed IP with preferential licensing; revenue sharing on joint data products',
    investmentRange: 'RM1M - RM10M co-investment',
    benefits: [
      'Custom-built facility within IBTEC campus',
      'Cross-guild data access and premium analytics services',
      'Co-developed IP rights with preferential licensing terms',
      'Guild leadership and steering committee participation',
      'Priority matching in Discovery Engine',
      'Revenue sharing on joint data products',
      'Access to Federation Partner network',
      'Dedicated account manager and quarterly strategic reviews',
      'Brand visibility and thought leadership positioning',
    ],
    requirements: [
      'Minimum 3-year strategic commitment',
      'Co-investment of RM1M+ into shared infrastructure or programmes',
      'Contribution of proprietary datasets or capabilities to guild commons',
      'Active mentorship of at least 2 resident or explorer organisations',
      'Participation in governance structures',
    ],
    idealFor: 'Established companies seeking strategic partnerships in Southeast Asia, contributing domain expertise and co-investing in shared innovation infrastructure.',
    currentCount: 4,
    maxCapacity: 15,
  },
  {
    id: 'anchor',
    name: 'Anchor',
    tagline: 'Shape the ecosystem as a founding strategic partner',
    description: 'Anchor tenants are the foundational partners that define IBTEC\'s strategic direction. They make long-term (5-10 year) co-investment commitments, anchor guild formation, contribute landmark facilities, and take governance roles. Anchors receive the highest level of customisation, data access, and IP benefits, and are expected to catalyse ecosystem growth around their core domains.',
    color: '#E11D48',
    icon: 'Anchor',
    commitmentLevel: 'Very High',
    duration: '5-10 years',
    spaceAllocation: 'Major facility (5,000m²+) or campus-within-campus',
    dataAccess: 'Full ecosystem data access with sovereign data rights',
    ipTerms: 'Preferential IP terms; co-ownership of guild IP portfolio; first-refusal on commercialisation',
    investmentRange: 'RM10M+ co-investment with equity participation options',
    benefits: [
      'Major dedicated facility with full custom design',
      'Full ecosystem data access across all guilds',
      'Guild formation and leadership rights',
      'Board-level governance participation',
      'Co-ownership of guild IP portfolio',
      'First-refusal rights on commercialisation of guild innovations',
      'Revenue sharing on ecosystem-wide data products',
      'Dedicated C-suite relationship management',
      'Federation Partner introductions and joint venture facilitation',
      'Tax incentives and government co-investment matching',
      'Brand positioning as founding ecosystem partner',
    ],
    requirements: [
      'Minimum 5-year strategic commitment (10-year preferred)',
      'Major capital co-investment (RM10M+)',
      'Commitment to anchor guild formation and leadership',
      'Contribution of landmark facility or infrastructure',
      'Active participation in IBTEC governance board',
      'Commitment to local talent development (minimum 50 jobs)',
    ],
    idealFor: 'Major corporations and conglomerates seeking to establish a long-term strategic presence, anchor industry guilds, and shape the direction of IBTEC\'s innovation ecosystem.',
    currentCount: 3,
    maxCapacity: 6,
  },
]
