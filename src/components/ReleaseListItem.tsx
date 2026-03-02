import { Release } from "@/types";
import { MusicIcon } from "./Icons";

interface ReleaseListItemProps {
  release: Release;
}

export function ReleaseListItem({ release }: ReleaseListItemProps) {
  return (
    <a
      href={release.hyperfollow}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 p-4 bg-zinc-950/50 rounded-xl transition-all duration-300 hover:bg-zinc-900 border border-zinc-900/50 hover:border-zinc-800 group hover:-translate-y-1 hover:shadow-2xl"
    >
      {/* Cover */}
      <div className="w-16 h-16 rounded-lg bg-zinc-900 flex items-center justify-center flex-shrink-0 overflow-hidden border border-zinc-800 group-hover:border-zinc-700 transition-colors">
        {release.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.cover}
            alt={release.title}
            className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
          />
        ) : (
          <MusicIcon className="w-8 h-8 text-emerald-500/50" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <h3 className="text-[15px] font-black text-white truncate uppercase italic tracking-tight mb-1">
          {release.title}
        </h3>
        <p className="text-[10px] text-zinc-500 font-bold uppercase tracking-widest truncate">
          {release.artists.join(", ")} {release.year && `• ${release.year}`} • {release.type}
        </p>
      </div>
    </a>
  );
}
