import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef(null)
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="px-8 md:px-12 py-24 md:py-36 bg-paper-2"
    >
      {/* Header */}
      <div className="contact-reveal opacity-0 flex items-center gap-6 mb-20">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">Contact</span>
        <div className="flex-1 h-px bg-ink/10" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">§04</span>
      </div>

      {/* Big CTA heading */}
      <div className="contact-reveal opacity-0 mb-20">
        <h2 className="font-display font-bold text-[clamp(2.5rem,7vw,7.5rem)] leading-[0.9] tracking-tight">
          Let's build
          <br />
          <span className="italic">something</span>
          <br />
          together.
        </h2>
      </div>

      {/* Two-col */}
      <div className="grid md:grid-cols-2 gap-16 md:gap-24">
        {/* Links */}
        <div className="contact-reveal opacity-0">
          <p className="font-sans font-light text-ink/60 text-sm leading-relaxed mb-10 max-w-sm">
            Open to full-time roles, freelance projects, and interesting
            collaborations. Reach out — I usually respond within a day.
          </p>

          <div className="space-y-0">
            {[
              { label: 'Email', val: 'anonnoruddho@gmail.com', href: 'https://mail.google.com/anonnoruddho@gmail.com' },
              { label: 'GitHub', val: 'github.com/ahmedrimon', href: 'https://github.com/ahmedrimon' },
              { label: 'LinkedIn', val: 'linkedin.com/in/iftekhar--ahmed', href: 'https://www.linkedin.com/in/iftekhar--ahmed/' },
            ].map(({ label, val, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between py-5 border-b border-ink/10 hover:border-ink/30 transition-colors duration-300"
                data-cursor="Open"
              >
                <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted">
                  {label}
                </span>
                <span className="font-sans font-light text-sm text-ink group-hover:text-ink/60 transition-colors duration-200">
                  {val}
                  <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="contact-reveal opacity-0">
          {sent ? (
            <div className="flex flex-col items-start gap-4 py-12">
              <span className="font-display font-bold text-3xl">Message sent.</span>
              <p className="font-sans font-light text-ink/60 text-sm">I'll be in touch shortly.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setSent(true)
              }}
              className="space-y-8"
            >
              {[
                { id: 'name', label: 'Your name', type: 'text', placeholder: 'Full name' },
                { id: 'email', label: 'Email address', type: 'email', placeholder: 'your@email.com' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label
                    htmlFor={id}
                    className="block font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
                  >
                    {label}
                  </label>
                  <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    required
                    className="w-full bg-transparent border-b border-ink/20 focus:border-ink pb-3 text-sm font-sans font-light text-ink placeholder-ink/25 outline-none transition-colors duration-200"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[10px] tracking-[0.25em] uppercase text-muted mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  required
                  className="w-full bg-transparent border-b border-ink/20 focus:border-ink pb-3 text-sm font-sans font-light text-ink placeholder-ink/25 outline-none transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                className="group w-full md:w-auto inline-flex items-center justify-center gap-4 bg-ink text-paper px-10 py-4 text-sm font-mono tracking-widest uppercase hover:bg-ink/80 transition-colors duration-300"
                data-cursor="Send"
              >
                Send message
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
