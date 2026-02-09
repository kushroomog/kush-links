import Image from "next/image";
import { Card, ReleaseCard, SocialLink, DiscIcon, LinkIcon } from "@/components";
import { socials, releases as releaseConfigs } from "@/data/links";
import { fetchAllReleases } from "@/lib/spotify";

export default async function Home() {
  const releases = await fetchAllReleases(releaseConfigs);

  return (
    <main className="min-h-screen bg-zinc-950 flex justify-center px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
            <Image
              src="/kush-logo.jpeg"
              alt="Kushroom"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">kushroom.wav</h1>
          <p className="text-zinc-400 text-sm">Acompanhe os principais lançamentos da Kushroom</p>
        </header>

        {/* Releases Card */}
        {releases.length > 0 && (
          <div className="mb-6">
            <Card title="Lançamentos" icon={<DiscIcon className="w-4 h-4" />}>
              <div className="space-y-3">
                {releases.map((release, index) => (
                  <ReleaseCard key={index} release={release} />
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Social Links Card */}
        <div className="mb-6">
          <Card title="Links" icon={<LinkIcon className="w-4 h-4" />}>
            <div className="space-y-3">
              {socials.map((social, index) => (
                <SocialLink key={index} social={social} />
              ))}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center py-8 text-zinc-500 text-xs">
          <p>&copy; 2025 Kushroom. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
