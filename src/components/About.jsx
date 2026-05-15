import { CodeIcon, ZapIcon, CpuIcon, TrendingUpIcon, AwardIcon, ShieldIcon } from './Icons'

const facts = [
  { icon: <AwardIcon size={20} />, title: 'BCA Student', desc: 'Final year. Send help. And coffee.' },
  { icon: <CpuIcon size={20} />, title: 'Always Caffeinated', desc: 'I run on caffeine and stubbornness. Mostly caffeine.' },
  { icon: <ShieldIcon size={20} />, title: 'Bug Whisperer', desc: "I don't find bugs. Bugs find me. We have an understanding." },
  { icon: <ZapIcon size={20} />, title: 'Night Owl', desc: 'Best code is written at 2am. I stand by this completely.' },
  { icon: <TrendingUpIcon size={20} />, title: 'Lifelong Learner', desc: 'Always learning. Currently learning why CSS breaks in Safari.' },
  { icon: <CodeIcon size={20} />, title: 'Ship Fast', desc: 'Move fast, break things, fix things, ship things. Repeat.' },
]

const About = () => {
  return (
    <section id="about" className="bg-[#0f0f0f] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-orange-500/40" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-5 justify-center">
          <span className="text-orange-400 text-xs uppercase tracking-[0.2em] font-bold">About Me</span>
        </div>
        <h2 className="text-white text-4xl md:text-[52px] font-black text-center mb-3 leading-tight">
          A Bit About Me
        </h2>
        <p className="text-white/30 text-center text-lg mb-20 max-w-md mx-auto">
          & My Code
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Story */}
          <div>
            <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-9 hover:border-orange-500/20 transition-all duration-300">
              <p className="text-white/80 text-lg leading-[1.8] mb-6">
                I'm a <span className="text-orange-400 font-bold">Full Stack Developer</span> who writes code that doesn't just run —
                it <em>sprints</em>. From React on the front to Node and Python on the back,
                I've worked across the entire stack to ship solid, user-friendly products.
              </p>
              <p className="text-white/50 text-base leading-[1.8] mb-6">
                I like building things that scale, make sense, and don't break under pressure (most of the time).
                Complex challenges are where I thrive — I turn chaos into clean, working solutions.
              </p>
              <p className="text-white/35 text-sm leading-[1.8]">
                Currently a <span className="text-purple-400 font-semibold">BCA final-year student</span> who has been actively building projects
                like my life depends on it. (It kind of does. Jobs exist. Rent exists. You know how it is.)
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a href="#contact" className="bg-white text-black font-bold px-7 py-3.5 rounded-2xl text-sm hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105">
                  Contact me
                </a>
              </div>
            </div>
          </div>

          {/* Fact cards */}
          <div className="grid grid-cols-2 gap-4">
            {facts.map((fact, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-6 hover:border-orange-500/25 hover:bg-white/[0.05] transition-all duration-300 cursor-default group"
              >
                <div className="text-orange-400/70 mb-3 group-hover:text-orange-400 transition-colors duration-200 group-hover:scale-110 transform inline-block">
                  {fact.icon}
                </div>
                <h4 className="text-white font-bold text-sm mb-2">{fact.title}</h4>
                <p className="text-white/35 text-xs leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Big type moment */}
        <div className="mt-28 text-center relative overflow-hidden py-10">
          <p className="text-white/20 text-xs uppercase tracking-[0.25em] mb-3 font-semibold">Professional Summary</p>
          <h3 className="text-[90px] md:text-[120px] font-black text-white/[0.04] leading-none select-none pointer-events-none">
            THE DEVELOPER
          </h3>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-black text-3xl md:text-4xl tracking-tight">
              MEET <span className="text-orange-500">THE DEV</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
