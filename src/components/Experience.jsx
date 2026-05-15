import { BriefcaseIcon, AwardIcon } from './Icons'

const experience = [
  {
    role: 'Full Stack Engineer',
    company: 'TechVerse Solutions',
    period: '2024 – Present',
    type: 'Lead',
    color: 'from-orange-500 to-pink-500',
    border: 'border-orange-500/30',
    bullets: [
      'Architected and deployed scalable frontend systems using React and Next.js for high-traffic client apps.',
      'Designed RESTful APIs, defined complex data flows, and built scalable DB schemas.',
      'Managed a live codebase handling thousands of requests daily without breaking a sweat.'
    ],
  },
  {
    role: 'Freelance Developer',
    company: 'Monster Studio',
    period: '2023 – 2024',
    type: 'Contract',
    color: 'from-purple-500 to-cyan-500',
    border: 'border-purple-500/30',
    bullets: [
      'Engineered MongoDB indexing, caching, and complex aggregations optimizing query times by 40%.',
      'Integrated Cloudflare R2, Stripe payments, and real-time WebSockets.',
      'Built responsive analytical dashboards that clients actually understood.'
    ],
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Repos',
    period: '2022 – 2023',
    type: 'Global',
    color: 'from-green-500 to-emerald-500',
    border: 'border-green-500/30',
    bullets: [
      'Submitted massive PRs to several core React and Node.js open-source libraries.',
      'Fixed legacy bugs that had been open for months. Became the hero nobody asked for.',
      'Learned that strict code reviews are humbling. Very, very humbling.'
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="bg-[#030303] py-32 relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <p className="text-pink-400 text-sm uppercase tracking-[0.3em] font-bold mb-6 font-display">
            The Timeline
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
            Operational <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-orange-500">History.</span>
          </h2>
        </div>

        {/* Central Data Pipeline Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Glowing central line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2">
            <div className="absolute top-0 w-full h-[30%] bg-gradient-to-b from-transparent via-orange-500 to-transparent animate-[ping_4s_ease-in-out_infinite] opacity-50" />
          </div>

          <div className="space-y-16">
            {experience.map((exp, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row items-start ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8 md:gap-16 group`}>
                
                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-white/20 z-10 group-hover:border-orange-500 group-hover:scale-150 transition-all duration-300">
                  <div className={`absolute inset-1 rounded-full bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  <div className={`absolute -inset-4 rounded-full bg-gradient-to-r ${exp.color} opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300`} />
                </div>

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <div className={`bg-[#080808] border ${exp.border} rounded-[2rem] p-8 md:p-10 hover:bg-[#0c0c0c] transition-colors duration-500 relative overflow-hidden`}>
                    
                    {/* Corner accent */}
                    <div className="absolute top-0 right-0 p-6 opacity-10">
                      <BriefcaseIcon size={64} className="text-white" />
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-white/40 font-mono text-sm tracking-widest">{exp.period}</span>
                      <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-3xl font-display font-black text-white mb-2">{exp.role}</h3>
                    <p className={`text-transparent bg-clip-text bg-gradient-to-r ${exp.color} font-bold text-lg mb-8 uppercase tracking-widest font-display`}>
                      {exp.company}
                    </p>

                    <ul className="space-y-4">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-4 text-white/50 text-sm leading-relaxed font-light">
                          <span className="w-1.5 h-1.5 bg-white/20 rounded-full mt-2 flex-shrink-0 group-hover:bg-orange-500 transition-colors duration-300" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
