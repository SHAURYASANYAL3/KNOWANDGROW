interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  accent: string;
}

export default function TestimonialCard({ name, role, quote, accent }: TestimonialCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-slate-900/95">
      <div className={`mb-5 h-2 w-16 rounded-full bg-gradient-to-r ${accent}`} />
      <p className="text-lg leading-8 text-slate-200">“{quote}”</p>
      <div className="mt-8 border-t border-white/10 pt-5">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-sm text-slate-400">{role}</p>
      </div>
    </article>
  );
}
