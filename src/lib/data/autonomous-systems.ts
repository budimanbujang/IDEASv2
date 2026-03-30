export interface AutonomousVehicle {
  id: string
  type: 'logistics' | 'shuttle'
  name: string
  status: 'active' | 'charging' | 'maintenance'
  route: string
  speed: number
  batteryPct: number
  safetyIncidents: number
  uptimePct: number
  deliveriesToday?: number
  passengersToday?: number
}

export const autonomousVehicles: AutonomousVehicle[] = [
  {
    id: 'av-shuttle-01',
    type: 'shuttle',
    name: 'IBTEC Shuttle Alpha',
    status: 'active',
    route: 'Innovation District ↔ Healthcare Campus (Loop A)',
    speed: 25,
    batteryPct: 68,
    safetyIncidents: 0,
    uptimePct: 97.2,
    passengersToday: 142,
  },
  {
    id: 'av-shuttle-02',
    type: 'shuttle',
    name: 'IBTEC Shuttle Beta',
    status: 'charging',
    route: 'Residential Quarter ↔ Innovation District (Loop B)',
    speed: 0,
    batteryPct: 22,
    safetyIncidents: 0,
    uptimePct: 95.8,
    passengersToday: 98,
  },
  {
    id: 'av-logistics-01',
    type: 'logistics',
    name: 'CargoBot One',
    status: 'active',
    route: 'Advanced Manufacturing Zone ↔ Data Centre ↔ Biotech Cluster',
    speed: 15,
    batteryPct: 54,
    safetyIncidents: 0,
    uptimePct: 98.1,
    deliveriesToday: 23,
  },
]
