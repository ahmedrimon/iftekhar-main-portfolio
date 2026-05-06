import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { projects } from '../data'

gsap.registerPlugin(ScrollTrigger)

// Placeholder project preview using SVG
// function ProjectPreview({ project }) {
//   return (
//     <div
//       className="absolute right-0 top-1/2 -translate-y-1/2 w-[320px] h-[220px] pointer-events-none z-30 overflow-hidden"
//       style={{ background: project.color }}
//     >
//       <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-8">
//         <span className="font-display font-bold text-4xl text-ink/20">{project.num}</span>
//         <span className="font-mono text-xs tracking-[0.3em] uppercase text-ink/40">{project.type}</span>
//         <div className="w-8 h-px bg-ink/20" />
//         <div className="flex flex-wrap gap-1.5 justify-center mt-1">
//           {project.tags.slice(0, 2).map((tag) => (
//             <span key={tag} className="text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 border border-ink/10 text-ink/50">
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

function ProjectRow({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const rowRef = useRef(null)
  const previewRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      rowRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: {
          trigger: rowRef.current,
          start: 'top 85%',
        },
        delay: index * 0.08,
      }
    )
  }, [index])

  useEffect(() => {
    if (!previewRef.current) return
    gsap.to(previewRef.current, {
      opacity: hovered ? 1 : 0,
      scale: hovered ? 1 : 0.94,
      duration: 0.35,
      ease: 'power2.out',
    })
  }, [hovered])

  return (
    <div
      ref={rowRef}
      className="relative group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-cursor="View"
    >
      
      {projects.map((project, id) => (
        <a href={project.url} key={project.id}
    target="_blank" className="block">
        <div className="flex items-center gap-6 md:gap-10 py-7 md:py-8 border-b border-[#0a0a0a] group-hover:border-ink/30 transition-colors duration-300 relative overflow-visible">
          {/* Number */}
          <span className="font-mono text-xs tracking-widest text-[#9a9590] w-6 shrink-0">
            {project.num}
          </span>

          {/* Title + subtitle */}
          <div className="flex-1 min-w-0">
            <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4">
              <h3 className="font-display font-bold text-2xl md:text-4xl text-ink group-hover:text-ink transition-colors duration-200 leading-none">
                {project.title}
              </h3>
              <span className="font-sans font-light text-sm md:text-base text-muted">
                — {project.subtitle}
              </span>
            </div>
          </div>

          {/* Tags — hidden on mobile */}
          <div className="hidden lg:flex items-center gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-2.5 py-1 border border-ink/15 text-ink/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Year */}
          <span className="hidden md:block font-mono text-xs tracking-widest text-muted shrink-0">
            {project.year}
          </span>

          {/* Arrow */}
          <span className="font-mono text-sm text-muted group-hover:text-ink group-hover:translate-x-1 transition-all duration-300 shrink-0">
            →
          </span>
        </div>
      </a>
      ))}

      {/* Hover preview */}
      {/* <div
        ref={previewRef}
        className="opacity-0 scale-95 pointer-events-none"
        style={{ position: 'absolute', right: '4rem', top: '50%', transform: 'translateY(-50%)' }}
      >
        <ProjectPreview project={project}/>
      </div> */}
    </div>
  )
}

export default function Projects() {
  const sectionRef = useRef(null)
  const headRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      headRef.current,
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: headRef.current, start: 'top 80%' },
      }
    )
  }, [])

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="px-8 md:px-12 py-24 md:py-32"
    >
      {/* Section label */}
      <div ref={headRef} className="flex items-center gap-6 mb-16">
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">Selected Work</span>
        <div className="flex-1 h-px bg-ink/10" />
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted">2020 – 2025</span>
      </div>

      {/* Project list */}
      <div>
        {/* {projects.map((project, i) => (
        ))} */}
        {/* <ProjectRow key={project.id} project={project} index={i} /> */}
        <ProjectRow />
      </div>

      {/* View all */}
      <div className="mt-16 flex justify-end">
        <a
          href="#"
          className="group inline-flex items-center gap-3 font-mono text-xs tracking-[0.2em] uppercase text-muted hover:text-ink transition-colors duration-300"
          data-cursor="More"
        >
          All projects
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </a>
      </div>
    </section>
  )
}
