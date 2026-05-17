import { useState, useCallback, useRef } from 'react'
import { ArrowRightIcon, DownloadIcon, GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons'
import resumePdf from '../assets/Aarya_resume.pdf'
import heroImg from '../assets/hero.jpg'

const Hero = ({ setCurrentPage }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })
  const rafRef = useRef(null)

  const handleMouseMove = useCallback((e) => {
    if (window.innerWidth < 1024) return
    if (rafRef.current) return // skip if frame already queued
    rafRef.current = requestAnimationFrame(() => {
      setMouse({ x: e.clientX, y: e.clientY })
      rafRef.current = null
    })
  }, [])

  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024
  const rotateX = isDesktop ? (mouse.y - window.innerHeight / 2) / 30 : 0
  const rotateY = isDesktop ? -(mouse.x - window.innerWidth / 2) / 30 : 0

  return (
    <section
      id="home"
      className="min-h-screen bg-[#030303] flex items-center relative overflow-hidden pt-24 pb-12"
      onMouseMove={handleMouseMove}
    >
      {/* Background watermark - hidden on mobile for perf */}
      <div className="absolute inset-0 hidden sm:flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.06]">
        <span className="text-[20vw] font-display font-black leading-none tracking-tighter text-white whitespace-nowrap">
          ENGINEER
        </span>
      </div>

      {/* Glow follow — only on desktop */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen hidden lg:block"
        style={{
          background: `radial-gradient(circle 500px at ${mouse.x}px ${mouse.y}px, rgba(249,115,22,0.10), transparent 80%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 w-full">
        {/* Mobile: stacked; Desktop: two columns */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">

          {/* LEFT / main text */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Availability badge */}
            <div className="inline-block animate-[fadeIn_1s_ease-out_0.2s_both]">
              <span className="inline-flex items-center gap-2.5 border border-white/10 bg-black/50 backdrop-blur-md rounded-full px-4 py-2">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(249,115,22,0.8)] flex-shrink-0" />
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.18em] font-bold text-white/70 font-display leading-none">
                  Available for software engineering roles
                </span>
              </span>
            </div>

            {/* Hero headline */}
            <h1 className="text-[2.8rem] sm:text-5xl md:text-[5.5rem] lg:text-[6rem] font-display font-black leading-[0.92] tracking-tighter animate-[fadeIn_1s_ease-out_0.4s_both]">
              <span className="block text-white/30">BUILDING</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 pb-1">SCALABLE</span>
              <span className="block text-white">SOFTWARE.</span>
            </h1>

            {/* Sub text */}
            <p className="text-sm sm:text-base md:text-lg text-white/50 max-w-xl font-light leading-relaxed animate-[fadeIn_1s_ease-out_0.6s_both]">
              Full-Stack Software Engineer passionate about crafting{' '}
              <strong className="text-white/80 font-medium">robust architectures, responsive frontends, and high-performance databases.</strong>
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2 animate-[fadeIn_1s_ease-out_0.8s_both]">
              <button
                onClick={() => setCurrentPage?.('projects')}
                className="relative inline-flex group overflow-hidden rounded-full p-[1.5px]"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 animate-[spin_3s_linear_infinite]" />
                <span className="relative inline-flex items-center justify-center gap-2 bg-black px-6 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-[0.12em] font-display text-white transition-all duration-300 group-hover:bg-black/50 backdrop-blur-md">
                  See My Work <ArrowRightIcon size={14} />
                </span>
              </button>

              {/* Social links */}
              <div className="flex items-center gap-5 pl-1">
                {[
                  { label: 'GitHub', icon: <GitHubIcon size={20} />, href: 'https://github.com/AaryaBalan' },
                  { label: 'LinkedIn', icon: <LinkedInIcon size={20} />, href: 'https://www.linkedin.com/in/aaryabalan/' },
                  { label: 'LeetCode', icon: <LeetCodeIcon size={20} />, href: 'https://leetcode.com/u/_aarya_/' },
                ].map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-white/40 hover:text-white transition-all duration-300 hover:scale-125"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — profile card: only visible lg+ */}
          <div className="lg:col-span-5 h-[560px] hidden lg:flex items-center justify-center perspective-1000 animate-[fadeIn_1.5s_ease-out_1s_both]">
            <div
              className="w-[400px] h-[460px] bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-3xl transform-style-3d transition-transform duration-300 ease-out flex flex-col items-center p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative"
              style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
            >
              <div className="absolute -right-16 -top-16 w-40 h-40 bg-pink-500/20 rounded-full blur-[70px] pointer-events-none" />
              <div className="absolute -left-16 -bottom-16 w-40 h-40 bg-orange-500/20 rounded-full blur-[70px] pointer-events-none" />

              <div className="w-44 h-44 rounded-full mb-8 relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
                <div className="absolute -inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite] border-dashed hidden lg:block" style={{ willChange: 'transform' }} />
                <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-orange-500 to-purple-600 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#050505]">
                    <img
                      src={heroImg}
                      alt="Aarya B"
                      className="w-full h-full object-cover scale-[1.05] group-hover:scale-100 transition-transform duration-700 select-none pointer-events-none"
                    />
                  </div>
                </div>
                <div className="absolute bottom-3 right-3 z-10 flex h-5 w-5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-5 w-5 border-4 border-[#0a0a0a] bg-green-500" />
                </div>
              </div>

              <h2 className="text-4xl font-display font-black text-white tracking-tight">Aarya B</h2>
              <p className="text-orange-400/90 text-xl font-bold uppercase tracking-[0.2em] mt-2 text-center">Full-Stack Engineer</p>
              <p className="text-white/40 text-center text-s mt-3 leading-relaxed px-2">
                Building end-to-end software from architecture to deployment.
              </p>

              <div className="mt-auto w-full">
                <a
                  href={resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full bg-white/10 hover:bg-white text-white hover:text-black font-bold py-3.5 rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 text-center flex items-center justify-center gap-2 border border-white/10 hover:border-white"
                >
                  <DownloadIcon size={13} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile profile mini-card — shown only on sm/md, never lg+ */}
        <div className="mt-10 lg:hidden flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl px-5 py-4 animate-[fadeIn_1s_ease-out_1s_both]">
          <div className="w-14 h-14 rounded-full flex-shrink-0 bg-gradient-to-br from-orange-500 to-purple-600 p-0.5">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#050505]">
              <img src={heroImg} alt="Aarya B" className="w-full h-full object-cover select-none pointer-events-none" />
            </div>
          </div>
          <div className="min-w-0">
            <p className="font-display font-black text-white text-base leading-none">Aarya B</p>
            <p className="text-orange-400 text-[10px] font-bold uppercase tracking-[0.15em] mt-1">Full-Stack Engineer</p>
          </div>
          <div className="ml-auto flex-shrink-0">
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
            </span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
