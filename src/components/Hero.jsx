import { useState, useCallback, useRef } from 'react'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons'
import resumePdf from '../assets/Aarya_resume.pdf'
import stickerImg from '../assets/aarya_sticker.png'


const Hero = ({ setCurrentPage }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth < 1024) return
    if (rafRef.current) return
    rafRef.current = requestAnimationFrame(() => {
      setMouse({ x: e.clientX, y: e.clientY })
      rafRef.current = null
    })
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen bg-[#030303] flex items-center relative overflow-hidden pt-24 pb-12"
      onMouseMove={handleMouseMove}
    >
      {/* Large watermark text — desktop only */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.035]">
        <span className="text-[22vw] font-display font-black leading-none tracking-tighter text-white whitespace-nowrap">
          AARYA
        </span>
      </div>

      {/* Mouse-follow glow — desktop only */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 mix-blend-screen hidden lg:block"
        style={{
          background: `radial-gradient(circle 500px at ${mouse.x}px ${mouse.y}px, rgba(249,115,22,0.08), transparent 80%)`
        }}
      />

      {/* Static ambient glow nodes */}
      <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-orange-500/5 rounded-full blur-[120px] pointer-events-none hidden lg:block" />
      <div className="absolute bottom-1/4 right-1/3 w-64 h-64 bg-purple-500/5 rounded-full blur-[100px] pointer-events-none hidden lg:block" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-0 items-center min-h-[calc(100vh-8rem)]">

          {/* ── LEFT: text content ── */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-7 lg:pr-8">

            {/* Availability pill */}
            <div className="inline-block animate-[fadeIn_1s_ease-out_0.1s_both]">
              <span className="inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.03] rounded-full px-4 py-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_6px_rgba(74,222,128,0.8)] flex-shrink-0" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold text-white/60 font-display leading-none">
                  Open to opportunities
                </span>
              </span>
            </div>

            {/* Hero headline */}
            <h1 className="font-display font-black leading-[0.9] tracking-tighter animate-[fadeIn_1s_ease-out_0.25s_both]">
              <span className="block text-[2.6rem] sm:text-5xl md:text-[5rem] lg:text-[5.5rem] text-white/20">
                HI, I'M
              </span>
              <span className="block text-[3.2rem] sm:text-6xl md:text-[6rem] lg:text-[6.5rem] text-white">
                AARYA B.
              </span>
              <span className="block text-[2rem] sm:text-4xl md:text-[4rem] lg:text-[4.5rem] text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500">
                Full-Stack Engineer
              </span>
            </h1>

            {/* Sub text */}
            <p className="text-sm sm:text-base text-white/45 max-w-lg font-light leading-relaxed animate-[fadeIn_1s_ease-out_0.4s_both]">
              Building scalable, production-ready software — from{' '}
              <span className="text-white/70 font-medium">clean APIs</span> and{' '}
              <span className="text-white/70 font-medium">responsive interfaces</span> to{' '}
              <span className="text-white/70 font-medium">optimised databases</span>.
            </p>


            {/* CTAs + social */}
            <div className="flex flex-wrap items-center gap-4 animate-[fadeIn_1s_ease-out_0.6s_both]">
              {/* Primary CTA */}
              <button
                onClick={() => setCurrentPage?.('projects')}
                className="relative inline-flex group overflow-hidden rounded-full p-[1.5px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full opacity-80 group-hover:opacity-100 animate-[spin_3s_linear_infinite]" />
                <span className="relative inline-flex items-center justify-center gap-2 bg-[#030303] px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.12em] font-display text-white transition-all duration-300">
                  View Projects <ArrowRightIcon size={14} />
                </span>
              </button>

              {/* Resume */}
              <a
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              >
                <DownloadIcon size={13} /> Resume
              </a>

              {/* Divider */}
              <span className="hidden sm:block w-px h-5 bg-white/10" />

              {/* Social links */}
              <div className="flex items-center gap-4">
                {[
                  { label: 'GitHub', icon: <GitHubIcon size={18} />, href: 'https://github.com/AaryaBalan' },
                  { label: 'LinkedIn', icon: <LinkedInIcon size={18} />, href: 'https://www.linkedin.com/in/aaryabalan/' },
                  { label: 'LeetCode', icon: <LeetCodeIcon size={18} />, href: 'https://leetcode.com/u/_aarya_/' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/30 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: sticker illustration — desktop only ── */}
          <div className="lg:col-span-6 xl:col-span-5 hidden lg:flex items-center justify-center relative h-full min-h-[600px]">

            {/* Soft ground glow */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-56 h-20 bg-orange-400/10 rounded-full blur-[50px] pointer-events-none" />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-40 h-14 bg-white/5 rounded-full blur-[40px] pointer-events-none" />

            {/* ── Thought bubble coding icons ── */}

            {/* React — top left */}
            <div className="absolute top-[20%] left-[8%] animate-[fadeIn_0.8s_ease-out_1.2s_both]">
              <div className="relative bg-black/60 border border-white/10 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                {/* bubble tail */}
                <span className="absolute -bottom-1.5 right-3 w-2 h-2 bg-black/60 border-r border-b border-white/10 rotate-45" />
                <span className="text-xl">⚛️</span>
              </div>
            </div>

            {/* TypeScript — top right */}
            <div className="absolute top-[15%] right-[10%] animate-[fadeIn_0.8s_ease-out_1.35s_both]">
              <div className="relative bg-black/60 border border-blue-500/20 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="absolute -bottom-1.5 left-3 w-2 h-2 bg-black/60 border-r border-b border-blue-500/20 rotate-45" />
                <span className="text-xl">🔷</span>
              </div>
            </div>

            {/* Code / braces — mid left */}
            <div className="absolute top-[40%] left-[2%] animate-[fadeIn_0.8s_ease-out_1.5s_both]">
              <div className="relative bg-black/60 border border-orange-500/20 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="absolute -bottom-1.5 right-3 w-2 h-2 bg-black/60 border-r border-b border-orange-500/20 rotate-45" />
                <span className="text-xl">{ }</span>
              </div>
            </div>

            {/* Git — mid right */}
            <div className="absolute top-[38%] right-[4%] animate-[fadeIn_0.8s_ease-out_1.45s_both]">
              <div className="relative bg-black/60 border border-white/10 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="absolute -bottom-1.5 left-3 w-2 h-2 bg-black/60 border-r border-b border-white/10 rotate-45" />
                <span className="text-xl">🌿</span>
              </div>
            </div>

            {/* Terminal / CLI — lower left */}
            <div className="absolute top-[60%] left-[6%] animate-[fadeIn_0.8s_ease-out_1.6s_both]">
              <div className="relative bg-black/60 border border-green-500/20 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="absolute -bottom-1.5 right-3 w-2 h-2 bg-black/60 border-r border-b border-green-500/20 rotate-45" />
                <span className="text-xl">💻</span>
              </div>
            </div>

            {/* Node / server — lower right */}
            <div className="absolute top-[58%] right-[5%] animate-[fadeIn_0.8s_ease-out_1.55s_both]">
              <div className="relative bg-black/60 border border-white/10 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="absolute -bottom-1.5 left-3 w-2 h-2 bg-black/60 border-r border-b border-white/10 rotate-45" />
                <span className="text-xl">🚀</span>
              </div>
            </div>

            {/* Database — bottom left */}
            <div className="absolute top-[76%] left-[14%] animate-[fadeIn_0.8s_ease-out_1.7s_both]">
              <div className="relative bg-black/60 border border-purple-500/20 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="absolute -bottom-1.5 right-3 w-2 h-2 bg-black/60 border-r border-b border-purple-500/20 rotate-45" />
                <span className="text-xl">🗄️</span>
              </div>
            </div>

            {/* Coffee / focus — bottom right */}
            <div className="absolute top-[74%] right-[12%] animate-[fadeIn_0.8s_ease-out_1.65s_both]">
              <div className="relative bg-black/60 border border-white/10 rounded-2xl w-12 h-12 flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                <span className="absolute -bottom-1.5 left-3 w-2 h-2 bg-black/60 border-r border-b border-white/10 rotate-45" />
                <span className="text-xl">☕</span>
              </div>
            </div>

            {/* Status pill floating top-center */}
            <div className="absolute top-[6%] left-1/2 -translate-x-1/2 animate-[fadeIn_1s_ease-out_1.1s_both]">
              <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-full px-4 py-2 shadow-xl whitespace-nowrap">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-[9px] font-bold uppercase tracking-widest text-white/80">Available Now</span>
              </div>
            </div>

            {/* The sticker — vertically centered */}
            <img
              src={stickerImg}
              alt="Aarya B"
              className="relative z-10 h-[550px] w-auto object-contain select-none pointer-events-none drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)] animate-[fadeIn_1.2s_ease-out_0.8s_both]"
            />
          </div>

        </div>

        {/* ── Mobile sticker strip — shown below headline on small screens ── */}
        <div className="mt-8 lg:hidden flex items-center gap-5 animate-[fadeIn_1s_ease-out_1s_both]">
          <img
            src={stickerImg}
            alt="Aarya B"
            className="h-96 w-auto object-contain select-none pointer-events-none drop-shadow-[0_10px_20px_rgba(0,0,0,0.6)]"
          />
          <div className="flex flex-col gap-1.5 border-l border-white/10 pl-5">
            <p className="font-display font-black text-white text-lg leading-none">Aarya B</p>
            <p className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.15em]">Full-Stack Engineer</p>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[9px] text-white/40 uppercase tracking-wider font-medium">Open to work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
