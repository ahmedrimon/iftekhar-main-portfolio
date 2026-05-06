import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data'

gsap.registerPlugin(ScrollTrigger)

export default function Skills() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-label',
        { opacity: 0, x: -16 },
        {
          opacity: 1, x: 0, duration: 0.7, stagger: 0.07, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )

      gsap.fromTo(
        '.skill-bar-fill',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 1.2, stagger: 0.08, ease: 'power3.inOut',
          transformOrigin: 'left',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )

      gsap.fromTo(
        '.skill-num',
        { opacity: 0 },
        {
          opacity: 1, duration: 0.5, stagger: 0.08, delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="px-8 md:px-12 py-24 md:py-32 bg-ink text-paper"
    >
      {/* Header */}
      <div className="flex items-center gap-6 mb-20">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/30">
          Tech Stack
        </span>
        <div className="flex-1 h-px bg-paper/10" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/30">
          §02
        </span>
      </div>

      <div className="grid md:grid-cols-2 gap-x-24 gap-y-0">
        {/* Left col heading */}
        <div className="mb-12 md:mb-0 md:col-span-2 flex items-end gap-8 mb-16">
          <h2 className="font-display font-bold text-[clamp(2.5rem,6vw,6rem)] leading-none tracking-tight">
            Skills &
            <br />
            <span className="italic">Expertise</span>
          </h2>
          <p className="hidden md:block max-w-xs font-sans font-light text-paper/50 text-sm leading-relaxed pb-2">
            Four years deep in the React ecosystem — from architecture to animation, from design systems to deployment.
          </p>
        </div>

        {/* Skill bars */}
        {skills.map((skill, i) => (
          <div key={skill.name} className="skill-label border-b border-paper/10 py-5 opacity-0">
            <div className="flex items-center justify-between mb-3">
              <span className="font-sans font-light text-sm text-paper/80 tracking-wide">
                {skill.name}
              </span>
              <span className="skill-num font-mono text-xs text-paper/30 opacity-0">
                {skill.level}%
              </span>
            </div>
            <div className="h-px w-full bg-paper/10 relative overflow-hidden">
              <div
                className="skill-bar-fill absolute inset-0 bg-paper origin-left"
                style={{ transform: 'scaleX(0)', width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Tools row */}
      <div className="mt-20 pt-10 border-t border-paper/10">
        <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-paper/30 mb-6">
          Also comfortable with
        </p>
        <div className="flex flex-wrap gap-3">
          {['Git', 'Vite', 'Webpack', 'Storybook', 'Firebase', 'Supabase', 'Figma', 'Playwright'].map((tool) => (
            <span
              key={tool}
              className="font-mono text-xs tracking-wider uppercase px-3.5 py-1.5 border border-paper/15 text-paper/50 hover:border-paper/40 hover:text-paper/80 transition-colors duration-200 cursor-default"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
