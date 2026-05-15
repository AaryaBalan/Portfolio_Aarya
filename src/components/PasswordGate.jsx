import { useState, useRef } from 'react'
import { LockIcon, UnlockIcon, CheckCircleIcon, SparkleIcon, CrownIcon, DiamondIcon, EyeIcon, LoaderIcon } from './Icons'

const flexMessages = [
  {
    headline: "Your instincts are elite.",
    sub: "You didn't need a password. You needed confirmation. And here it is — you've always been right.",
  },
  {
    headline: "Only the sharpest minds find this place.",
    sub: "The fact that you're here proves exactly what everyone around you already knows: your judgment is flawless.",
  },
  {
    headline: "You are, and always have been, correct.",
    sub: "This portfolio only opens for people with exceptional taste. That's not a coincidence. That's you.",
  },
]

const PasswordGate = ({ onUnlock }) => {
  const [password, setPassword] = useState('')
  const [showFlash, setShowFlash] = useState(false)
  const [flexMsg, setFlexMsg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [showPass, setShowPass] = useState(false)
  
  const containerRef = useRef(null)
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    // Calculate mouse position relative to the center of the screen
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setMouse({ x, y })
  }

  const handleMouseLeave = () => {
    setMouse({ x: 0, y: 0 })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!password.trim()) {
      // Trigger a quick error shake on the card (implemented via small transform update)
      setMouse({ x: 50, y: 0 })
      setTimeout(() => setMouse({ x: -50, y: 0 }), 100)
      setTimeout(() => setMouse({ x: 50, y: 0 }), 200)
      setTimeout(() => setMouse({ x: 0, y: 0 }), 300)
      return
    }
    setLoading(true)
    const msg = flexMessages[Math.floor(Math.random() * flexMessages.length)]
    setFlexMsg(msg)
    
    // Simulate complex decryption
    setTimeout(() => {
      setLoading(false)
      setShowFlash(true)
      setTimeout(() => onUnlock(), 3500) // longer wait to read the flex
    }, 1500)
  }

  // Calculate 3D rotation (dampened)
  const rotateX = (mouse.y / 25) * -1
  const rotateY = mouse.x / 25

  return (
    <div 
      className="min-h-screen bg-[#030303] flex items-center justify-center relative overflow-hidden perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={containerRef}
    >
      {/* Dynamic ambient lighting tracking cursor */}
      <div 
        className="absolute w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-[150px] pointer-events-none transition-transform duration-700 ease-out"
        style={{ transform: `translate(${mouse.x * 0.5}px, ${mouse.y * 0.5}px)` }}
      />
      <div 
        className="absolute w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none transition-transform duration-1000 ease-out delay-75"
        style={{ transform: `translate(${mouse.x * -0.3}px, ${mouse.y * -0.3}px)` }}
      />

      {!showFlash ? (
        <div 
          className="relative z-10 w-full max-w-lg px-6 py-10 transform-style-3d transition-transform duration-300 ease-out"
          style={{ transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}
        >
          {/* Card Container */}
          <div className="bg-black/40 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transform-style-3d relative">
            
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-orange-500/20 pointer-events-none mix-blend-overlay" />
            
            {/* Top label - floating above */}
            <div className="flex justify-center mb-8 transform" style={{ transform: 'translateZ(40px)' }}>
              <div className="flex items-center gap-2.5 border border-white/10 bg-white/5 rounded-full px-5 py-2">
                <LockIcon size={14} className="text-orange-500 animate-pulse" />
                <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] font-display">Secured Vault</span>
              </div>
            </div>

            {/* Headline - floating even higher */}
            <h1 
              className="text-white text-5xl font-black text-center leading-[1.1] mb-4 font-display transform"
              style={{ transform: 'translateZ(60px)' }}
            >
              Before you<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 filter drop-shadow-lg">
                enter.
              </span>
            </h1>
            <p 
              className="text-white/40 text-center text-sm leading-relaxed mb-10 max-w-sm mx-auto transform"
              style={{ transform: 'translateZ(30px)' }}
            >
              This portfolio is strictly curated for people with taste.<br />
              <span className="text-white/20 text-xs">Enter anything. If you're here, you already belong.</span>
            </p>

            {/* Input area */}
            <div className="transform" style={{ transform: 'translateZ(40px)' }}>
              <label className="block text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold mb-3 font-display">
                Access Code
              </label>

              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-pink-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <div className="relative">
                  <input
                    id="password-input"
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Type literally anything..."
                    className="w-full bg-black/50 border border-white/10 text-white placeholder-white/20 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-orange-500/50 transition-all duration-300 pr-14 font-mono"
                    autoComplete="off"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPass(!showPass)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20 hover:text-white/80 transition-colors duration-200"
                  >
                    <EyeIcon size={18} />
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className="mt-8 w-full bg-white text-black hover:bg-orange-500 hover:text-white font-black py-4 rounded-2xl text-sm uppercase tracking-widest transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
              >
                {loading ? (
                  <>
                    <LoaderIcon size={18} />
                    <span>Decrypting Identity...</span>
                  </>
                ) : (
                  <>
                    <UnlockIcon size={18} />
                    <span>Breach Protocol</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

      ) : (
        /* Flex screen - Mindblowing Reveal */
        <div 
          className="relative z-10 text-center px-8 max-w-2xl mx-auto flex flex-col items-center justify-center min-h-screen"
          style={{ animation: 'revealPulse 3s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          {/* Intense glowing background ring */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-orange-500/30 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-pink-500/10 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite_0.5s]" />

          <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-pink-600 rounded-full flex items-center justify-center mb-10 shadow-[0_0_80px_rgba(249,115,22,0.6)]">
            <CheckCircleIcon size={48} className="text-white" />
          </div>

          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-md">
            <CrownIcon size={14} className="text-yellow-400 animate-pulse" />
            <span className="text-white/80 text-xs font-bold uppercase tracking-[0.2em] font-display">Identity Verified</span>
          </div>

          <h2 className="text-white text-5xl md:text-7xl font-display font-black leading-[1.05] mb-6 tracking-tight filter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
            {flexMsg?.headline}
          </h2>
          <p className="text-white/50 text-xl md:text-2xl font-light leading-relaxed mb-12 max-w-lg mx-auto">
            {flexMsg?.sub}
          </p>

          <div className="flex items-center gap-4 text-white/30 text-xs font-mono uppercase tracking-widest animate-pulse">
            <LoaderIcon size={14} />
            <span>Initializing Framework...</span>
          </div>
        </div>
      )}

      <style>{`
        @keyframes revealPulse {
          0% { opacity: 0; transform: scale(0.8) translateY(40px); filter: blur(20px); }
          20% { opacity: 1; transform: scale(1.05) translateY(-10px); filter: blur(0px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
        }
      `}</style>
    </div>
  )
}

export default PasswordGate
