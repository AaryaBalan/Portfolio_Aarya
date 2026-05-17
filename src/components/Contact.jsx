import { useState } from 'react'
import { ArrowRightIcon } from './Icons'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#030303] py-20 sm:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10">
        
        <div className="text-center mb-10 sm:mb-20">
          <p className="text-green-400 text-xs sm:text-sm uppercase tracking-[0.3em] font-bold mb-4 sm:mb-6 font-display">
            Reach Out
          </p>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
            Send Me A <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Message.</span>
          </h2>
        </div>

        <div className="bg-[#080808] border border-white/10 rounded-[2rem] sm:rounded-[3rem] p-1.5 sm:p-2 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 sm:px-6 py-3 sm:py-4 bg-white/5 border-b border-white/5 rounded-t-[1.5rem] sm:rounded-t-[2.5rem]">
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80" />
            <span className="ml-3 text-white/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest">New Message</span>
          </div>

          <div className="p-5 sm:p-8 md:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 sm:py-20 text-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-6 sm:mb-8 relative">
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-green-500 animate-ping opacity-50 absolute" />
                  <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.8)] relative z-10" />
                </div>
                <h3 className="text-2xl sm:text-4xl font-display font-black text-white mb-4 tracking-tighter">MESSAGE DELIVERED</h3>
                <p className="text-base sm:text-xl text-white/50 font-light max-w-md">
                  Thank you for reaching out. I will read your message and get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 text-white text-lg sm:text-2xl py-3 sm:py-4 px-2 focus:outline-none focus:border-green-500 transition-colors peer placeholder-transparent"
                      placeholder="Name"
                    />
                    <label className="absolute left-2 top-3 sm:top-4 text-white/30 text-lg sm:text-2xl font-light transition-all peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-green-500 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-5 peer-valid:text-[10px] peer-valid:text-white/50 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Your Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 text-white text-lg sm:text-2xl py-3 sm:py-4 px-2 focus:outline-none focus:border-green-500 transition-colors peer placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className="absolute left-2 top-3 sm:top-4 text-white/30 text-lg sm:text-2xl font-light transition-all peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-green-500 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-5 peer-valid:text-[10px] peer-valid:text-white/50 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative group pt-6 sm:pt-8">
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 text-white text-lg sm:text-2xl py-3 sm:py-4 px-2 focus:outline-none focus:border-green-500 transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  />
                  <label className="absolute left-2 top-9 sm:top-12 text-white/30 text-lg sm:text-2xl font-light transition-all peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-green-500 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-2 peer-valid:text-[10px] peer-valid:text-white/50 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                    What would you like to say?
                  </label>
                </div>

                <div className="pt-6 sm:pt-10">
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-green-500 text-black hover:text-white font-display font-black text-xl sm:text-3xl md:text-4xl uppercase tracking-tighter py-5 sm:py-8 rounded-[1.5rem] sm:rounded-[2rem] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-4 sm:gap-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.4)]"
                  >
                    Send <ArrowRightIcon size={24} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Contact
