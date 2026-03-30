import ChallengeDetailClient from './client'

export function generateStaticParams() {
  return [
    { id: 'wellness-township' },
    { id: 'farm-to-fork' },
    { id: 'sustainable-ops' },
    { id: 'halal-ecosystem' },
  ]
}

export default function ChallengeDetailPage({ params }: { params: { id: string } }) {
  return <ChallengeDetailClient id={params.id} />
}
