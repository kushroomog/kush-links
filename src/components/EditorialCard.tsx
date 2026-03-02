import { EditorialSection } from "@/types";
import { NewspaperIcon } from "./Icons";

interface EditorialCardProps {
  editorial: EditorialSection;
}

export function EditorialCard({ editorial }: EditorialCardProps) {
  return (
    <a
      href={editorial.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block overflow-hidden rounded-xl bg-zinc-950 transition-all duration-500 hover:bg-zinc-900/50 group border border-zinc-900/50 hover:border-emerald-500/20"
    >
      {/* 16:9 Image */}
      <div className="aspect-video w-full bg-zinc-900 flex items-center justify-center overflow-hidden relative">
        {editorial.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={editorial.imageUrl}
            alt={editorial.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[20%] group-hover:grayscale-0"
          />
        ) : (
          <NewspaperIcon className="w-16 h-16 text-emerald-500" />
        )}
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
      </div>

      {/* Info */}
      <div className="p-6 flex items-center gap-4">
        <div className="flex-1 min-w-0">
          <span className="text-[9px] font-black uppercase text-orange-500 tracking-[0.3em] mb-1 block">
            Kushroom Site
          </span>
          <h3 className="text-xl font-black text-white truncate uppercase italic tracking-tight mb-1">
            {editorial.title}
          </h3>
          {editorial.description && (
            <p className="text-xs text-zinc-500 font-bold uppercase tracking-widest truncate">
              {editorial.description}
            </p>
          )}
        </div>

        {/* Action Icon */}
        <div className="flex-shrink-0">
          <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center transition-all duration-500 group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]">
            <NewspaperIcon className="w-7 h-7 text-white group-hover:text-black transition-colors" />
          </div>
        </div>
      </div>
    </a>
  );
}
