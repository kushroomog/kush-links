import { SocialLink as SocialLinkType } from "@/types";
import { iconMap, ArrowRightIcon } from "./Icons";

interface SocialLinkProps {
  social: SocialLinkType;
}

export function SocialLink({ social }: SocialLinkProps) {
  const Icon = iconMap[social.icon];

  return (
    <a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-4 px-6 py-5 bg-zinc-950/50 rounded-xl transition-all duration-250 hover:bg-zinc-900 border border-zinc-900/50 hover:border-zinc-800 group"
    >
      {/* Icon */}
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-250 group-hover:scale-110"
        style={{
          backgroundColor: `${social.color}10`,
          color: social.color,
          boxShadow: `0 0 20px ${social.color}05`
        }}
      >
        {Icon && <Icon className="w-6 h-6" />}
      </div>

      {/* Name */}
      <span className="flex-1 font-bold text-zinc-300 group-hover:text-white uppercase tracking-widest text-[11px] transition-colors duration-250">
        {social.name}
      </span>

      {/* Arrow */}
      <ArrowRightIcon className="w-4 h-4 text-zinc-700 transition-all duration-250 group-hover:translate-x-1 group-hover:text-emerald-500" />
    </a>
  );
}
