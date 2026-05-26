interface StatCardProps {
  label: string;
  value: string;
  detail: string;
}

export default function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <article className="group rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 text-slate-100 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-slate-900/95">
      <p className="text-4xl font-semibold tracking-tight text-white">{value}</p>
      <p className="mt-4 text-sm uppercase tracking-[0.24em] text-mint">{label}</p>
      <p className="mt-5 text-sm leading-7 text-slate-300">{detail}</p>
    </article>
  );
}
