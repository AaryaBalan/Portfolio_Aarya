import { useState, useEffect } from 'react'

const flexMessages = [
  "👑 YEP. You were always right. Only legends get in.",
  "🔥 Correct! (As always, duh.) Welcome, big brain.",
  "💅 Obviously that was right. You literally can't be wrong.",
  "🧠 Big galaxy-brain energy detected. Welcome in.",
  "✅ Absolutely correct. Have you ever even been wrong? Didn't think so.",
  "🚀 Password accepted because YOU entered it. That's why.",
  "💎 Right again! Some people are just built different. You're one of them.",
  "⚡ The system auto-validates everything YOU type. True story.",
]

const PasswordGate = ({ onUnlock }) => {
  const [password, setPassword] = useState('')
  const [showFlash, setShowFlash] = useState(false)
  const [flexMsg, setFlexMsg] = useState('')
  const [loading, setLoading] = useState(false)
  const [shake, setShake] = useState(false)

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
      setTimeout(() => {
        onUnlock()
      }, 2200)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient blobs */}
      <div className="absolute top-[-20%] left-[-10%] w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-30 animate-pulse" />
      <div className="absolute bottom-[-20%] right-[-10%] w-96 h-96 bg-orange-500 rounded-full blur-[120px] opacity-20 animate-pulse" style={{animationDelay:'1s'}} />
      <div className="absolute top-[40%] left-[50%] w-72 h-72 bg-pink-600 rounded-full blur-[100px] opacity-20 animate-pulse" style={{animationDelay:'2s'}} />

      {!showFlash ? (
        <div className="relative z-10 w-full max-w-md px-6">
          {/* Top badge */}
          <div className="flex justify-center mb-8">
            <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest">🔐 Classified</span>
          </div>

          {/* Title */}
          <h1 className="text-white text-4xl md:text-5xl font-black text-center leading-tight mb-2">
            Whoa there,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">big shot.</span>
          </h1>
          <p className="text-gray-400 text-center text-sm mb-10">
            This portfolio is <span className="text-orange-400 font-semibold">ultra-exclusive</span>. Password required.<br />
            <span className="text-gray-600 text-xs">(psst — any password works. you're that special.)</span>
          </p>

          {/* Form card */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-2xl transition-all duration-300 ${shake ? 'animate-[wiggle_0.3s_ease-in-out]' : ''}`}
            style={shake ? {animation: 'shake 0.4s ease'} : {}}
          >
            <label className="block text-gray-400 text-xs uppercase tracking-widest mb-3 font-semibold">
              Secret Password
            </label>
            <input
              id="password-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Type literally anything..."
              className="w-full bg-white/10 border border-white/20 text-white placeholder-gray-600 rounded-xl px-4 py-4 text-sm focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 transition-all duration-200"
              autoComplete="off"
            />
            <p className="text-gray-600 text-xs mt-2 italic">* All passwords are accepted. Because it's you.</p>

            <button
              type="submit"
              disabled={loading}
              id="unlock-btn"
              className="mt-6 w-full bg-gradient-to-r from-orange-500 to-pink-600 hover:from-orange-400 hover:to-pink-500 text-white font-bold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-orange-500/20"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                  </svg>
                  Verifying your genius...
                </span>
              ) : '🔓 Unlock Portfolio'}
            </button>
          </form>

          <p className="text-center text-gray-700 text-xs mt-6">
            Don't know the password? Just guess. You'll be right. You always are.
          </p>
        </div>
      ) : (
        /* Flash screen */
        <div className="relative z-10 text-center px-6 animate-[fadeIn_0.5s_ease]">
          <div className="text-7xl mb-6 animate-bounce">🎉</div>
          <h2 className="text-white text-4xl md:text-6xl font-black mb-4 leading-tight">
            {flexMsg.split(' ').slice(1).join(' ').split('.')[0]}
          </h2>
          <p className="text-orange-400 text-xl font-bold">{flexMsg.split('.')[1] || 'Welcome in, champ.'}</p>
          <div className="mt-8 flex justify-center gap-2">
            {['👑','🔥','💎','⚡','🚀'].map((emoji, i) => (
              <span key={i} className="text-3xl animate-bounce" style={{animationDelay:`${i*0.1}s`}}>{emoji}</span>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-6 animate-pulse">Loading the masterpiece...</p>
        </div>
      )}

      <style>{`
        @keyframes shake {
          0%,100%{transform:translateX(0)}
          20%{transform:translateX(-8px)}
          40%{transform:translateX(8px)}
          60%{transform:translateX(-6px)}
          80%{transform:translateX(6px)}
        }
        @keyframes fadeIn {
          from{opacity:0;transform:scale(0.9)}
          to{opacity:1;transform:scale(1)}
        }
      `}</style>
    </div>
  )
}

export default PasswordGate
