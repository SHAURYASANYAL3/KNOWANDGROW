'use client';

import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionHeading from '../components/SectionHeading';
import StatCard from '../components/StatCard';
import FocusCard from '../components/FocusCard';
import TestimonialCard from '../components/TestimonialCard';
import { focusAreas, siteStats, testimonials } from '../lib/content';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-950 text-slate-100">
      <Header />

      <section className="section-bg pb-24 pt-16 sm:pb-28 lg:pb-32">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }}>
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Rooted in Knowledge</p>
            <h1 className="mt-6 max-w-3xl text-5xl font-semibold leading-tight text-white sm:text-6xl">Compassionate education for young people, communities, and trusted adults.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">KNOW & GROW creates calm, honest spaces where youth can learn digital safety, mental health skills, safe relationship practices, and positive community support.</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="/volunteer" className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-950 transition hover:brightness-110">Join the movement</a>
              <a href="/focus-areas" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-gold/40">Our focus areas</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900/80 p-8 shadow-soft sm:p-10">
            <div className="absolute inset-0 bg-hero-glow opacity-90 mix-blend-screen" />
            <div className="relative rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-glow">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-mint">Safe learning</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Youth-led stories. Guided care. Trust-first navigation.</h2>
                </div>
                <div className="rounded-3xl bg-gold/10 px-4 py-3 text-sm text-gold">2026 impact</div>
              </div>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-mint">Resilient youth</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Practical tools that help young people express needs and find support.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
                  <p className="text-sm uppercase tracking-[0.25em] text-mint">Community trust</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">Local leaders and educators work with us to build safer, kinder networks.</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[2rem] bg-gradient-to-br from-gold/20 to-mint/10 p-6 text-slate-950 shadow-soft">
                <p className="text-4xl font-semibold">12k+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-700">Young voices reached</p>
              </div>
              <div className="rounded-[2rem] bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-slate-100 shadow-soft">
                <p className="text-4xl font-semibold">92+</p>
                <p className="mt-3 text-sm uppercase tracking-[0.24em] text-slate-400">Programs delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="container space-y-10 py-16 lg:py-24">
        <SectionHeading eyebrow="Impact" title="Meaningful outcomes with calm, confident support." description="Our work blends youth experience, accessible education, and community partnerships to create measurable change." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {siteStats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </section>

      <section className="section-bg border-t border-white/10 py-16 sm:py-20 lg:py-24">
        <div className="container">
          <SectionHeading eyebrow="What we do" title="Focused support across six core areas." description="From mental wellness to digital wellbeing, each program is designed to feel safe, contemporary, and practical." />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {focusAreas.map((area) => (
              <FocusCard key={area.title} {...area} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.32em] text-mint">Stories that matter</p>
            <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Youth experiences that guide our work.</h2>
            <p className="max-w-2xl text-base leading-8 text-slate-300">Real voices shape our programs. Every story we share is centered on compassion, growth, and active listening.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {testimonials.map((item) => (
              <TestimonialCard key={item.name} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-slate-950 to-brand-900 py-20">
        <div className="container rounded-[3rem] border border-white/10 bg-slate-950/90 p-10 shadow-soft sm:p-14">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gold">Volunteer</p>
              <h2 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">Help shape a safer future for youth.</h2>
              <p className="max-w-xl text-base leading-8 text-slate-300">Volunteers bring warmth, perspective, and consistency to every initiative. Your time and voice can create trusted change.</p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="/volunteer" className="inline-flex min-w-[10rem] items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-950 transition hover:brightness-110">Get involved</a>
              <a href="/contact" className="inline-flex min-w-[10rem] items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-100 transition hover:border-gold/40">Ask a question</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

