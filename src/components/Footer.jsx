export default function Footer() {
  return (
    <footer className="bg-ink text-paper px-8 md:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
      <div className="flex items-center gap-6">
        <span className="font-display font-bold text-base italic">Iftekhar Ahmed</span>
        <span className="w-px h-4 bg-paper/20" />
        <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/30">
          React Developer
        </span>
      </div>

      <div className="flex items-center gap-8">
        <a
          href="https://github.com/ahmedrimon"
          target="_blank"
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/30 hover:text-paper/70 transition-colors duration-200"

        >
          Github
        </a>

        <a

          href="https://www.linkedin.com/in/iftekhar--ahmed/"
          target="_blank"
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-paper/30 hover:text-paper/70 transition-colors duration-200"

        >
          Linkedin
        </a>

      </div>

      <span className="font-mono text-[10px] tracking-wider text-paper/20">
        © 2026
      </span>
    </footer>
  )
}
