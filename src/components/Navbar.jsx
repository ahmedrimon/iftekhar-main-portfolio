import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const links = ['Work', 'Skills', 'About', 'Contact']

export default function Navbar() {
  const navRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.2 }
    )

    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-12 py-6 transition-colors duration-500 ${
          scrolled ? 'bg-[#e7e4dd] backdrop-blur-sm' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <a
          href="#"
          className="font-display font-bold text-lg tracking-tight text-ink select-none"
          data-cursor="Home"
        >
          IA<span className="text-muted">.</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="nav-link text-sm font-sans font-light tracking-widest uppercase text-ink/70 hover:text-ink transition-colors duration-200"
                data-cursor="Go"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 text-sm font-mono tracking-wider uppercase border border-ink/20 px-5 py-2.5 hover:bg-ink hover:text-paper transition-all duration-300"
          data-cursor="Talk"
        >
          Available for work
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`block w-6 h-px bg-black transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-black transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-black transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#e7e4dd] flex flex-col justify-center px-8 transition-transform duration-500 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col gap-8">
          {links.map((link, i) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="font-display font-bold text-5xl text-ink"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
