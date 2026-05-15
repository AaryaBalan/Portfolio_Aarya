const testimonials = [
  {
    quote: "He doesn't just write code; he builds systems that are fast, reliable, and built to last. Also he somehow fixed a bug in 2 minutes that I'd been staring at for 3 days.",
    name: 'Rohan Shah',
    role: 'Project Manager',
    emoji: '👨‍💼',
    highlight: 'fast, reliable, and built to last',
  },
  {
    quote: "He not only led critical projects but also managed the team with exceptional leadership. And he never missed a standup. That alone makes him a legend.",
    name: 'Priya Mehta',
    role: 'Product Designer',
    emoji: '👩‍🎨',
    highlight: 'exceptional leadership',
  },
  {
    quote: "His expertise in the MERN stack consistently shines. He built our REST API so fast I thought he just copied it from somewhere. He assured me he didn't. I still wonder.",
    name: 'Kiran Nair',
    role: 'Backend Developer',
    emoji: '👨‍💻',
    highlight: 'MERN stack',
  },
  {
    quote: "His support and mentorship have greatly contributed to my growth. He explained things so clearly that even I understood async/await. That's a miracle.",
    name: 'Sneha Kulkarni',
    role: 'Junior Developer',
    emoji: '👩‍💻',
    highlight: 'mentorship',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#0f0f0f] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-pink-500/50" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-700 rounded-full blur-[150px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="text-pink-400 text-xs uppercase tracking-widest font-bold">Social Proof</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center mb-2">
          What They Said <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">About Me</span>
        </h2>
        <p className="text-gray-500 text-center text-sm mb-16 max-w-lg mx-auto">
          Real quotes from real humans. (Not bots. Probably. I hope.) They said nice things.
          I paid nothing for this. Mostly.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/10 rounded-3xl p-7 hover:border-pink-500/30 hover:bg-white/5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Big quote mark */}
              <span className="absolute top-4 right-6 text-6xl text-white/5 font-serif leading-none select-none">"</span>

              <p className="text-gray-300 leading-relaxed text-sm mb-6 relative z-10">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 flex items-center justify-center text-lg">
                  {t.emoji}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[1,2,3,4,5].map(s => (
                    <span key={s} className="text-yellow-400 text-xs">⭐</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ section — inspired by reference "Let's Clear Things Up" */}
        <div className="mt-20">
          <h3 className="text-white text-3xl font-black text-center mb-10">
            Let's Clear <span className="text-orange-400">Things Up</span>
          </h3>

          <div className="max-w-2xl mx-auto space-y-3">
            {[
              {
                q: "What kind of projects do you usually work on?",
                a: "Mostly web apps — anything from dashboards to e-commerce platforms. I enjoy building both the interface and the logic behind it. Bonus points if there are complex data flows involved.",
              },
              {
                q: "Do you help with project planning and architecture?",
                a: "Absolutely. I actually love the planning phase. I'll whiteboard systems, design databases, argue about folder structure... it's basically my love language.",
              },
              {
                q: "Can you handle both front-end and back-end?",
                a: "Yes! That's the whole 'full stack' thing. I do both. Sometimes simultaneously. While drinking coffee. It's a talent.",
              },
              {
                q: "How soon can you start?",
                a: "Faster than you can say 'npm install'. Seriously, hit me up.",
              },
              {
                q: "How do you usually work with clients or teams?",
                a: "With clear communication, regular updates, and zero passive-aggressive commit messages. Mostly.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white/3 border border-white/10 rounded-2xl overflow-hidden group"
              >
                <summary className="px-6 py-5 text-white font-semibold text-sm cursor-pointer flex items-center justify-between hover:bg-white/5 transition-colors duration-200 list-none">
                  {i + 1}. {faq.q}
                  <span className="text-gray-500 group-open:rotate-180 transition-transform duration-200 text-lg ml-4 flex-shrink-0">+</span>
                </summary>
                <div className="px-6 pb-5">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
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
