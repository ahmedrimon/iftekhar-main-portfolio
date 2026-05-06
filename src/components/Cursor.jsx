import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Cursor() {
  const cursorRef = useRef(null)
  const labelRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const label = labelRef.current
    let xTo = gsap.quickTo(cursor, 'x', { duration: 0.4, ease: 'power3' })
    let yTo = gsap.quickTo(cursor, 'y', { duration: 0.4, ease: 'power3' })

    const move = (e) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const enterLink = (e) => {
      cursor.classList.add('cursor--hover')
      const txt = e.currentTarget.dataset.cursor
      if (txt && label) label.textContent = txt
    }

    const leaveLink = () => {
      cursor.classList.remove('cursor--hover')
      if (label) label.textContent = ''
    }

    window.addEventListener('mousemove', move)

    const links = document.querySelectorAll('[data-cursor]')
    links.forEach((el) => {
      el.addEventListener('mouseenter', enterLink)
      el.addEventListener('mouseleave', leaveLink)
    })

    return () => {
      window.removeEventListener('mousemove', move)
      links.forEach((el) => {
        el.removeEventListener('mouseenter', enterLink)
        el.removeEventListener('mouseleave', leaveLink)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className="cursor fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference flex items-center justify-center"
      style={{ transform: 'translate(-50%, -50%)' }}
    >
      <span
        ref={labelRef}
        className="text-paper text-[10px] font-mono tracking-widest uppercase opacity-0 transition-opacity duration-200 select-none"
        style={{ opacity: 0 }}
      />
    </div>
  )
}
