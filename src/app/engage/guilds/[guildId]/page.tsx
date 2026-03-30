import GuildDetailClient from './client'

export function generateStaticParams() {
  return [
    { guildId: 'healthcare' },
    { guildId: 'proptech' },
    { guildId: 'agrifood' },
    { guildId: 'food-services' },
    { guildId: 'life-sciences' },
    { guildId: 'semiconductor' },
  ]
}

export default function GuildDetailPage({ params }: { params: { guildId: string } }) {
  return <GuildDetailClient guildId={params.guildId} />
}
