export interface EnergyZone {
  id: string
  zone: string
  solarOutputKw: number
  gridConsumptionKw: number
  batteryStoragePct: number
  carbonFootprintKg: number
  netEnergy: number
}

export const energyZones: EnergyZone[] = [
  {
    id: 'ez-innovation',
    zone: 'Innovation District',
    solarOutputKw: 480,
    gridConsumptionKw: 1800,
    batteryStoragePct: 72,
    carbonFootprintKg: 924,
    netEnergy: -1320,
  },
  {
    id: 'ez-biotech',
    zone: 'Biotech Cluster',
    solarOutputKw: 220,
    gridConsumptionKw: 1200,
    batteryStoragePct: 45,
    carbonFootprintKg: 686,
    netEnergy: -980,
  },
  {
    id: 'ez-manufacturing',
    zone: 'Advanced Manufacturing Zone',
    solarOutputKw: 350,
    gridConsumptionKw: 3600,
    batteryStoragePct: 38,
    carbonFootprintKg: 2275,
    netEnergy: -3250,
  },
  {
    id: 'ez-agritech',
    zone: 'AgriTech Zone',
    solarOutputKw: 620,
    gridConsumptionKw: 450,
    batteryStoragePct: 88,
    carbonFootprintKg: 0,
    netEnergy: 170,
  },
  {
    id: 'ez-residential',
    zone: 'Residential Quarter',
    solarOutputKw: 420,
    gridConsumptionKw: 680,
    batteryStoragePct: 65,
    carbonFootprintKg: 182,
    netEnergy: -260,
  },
  {
    id: 'ez-datacentre',
    zone: 'Data Centre',
    solarOutputKw: 180,
    gridConsumptionKw: 4200,
    batteryStoragePct: 95,
    carbonFootprintKg: 2814,
    netEnergy: -4020,
  },
  {
    id: 'ez-healthcare',
    zone: 'Healthcare Campus',
    solarOutputKw: 310,
    gridConsumptionKw: 900,
    batteryStoragePct: 55,
    carbonFootprintKg: 413,
    netEnergy: -590,
  },
  {
    id: 'ez-food',
    zone: 'Food Innovation Hub',
    solarOutputKw: 150,
    gridConsumptionKw: 600,
    batteryStoragePct: 42,
    carbonFootprintKg: 315,
    netEnergy: -450,
  },
  {
    id: 'ez-autonomous',
    zone: 'Autonomous Zone',
    solarOutputKw: 280,
    gridConsumptionKw: 520,
    batteryStoragePct: 78,
    carbonFootprintKg: 168,
    netEnergy: -240,
  },
  {
    id: 'ez-energy',
    zone: 'Energy Lab',
    solarOutputKw: 850,
    gridConsumptionKw: 320,
    batteryStoragePct: 92,
    carbonFootprintKg: 0,
    netEnergy: 530,
  },
]
