export interface IoTSensor {
  id: string
  sensorType: 'environmental' | 'structural' | 'traffic' | 'utility' | 'security'
  locationZone: string
  status: 'online' | 'offline' | 'maintenance'
  lastReading: { value: number; unit: string }
  lastReadingAt: string
  dataThroughput: string
}

export const iotSensors: IoTSensor[] = [
  // Environmental sensors
  { id: 'ENV-001', sensorType: 'environmental', locationZone: 'Innovation District', status: 'online', lastReading: { value: 32.4, unit: '°C' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '1.2 KB/s' },
  { id: 'ENV-002', sensorType: 'environmental', locationZone: 'Innovation District', status: 'online', lastReading: { value: 78, unit: '%RH' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '1.1 KB/s' },
  { id: 'ENV-003', sensorType: 'environmental', locationZone: 'Biotech Cluster', status: 'online', lastReading: { value: 22.1, unit: '°C' }, lastReadingAt: '2026-03-30T08:14:30Z', dataThroughput: '1.3 KB/s' },
  { id: 'ENV-004', sensorType: 'environmental', locationZone: 'Biotech Cluster', status: 'online', lastReading: { value: 45, unit: '%RH' }, lastReadingAt: '2026-03-30T08:14:30Z', dataThroughput: '1.1 KB/s' },
  { id: 'ENV-005', sensorType: 'environmental', locationZone: 'AgriTech Zone', status: 'online', lastReading: { value: 34.8, unit: '°C' }, lastReadingAt: '2026-03-30T08:15:10Z', dataThroughput: '1.4 KB/s' },
  { id: 'ENV-006', sensorType: 'environmental', locationZone: 'AgriTech Zone', status: 'online', lastReading: { value: 85, unit: '%RH' }, lastReadingAt: '2026-03-30T08:15:10Z', dataThroughput: '1.1 KB/s' },
  { id: 'ENV-007', sensorType: 'environmental', locationZone: 'Residential Quarter', status: 'online', lastReading: { value: 28.6, unit: '°C' }, lastReadingAt: '2026-03-30T08:14:45Z', dataThroughput: '1.2 KB/s' },
  { id: 'ENV-008', sensorType: 'environmental', locationZone: 'Innovation District', status: 'online', lastReading: { value: 42, unit: 'AQI' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.1 KB/s' },
  { id: 'ENV-009', sensorType: 'environmental', locationZone: 'Advanced Manufacturing Zone', status: 'online', lastReading: { value: 38, unit: 'AQI' }, lastReadingAt: '2026-03-30T08:14:55Z', dataThroughput: '2.0 KB/s' },
  { id: 'ENV-010', sensorType: 'environmental', locationZone: 'Energy Lab', status: 'online', lastReading: { value: 31.2, unit: '°C' }, lastReadingAt: '2026-03-30T08:15:05Z', dataThroughput: '1.2 KB/s' },
  { id: 'ENV-011', sensorType: 'environmental', locationZone: 'Food Innovation Hub', status: 'online', lastReading: { value: 4.2, unit: '°C' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '1.5 KB/s' },
  { id: 'ENV-012', sensorType: 'environmental', locationZone: 'Healthcare Campus', status: 'online', lastReading: { value: 22.5, unit: '°C' }, lastReadingAt: '2026-03-30T08:14:50Z', dataThroughput: '1.3 KB/s' },
  // Structural sensors
  { id: 'STR-001', sensorType: 'structural', locationZone: 'Innovation District', status: 'online', lastReading: { value: 0.02, unit: 'mm/m' }, lastReadingAt: '2026-03-30T08:10:00Z', dataThroughput: '0.5 KB/s' },
  { id: 'STR-002', sensorType: 'structural', locationZone: 'Innovation District', status: 'online', lastReading: { value: 0.01, unit: 'mm/m' }, lastReadingAt: '2026-03-30T08:10:00Z', dataThroughput: '0.5 KB/s' },
  { id: 'STR-003', sensorType: 'structural', locationZone: 'Advanced Manufacturing Zone', status: 'online', lastReading: { value: 0.03, unit: 'mm/m' }, lastReadingAt: '2026-03-30T08:10:00Z', dataThroughput: '0.5 KB/s' },
  { id: 'STR-004', sensorType: 'structural', locationZone: 'Biotech Cluster', status: 'maintenance', lastReading: { value: 0.04, unit: 'mm/m' }, lastReadingAt: '2026-03-29T16:00:00Z', dataThroughput: '0 KB/s' },
  { id: 'STR-005', sensorType: 'structural', locationZone: 'Data Centre', status: 'online', lastReading: { value: 0.01, unit: 'mm/m' }, lastReadingAt: '2026-03-30T08:10:00Z', dataThroughput: '0.5 KB/s' },
  { id: 'STR-006', sensorType: 'structural', locationZone: 'Residential Quarter', status: 'online', lastReading: { value: 0.02, unit: 'mm/m' }, lastReadingAt: '2026-03-30T08:10:00Z', dataThroughput: '0.5 KB/s' },
  { id: 'STR-007', sensorType: 'structural', locationZone: 'Healthcare Campus', status: 'online', lastReading: { value: 0.01, unit: 'mm/m' }, lastReadingAt: '2026-03-30T08:10:00Z', dataThroughput: '0.5 KB/s' },
  { id: 'STR-008', sensorType: 'structural', locationZone: 'Autonomous Zone', status: 'online', lastReading: { value: 0.03, unit: 'mm/m' }, lastReadingAt: '2026-03-30T08:10:00Z', dataThroughput: '0.5 KB/s' },
  // Traffic sensors
  { id: 'TRF-001', sensorType: 'traffic', locationZone: 'Main Boulevard', status: 'online', lastReading: { value: 142, unit: 'vehicles/hr' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '3.2 KB/s' },
  { id: 'TRF-002', sensorType: 'traffic', locationZone: 'Innovation District', status: 'online', lastReading: { value: 87, unit: 'vehicles/hr' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '3.1 KB/s' },
  { id: 'TRF-003', sensorType: 'traffic', locationZone: 'Autonomous Zone', status: 'online', lastReading: { value: 23, unit: 'AVs active' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '4.8 KB/s' },
  { id: 'TRF-004', sensorType: 'traffic', locationZone: 'Residential Quarter', status: 'online', lastReading: { value: 56, unit: 'vehicles/hr' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '3.0 KB/s' },
  { id: 'TRF-005', sensorType: 'traffic', locationZone: 'Main Boulevard', status: 'online', lastReading: { value: 312, unit: 'pedestrians/hr' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.8 KB/s' },
  { id: 'TRF-006', sensorType: 'traffic', locationZone: 'Advanced Manufacturing Zone', status: 'online', lastReading: { value: 34, unit: 'vehicles/hr' }, lastReadingAt: '2026-03-30T08:14:50Z', dataThroughput: '3.0 KB/s' },
  { id: 'TRF-007', sensorType: 'traffic', locationZone: 'Healthcare Campus', status: 'offline', lastReading: { value: 0, unit: 'vehicles/hr' }, lastReadingAt: '2026-03-29T22:30:00Z', dataThroughput: '0 KB/s' },
  { id: 'TRF-008', sensorType: 'traffic', locationZone: 'Biotech Cluster', status: 'online', lastReading: { value: 41, unit: 'vehicles/hr' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '3.0 KB/s' },
  // Utility sensors
  { id: 'UTL-001', sensorType: 'utility', locationZone: 'Data Centre', status: 'online', lastReading: { value: 4.2, unit: 'MW' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.4 KB/s' },
  { id: 'UTL-002', sensorType: 'utility', locationZone: 'Innovation District', status: 'online', lastReading: { value: 1.8, unit: 'MW' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.3 KB/s' },
  { id: 'UTL-003', sensorType: 'utility', locationZone: 'Advanced Manufacturing Zone', status: 'online', lastReading: { value: 3.6, unit: 'MW' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.4 KB/s' },
  { id: 'UTL-004', sensorType: 'utility', locationZone: 'Biotech Cluster', status: 'online', lastReading: { value: 1.2, unit: 'MW' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.3 KB/s' },
  { id: 'UTL-005', sensorType: 'utility', locationZone: 'Innovation District', status: 'online', lastReading: { value: 245, unit: 'm³/hr' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '1.8 KB/s' },
  { id: 'UTL-006', sensorType: 'utility', locationZone: 'Residential Quarter', status: 'online', lastReading: { value: 180, unit: 'm³/hr' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '1.8 KB/s' },
  { id: 'UTL-007', sensorType: 'utility', locationZone: 'AgriTech Zone', status: 'online', lastReading: { value: 320, unit: 'm³/hr' }, lastReadingAt: '2026-03-30T08:14:55Z', dataThroughput: '1.9 KB/s' },
  { id: 'UTL-008', sensorType: 'utility', locationZone: 'Energy Lab', status: 'online', lastReading: { value: 850, unit: 'kW solar' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.6 KB/s' },
  { id: 'UTL-009', sensorType: 'utility', locationZone: 'Residential Quarter', status: 'online', lastReading: { value: 420, unit: 'kW solar' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.5 KB/s' },
  { id: 'UTL-010', sensorType: 'utility', locationZone: 'Data Centre', status: 'online', lastReading: { value: 72, unit: '%UPS' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '1.0 KB/s' },
  { id: 'UTL-011', sensorType: 'utility', locationZone: 'Healthcare Campus', status: 'online', lastReading: { value: 0.9, unit: 'MW' }, lastReadingAt: '2026-03-30T08:14:50Z', dataThroughput: '2.3 KB/s' },
  { id: 'UTL-012', sensorType: 'utility', locationZone: 'Food Innovation Hub', status: 'online', lastReading: { value: 0.6, unit: 'MW' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '2.2 KB/s' },
  // Security sensors
  { id: 'SEC-001', sensorType: 'security', locationZone: 'Main Gate', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '12.5 KB/s' },
  { id: 'SEC-002', sensorType: 'security', locationZone: 'Data Centre', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '14.2 KB/s' },
  { id: 'SEC-003', sensorType: 'security', locationZone: 'Biotech Cluster', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '12.8 KB/s' },
  { id: 'SEC-004', sensorType: 'security', locationZone: 'Advanced Manufacturing Zone', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '13.1 KB/s' },
  { id: 'SEC-005', sensorType: 'security', locationZone: 'Autonomous Zone', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '15.6 KB/s' },
  { id: 'SEC-006', sensorType: 'security', locationZone: 'Innovation District', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '12.4 KB/s' },
  { id: 'SEC-007', sensorType: 'security', locationZone: 'Residential Quarter', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '11.8 KB/s' },
  { id: 'SEC-008', sensorType: 'security', locationZone: 'Healthcare Campus', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '12.9 KB/s' },
  { id: 'SEC-009', sensorType: 'security', locationZone: 'Perimeter North', status: 'online', lastReading: { value: 1, unit: 'clear' }, lastReadingAt: '2026-03-30T08:15:00Z', dataThroughput: '10.2 KB/s' },
  { id: 'SEC-010', sensorType: 'security', locationZone: 'Perimeter South', status: 'maintenance', lastReading: { value: 0, unit: 'offline' }, lastReadingAt: '2026-03-29T14:00:00Z', dataThroughput: '0 KB/s' },
]
