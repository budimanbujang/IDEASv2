export interface GrandChallenge {
  id: string
  title: string
  theme: string
  description: string
  prizePurse: string
  status: 'open' | 'upcoming' | 'closed'
  deadline: string
  submissionCount: number
  guildIds: string[]
  winnerOrgId?: string
}

export const grandChallenges: GrandChallenge[] = [
  {
    id: 'gc-tropical-diagnostics',
    title: 'Tropical Disease Diagnostics Grand Challenge',
    theme: 'Healthcare Innovation',
    description: 'Develop an affordable, AI-powered point-of-care diagnostic device capable of simultaneously detecting dengue, malaria, chikungunya, and Nipah virus from a single blood sample in under 15 minutes. The solution must work reliably in tropical field conditions (35°C, 90% humidity) without cold-chain requirements.',
    prizePurse: 'RM5,000,000',
    status: 'open',
    deadline: '2026-09-30',
    submissionCount: 14,
    guildIds: ['healthcare', 'life-sciences'],
  },
  {
    id: 'gc-sustainable-palm',
    title: 'Sustainable Palm Oil Processing Challenge',
    theme: 'Sustainability & Agriculture',
    description: 'Design a zero-waste palm oil processing system that eliminates palm oil mill effluent (POME) while recovering biogas, biomass, and high-value co-products. The solution must demonstrate economic viability at commercial scale (60 tonnes FFB/hour) and achieve RSPO NEXT certification standards.',
    prizePurse: 'RM3,000,000',
    status: 'open',
    deadline: '2026-12-15',
    submissionCount: 8,
    guildIds: ['agrifood'],
  },
  {
    id: 'gc-data-centre-cooling',
    title: 'Data Centre Cooling Innovation Challenge',
    theme: 'Digital Infrastructure',
    description: 'Innovate a tropical-optimised data centre cooling solution that achieves Power Usage Effectiveness (PUE) below 1.2 in equatorial climates without water consumption. Solutions should leverage Malaysia\'s unique environmental conditions and be deployable within IBTEC\'s 10MW data centre facility.',
    prizePurse: 'RM2,500,000',
    status: 'upcoming',
    deadline: '2027-03-31',
    submissionCount: 0,
    guildIds: ['proptech', 'semiconductor'],
  },
  {
    id: 'gc-equatorial-agri-ai',
    title: 'Equatorial Agricultural AI Challenge',
    theme: 'Precision Agriculture',
    description: 'Build an AI system that accurately predicts crop yields, pest outbreaks, and optimal harvest timing for equatorial agriculture using satellite, drone, and ground-sensor data fusion. Models must outperform existing baselines by 30% and generalise across oil palm, durian, and rubber crops.',
    prizePurse: 'RM4,000,000',
    status: 'closed',
    deadline: '2026-03-15',
    submissionCount: 22,
    guildIds: ['agrifood'],
    winnerOrgId: 'agrimind',
  },
  {
    id: 'gc-semiconductor-packaging',
    title: 'Next-Gen Semiconductor Packaging Challenge',
    theme: 'Advanced Manufacturing',
    description: 'Develop a novel heterogeneous integration packaging technology that enables 3D chiplet assembly with thermal management suitable for tropical ambient conditions. Target 2x improvement in performance-per-watt over current fan-out wafer-level packaging, with demonstrated reliability at 85°C/85% RH.',
    prizePurse: 'RM6,000,000',
    status: 'open',
    deadline: '2026-11-30',
    submissionCount: 11,
    guildIds: ['semiconductor'],
  },
]
