import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="bg-[#0f0f0f] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-green-500/50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-700 rounded-full blur-[160px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="text-green-400 text-xs uppercase tracking-widest font-bold">Contact</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center mb-2">
          Got a Question?{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500">Let's Chat.</span>
        </h2>
        <p className="text-gray-500 text-center text-sm mb-16 max-w-lg mx-auto">
          I'll just send a message here or text me on WhatsApp. Response time: faster than my CSS loads in IE.
          (So, basically instant.)
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Contact info */}
          <div>
            <h3 className="text-white font-black text-2xl mb-6">Got a question?<br />Let's chat.</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              I'll just leave a message here. Whether it's a quick hello, a project inquiry,
              or you just want to tell me my code looks clean (I love hearing that), I'm all ears.
            </p>

            <div className="space-y-4">
              {[
                { icon: '📧', label: 'Send me an email', val: 'aarya@example.com', href: 'mailto:aarya@example.com' },
                { icon: '💬', label: 'Text me on WhatsApp', val: '+91 98765 43210', href: '#' },
                { icon: '📍', label: 'Location', val: 'India (Remote-friendly 🌏)', href: null },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/3 border border-white/10 rounded-2xl p-4 hover:border-green-500/30 hover:bg-white/5 transition-all duration-200 group">
                  <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white font-semibold text-sm hover:text-green-400 transition-colors">{item.val}</a>
                    ) : (
                      <p className="text-white font-semibold text-sm">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-3xl p-12 text-center">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-white font-black text-2xl mb-2">Message sent!</h3>
                <p className="text-gray-400 text-sm">
                  Wow, you actually reached out. That's brave. I'll get back to you faster than JavaScript
                  can break in production. (So, pretty fast.)
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white/3 border border-white/10 rounded-3xl p-8 space-y-5">
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    required
                    placeholder="e.g. Elon (just kidding, any name works)"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    required
                    placeholder="your@email.com (I won't spam. Probably.)"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200"
                  />
                </div>
                <div>
                  <label className="block text-gray-500 text-xs uppercase tracking-widest font-semibold mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your project, or just say hi. Both are welcome."
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border border-white/15 text-white placeholder-gray-600 rounded-xl px-4 py-3.5 text-sm focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-200 resize-none"
                  />
                </div>
                <button
                  type="submit"
                  id="contact-submit-btn"
                  className="w-full bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-black font-bold py-4 rounded-xl text-sm tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-green-500/20"
                >
                  Send Message 🚀
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
