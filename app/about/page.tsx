import Header from '../../components/Header';
import Footer from '../../components/Footer';
import SectionHeading from '../../components/SectionHeading';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-brand-950 text-slate-100">
      <Header />

      <section className="section-bg py-20 sm:py-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-mint">About us</p>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">KNOW & GROW is youth-led, trusted, and present for every conversation.</h1>
            <p className="max-w-2xl text-base leading-8 text-slate-300">We are a movement that supports young people with empathetic education and community-powered guidance. Our mission is to build stronger connections, safer choices, and natural learning paths.</p>
          </div>
          <div className="rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft">
            <div className="space-y-5">
              <div className="rounded-[2rem] bg-gradient-to-br from-gold/20 to-mint/10 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-600">Our values</p>
                <p className="mt-4 text-lg font-semibold text-slate-950">Respect, honesty, responsibility, and compassion.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-950/95 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-mint">Rooted</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Grounded in trusted information and peer-led care.</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-950/95 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-mint">Responsive</p>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Designed to meet young people where they are.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <SectionHeading eyebrow="Approach" title="Learning, listening, and acting with empathy." description="Every initiative includes youth voices, research-based structure, and a calm environment for progress." />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: 'Participant-first design',
              text: 'Programs focus on respect, choice, and meaningful connection rather than pressure or slogans.'
            },
            {
              title: 'Trusted facilitation',
              text: 'Our facilitators are trained to speak openly, without judgment, and keep everyone safe.'
            },
            {
              title: 'Community collaboration',
              text: 'We work with schools, families, and local partners to create shared support systems.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft">
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-brand-900 py-20">
        <div className="container grid gap-10 rounded-[3rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.32em] text-gold">Mission</p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl">A safer, more informed generation is possible.</h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300">We bring young people tools for self-awareness, digital confidence, and healthy relationships, so communities grow with kindness and clarity.</p>
          </div>
          <div className="space-y-4 rounded-[2.5rem] bg-slate-900/95 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-mint">Contact</p>
            <p className="text-base leading-7 text-slate-200">team.knowandgrow.org@gmail.com</p>
            <p className="text-sm leading-7 text-slate-400">We respond to partnership, volunteering, and program questions with care.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

