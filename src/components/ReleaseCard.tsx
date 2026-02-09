import { Release } from "@/types";
import { SpotifyIcon, MusicIcon } from "./Icons";

interface ReleaseCardProps {
  release: Release;
}

export function ReleaseCard({ release }: ReleaseCardProps) {
  return (
    <a
      href={release.hyperfollow}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 p-4 bg-zinc-950 rounded-xl transition-all duration-200 hover:bg-zinc-900 hover:-translate-y-0.5 group"
    >
      {/* Cover */}
      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {release.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.cover}
            alt={release.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <MusicIcon className="w-8 h-8 text-emerald-500" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <span className="text-[10px] font-semibold uppercase text-orange-500 tracking-wide">
          {release.type}
        </span>
        <h3 className="text-base font-semibold text-white truncate">
          {release.title}
        </h3>
        <p className="text-xs text-zinc-400 truncate">
          {release.artists.join(", ")}
        </p>
      </div>

      {/* Spotify Icon */}
      <div className="flex items-center flex-shrink-0">
        <div className="w-11 h-11 rounded-full bg-[#1DB954] flex items-center justify-center transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_4px_20px_rgba(29,185,84,0.4)]">
          <SpotifyIcon className="w-6 h-6 text-black" />
        </div>
      </div>
    </a>
  );
}
