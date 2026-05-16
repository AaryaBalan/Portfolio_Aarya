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
    <section id="contact" className="bg-[#030303] py-32 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-20">
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] font-bold mb-6 font-display">
            Reach Out
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
            Send Me A <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Message.</span>
          </h2>
        </div>

        <div className="bg-[#080808] border border-white/10 rounded-[3rem] p-2 overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.8)]">
          <div className="flex items-center gap-2 px-6 py-4 bg-white/5 border-b border-white/5 rounded-t-[2.5rem]">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
            <span className="ml-4 text-white/30 text-xs font-mono uppercase tracking-widest">New Message</span>
          </div>

          <div className="p-8 md:p-14">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-[fadeIn_0.5s_ease-out]">
                <div className="w-24 h-24 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-8">
                  <div className="w-12 h-12 rounded-full bg-green-500 animate-ping opacity-50 absolute" />
                  <div className="w-12 h-12 rounded-full bg-green-500 shadow-[0_0_30px_rgba(34,197,94,0.8)] relative z-10" />
                </div>
                <h3 className="text-4xl font-display font-black text-white mb-4 tracking-tighter">MESSAGE DELIVERED</h3>
                <p className="text-xl text-white/50 font-light max-w-md">
                  Thank you for reaching out. I will read your message and get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 text-white text-xl md:text-2xl py-4 px-2 focus:outline-none focus:border-green-500 transition-colors peer placeholder-transparent"
                      placeholder="Name"
                    />
                    <label className="absolute left-2 top-4 text-white/30 text-xl md:text-2xl font-light transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-green-500 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/50 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Your Name
                    </label>
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b border-white/20 text-white text-xl md:text-2xl py-4 px-2 focus:outline-none focus:border-green-500 transition-colors peer placeholder-transparent"
                      placeholder="Email"
                    />
                    <label className="absolute left-2 top-4 text-white/30 text-xl md:text-2xl font-light transition-all peer-focus:-top-6 peer-focus:text-xs peer-focus:text-green-500 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-6 peer-valid:text-xs peer-valid:text-white/50 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                      Your Email
                    </label>
                  </div>
                </div>

                <div className="relative group pt-8">
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b border-white/20 text-white text-xl md:text-2xl py-4 px-2 focus:outline-none focus:border-green-500 transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                  />
                  <label className="absolute left-2 top-12 text-white/30 text-xl md:text-2xl font-light transition-all peer-focus:-top-2 peer-focus:text-xs peer-focus:text-green-500 peer-focus:font-bold peer-focus:uppercase peer-focus:tracking-widest peer-valid:-top-2 peer-valid:text-xs peer-valid:text-white/50 peer-valid:font-bold peer-valid:uppercase peer-valid:tracking-widest cursor-text">
                    What would you like to say?
                  </label>
                </div>

                <div className="pt-10">
                  <button
                    type="submit"
                    className="w-full bg-white hover:bg-green-500 text-black hover:text-white font-display font-black text-2xl md:text-4xl uppercase tracking-tighter py-8 rounded-[2rem] transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-6 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_50px_rgba(34,197,94,0.4)]"
                  >
                    Send <ArrowRightIcon size={32} />
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
