import { QuoteIcon, StarIcon } from './Icons'

const testimonials = [
  {
    quote: "He doesn't just write code; he builds systems that are fast, reliable, and built to last. Also he somehow fixed a bug in 2 minutes that I had been staring at for 3 days.",
    name: 'Rohan Shah',
    role: 'Project Manager',
    initials: 'RS',
    color: 'from-orange-500 to-pink-500',
  },
  {
    quote: "He not only led critical projects but also managed the team with exceptional leadership. And he never missed a standup. That alone makes him a legend.",
    name: 'Priya Mehta',
    role: 'Product Designer',
    initials: 'PM',
    color: 'from-purple-500 to-violet-500',
  },
  {
    quote: "His expertise in the MERN stack consistently shines. He built our REST API so fast I thought he just copied it from somewhere. He assured me he did not. I still wonder.",
    name: 'Kiran Nair',
    role: 'Backend Developer',
    initials: 'KN',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    quote: "His support and mentorship have greatly contributed to my growth. He explained things so clearly that even I understood async/await. That is a miracle.",
    name: 'Sneha Kulkarni',
    role: 'Junior Developer',
    initials: 'SK',
    color: 'from-green-500 to-emerald-500',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-pink-500/40" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-pink-700 rounded-full blur-[160px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 justify-center">
          <span className="text-pink-400 text-xs uppercase tracking-[0.2em] font-bold">Social Proof</span>
        </div>
        <h2 className="text-white text-4xl md:text-[52px] font-black text-center mb-5 leading-tight">
          What They Said{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">About Me</span>
        </h2>
        <p className="text-white/35 text-center text-base mb-20 max-w-lg mx-auto leading-relaxed">
          Real quotes from real humans. They said nice things.
          I paid nothing for this. Mostly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 hover:border-pink-500/25 hover:bg-white/[0.05] transition-all duration-300 group relative overflow-hidden"
            >
              {/* Background quote mark */}
              <div className="absolute top-6 right-6 text-white/[0.04] group-hover:text-white/[0.06] transition-colors duration-300">
                <QuoteIcon size={48} />
              </div>

              <p className="text-white/65 leading-[1.85] text-base mb-8 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black text-sm">{t.initials}</span>
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {[1,2,3,4,5].map(s => (
                    <StarIcon key={s} size={13} className="text-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-24">
          <h3 className="text-white text-3xl md:text-4xl font-black text-center mb-3">
            Let's Clear Things Up
          </h3>
          <p className="text-white/30 text-center text-base mb-12">Questions I get asked. Answers that are actually honest.</p>

          <div className="max-w-2xl mx-auto space-y-3">
            {[
              {
                q: "What kind of projects do you usually work on?",
                a: "Mostly web apps — anything from dashboards to e-commerce platforms. I enjoy building both the interface and the logic behind it. Bonus points if there are complex data flows involved.",
              },
              {
                q: "Do you help with project planning and architecture?",
                a: "Absolutely. I love the planning phase. I will whiteboard systems, design databases, argue about folder structure — it is basically my love language.",
              },
              {
                q: "Can you handle both front-end and back-end?",
                a: "Yes. That is the whole full-stack thing. I do both. Sometimes simultaneously. While drinking coffee. It is a talent.",
              },
              {
                q: "How soon can you start?",
                a: "Faster than you can say npm install. Seriously, reach out.",
              },
              {
                q: "How do you usually work with clients or teams?",
                a: "With clear communication, regular updates, and zero passive-aggressive commit messages. Mostly.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden group"
              >
                <summary className="px-7 py-5 text-white font-semibold text-base cursor-pointer flex items-center justify-between hover:bg-white/[0.04] transition-colors duration-200 list-none">
                  <span>{i + 1}. {faq.q}</span>
                  <span className="text-white/25 group-open:rotate-45 transition-transform duration-200 text-xl ml-5 flex-shrink-0 font-light">+</span>
                </summary>
                <div className="px-7 pb-6">
                  <p className="text-white/45 text-base leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
