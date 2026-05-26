interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="space-y-4 text-center lg:text-left">
      <p className="text-xs uppercase tracking-[0.25em] text-mint">{eyebrow}</p>
      <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl">{title}</h2>
      <p className="max-w-2xl text-sm leading-7 text-slate-300">{description}</p>
    </div>
  );
}
