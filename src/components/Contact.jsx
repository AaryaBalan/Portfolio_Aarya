import { useState } from 'react'
import { MailIcon, MessageIcon, MapPinIcon, ArrowRightIcon } from './Icons'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-green-500/40" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-purple-700 rounded-full blur-[180px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 justify-center">
          <span className="text-green-400 text-xs uppercase tracking-[0.2em] font-bold">Contact</span>
        </div>
        <h2 className="text-white text-4xl md:text-[52px] font-black text-center mb-5 leading-tight">
          Got a Question?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Let's Chat.</span>
        </h2>
        <p className="text-white/35 text-center text-base mb-20 max-w-lg mx-auto leading-relaxed">
          Response time: faster than my CSS loads in IE.
          So, basically instant. Reach out.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <div>
            <h3 className="text-white font-black text-3xl mb-4 leading-tight">Got a question?<br />Let's chat.</h3>
            <p className="text-white/45 text-base leading-[1.8] mb-10">
              Whether it's a quick hello, a project inquiry, or you just want to tell me my code looks clean
              — I'm all ears. (I love hearing that, by the way.)
            </p>

            <div className="space-y-4">
              {[
                { icon: <MailIcon size={18} />, label: 'Send me an email', val: 'aarya@example.com', href: 'mailto:aarya@example.com' },
                { icon: <MessageIcon size={18} />, label: 'Text me on WhatsApp', val: '+91 98765 43210', href: '#' },
                { icon: <MapPinIcon size={18} />, label: 'Location', val: 'India — Remote-friendly', href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 hover:border-green-500/25 hover:bg-white/[0.05] transition-all duration-200 group">
                  <div className="w-11 h-11 bg-white/[0.05] border border-white/[0.08] rounded-xl flex items-center justify-center text-white/35 flex-shrink-0 group-hover:text-green-400 group-hover:border-green-500/25 transition-all duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-white/30 text-xs mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white/80 font-semibold text-sm hover:text-green-400 transition-colors">
                        {item.val}
                      </a>
                    ) : (
                      <p className="text-white/80 font-semibold text-sm">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green-500/[0.07] border border-green-500/20 rounded-3xl p-14 text-center">
                <div className="w-16 h-16 bg-green-500/15 border border-green-500/25 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MailIcon size={28} className="text-green-400" />
                </div>
                <h3 className="text-white font-black text-2xl mb-3">Message sent.</h3>
                <p className="text-white/45 text-base leading-relaxed">
                  Wow, you actually reached out. That is brave. I will get back to you faster than
                  JavaScript can break in production.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-9 space-y-6">
                <div>
                  <label className="block text-white/35 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="e.g. Elon (just kidding, any name works)"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/20 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/10 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/35 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/20 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/10 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-white/35 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, or just say hi. Both are welcome."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/[0.05] border border-white/[0.1] text-white placeholder-white/20 rounded-2xl px-5 py-4 text-base focus:outline-none focus:border-green-500/50 focus:ring-2 focus:ring-green-500/10 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-bold py-4.5 py-[18px] rounded-2xl text-base tracking-wide transition-all duration-200 hover:scale-[1.015] active:scale-[0.985] shadow-xl shadow-green-500/20 flex items-center justify-center gap-3"
                >
                  Send Message <ArrowRightIcon size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
