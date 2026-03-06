import Image from "next/image";
import { notFound } from "next/navigation";
import { Card, FeaturedReleaseCard, ReleaseListItem, SocialLink, DiscIcon, LinkIcon, Waves } from "@/components";
import { artists } from "@/data/links";
import { fetchAllReleases } from "@/lib/spotify";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const artist = artists.find((a) => a.id === slug);
  
  return {
    title: artist ? `${artist.name} | kushroom.links` : "kushroom.links",
  };
}

export async function generateStaticParams() {
  return artists.map((artist) => ({
    slug: artist.id,
  }));
}

export default async function ArtistPage({ params }: PageProps) {
  const { slug } = await params;
  const artist = artists.find((a) => a.id === slug);

  if (!artist) {
    notFound();
  }

  const mainReleases = artist.releases ? await fetchAllReleases(artist.releases) : [];
  const coAuthoredReleases = artist.coAuthoredReleases ? await fetchAllReleases(artist.coAuthoredReleases) : [];

  return (
    <main className="min-h-screen flex justify-center px-4 py-8 relative overflow-hidden">
      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500/20 to-orange-500/20 mx-auto mb-8 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-zinc-950">
              <Image
                src={artist.imageUrl}
                alt={artist.name}
                width={112}
                height={112}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase italic">{artist.name}</h1>
          <div className="space-y-1 mb-6">
            <p className="text-emerald-500 text-xs font-bold uppercase tracking-[0.2em]">{artist.role}</p>
            <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-[0.1em]">
                {artist.type === 'person' ? 'Kushroom Artist' : 'Kushroom Ecosystem'}
            </p>
          </div>
          <p className="text-zinc-400 text-sm font-medium italic max-w-xs mx-auto leading-relaxed border-t border-zinc-900 pt-4">
            "{artist.bio}"
          </p>
        </header>

        {/* 1. Featured Release (Lançamento) */}
        {mainReleases.length > 0 && (
          <div className="mb-6">
            <Card 
              title="Lançamento" 
              icon={<DiscIcon className="w-4 h-4" />}
              className="animate-fade-in-up animate-stagger-1"
            >
              <FeaturedReleaseCard release={mainReleases[0]} />
            </Card>
          </div>
        )}

        {/* 2. Links */}
        <div className="mb-6">
          <Card 
            title="Links" 
            icon={<LinkIcon className="w-4 h-4" />}
            className="animate-fade-in-up animate-stagger-2"
          >
            <div className="space-y-3">
              {artist.links.map((link, index) => (
                <div key={index} className={link.locked ? "opacity-60 cursor-not-allowed pointer-events-none grayscale" : ""}>
                    <SocialLink 
                        social={{
                            name: link.locked ? `${link.label} (Soon)` : link.label,
                            url: link.url,
                            icon: link.icon,
                            color: link.color || (link.icon === 'instagram' ? '#E4405F' : link.icon === 'youtube' ? '#FF0000' : link.icon === 'tiktok' ? '#ff0050' : '#10b981')
                        }} 
                    />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* 3. Spotify Artist Embed */}
        {artist.spotifyArtistId && (
            <div className="mb-6 animate-fade-in-up animate-stagger-3">
                <iframe 
                    className="rounded-xl"
                    src={`https://open.spotify.com/embed/artist/${artist.spotifyArtistId}?utm_source=generator&theme=0`} 
                    width="100%" 
                    height="352" 
                    frameBorder="0" 
                    allowFullScreen 
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                    loading="lazy"
                ></iframe>
            </div>
        )}

        {/* 4. Discography */}
        {mainReleases.length > 1 && (
          <div className="mb-6">
            <Card 
              title="Discografia" 
              icon={<DiscIcon className="w-4 h-4" />}
              className="animate-fade-in-up animate-stagger-4"
            >
              <div className="space-y-2">
                {mainReleases.slice(1).map((release, index) => (
                  <ReleaseListItem key={index} release={release} />
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* 5. Co-authored / Productions */}
        {coAuthoredReleases.length > 0 && (
          <div className="mb-6">
            <Card 
              title="Produções & Parcerias" 
              icon={<DiscIcon className="w-4 h-4" />}
              className="animate-fade-in-up animate-stagger-5"
            >
              <div className="space-y-2">
                {coAuthoredReleases.map((release, index) => (
                  <ReleaseListItem key={index} release={release} />
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center py-12 border-t border-zinc-900 mt-8">
            <a 
                href="/"
                className="text-zinc-500 hover:text-emerald-500 text-[10px] uppercase tracking-[0.2em] mb-4 block transition-colors"
            >
                ← Voltar para kushroom.links
            </a>
          <p className="text-zinc-600 text-[9px] uppercase tracking-widest">&copy; 2026 Kushroom. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
