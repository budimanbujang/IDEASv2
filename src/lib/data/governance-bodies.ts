export interface GovernanceBody {
  id: string
  name: string
  tier: 'board' | 'psc' | 'pmo' | 'workstream' | 'tac'
  chair: string
  members: string[]
  nextMeeting: string
  pendingDecisions: number
  description: string
}

export const governanceBodies: GovernanceBody[] = [
  {
    id: 'gov-board',
    name: 'IBTEC Board of Directors',
    tier: 'board',
    chair: 'YBhg Dato\' Ahmad Razif',
    members: [
      'YBhg Dato\' Ahmad Razif (Chair)',
      'Dr. Sarah Chen (Independent Director)',
      'En. Mohd Faisal bin Karim (JLG Representative)',
      'Mr. James Whitfield (Global Semiconductor Corp)',
      'Puan Nurul Aisyah (KPJ Healthcare)',
      'Dr. Tan Wei Lin (TropicAI Labs)',
      'Mr. Park Sung-ho (GreenCell Battery, Observer)',
    ],
    nextMeeting: '2026-04-15',
    pendingDecisions: 3,
    description: 'The highest governing body responsible for strategic direction, major investment decisions, and ecosystem policy. Meets quarterly to review phase gate milestones, approve annual budgets, and set the strategic roadmap. Ensures alignment with Johor state development objectives and federal innovation priorities.',
  },
  {
    id: 'gov-psc',
    name: 'Programme Steering Committee',
    tier: 'psc',
    chair: 'Dr. Sarah Chen',
    members: [
      'Dr. Sarah Chen (Chair)',
      'En. Ahmad Hafiz (PMO Director)',
      'Dr. Kavitha Subramaniam (Healthcare Guild Lead)',
      'Ir. Lee Chong Wei (Proptech Guild Lead)',
      'Dr. Amirul Hakim (Agrifood Guild Lead)',
      'Puan Faridah Yusof (Food Services Guild Lead)',
      'Dr. Rajesh Patel (Life Sciences Guild Lead)',
      'Mr. David Huang (Semiconductor Guild Lead)',
      'Ms. Anna Lindqvist (Federation Partners Lead)',
    ],
    nextMeeting: '2026-04-08',
    pendingDecisions: 5,
    description: 'Operational steering body that meets monthly to review project progress, resolve cross-guild dependencies, approve resource allocations, and escalate issues to the Board. Responsible for ensuring phase gate criteria are met on schedule and budget.',
  },
  {
    id: 'gov-pmo',
    name: 'Programme Management Office',
    tier: 'pmo',
    chair: 'En. Ahmad Hafiz',
    members: [
      'En. Ahmad Hafiz (PMO Director)',
      'Ms. Lisa Wong (Project Controls)',
      'Mr. Ravi Krishnan (Data & Analytics Lead)',
      'Puan Siti Aminah (Stakeholder Engagement)',
      'Mr. Chen Wei (Technical Architecture)',
      'Ms. Priya Nair (Risk & Compliance)',
      'En. Azman Shah (Finance & Procurement)',
    ],
    nextMeeting: '2026-04-01',
    pendingDecisions: 8,
    description: 'The operational engine of IBTEC, responsible for day-to-day programme coordination, sprint planning, risk management, and stakeholder reporting. Meets weekly to track sprint milestones, manage budgets, and coordinate across workstreams. Prepares materials for PSC and Board meetings.',
  },
  {
    id: 'gov-workstream',
    name: 'Workstream Leads Forum',
    tier: 'workstream',
    chair: 'Ms. Lisa Wong',
    members: [
      'Ms. Lisa Wong (Chair, Project Controls)',
      'Ir. Bakri Ahmad (Digital Infrastructure)',
      'Dr. Mei Ling Tan (Data & Analytics)',
      'Mr. Arjun Menon (Ecosystem Development)',
      'Puan Zarina Ismail (Physical Infrastructure)',
      'Dr. James Ong (AI & Automation)',
      'Ms. Rachel Lim (Innovation Programmes)',
      'En. Kamal Arifin (Talent Development)',
      'Mr. Thomas Mueller (Sustainability)',
    ],
    nextMeeting: '2026-04-02',
    pendingDecisions: 12,
    description: 'Bi-weekly coordination forum for all workstream leads to synchronise activities, resolve inter-workstream dependencies, and share progress updates. Each workstream lead manages a portfolio of catalytic projects and reports to the PMO on sprint milestones and risk status.',
  },
  {
    id: 'gov-tac',
    name: 'Technical Advisory Committee',
    tier: 'tac',
    chair: 'Prof. Dr. Lim Kok Wing',
    members: [
      'Prof. Dr. Lim Kok Wing (Chair, UTM)',
      'Prof. Ayako Tanaka (University of Tokyo)',
      'Dr. Michael Brauer (ETH Zurich)',
      'Prof. Srinivas Reddy (IIT Madras)',
      'Dr. Fatimah Al-Rashid (KAUST)',
      'Mr. Bram van der Berg (Brainport Eindhoven)',
      'Dr. Chantal Dubois (Station F / Paris-Saclay)',
    ],
    nextMeeting: '2026-05-12',
    pendingDecisions: 2,
    description: 'External advisory body comprising international experts in smart cities, innovation ecosystems, and relevant technology domains. Meets quarterly to review technical strategy, benchmark against global best practices, and advise on emerging technology adoption. Provides independent assurance on technical decisions and ecosystem design.',
  },
]
