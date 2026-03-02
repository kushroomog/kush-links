import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}

export function Card({ title, icon, children, className = "" }: CardProps) {
  return (
    <section className={`glass-card rounded-2xl p-6 relative overflow-hidden group/card ${className}`}>
      {/* Accent Top Border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-emerald-500/50 via-orange-500/50 to-emerald-500/50 opacity-50" />
      
      <h2 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 mb-6 flex items-center gap-2">
        <span className="text-orange-500/80 group-hover/card:scale-110 transition-transform duration-300">
          {icon}
        </span>
        {title}
      </h2>
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
