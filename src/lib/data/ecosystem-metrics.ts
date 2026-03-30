export interface EcosystemMetric {
  id: string
  dimension: string
  dimensionLabel: string
  metricName: string
  value: number
  unit: string
  target: number
  trendDirection: 'up' | 'down' | 'stable'
  icon: string
}

export interface DimensionSummary {
  id: string
  name: string
  score: number
  color: string
  icon: string
  metrics: EcosystemMetric[]
}

export const dimensionSummaries: DimensionSummary[] = [
  {
    id: 'resources',
    name: 'Resources & Sustainability',
    score: 72,
    color: '#22C55E',
    icon: 'Leaf',
    metrics: [
      { id: 'res-1', dimension: 'resources', dimensionLabel: 'Resources & Sustainability', metricName: 'Renewable Energy Share', value: 45, unit: '%', target: 80, trendDirection: 'up', icon: 'Sun' },
      { id: 'res-2', dimension: 'resources', dimensionLabel: 'Resources & Sustainability', metricName: 'Water Recycling Rate', value: 62, unit: '%', target: 90, trendDirection: 'up', icon: 'Droplets' },
      { id: 'res-3', dimension: 'resources', dimensionLabel: 'Resources & Sustainability', metricName: 'Waste Diversion Rate', value: 78, unit: '%', target: 95, trendDirection: 'up', icon: 'Recycle' },
      { id: 'res-4', dimension: 'resources', dimensionLabel: 'Resources & Sustainability', metricName: 'Carbon Intensity', value: 42, unit: 'kgCO₂/m²', target: 20, trendDirection: 'down', icon: 'Cloud' },
    ],
  },
  {
    id: 'digital',
    name: 'Digital Infrastructure',
    score: 85,
    color: '#3B82F6',
    icon: 'Wifi',
    metrics: [
      { id: 'dig-1', dimension: 'digital', dimensionLabel: 'Digital Infrastructure', metricName: '5G Coverage', value: 92, unit: '%', target: 100, trendDirection: 'up', icon: 'Signal' },
      { id: 'dig-2', dimension: 'digital', dimensionLabel: 'Digital Infrastructure', metricName: 'IoT Sensor Uptime', value: 97.2, unit: '%', target: 99.5, trendDirection: 'up', icon: 'Activity' },
      { id: 'dig-3', dimension: 'digital', dimensionLabel: 'Digital Infrastructure', metricName: 'Data Centre PUE', value: 1.35, unit: 'ratio', target: 1.2, trendDirection: 'down', icon: 'Server' },
      { id: 'dig-4', dimension: 'digital', dimensionLabel: 'Digital Infrastructure', metricName: 'API Availability', value: 99.8, unit: '%', target: 99.9, trendDirection: 'stable', icon: 'Code' },
    ],
  },
  {
    id: 'urban',
    name: 'Urban Planning & Mobility',
    score: 68,
    color: '#F97316',
    icon: 'MapPin',
    metrics: [
      { id: 'urb-1', dimension: 'urban', dimensionLabel: 'Urban Planning & Mobility', metricName: 'Green Space Ratio', value: 35, unit: '%', target: 40, trendDirection: 'stable', icon: 'Trees' },
      { id: 'urb-2', dimension: 'urban', dimensionLabel: 'Urban Planning & Mobility', metricName: 'Active Mobility Share', value: 28, unit: '%', target: 50, trendDirection: 'up', icon: 'Bike' },
      { id: 'urb-3', dimension: 'urban', dimensionLabel: 'Urban Planning & Mobility', metricName: 'AV Route Coverage', value: 45, unit: '%', target: 80, trendDirection: 'up', icon: 'Car' },
      { id: 'urb-4', dimension: 'urban', dimensionLabel: 'Urban Planning & Mobility', metricName: 'Average Commute Time', value: 12, unit: 'min', target: 10, trendDirection: 'down', icon: 'Clock' },
    ],
  },
  {
    id: 'governance',
    name: 'Governance & Participation',
    score: 76,
    color: '#8B5CF6',
    icon: 'Landmark',
    metrics: [
      { id: 'gov-1', dimension: 'governance', dimensionLabel: 'Governance & Participation', metricName: 'Decision Transparency Score', value: 82, unit: '%', target: 95, trendDirection: 'up', icon: 'Eye' },
      { id: 'gov-2', dimension: 'governance', dimensionLabel: 'Governance & Participation', metricName: 'Stakeholder Participation Rate', value: 68, unit: '%', target: 80, trendDirection: 'up', icon: 'Users' },
      { id: 'gov-3', dimension: 'governance', dimensionLabel: 'Governance & Participation', metricName: 'Policy Response Time', value: 14, unit: 'days', target: 7, trendDirection: 'down', icon: 'FileText' },
      { id: 'gov-4', dimension: 'governance', dimensionLabel: 'Governance & Participation', metricName: 'Open Data Datasets Published', value: 42, unit: 'datasets', target: 100, trendDirection: 'up', icon: 'Database' },
    ],
  },
  {
    id: 'social',
    name: 'Social Cohesion & Community',
    score: 71,
    color: '#EC4899',
    icon: 'Heart',
    metrics: [
      { id: 'soc-1', dimension: 'social', dimensionLabel: 'Social Cohesion & Community', metricName: 'Community Satisfaction Score', value: 78, unit: '%', target: 90, trendDirection: 'up', icon: 'Smile' },
      { id: 'soc-2', dimension: 'social', dimensionLabel: 'Social Cohesion & Community', metricName: 'Local Hiring Rate', value: 64, unit: '%', target: 75, trendDirection: 'up', icon: 'Briefcase' },
      { id: 'soc-3', dimension: 'social', dimensionLabel: 'Social Cohesion & Community', metricName: 'Community Events per Month', value: 8, unit: 'events', target: 12, trendDirection: 'up', icon: 'Calendar' },
      { id: 'soc-4', dimension: 'social', dimensionLabel: 'Social Cohesion & Community', metricName: 'Skills Training Participants', value: 340, unit: 'people', target: 500, trendDirection: 'up', icon: 'GraduationCap' },
    ],
  },
  {
    id: 'experience',
    name: 'Experience-Driven Design',
    score: 74,
    color: '#F59E0B',
    icon: 'Sparkles',
    metrics: [
      { id: 'exp-1', dimension: 'experience', dimensionLabel: 'Experience-Driven Design', metricName: 'Tenant NPS Score', value: 72, unit: 'NPS', target: 80, trendDirection: 'up', icon: 'ThumbsUp' },
      { id: 'exp-2', dimension: 'experience', dimensionLabel: 'Experience-Driven Design', metricName: 'Digital Service Adoption', value: 81, unit: '%', target: 95, trendDirection: 'up', icon: 'Smartphone' },
      { id: 'exp-3', dimension: 'experience', dimensionLabel: 'Experience-Driven Design', metricName: 'Visitor Satisfaction', value: 88, unit: '%', target: 90, trendDirection: 'stable', icon: 'Star' },
      { id: 'exp-4', dimension: 'experience', dimensionLabel: 'Experience-Driven Design', metricName: 'Wayfinding Efficiency', value: 76, unit: '%', target: 90, trendDirection: 'up', icon: 'Navigation' },
    ],
  },
  {
    id: 'innovation',
    name: 'Industrial Innovation Ecosystem',
    score: 79,
    color: '#E11D48',
    icon: 'Lightbulb',
    metrics: [
      { id: 'inn-1', dimension: 'innovation', dimensionLabel: 'Industrial Innovation Ecosystem', metricName: 'Active Guild Projects', value: 29, unit: 'projects', target: 40, trendDirection: 'up', icon: 'Rocket' },
      { id: 'inn-2', dimension: 'innovation', dimensionLabel: 'Industrial Innovation Ecosystem', metricName: 'Cross-Vertical Collaborations', value: 12, unit: 'projects', target: 20, trendDirection: 'up', icon: 'GitBranch' },
      { id: 'inn-3', dimension: 'innovation', dimensionLabel: 'Industrial Innovation Ecosystem', metricName: 'Patents Filed', value: 18, unit: 'patents', target: 50, trendDirection: 'up', icon: 'Award' },
      { id: 'inn-4', dimension: 'innovation', dimensionLabel: 'Industrial Innovation Ecosystem', metricName: 'Discovery Engine Matches', value: 156, unit: 'matches', target: 200, trendDirection: 'up', icon: 'Search' },
    ],
  },
  {
    id: 'ai-native',
    name: 'AI-Native City Operations',
    score: 67,
    color: '#6366F1',
    icon: 'Brain',
    metrics: [
      { id: 'ai-1', dimension: 'ai-native', dimensionLabel: 'AI-Native City Operations', metricName: 'AI Agent Uptime', value: 98.5, unit: '%', target: 99.9, trendDirection: 'up', icon: 'Bot' },
      { id: 'ai-2', dimension: 'ai-native', dimensionLabel: 'AI-Native City Operations', metricName: 'Autonomous Decisions/Day', value: 2847, unit: 'decisions', target: 5000, trendDirection: 'up', icon: 'Zap' },
      { id: 'ai-3', dimension: 'ai-native', dimensionLabel: 'AI-Native City Operations', metricName: 'Human Override Rate', value: 4.2, unit: '%', target: 2, trendDirection: 'down', icon: 'Hand' },
      { id: 'ai-4', dimension: 'ai-native', dimensionLabel: 'AI-Native City Operations', metricName: 'Predictive Accuracy', value: 89, unit: '%', target: 95, trendDirection: 'up', icon: 'Target' },
    ],
  },
]
