import { QuoteIcon } from './Icons'

const testimonials = [
  {
    quote: "He doesn't just build websites; he creates systems that are fast, reliable, and built to last. Also, he somehow fixed a problem in 2 minutes that I had been staring at for 3 days.",
    name: 'Rohan Shah',
    role: 'Project Manager',
  },
  {
    quote: "He not only led our major projects but also managed the team with incredible patience. He never missed a meeting, and always brought the best ideas to the table.",
    name: 'Priya Mehta',
    role: 'Product Designer',
  },
  {
    quote: "His expertise in putting everything together is amazing. He built our entire platform so quickly I thought he just copied it from somewhere. He assured me he did not.",
    name: 'Kiran Nair',
    role: 'Business Owner',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#030303] py-32 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-24">
          <p className="text-purple-400 text-sm uppercase tracking-[0.3em] font-bold mb-6 font-display">
            The Evidence
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter text-center">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Say.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div 
              key={i}
              className="group bg-[#080808] border border-white/10 rounded-[2.5rem] p-10 flex flex-col justify-between hover:scale-[1.02] hover:bg-[#0c0c0c] transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 text-white/[0.02] group-hover:text-purple-500/[0.05] transition-colors duration-500 transform scale-150">
                <QuoteIcon size={200} />
              </div>

              <div className="relative z-10">
                <p className="text-2xl font-light leading-snug text-white/80 mb-12">
                  "{t.quote}"
                </p>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-white font-display font-bold text-lg">{t.name}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{t.role}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center">
                  <span className="text-white font-display font-black">{t.name.charAt(0)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials
