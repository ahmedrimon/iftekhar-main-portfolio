import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const words = ['React', 'TypeScript', 'Next.js', 'GSAP', 'Tailwind', 'Node.js']

export default function Hero() {
  const containerRef = useRef(null)
  const headRef = useRef(null)
  const subRef = useRef(null)
  const lineRef = useRef(null)
  const ctaRef = useRef(null)
  const marqueeRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      // Reveal lines
      tl.fromTo(
        '.hero-line',
        { yPercent: 110 },
        { yPercent: 0, duration: 1.1, stagger: 0.12 },
        0.5
      )
        .fromTo(
          subRef.current,
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.0
        )
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 1, ease: 'power3.inOut', transformOrigin: 'left' },
          0.8
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          1.1
        )
        .fromTo(
          marqueeRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          1.3
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      id="work"
      className="min-h-screen flex flex-col justify-between pt-28 pb-0 px-8 md:px-12 overflow-hidden"
    >
      {/* Main heading */}
      <div className="flex-1 flex flex-col justify-center">
        <div className="mb-6">
          <div className="clip-reveal hover:bg-[#07238a] hover:text-white">
            <h1 className="hero-line font-display font-black text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight text-ink">
              Iftekhar
            </h1>
          </div>
          <div className="clip-reveal">
            <h1 className="hover:bg-[#07238a] hover:text-white hero-line font-display font-black text-[clamp(3.5rem,10vw,9rem)] leading-[0.9] tracking-tight text-ink italic">
              Ahmed
            </h1>
          </div>
        </div>

        <div
          ref={lineRef}
          className="w-full h-px bg-ink/20 mb-8"
          style={{ transformOrigin: 'left', transform: 'scaleX(0)' }}
        />

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <p
            ref={subRef}
            className="max-w-md text-base md:text-lg font-sans font-light text-ink/60 leading-relaxed"
          >
            React developer crafting fast, beautiful, and scalable web
            experiences.
          </p>

          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 bg-ink text-paper px-7 py-4 text-sm font-mono tracking-widest uppercase hover:bg-ink/80 transition-colors duration-300"
              data-cursor="View"
            >
              View work
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-ink/25 text-ink px-7 py-4 text-sm font-mono tracking-widest uppercase hover:border-ink transition-colors duration-300"
              data-cursor="Talk"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="flex items-center gap-4 py-8">
        <div className="flex flex-col items-center gap-1">
          <div className="w-px h-12 bg-black" />
          <div className="w-1 h-1 rounded-full bg-ink/40" />
        </div>
        <span className="text-xs font-mono tracking-[0.3em] uppercase text-muted">Scroll</span>
      </div>

      {/* Marquee */}
      <div
        ref={marqueeRef}
        className="overflow-hidden border-t border-ink/10 py-4 -mx-8 md:-mx-12 px-8 md:px-12 bg-black"
      >
        <div className="marquee-track flex gap-12 whitespace-nowrap w-max">
          {[...words, ...words].map((word, i) => (
            <span
              key={i}
              className="font-mono text-xs tracking-[0.3em] uppercase text-white"
            >
              {word}
              <span className="mx-6 text-white">·</span>
            </span>
          ))}
        </div>
      </div>
      {/* Something try */}
    </section>
  )
}
