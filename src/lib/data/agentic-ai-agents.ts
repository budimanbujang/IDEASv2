export interface AgenticAgent {
  id: string
  name: string
  domain: string
  autonomyLevel: 1 | 2 | 3
  status: 'active' | 'paused' | 'learning'
  decisionsToday: number
  autoApprovedPct: number
  humanOverrides: number
  description: string
  metrics: { label: string; value: string }[]
  icon: string
}

export const agenticAgents: AgenticAgent[] = [
  // Level 1: Fully autonomous, routine operational decisions
  {
    id: 'agent-trafficflow',
    name: 'TrafficFlow AI',
    domain: 'Urban Mobility',
    autonomyLevel: 1,
    status: 'active',
    decisionsToday: 1247,
    autoApprovedPct: 99.2,
    humanOverrides: 3,
    description: 'Manages real-time traffic signal timing, AV routing, and pedestrian flow across the IBTEC township. Continuously optimises signal phases based on sensor data, reducing average intersection wait times by 34%.',
    metrics: [
      { label: 'Avg Wait Time', value: '18s' },
      { label: 'Congestion Events', value: '2' },
      { label: 'AV Routes Optimised', value: '12' },
    ],
    icon: 'TrafficCone',
  },
  {
    id: 'agent-climate',
    name: 'ClimateControl AI',
    domain: 'Building Management',
    autonomyLevel: 1,
    status: 'active',
    decisionsToday: 892,
    autoApprovedPct: 98.7,
    humanOverrides: 5,
    description: 'Autonomously manages HVAC, ventilation, and indoor air quality across all smart buildings. Uses occupancy prediction and weather forecasting to pre-condition spaces, achieving 22% energy savings while maintaining thermal comfort.',
    metrics: [
      { label: 'Energy Saved', value: '22%' },
      { label: 'Comfort Score', value: '94/100' },
      { label: 'Buildings Managed', value: '12' },
    ],
    icon: 'Thermometer',
  },
  {
    id: 'agent-lighting',
    name: 'LightingGrid AI',
    domain: 'Public Infrastructure',
    autonomyLevel: 1,
    status: 'active',
    decisionsToday: 456,
    autoApprovedPct: 99.8,
    humanOverrides: 1,
    description: 'Controls adaptive street lighting and public space illumination based on ambient light, occupancy, and safety requirements. Dims or brightens 2,400+ luminaires in real-time, reducing lighting energy consumption by 41%.',
    metrics: [
      { label: 'Energy Reduction', value: '41%' },
      { label: 'Luminaires Managed', value: '2,400' },
      { label: 'Dark Spot Alerts', value: '0' },
    ],
    icon: 'Lightbulb',
  },
  // Level 2: Semi-autonomous, requires approval for significant actions
  {
    id: 'agent-predictmaint',
    name: 'PredictMaint AI',
    domain: 'Facility Management',
    autonomyLevel: 2,
    status: 'active',
    decisionsToday: 34,
    autoApprovedPct: 82.4,
    humanOverrides: 6,
    description: 'Predicts equipment failures and schedules preventive maintenance across all IBTEC facilities. Analyses vibration, thermal, and operational data from 3,200+ assets. Autonomously dispatches routine maintenance; escalates major interventions to facility managers.',
    metrics: [
      { label: 'Predictions Accuracy', value: '91%' },
      { label: 'Downtime Prevented', value: '47hrs' },
      { label: 'Work Orders Created', value: '12' },
    ],
    icon: 'Wrench',
  },
  {
    id: 'agent-energytrade',
    name: 'EnergyTrade AI',
    domain: 'Energy Management',
    autonomyLevel: 2,
    status: 'active',
    decisionsToday: 78,
    autoApprovedPct: 76.9,
    humanOverrides: 8,
    description: 'Optimises energy procurement, battery storage dispatch, and solar generation scheduling. Trades surplus energy on the local microgrid marketplace and manages peak demand response. Large trades (>RM10K) require human approval.',
    metrics: [
      { label: 'Cost Savings Today', value: 'RM14.2K' },
      { label: 'Solar Utilisation', value: '87%' },
      { label: 'Grid Purchases Avoided', value: '3.2 MWh' },
    ],
    icon: 'Zap',
  },
  {
    id: 'agent-wasteroute',
    name: 'WasteRoute AI',
    domain: 'Waste Management',
    autonomyLevel: 2,
    status: 'active',
    decisionsToday: 22,
    autoApprovedPct: 86.4,
    humanOverrides: 3,
    description: 'Optimises waste collection routes, predicts bin fill levels, and manages recycling stream sorting. Autonomously adjusts collection schedules based on occupancy patterns and event calendars. Escalates contamination incidents for human review.',
    metrics: [
      { label: 'Route Efficiency', value: '+28%' },
      { label: 'Recycling Rate', value: '78%' },
      { label: 'Collections Today', value: '18' },
    ],
    icon: 'Trash2',
  },
  // Level 3: Advisory, human-in-the-loop for all significant decisions
  {
    id: 'agent-emergency',
    name: 'EmergencyCoord AI',
    domain: 'Public Safety',
    autonomyLevel: 3,
    status: 'active',
    decisionsToday: 4,
    autoApprovedPct: 25.0,
    humanOverrides: 3,
    description: 'Monitors all safety systems, detects anomalies, and coordinates emergency response across the township. Generates incident response plans, resource allocation recommendations, and evacuation routes. All significant actions require human authorisation from the Emergency Operations Centre.',
    metrics: [
      { label: 'Active Incidents', value: '0' },
      { label: 'Response Time', value: '< 90s' },
      { label: 'Drills This Month', value: '2' },
    ],
    icon: 'ShieldAlert',
  },
  {
    id: 'agent-privacy',
    name: 'PrivacyGuard AI',
    domain: 'Data Governance',
    autonomyLevel: 3,
    status: 'active',
    decisionsToday: 118,
    autoApprovedPct: 45.8,
    humanOverrides: 12,
    description: 'Monitors data flows, enforces privacy policies, and detects potential PII exposure across all IBTEC systems. Reviews data access requests, anonymisation quality, and consent compliance. Flags violations for the Data Protection Officer and generates PDPA compliance reports.',
    metrics: [
      { label: 'Data Requests Reviewed', value: '118' },
      { label: 'PII Exposures Blocked', value: '3' },
      { label: 'Compliance Score', value: '96%' },
    ],
    icon: 'ShieldCheck',
  },
]
