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
      className="flex items-center gap-4 px-5 py-4 bg-zinc-950 rounded-xl transition-all duration-200 hover:bg-zinc-900 hover:-translate-y-0.5 group"
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center"
        style={{
          backgroundColor: `${social.color}20`,
          color: social.color,
        }}
      >
        {Icon && <Icon className="w-5 h-5" />}
      </div>

      {/* Name */}
      <span className="flex-1 font-medium text-white">{social.name}</span>

      {/* Arrow */}
      <ArrowRightIcon className="w-4 h-4 text-zinc-500 transition-transform duration-200 group-hover:translate-x-1" />
    </a>
  );
}
