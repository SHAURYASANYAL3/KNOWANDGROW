interface BlogCardProps {
  title: string;
  summary: string;
  category: string;
}

export default function BlogCard({ title, summary, category }: BlogCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/30 hover:bg-slate-900/95">
      <span className="inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">{category}</span>
      <h3 className="mt-6 text-2xl font-semibold text-white">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{summary}</p>
      <div className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-gold">Read more →</div>
    </article>
  );
}
