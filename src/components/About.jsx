import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { experience } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1, y: 0, duration: 0.9, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )

      gsap.fromTo(
        '.exp-item',
        { opacity: 0, x: -20 },
        {
          opacity: 1, x: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.exp-container', start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="px-8 md:px-12 py-24 md:py-32"
    >
      {/* Header */}
      <div className="about-reveal flex items-center gap-6 mb-20 opacity-0">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">About</span>
        <div className="flex-1 h-px bg-ink/10" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">§03</span>
      </div>

      {/* Two-col layout */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
        {/* Bio */}
        <div>
          <h2 className="about-reveal font-display font-bold text-[clamp(2rem,5vw,4.5rem)] leading-tight tracking-tight mb-8 opacity-0">
            Crafting interfaces
            <br />
            <span className="italic text-muted">that endure.</span>
          </h2>
          <div className="about-reveal opacity-0 space-y-5 font-sans font-light text-ink/60 leading-relaxed text-[0.95rem]">
            <p>
              I'm Iftekhar Ahmed — a React developer based in Comilla,
              Bangladesh with four years of experience building production-grade
              web applications.
            </p>
            <p>
              My work sits at the intersection of clean engineering and
              considered design. Before writing a single component, I try to
              understand the problem fully — the user's intent, the team's
              constraints, the product's ambition.
            </p>
            <p>
              I believe the best interfaces are the ones users never have to
              think about. Invisible, fast, and exactly right.
            </p>
          </div>

          {/* Stats */}
          <div className="about-reveal opacity-0 grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-ink/10">
            {[
              { val: '4+', label: 'Years React' },
              { val: '30+', label: 'Apps Shipped' },
              { val: '15+', label: 'Clients' },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-display font-bold text-3xl md:text-4xl text-ink mb-1">
                  {s.val}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info block */}
        <div className="about-reveal opacity-0">
          <div className="bg-[#e7e4dd] p-8 md:p-10 h-full">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-8">
              Quick facts
            </p>
            <dl className="space-y-0">
              {[
                { label: 'Location', val: 'Comilla, Bangladesh' },
                { label: 'Available', val: 'Worldwide · Remote' },
                { label: 'Status', val: 'Open to work' },
                { label: 'Primary stack', val: 'React · TypeScript' },
                { label: 'Education', val: 'Diploma In Engineering' },
                { label: 'Certified', val: 'Meta React · AWS CP' },
              ].map(({ label, val }) => (
                <div key={label} className="flex justify-between items-baseline py-4 border-b border-ink/10 last:border-0">
                  <dt className="font-mono text-xs tracking-wider uppercase text-muted">{label}</dt>
                  <dd className="font-sans font-light text-sm text-ink">{val}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="exp-container">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted mb-10">
          Experience
        </p>
        <div className="space-y-0">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="exp-item opacity-0 grid md:grid-cols-[1fr_2fr] gap-4 md:gap-12 py-8 border-b border-ink/10 last:border-0"
            >
              <div>
                <p className="font-display font-bold text-base text-ink mb-1">{exp.role}</p>
                <p className="font-mono text-xs tracking-wider text-muted">{exp.company}</p>
                <p className="font-mono text-xs tracking-wider text-muted/60 mt-1">{exp.period}</p>
              </div>
              <p className="font-sans font-light text-sm text-ink/60 leading-relaxed">
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
