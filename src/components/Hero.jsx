import { useState } from 'react'
import { ArrowRightIcon, DownloadIcon, SparkleIcon, GitHubIcon, LinkedInIcon, LeetCodeIcon } from './Icons'

const Hero = ({ setCurrentPage }) => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    setMouse({ x: e.clientX, y: e.clientY })
  }

  const rotateX = (mouse.y - window.innerHeight / 2) / 30
  const rotateY = -(mouse.x - window.innerWidth / 2) / 30

  return (
    <section 
      id="home" 
      className="min-h-screen bg-[#030303] flex items-center relative overflow-hidden pt-20"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.10]">
        <h1 className="text-[15vw] font-display font-black leading-none text-stroke whitespace-nowrap tracking-tighter">
          ENGINEER
        </h1>
      </div>

      <div 
        className="absolute inset-0 pointer-events-none opacity-60 transition-opacity duration-300 mix-blend-screen"
        style={{
          background: `radial-gradient(circle 600px at ${mouse.x}px ${mouse.y}px, rgba(249,115,22,0.12), transparent 80%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        <div className="lg:col-span-7 space-y-8 relative">
          
          <div className="inline-block overflow-hidden animate-[fadeIn_1s_ease-out_0.2s_both]">
            <span className="inline-flex items-center gap-3 border border-white/10 bg-black/50 backdrop-blur-md rounded-full px-5 py-2.5">
              <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.8)]" />
              <span className="text-xs uppercase tracking-[0.2em] font-bold text-white/70 font-display">
                Available for software engineering roles
              </span>
            </span>
          </div>

          <h1 className="text-5xl md:text-[5.5rem] lg:text-[6.5rem] font-display font-black leading-[0.95] tracking-tighter animate-[fadeIn_1s_ease-out_0.4s_both]">
            <span className="block text-white/30 hover:text-white transition-colors duration-500">BUILDING</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 pb-2">SCALABLE</span>
            <span className="block text-white filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">SOFTWARE.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-xl font-light leading-relaxed animate-[fadeIn_1s_ease-out_0.6s_both]">
            Full-Stack Software Engineer passionate about crafting <strong className="text-white/90 font-medium">robust architectures, responsive frontends, and high-performance databases.</strong> Bridging the gap between complex backend logic and seamless user experiences.
          </p>

          <div className="flex flex-wrap gap-5 pt-4 animate-[fadeIn_1s_ease-out_0.8s_both]">
            <button 
              onClick={() => setCurrentPage?.('projects')} 
              className="relative inline-flex group overflow-hidden rounded-full p-[1px]"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 animate-[spin_3s_linear_infinite]" />
              <span className="relative inline-flex items-center justify-center gap-3 bg-black px-8 py-4.5 rounded-full text-sm font-bold uppercase tracking-[0.15em] font-display text-white transition-all duration-300 group-hover:bg-black/40 backdrop-blur-md">
                See My Work <ArrowRightIcon size={16} />
              </span>
            </button>
            
            <div className="flex items-center gap-6 pl-4">
              {[
                { label: 'GitHub', icon: <GitHubIcon size={20} />, href: 'https://github.com/AaryaBalan' },
                { label: 'LinkedIn', icon: <LinkedInIcon size={20} />, href: 'https://www.linkedin.com/in/aaryabalan/' },
                { label: 'LeetCode', icon: <LeetCodeIcon size={20} />, href: 'https://leetcode.com/u/_aarya_/' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} className="text-white/30 hover:text-white transition-all duration-300 hover:scale-125 transform">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 h-[600px] hidden lg:flex items-center justify-center perspective-1000 animate-[fadeIn_1.5s_ease-out_1s_both]">
          <div 
            className="w-[340px] h-[460px] bg-white/[0.02] border border-white/10 rounded-[2.5rem] backdrop-blur-3xl transform-style-3d transition-transform duration-300 ease-out flex flex-col items-center p-10 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative"
            style={{
              transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
            }}
          >
            <div className="absolute -right-20 -top-20 w-48 h-48 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none transform translate-z-[10px]" />
            <div className="absolute -left-20 -bottom-20 w-48 h-48 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none transform translate-z-[10px]" />

            <div className="w-48 h-48 rounded-full mb-8 relative transform group" style={{ transform: 'translateZ(60px)' }}>
              {/* Outer glowing orbit rings */}
              <div className="absolute -inset-4 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity duration-700" />
              <div className="absolute -inset-8 border border-white/10 rounded-full animate-[spin_15s_linear_infinite] border-dashed" />
              <div className="absolute -inset-12 border border-white/5 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-br from-orange-500 to-purple-600 shadow-[0_0_40px_rgba(0,0,0,0.8)]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#050505] relative">
                  <img 
                    src="/src/assets/hero.jpg" 
                    alt="Aarya Balan" 
                    className="w-full h-full object-cover transform scale-[1.05] group-hover:scale-100 transition-transform duration-700 select-none pointer-events-none"
                  />
                  {/* Subtle inner glass reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>

              {/* Live Status Ping */}
              <div className="absolute bottom-3 right-3 z-10 flex h-6 w-6">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-6 w-6 border-4 border-[#0a0a0a] bg-green-500"></span>
              </div>
            </div>

            <h2 className="text-3xl font-display font-black text-white transform tracking-tight" style={{ transform: 'translateZ(40px)' }}>
              Aarya Balan
            </h2>
            <p className="text-orange-400/90 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mt-3 transform text-center" style={{ transform: 'translateZ(30px)' }}>
              Full-Stack Engineer
            </p>

            <p className="text-white/40 text-center text-sm mt-4 leading-relaxed transform px-2" style={{ transform: 'translateZ(20px)' }}>
              Building end-to-end software from architecture to deployment.
            </p>

            <div className="mt-auto w-full transform" style={{ transform: 'translateZ(50px)' }}>
              <a href="#" className="w-full bg-white/10 hover:bg-white text-white hover:text-black font-bold py-4 rounded-2xl text-xs uppercase tracking-widest transition-all duration-300 text-center flex items-center justify-center gap-2 border border-white/10 hover:border-white shadow-xl">
                <DownloadIcon size={14} /> Download Resume
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
