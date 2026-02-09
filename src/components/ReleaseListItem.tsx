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
      className="flex gap-3 p-3 bg-zinc-950 rounded-xl transition-all duration-200 hover:bg-zinc-900 hover:-translate-y-0.5 group"
    >
      {/* Cover */}
      <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center flex-shrink-0 overflow-hidden">
        {release.cover ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={release.cover}
            alt={release.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <MusicIcon className="w-6 h-6 text-emerald-500" />
        )}
      </div>

      {/* Info */}
      <div className="flex-1 flex flex-col justify-center min-w-0">
        <span className="text-[9px] font-semibold uppercase text-orange-500 tracking-wide">
          {release.type}
        </span>
        <h3 className="text-sm font-semibold text-white truncate">
          {release.title}
        </h3>
        <p className="text-xs text-zinc-500 truncate">
          {release.artists.join(", ")}
        </p>
      </div>
    </a>
  );
}
