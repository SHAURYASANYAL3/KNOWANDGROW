interface FocusCardProps {
  title: string;
  description: string;
  accent: string;
}

export default function FocusCard({ title, description, accent }: FocusCardProps) {
  return (
    <article className={`group overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-slate-900/95 sm:p-10`}>
      <div className={`mb-6 inline-flex rounded-full bg-gradient-to-r ${accent} px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-white/95 shadow-glow`}>Focus</div>
      <h3 className="text-2xl font-semibold leading-tight text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{description}</p>
    </article>
  );
}
