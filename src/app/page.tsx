import Image from "next/image";
import { Card, FeaturedReleaseCard, ReleaseListItem, SocialLink, DiscIcon, LinkIcon, EditorialCard, NewspaperIcon, EmailLink, ArrowRightIcon } from "@/components";
import { socials, releases as releaseConfigs, editorial, artists } from "@/data/links";
import { fetchAllReleases } from "@/lib/spotify";

export default async function Home() {
  const releases = await fetchAllReleases(releaseConfigs);

  return (
    <main className="min-h-screen flex justify-center px-4 py-8 relative overflow-hidden">
      {/* Background Effect */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 rounded-full blur-[120px] animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/10 rounded-full blur-[120px] animate-float [animation-delay:4s]" />
        <div className="absolute top-[30%] right-[10%] w-[30%] h-[30%] bg-emerald-500/5 rounded-full blur-[100px] animate-float [animation-delay:8s]" />
      </div>

      <div className="w-full max-w-md relative z-10">
        {/* Header */}
        <header className="text-center mb-16 animate-fade-in-up">
          <div className="w-28 h-28 rounded-full p-[2px] bg-gradient-to-tr from-emerald-500/20 to-orange-500/20 mx-auto mb-8 shadow-2xl">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-zinc-950">
              <Image
                src="/kush-logo.jpeg"
                alt="Kushroom"
                width={112}
                height={112}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl font-black text-white mb-3 tracking-tighter uppercase italic">kushroom.wav</h1>
          <div className="space-y-1 mb-6">
            <p className="text-emerald-500 text-xs font-bold uppercase tracking-[0.2em]">Gravadora Independente de Música Urbana</p>
            <p className="text-zinc-500 text-[10px] font-medium uppercase tracking-[0.1em]">São Paulo, Brasil</p>
          </div>
          <p className="text-zinc-400 text-sm font-medium italic max-w-xs mx-auto leading-relaxed border-t border-zinc-900 pt-4">
            "Cultivando a sonoridade urbana através de sistemas independentes."
          </p>
        </header>

        {/* Featured Release */}
        {releases.length > 0 && (
          <div className="mb-6">
            <Card 
              title="Release em Destaque" 
              icon={<DiscIcon className="w-4 h-4" />}
              className="animate-fade-in-up animate-stagger-1"
            >
              <FeaturedReleaseCard release={releases[0]} />
            </Card>
          </div>
        )}

        {/* Editorial */}
        <div className="mb-6">
          <Card 
            title="Editorial" 
            icon={<NewspaperIcon className="w-4 h-4" />}
            className="animate-fade-in-up animate-stagger-2"
          >
            <EditorialCard editorial={editorial} />
          </Card>
        </div>

        {/* Social Links Card */}
        <div className="mb-6">
          <Card 
            title="Links" 
            icon={<LinkIcon className="w-4 h-4" />}
            className="animate-fade-in-up animate-stagger-3"
          >
            <div className="space-y-3">
              {socials.map((social, index) => (
                <SocialLink key={index} social={social} />
              ))}
            </div>
          </Card>
        </div>

        {/* Other Releases */}
        {releases.length > 1 && (
          <div className="mb-6">
            <Card 
              title="Outros Lançamentos" 
              icon={<DiscIcon className="w-4 h-4" />}
              className="animate-fade-in-up animate-stagger-4"
            >
              <div className="space-y-2">
                {releases.slice(1).map((release, index) => (
                  <ReleaseListItem key={index} release={release} />
                ))}
              </div>
            </Card>
          </div>
        )}

        {/* Collaborators Section */}
        <div className="mb-6">
          <Card 
            title="Nossa Equipe" 
            icon={<LinkIcon className="w-4 h-4" />}
            className="animate-fade-in-up animate-stagger-5"
          >
            <div className="space-y-3">
              {artists.filter(a => a.type === 'person').map((artist, index) => (
                <a
                  key={index}
                  href={`/${artist.id}`}
                  className="flex items-center gap-4 px-5 py-4 bg-zinc-950/50 rounded-xl transition-all duration-300 hover:bg-zinc-900 border border-zinc-900/50 hover:border-emerald-500/20 group"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 group-hover:border-emerald-500/30 transition-all flex-shrink-0">
                    <Image
                      src={artist.imageUrl}
                      alt={artist.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover transition-all"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] font-black text-zinc-300 group-hover:text-white uppercase tracking-widest transition-colors truncate">
                        {artist.name}
                    </span>
                    <span className="block text-[9px] font-bold text-emerald-500/60 group-hover:text-emerald-500 uppercase tracking-tight transition-colors truncate">
                        {artist.role}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
                    <ArrowRightIcon className="w-3 h-3 text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>

        {/* Ecosystem Section */}
        <div className="mb-6">
          <Card 
            title="Ecossistema" 
            icon={<LinkIcon className="w-4 h-4" />}
            className="animate-fade-in-up [animation-delay:600ms]"
          >
            <div className="space-y-3">
              {artists.filter(a => a.type === 'entity').map((artist, index) => (
                <a
                  key={index}
                  href={`/${artist.id}`}
                  className="flex items-center gap-4 px-5 py-4 bg-zinc-950/50 rounded-xl transition-all duration-300 hover:bg-zinc-900 border border-zinc-900/50 hover:border-emerald-500/20 group"
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-zinc-800 group-hover:border-emerald-500/30 transition-all flex-shrink-0">
                    <Image
                      src={artist.imageUrl}
                      alt={artist.name}
                      width={40}
                      height={40}
                      className="w-full h-full object-cover transition-all"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="block text-[11px] font-black text-zinc-300 group-hover:text-white uppercase tracking-widest transition-colors truncate">
                        {artist.name}
                    </span>
                    <span className="block text-[9px] font-bold text-emerald-500/60 group-hover:text-emerald-500 uppercase tracking-tight transition-colors truncate">
                        {artist.role}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all group-hover:bg-emerald-500/10 group-hover:border-emerald-500/20">
                    <ArrowRightIcon className="w-3 h-3 text-zinc-600 group-hover:text-emerald-500 group-hover:translate-x-0.5 transition-all" />
                  </div>
                </a>
              ))}
            </div>
          </Card>
        </div>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-zinc-900 mt-8">
          <p className="text-zinc-500 text-[10px] uppercase tracking-[0.2em] mb-4">Envio de Demos</p>
          <EmailLink />
          <p className="text-zinc-600 text-[9px] uppercase tracking-widest">&copy; 2026 Kushroom. Todos os direitos reservados.</p>
        </footer>
      </div>
    </main>
  );
}
