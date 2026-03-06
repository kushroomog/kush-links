import { Release } from "@/types";
import { SpotifyIcon, MusicIcon } from "./Icons";

interface FeaturedReleaseCardProps {
  release: Release;
}

export function FeaturedReleaseCard({ release }: FeaturedReleaseCardProps) {
  return (
    <a
      href={release.hyperfollow}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl bg-zinc-950 transition-all duration-500 hover:bg-zinc-900/50 group border border-zinc-900/50 hover:border-emerald-500/20"
    >
      {/* Cover */}
      <div className="aspect-square w-full bg-zinc-900 flex items-center justify-center overflow-hidden relative">
        <div className="absolute top-4 left-4 z-20">
          <span className="bg-emerald-500 text-black text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-sm shadow-xl">
            Lançamento
          </span>
        </div>
        
        {release.videoUrl ? (
          <video
            src={release.videoUrl}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : release.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.cover}
            alt={release.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <MusicIcon className="w-16 h-16 text-emerald-500" />
        )}
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
      </div>

      {/* Info */}
      <div className="p-6 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-black uppercase text-orange-500 tracking-[0.3em] mb-1 block">
            {release.type}
          </span>
          <h3 className="text-xl font-black text-white truncate uppercase italic tracking-tight">
            {release.title}
          </h3>
          <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider truncate">
            {release.artists.join(", ")}
          </p>
        </div>

        {/* Spotify Icon Button */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-500 group-hover:bg-[#1DB954] group-hover:border-[#1DB954] group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(29,185,84,0.3)]">
            <SpotifyIcon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </a>
  );
}
