export interface NetworkSlice {
  id: string
  name: string
  type: 'urllc' | 'embb' | 'mmtc'
  description: string
  bandwidthAllocated: string
  latencyMs: number
  connectedDevices: number
  utilisation: number
  status: 'active' | 'degraded' | 'offline'
}

export const networkSlices: NetworkSlice[] = [
  {
    id: 'ns-urllc',
    name: 'Ultra-Reliable Low-Latency Slice',
    type: 'urllc',
    description: 'Dedicated network slice for mission-critical applications requiring sub-millisecond latency and 99.999% reliability. Serves autonomous vehicle V2X communications, remote surgery systems, and industrial automation control loops across the IBTEC campus.',
    bandwidthAllocated: '500 MHz',
    latencyMs: 0.8,
    connectedDevices: 156,
    utilisation: 62,
    status: 'active',
  },
  {
    id: 'ns-embb',
    name: 'Enhanced Mobile Broadband Slice',
    type: 'embb',
    description: 'High-throughput network slice supporting bandwidth-intensive applications including 8K video surveillance, digital twin real-time rendering, holographic telepresence, and large dataset transfers between guild facilities.',
    bandwidthAllocated: '2 GHz',
    latencyMs: 4.2,
    connectedDevices: 2340,
    utilisation: 78,
    status: 'active',
  },
  {
    id: 'ns-mmtc',
    name: 'Massive Machine-Type Communications Slice',
    type: 'mmtc',
    description: 'Optimised for connecting thousands of low-power IoT sensors and devices across the township. Supports environmental monitoring, smart building sensors, utility meters, and agricultural sensor networks with efficient battery-preserving protocols.',
    bandwidthAllocated: '200 MHz',
    latencyMs: 12.5,
    connectedDevices: 8420,
    utilisation: 54,
    status: 'active',
  },
]
