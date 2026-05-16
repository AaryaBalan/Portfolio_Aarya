import { useState } from 'react'
import { ArrowRightIcon, DownloadIcon, SparkleIcon, GitHubIcon, LinkedInIcon, InstagramIcon } from './Icons'

const Hero = () => {
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
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none opacity-[0.15]">
        <h1 className="text-[20vw] font-display font-black leading-none text-stroke whitespace-nowrap tracking-tighter">
          WEB CREATOR
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
                Ready to work together
              </span>
            </span>
          </div>

          <h1 className="text-6xl md:text-[5.5rem] lg:text-[7rem] font-display font-black leading-[0.9] tracking-tighter animate-[fadeIn_1s_ease-out_0.4s_both]">
            <span className="block text-white/30 hover:text-white transition-colors duration-500">I BUILD</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 pb-2">WEBSITES</span>
            <span className="block text-white filter drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">THAT STAND OUT.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-lg font-light leading-relaxed animate-[fadeIn_1s_ease-out_0.6s_both]">
            Not just another portfolio. This is what happens when <strong className="text-white/90 font-medium">creativity meets problem solving</strong> and coffee meets late nights. No boring templates. Just custom work.
          </p>

          <div className="flex flex-wrap gap-5 pt-4 animate-[fadeIn_1s_ease-out_0.8s_both]">
            <a href="#projects" className="relative inline-flex group overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-full opacity-70 group-hover:opacity-100 animate-[spin_3s_linear_infinite]" />
              <span className="relative inline-flex items-center justify-center gap-3 bg-black px-8 py-4.5 rounded-full text-sm font-bold uppercase tracking-[0.15em] font-display text-white transition-all duration-300 group-hover:bg-black/40 backdrop-blur-md">
                See My Work <ArrowRightIcon size={16} />
              </span>
            </a>
            
            <div className="flex items-center gap-6 pl-4">
              {[
                { label: 'GitHub', icon: <GitHubIcon size={20} /> },
                { label: 'LinkedIn', icon: <LinkedInIcon size={20} /> },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="text-white/30 hover:text-white transition-all duration-300 hover:scale-125 transform">
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

            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 mb-8 relative transform" style={{ transform: 'translateZ(60px)' }}>
              <div className="absolute inset-1 bg-[#0a0a0a] rounded-full flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8)]">
                <span className="text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40">AB</span>
              </div>
              <div className="absolute -inset-4 border border-white/10 rounded-full animate-[spin_10s_linear_infinite] border-dashed" />
              <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-black" />
            </div>

            <h2 className="text-3xl font-display font-black text-white transform tracking-tight" style={{ transform: 'translateZ(40px)' }}>
              Aarya Balan
            </h2>
            <p className="text-orange-400/90 text-xs font-bold uppercase tracking-[0.3em] mt-3 transform" style={{ transform: 'translateZ(30px)' }}>
              Web Creator
            </p>

            <p className="text-white/40 text-center text-sm mt-6 leading-relaxed transform" style={{ transform: 'translateZ(20px)' }}>
              Making digital ideas come to life. Sometimes it even works on the first try.
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
