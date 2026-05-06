import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
// import Shines from './components/Shines'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  useEffect(() => {
    // Lenis smooth scroll (CDN-free fallback: just native scroll with GSAP ticker)
    let lenis
    try {
      const { default: Lenis } = require('lenis')
      lenis = new Lenis({ lerp: 0.08, smooth: true })
      gsap.ticker.add((time) => lenis.raf(time * 1000))
      gsap.ticker.lagSmoothing(0)
      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop: () => lenis.scroll,
        getBoundingClientRect: () => ({
          top: 0, left: 0,
          width: window.innerWidth, height: window.innerHeight,
        }),
      })
      lenis.on('scroll', ScrollTrigger.update)
    } catch {
      // Lenis not available — native scroll works fine too
    }

    // Page entry animation
    gsap.set('body', { visibility: 'visible' })

    return () => {
      if (lenis) lenis.destroy()
    }
  }, [])

  return (
    <div className="noise">
      <Cursor />
      <Navbar />
      <main>
        {/* <Shines></Shines> */}
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
