// This is a Server Component by default (no "use client")
async function getPlayerData() {
  // Simulating server-side data fetch
  return {
    name: "Shaf",
    number: 12,
    club: "Shaf FC",
    position: "Forward",
    kit: "Red with Blue Stripes",
    stats: { goals: 18, assists: 9, matches: 22 }
  }
}

export default async function Home() {
  const player = await getPlayerData();

  return (
    <main className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold">{player.name} <span className="text-red-500">#{player.number}</span></h1>
        <p className="text-zinc-400 mt-2">{player.club} - {player.position}</p>

        <div className="grid grid-cols-3 gap-4 mt-10">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-zinc-400">Goals</h3>
            <p className="text-3xl font-bold">{player.stats.goals}</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <h3 className="text-zinc-400">Assists</h3>
            <p className="text-3xl font-bold">{player.stats.assists}</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl border border-blue-600">
            <h3 className="text-zinc-400">Kit</h3>
            <p className="text-xl font-bold text-red-400">{player.kit}</p>
          </div>
        </div>

        <div className="mt-10 p-6 bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl">
          <h2 className="text-2xl font-bold">Server Component</h2>
          <p className="mt-2">This data was fetched on the server, not in the browser. Faster and SEO friendly.</p>
        </div>
      </div>
    </main>
  )
}