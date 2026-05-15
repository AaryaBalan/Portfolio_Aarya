const About = () => {
  return (
    <section id="about" className="bg-[#111111] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-orange-500/50" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="text-orange-500 text-xs uppercase tracking-widest font-bold">About Me</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center mb-4">
          A Bit About Me<br />
          <span className="text-gray-500 font-light text-2xl">(&amp; My Code 😅)</span>
        </h2>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Story */}
          <div>
            <div className="bg-white/3 border border-white/10 rounded-3xl p-8 hover:border-orange-500/20 transition-all duration-300">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                I'm a <span className="text-orange-400 font-bold">Full Stack Developer</span> who writes code that doesn't just run —
                it <em>sprints</em>. From Vue and React on the front to Rails and Python on the back,
                I've worked across the stack to ship solid, user-friendly stuff.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                I like building things that scale, make sense, and don't break under pressure (most of the time).
                Complex challenges? Bring 'em on — I turn chaos into clean, working solutions.
              </p>
              <p className="text-gray-500 leading-relaxed text-sm">
                Currently a <span className="text-purple-400 font-semibold">BCA final-year student</span> who has been actively learning and building projects
                like my life depends on it. (It kind of does. Jobs exist. Rent exists. You know how it is.)
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#contact" className="bg-white text-black font-bold px-6 py-3 rounded-xl text-sm hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105">
                  Contact me →
                </a>
              </div>
            </div>
          </div>

          {/* Right — Fun facts */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: '🎓', title: 'BCA Student', desc: 'Final year. Send help. And snacks.' },
              { icon: '☕', title: 'Coffee Addict', desc: 'Blood type: Espresso. I run on caffeine and stubbornness.' },
              { icon: '🐛', title: 'Bug Whisperer', desc: 'I don\'t find bugs. Bugs find me. We have an understanding.' },
              { icon: '🌙', title: 'Night Owl', desc: 'Best code is written at 2am. Science says so. (I made that up.)' },
              { icon: '📚', title: 'Lifelong Learner', desc: 'Always learning. Currently learning why my CSS breaks in Safari.' },
              { icon: '🚀', title: 'Ship Fast', desc: 'Move fast, break things, fix things, ship things. Repeat.' },
            ].map((fact, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/10 rounded-2xl p-5 hover:border-orange-500/30 hover:bg-white/5 transition-all duration-300 cursor-default group"
              >
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-200 inline-block">{fact.icon}</div>
                <h4 className="text-white font-bold text-sm mb-1">{fact.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Big type moment */}
        <div className="mt-24 text-center relative overflow-hidden py-8">
          <p className="text-gray-700 text-xs uppercase tracking-widest mb-2">Professional Summary</p>
          <h3 className="text-7xl md:text-9xl font-black text-white/5 leading-none select-none">
            THE DEVELOPER
          </h3>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white font-black text-2xl md:text-3xl">
              MEET <span className="text-orange-500">THE DEV</span> 👋
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
