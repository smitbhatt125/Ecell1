import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

/* ─── Scroll reveal hook ─── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.12 }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/* ─── Role selector data ─── */
const ROLES = [
  { id: 'tech',      label: 'Tech',             desc: 'You build things. You write code or architect systems. Your superpower is making ideas real.' },
  { id: 'design',    label: 'Design',            desc: 'You see what others miss. You shape experiences, visuals and the story products tell.' },
  { id: 'business',  label: 'Business',          desc: 'You understand markets, people and opportunity. You make sure the right idea reaches the right people.' },
  { id: 'marketing', label: 'Marketing',         desc: 'You build the narrative. You find the audience. You make people care before they buy.' },
  { id: 'ideation',  label: 'Ideas',             desc: 'You question everything. You see problems as opportunities. The spark starts with you.' },
];

/* ─── Arrow icon ─── */
const Arrow = ({ cls = '' }: { cls?: string }) => (
  <svg className={cls} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path d="M1 8h14M9 2l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Home() {
  useReveal();
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const signalRef = useRef<SVGPathElement>(null);

  const activeData = ROLES.find(r => r.id === activeRole);

  return (
    <div className="w-full flex flex-col">

      {/* ══════════════════════════════════════
          01 — HERO: THE SIGNAL
      ══════════════════════════════════════ */}
      <section className="relative min-h-screen flex flex-col justify-end pb-20 px-6 md:px-12 lg:px-20 pt-28 overflow-hidden">

        {/* Background — very subtle warm texture */}
        <div className="absolute inset-0 bg-bordeaux" aria-hidden="true">
          {/* Soft glow from bottom right */}
          <div className="absolute bottom-0 right-0 w-[55vw] h-[55vw] bg-dypsem-red/8 blur-[120px] rounded-full pointer-events-none" />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{ backgroundImage: 'linear-gradient(rgba(243,233,220,1) 1px, transparent 1px), linear-gradient(90deg, rgba(243,233,220,1) 1px, transparent 1px)', backgroundSize: '80px 80px' }}
          />
        </div>

        {/* "THE SIGNAL" — SVG line that draws itself */}
        <svg
          className="absolute top-0 right-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          {/* Main trajectory — raw, slightly imperfect */}
          <path
            ref={signalRef}
            className="signal-path"
            d="M1440 900 C1200 700, 1100 500, 900 380 S600 200, 400 100 C300 55, 180 30, 80 10"
            stroke="url(#signalGrad)"
            strokeWidth="1"
            fill="none"
          />
          {/* Tiny spark node at the end of the signal */}
          <circle cx="80" cy="10" r="3" fill="#731B1F" opacity="0.6" className="pulse-dot" style={{ animationDelay: '3s' }} />
          <circle cx="80" cy="10" r="8" stroke="#731B1F" strokeWidth="0.5" opacity="0.3" className="pulse-dot" style={{ animationDelay: '3s' }} />
          <defs>
            <linearGradient id="signalGrad" x1="1440" y1="900" x2="80" y2="10" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#731B1F" stopOpacity="0" />
              <stop offset="60%" stopColor="#731B1F" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#C4A19A" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>

        {/* Content */}
        <div className="relative z-10 max-w-screen-xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="anim-fade-up flex items-center gap-3 mb-10" style={{ animationDelay: '0.1s' }}>
            <span className="w-1.5 h-1.5 bg-dypsem-red rounded-full pulse-dot" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-dypsem-red">DYPSEM E-CELL · 2026</span>
          </div>

          {/* Headline */}
          <h1 className="anim-fade-up font-display font-bold leading-[0.95] tracking-tighter mb-8" style={{ animationDelay: '0.2s', fontSize: 'clamp(3rem, 9vw, 8rem)' }}>
            Something<br/>
            <span className="text-vanilla-silk/35">starts here.</span>
          </h1>

          {/* Sub headline */}
          <p className="anim-fade-up text-vanilla-silk/60 font-light leading-relaxed mb-12 max-w-lg" style={{ animationDelay: '0.35s', fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}>
            DYPSEM's first E-Cell. Building a space where ideas find teams, teams find direction, and direction becomes something real.
          </p>

          {/* CTAs */}
          <div className="anim-fade-up flex flex-wrap items-center gap-5" style={{ animationDelay: '0.5s' }}>
            <Link to="/auth" className="btn-primary">
              <span>Find Your Team</span>
              <Arrow />
            </Link>
            <Link to="/eureka" className="btn-ghost">
              Explore Eureka!
            </Link>
          </div>

          {/* Scroll nudge */}
          <div className="anim-fade-up mt-20 flex items-center gap-3 text-vanilla-silk/30" style={{ animationDelay: '0.9s' }}>
            <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
            <div className="h-8 w-px bg-vanilla-silk/15" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          02 — THE STATEMENT (dark → cream moment)
      ══════════════════════════════════════ */}
      <section className="bg-vanilla-silk text-bordeaux py-28 md:py-40 px-6 md:px-12 lg:px-20 overflow-hidden relative">
        <div className="max-w-screen-xl mx-auto">
          <div className="reveal">
            {/* Giant background word */}
            <div
              aria-hidden="true"
              className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-bordeaux/5 select-none pointer-events-none leading-none"
              style={{ fontSize: 'clamp(8rem, 22vw, 18rem)' }}
            >
              START.
            </div>

            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-dypsem-red mb-8">The idea</p>
            <h2 className="font-display font-bold leading-[1.02] tracking-tighter mb-10 max-w-4xl relative z-10" style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}>
              You don't need a company.<br/>
              You don't need a perfect plan.<br/>
              <span className="text-bordeaux/40">You need a reason to start.</span>
            </h2>
            <p className="text-bordeaux/60 max-w-xl leading-relaxed font-light text-lg">
              DYPSEM E-Cell exists to give students the people, the opportunities, and the environment to take the first step. That's it.
            </p>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          03 — MARQUEE TICKER
      ══════════════════════════════════════ */}
      <div className="bg-dypsem-red py-4 overflow-hidden" aria-hidden="true">
        <div className="marquee-track text-sm font-semibold tracking-widest uppercase text-white/80 gap-16 whitespace-nowrap">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="flex items-center gap-16">
              {['Idea', 'Team', 'Build', 'Test', 'Pitch', 'Impact', 'Eureka!', 'NEC 2026', 'Start'].map(w => (
                <span key={w} className="flex items-center gap-16">
                  <span>{w}</span>
                  <span className="text-white/30 font-normal">·</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════
          04 — WHO ARE YOU? (Role selector — THE WOW MOMENT)
      ══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-deep-burgundy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-bordeaux/60 to-deep-burgundy/0 pointer-events-none" />
        <div className="max-w-screen-xl mx-auto relative z-10">
          <div className="reveal mb-16">
            <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-dypsem-red mb-4">The people</p>
            <h2 className="font-display font-bold leading-tight tracking-tighter" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}>
              What do <em className="not-italic text-vanilla-silk/35">you</em> bring?
            </h2>
          </div>

          {/* Role pills */}
          <div className="reveal flex flex-wrap gap-3 mb-12">
            {ROLES.map(r => (
              <button
                key={r.id}
                onClick={() => setActiveRole(prev => prev === r.id ? null : r.id)}
                className={`role-card px-6 py-3 rounded-full border font-semibold text-sm tracking-wide transition-all duration-250 ${
                  activeRole === r.id
                    ? 'bg-vanilla-silk text-bordeaux border-vanilla-silk shadow-[0_0_25px_rgba(243,233,220,0.2)]'
                    : 'bg-transparent text-vanilla-silk/70 border-vanilla-silk/15 hover:border-vanilla-silk/40 hover:text-vanilla-silk'
                }`}
                aria-pressed={activeRole === r.id}
              >
                {r.label}
              </button>
            ))}
          </div>

          {/* Role description — animated */}
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeRole ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
          >
            <div className="border-l-2 border-dypsem-red pl-8 py-4 mb-12">
              <p className="text-xl md:text-2xl font-light text-vanilla-silk/80 leading-relaxed max-w-2xl">
                {activeData?.desc}
              </p>
              <Link
                to="/directory"
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold tracking-wide text-dypsem-red hover:text-vanilla-silk transition-colors group"
              >
                Find people who need your skill
                <Arrow cls="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Static prompt if nothing selected */}
          {!activeRole && (
            <p className="text-vanilla-silk/30 text-sm font-medium reveal">
              ↑ Select your role and we'll show you who needs you.
            </p>
          )}

          {/* Bottom row */}
          <div className="reveal mt-16 pt-10 border-t border-vanilla-silk/8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-vanilla-silk/50 max-w-md leading-relaxed">
              Every team that will build something this year needs a different combination of skills. Your role in that story is already decided by what you do, not who you are.
            </p>
            <Link to="/directory" className="btn-primary flex-shrink-0">
              <span>Browse Students</span>
              <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          05 — THE CONNECTION (find team)
      ══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-bordeaux relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left */}
            <div>
              <div className="reveal">
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-dypsem-red mb-4">The team</p>
                <h2 className="font-display font-bold leading-[1.05] tracking-tighter mb-8" style={{ fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)' }}>
                  The hardest part<br/>
                  <span className="text-vanilla-silk/35">isn't the idea.</span>
                </h2>
              </div>
              <div className="reveal">
                <p className="text-vanilla-silk/60 leading-relaxed text-lg mb-8 max-w-md">
                  Maybe you're a developer looking for someone who can sell. Maybe you're a designer with no product to work on. Maybe you have the idea but you can't build it alone.
                </p>
                <p className="text-vanilla-silk font-medium text-lg mb-12">That's exactly why we built this.</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/directory" className="btn-primary">
                    <span>Find Your Team</span>
                    <Arrow />
                  </Link>
                  <Link to="/auth" className="btn-ghost">
                    Create Profile
                  </Link>
                </div>
              </div>
            </div>

            {/* Right — visual skill grid */}
            <div className="reveal relative">
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Tech', sub: 'Build what matters', delay: '0ms' },
                  { label: 'Design', sub: 'Shape the experience', delay: '80ms' },
                  { label: 'Business', sub: 'Find the opportunity', delay: '160ms' },
                  { label: 'Marketing', sub: 'Tell the story', delay: '240ms' },
                ].map(item => (
                  <Link
                    to="/directory"
                    key={item.label}
                    style={{ transitionDelay: item.delay }}
                    className="student-card rounded-2xl p-6 block group"
                  >
                    <div className="text-2xl font-display font-bold text-vanilla-silk mb-1">{item.label}</div>
                    <div className="text-xs text-vanilla-silk/40 font-medium group-hover:text-vanilla-silk/70 transition-colors">{item.sub}</div>
                    <div className="mt-4 text-dypsem-red opacity-0 group-hover:opacity-100 transition-opacity text-xs font-semibold flex items-center gap-1">
                      Find students <Arrow cls="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
              {/* Connecting visual */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 400 300" preserveAspectRatio="none" aria-hidden="true">
                <line x1="200" y1="75" x2="200" y2="225" stroke="#F3E9DC" strokeWidth="0.5" strokeDasharray="4 4" />
                <line x1="100" y1="150" x2="300" y2="150" stroke="#F3E9DC" strokeWidth="0.5" strokeDasharray="4 4" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          06 — MANIFESTO PULL QUOTE
          (cream moment — dramatic contrast)
      ══════════════════════════════════════ */}
      <section className="bg-vanilla-silk text-bordeaux py-32 md:py-48 px-6 md:px-12 lg:px-20 relative overflow-hidden">
        <div className="max-w-screen-xl mx-auto">
          <div className="reveal max-w-5xl">
            <h2
              className="font-display font-bold leading-[1.02] tracking-tighter mb-10"
              style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6rem)' }}
            >
              "We believe the right<br/>
              teammate can change<br/>
              <em>the trajectory of an idea.</em>"
            </h2>
            <div className="flex items-center gap-6">
              <Link
                to="/manifesto"
                className="inline-flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-dypsem-red hover:text-bordeaux transition-colors group"
              >
                Read the Manifesto
                <Arrow cls="group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="h-px flex-1 bg-bordeaux/10 max-w-xs" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          07 — EUREKA (challenge context)
      ══════════════════════════════════════ */}
      <section className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-bordeaux relative">
        <div className="section-rule mb-0" />
        <div className="max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start pt-16">
            {/* Label column */}
            <div className="lg:col-span-4">
              <div className="reveal">
                <p className="text-[11px] font-semibold tracking-[0.25em] uppercase text-dypsem-red mb-4">The challenge</p>
                <h2 className="font-display font-bold leading-[1.05] tracking-tighter" style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}>
                  Eureka!
                </h2>
                <p className="text-vanilla-silk/40 text-sm mt-2 font-medium">by E-Cell IIT Bombay</p>
              </div>
            </div>

            {/* Content column */}
            <div className="lg:col-span-8">
              <div className="reveal">
                <p className="text-xl md:text-2xl text-vanilla-silk/70 font-light leading-relaxed mb-12 max-w-2xl">
                  From idea to something you can actually defend. Eureka! is IIT Bombay's flagship business-plan competition — and it's one track of the journey we're taking this year through the National Entrepreneurship Challenge.
                </p>
                <div className="flex flex-wrap gap-4 items-center">
                  <Link to="/eureka" className="btn-primary">
                    <span>Understand the Journey</span>
                    <Arrow />
                  </Link>
                  <span className="text-sm text-vanilla-silk/30 font-medium">Part of NEC by E-Cell IIT Bombay</span>
                </div>
              </div>
            </div>
          </div>

          {/* Four stages */}
          <div className="mt-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-vanilla-silk/5 border border-vanilla-silk/5">
            {[
              { num: '01', title: 'Idea', copy: 'What problem are you solving?' },
              { num: '02', title: 'Team',  copy: 'Who needs to build it with you?' },
              { num: '03', title: 'Validate', copy: 'What evidence supports your assumptions?' },
              { num: '04', title: 'Pitch', copy: 'Can you explain the opportunity clearly?' },
            ].map(stage => (
              <div key={stage.num} className="reveal bg-bordeaux p-8 group hover:bg-deep-burgundy transition-colors">
                <div className="text-5xl font-display font-bold text-vanilla-silk/8 mb-6 group-hover:text-vanilla-silk/15 transition-colors">{stage.num}</div>
                <div className="text-lg font-bold text-vanilla-silk mb-2">{stage.title}</div>
                <div className="text-sm text-vanilla-silk/50 leading-relaxed">{stage.copy}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          08 — FINAL CTA (big, emotional)
      ══════════════════════════════════════ */}
      <section className="py-36 md:py-56 px-6 md:px-12 lg:px-20 bg-dypsem-red relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #F3E9DC 1px, transparent 1px)', backgroundSize: '40px 40px' }} aria-hidden="true" />

        <div className="max-w-screen-xl mx-auto text-center relative z-10">
          <div className="reveal">
            <h2
              className="font-display font-bold tracking-tighter leading-[0.95] text-vanilla-silk mb-6"
              style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
            >
              Make the<br/>first move.
            </h2>
            <p className="text-vanilla-silk/60 text-lg md:text-xl font-light mb-14 max-w-lg mx-auto">
              Your idea doesn't need to be perfect. You don't need a team yet. You need to begin.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link to="/auth" className="btn-primary text-base px-10 py-5">
                <span>Get Started</span>
                <Arrow />
              </Link>
              <Link to="/directory" className="btn-ghost border-white/20 text-white text-base px-10 py-5 hover:border-white/50 hover:bg-white/5">
                Find Your Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
