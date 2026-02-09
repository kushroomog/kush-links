import { ReactNode } from "react";

interface CardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export function Card({ title, icon, children }: CardProps) {
  return (
    <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 animate-fade-in-up relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-emerald-500 before:to-orange-500">
      <h2 className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-4 flex items-center gap-2">
        <span className="text-orange-500">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}
