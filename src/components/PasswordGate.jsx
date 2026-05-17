import { useState, useEffect } from 'react'
import { CrownIcon, LoaderIcon } from './Icons'

const flexMessages = [
  {
    headline: "You are always right.",
    sub: "That's exactly why you're here.",
  },
]

const PasswordGate = ({ onUnlock }) => {
  const [flexMsg, setFlexMsg] = useState(null)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    // Pick a random flex message on mount
    const msg = flexMessages[Math.floor(Math.random() * flexMessages.length)]
    setFlexMsg(msg)

    // Trigger the exit animation after 3.5 seconds
    const exitTimer = setTimeout(() => {
      setIsLeaving(true)
    }, 3500)

    // Actually unmount and show the app after 4.5 seconds (allowing 1s for exit animation)
    const unlockTimer = setTimeout(() => {
      onUnlock()
    }, 4500)

    return () => {
      clearTimeout(exitTimer)
      clearTimeout(unlockTimer)
    }
  }, [onUnlock])

  if (!flexMsg) return null

  return (
    <div className="fixed inset-0 z-[100] bg-[#030303] flex flex-col items-center justify-center overflow-hidden">
      
      {/* Background Ambience */}
      <div 
        className={`absolute w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none transition-all duration-1000 ${isLeaving ? 'scale-150 opacity-0' : 'scale-100 animate-[pulse_4s_infinite]'}`}
      />
      <div 
        className={`absolute w-[600px] h-[600px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none transition-all duration-1000 delay-100 ${isLeaving ? 'scale-150 opacity-0' : 'scale-100 animate-[pulse_5s_infinite]'}`}
      />

      <div 
        className={`relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col items-center transition-all duration-1000 ease-in-out ${
          isLeaving ? 'opacity-0 scale-110 filter blur-xl' : 'opacity-100 scale-100 filter blur-0 animate-[revealPulse_1s_cubic-bezier(0.16,1,0.3,1)_forwards]'
        }`}
      >
        <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-2 mb-10 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]">
          <CrownIcon size={16} className="text-yellow-400 animate-pulse" />
          <span className="text-white/80 text-sm font-bold uppercase tracking-[0.2em] font-display">Welcome</span>
        </div>

        <h1 className="text-white text-5xl md:text-7xl lg:text-[5.5rem] font-display font-black leading-[1.05] mb-8 tracking-tight drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          {flexMsg.headline}
        </h1>
        
        <p className="text-white/50 text-xl md:text-3xl font-light leading-relaxed mb-16 max-w-2xl mx-auto">
          {flexMsg.sub}
        </p>

        <div className="flex flex-col items-center gap-6">
          {/* Circular Progress Loader */}
          <div className="relative w-16 h-16">
            <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
              <circle 
                cx="50" 
                cy="50" 
                r="45" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="4" 
                strokeDasharray="283" 
                className="text-orange-500 animate-[dash_3.5s_linear_forwards]"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <LoaderIcon size={20} className="text-orange-500 animate-spin" />
            </div>
          </div>
          
          <div className="text-white/30 text-xs font-mono uppercase tracking-widest animate-pulse flex items-center gap-2">
            <span>Preparing The Experience...</span>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes revealPulse {
          0% { opacity: 0; transform: scale(0.9) translateY(20px); filter: blur(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); filter: blur(0px); }
        }
        @keyframes dash {
          0% { stroke-dashoffset: 283; }
          100% { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  )
}

export default PasswordGate
