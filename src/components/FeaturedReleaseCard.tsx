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
      className="block overflow-hidden rounded-xl bg-zinc-950 transition-all duration-200 hover:bg-zinc-900 group"
    >
      {/* Cover */}
      <div className="aspect-square w-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center overflow-hidden">
        {release.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.cover}
            alt={release.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <MusicIcon className="w-16 h-16 text-emerald-500" />
        )}
      </div>

      {/* Info */}
      <div className="p-4 flex items-center gap-3">
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-semibold uppercase text-orange-500 tracking-wide">
            {release.type}
          </span>
          <h3 className="text-lg font-semibold text-white truncate">
            {release.title}
          </h3>
          <p className="text-sm text-zinc-400 truncate">
            {release.artists.join(", ")}
          </p>
        </div>

        {/* Spotify Icon */}
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-[#1DB954] flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_4px_20px_rgba(29,185,84,0.4)]">
            <SpotifyIcon className="w-6 h-6 text-black" />
          </div>
        </div>
      </div>
    </a>
  );
}
