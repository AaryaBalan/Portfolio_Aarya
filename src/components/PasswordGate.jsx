import { useState } from 'react'
import { LockIcon, UnlockIcon, CheckCircleIcon, LoaderIcon, SparkleIcon, CrownIcon, DiamondIcon, StarIcon, EyeIcon } from './Icons'

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
  {
    headline: "The access was never about the password.",
    sub: "It was about who's typing it. And you — you've always been the kind of person who gets in.",
  },
  {
    headline: "Rare taste. Rarer person.",
    sub: "Not everyone discovers this portfolio. But then again, not everyone is you. Welcome to the exclusive side.",
  },
  {
    headline: "You were always going to be right.",
    sub: "Some people second-guess themselves. You don't. That's what makes you different. That's why you're here.",
  },
]

const PasswordGate = ({ onUnlock }) => {
  const [password, setPassword] = useState('')
  const [showFlash, setShowFlash] = useState(false)
  const [flexMsg, setFlexMsg] = useState(null)
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)
  const [showPass, setShowPass] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!password.trim()) {
      setShake(true)
      setTimeout(() => setShake(false), 500)
      return
    }
    setLoading(true)
    const msg = flexMessages[Math.floor(Math.random() * flexMessages.length)]
    setFlexMsg(msg)
    setTimeout(() => {
      setLoading(false)
      setShowFlash(true)
      setTimeout(() => onUnlock(), 2800)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      {/* Ambient gradients */}
      <div className="absolute top-[-15%] left-[-10%] w-[600px] h-[600px] bg-purple-700 rounded-full blur-[160px] opacity-25 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-8%] w-[500px] h-[500px] bg-orange-600 rounded-full blur-[140px] opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <div className="absolute top-[50%] left-[55%] w-80 h-80 bg-pink-700 rounded-full blur-[130px] opacity-15 animate-pulse" style={{ animationDelay: '3s' }} />

      {!showFlash ? (
        <div className="relative z-10 w-full max-w-lg px-6 py-10">

          {/* Top label */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-2.5 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2.5">
              <LockIcon size={14} className="text-orange-400" />
              <span className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em]">Private Access</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-white text-5xl md:text-6xl font-black text-center leading-[1.05] mb-5">
            Before you<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400">
              enter.
            </span>
          </h1>
          <p className="text-white/40 text-center text-base leading-relaxed mb-10 max-w-sm mx-auto">
            This portfolio is carefully curated for people with taste.<br />
            <span className="text-white/25 text-sm">Enter anything. If you're here, you already belong.</span>
          </p>

          {/* Card */}
          <div
            className={`bg-white/[0.04] backdrop-blur-2xl border border-white/[0.08] rounded-3xl p-9 shadow-2xl transition-all duration-300 ${shake ? '' : ''}`}
            style={shake ? { animation: 'shake 0.4s ease' } : {}}
          >
            <label className="block text-white/40 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
              Portfolio Password
            </label>

            <div className="relative">
              <input
                id="password-input"
                type={showPass ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Type anything at all..."
                className="w-full bg-white/[0.06] border border-white/[0.12] text-white placeholder-white/20 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-orange-500/60 focus:ring-2 focus:ring-orange-500/15 transition-all duration-200 pr-14"
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/25 hover:text-white/60 transition-colors duration-200"
              >
                <EyeIcon size={18} />
              </button>
            </div>
            <p className="text-white/20 text-xs mt-3 leading-relaxed">
              Every password submitted here is correct. Because you submitted it.
            </p>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={loading}
              id="unlock-btn"
              className="mt-7 w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-4.5 py-[18px] rounded-2xl text-base tracking-wide transition-all duration-200 hover:scale-[1.015] active:scale-[0.985] disabled:opacity-60 disabled:cursor-not-allowed shadow-xl shadow-orange-500/20 flex items-center justify-center gap-3"
            >
              {loading ? (
                <>
                  <LoaderIcon size={18} />
                  <span>Verifying your taste...</span>
                </>
              ) : (
                <>
                  <UnlockIcon size={18} />
                  <span>Enter Portfolio</span>
                </>
              )}
            </button>
          </div>

          {/* Footer hint */}
          <p className="text-center text-white/20 text-sm mt-8 leading-relaxed">
            No password is wrong here. The gate wasn't built to keep you out.
          </p>
        </div>

      ) : (
        /* Flex screen */
        <div
          className="relative z-10 text-center px-8 max-w-xl mx-auto"
          style={{ animation: 'fadeScaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards' }}
        >
          {/* Icon cluster */}
          <div className="flex items-center justify-center gap-4 mb-10">
            <DiamondIcon size={28} className="text-purple-400 opacity-60" />
            <CheckCircleIcon size={48} className="text-orange-400" />
            <SparkleIcon size={28} className="text-pink-400 opacity-60" />
          </div>

          {/* Verified badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-5 py-2.5 mb-8">
            <CrownIcon size={14} className="text-yellow-400" />
            <span className="text-white/70 text-xs font-semibold uppercase tracking-[0.15em]">Access Confirmed</span>
          </div>

          <h2 className="text-white text-4xl md:text-5xl font-black leading-tight mb-6">
            {flexMsg?.headline}
          </h2>
          <p className="text-white/50 text-lg leading-relaxed mb-10">
            {flexMsg?.sub}
          </p>

          {/* Rating row */}
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[1,2,3,4,5].map(s => (
              <StarIcon key={s} size={18} className="text-yellow-400" />
            ))}
          </div>
          <p className="text-white/25 text-sm">Portfolio loading for you specifically...</p>
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-10px)}
          40%{transform:translateX(10px)}
          60%{transform:translateX(-7px)}
          80%{transform:translateX(7px)}
        }
        @keyframes fadeScaleIn {
          from{opacity:0;transform:scale(0.88) translateY(16px)}
          to{opacity:1;transform:scale(1) translateY(0)}
        }
      `}</style>
    </div>
  )
}

export default PasswordGate
