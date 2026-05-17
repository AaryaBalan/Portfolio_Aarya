import { useState } from 'react'

const aboutData = [
  {
    id: '01',
    title: 'The Architecture',
    color: 'from-orange-500 to-pink-500',
    content: "I build complete web applications from start to finish. I focus on creating beautiful, easy-to-use interfaces that are powered by fast and reliable systems behind the scenes."
  },
  {
    id: '02',
    title: 'The Stack',
    color: 'from-cyan-400 to-blue-500',
    content: "I work with the latest technologies to bring ideas to life. I handle everything from setting up secure databases and building APIs, to writing the React code that users interact with."
  },
  {
    id: '03',
    title: 'The Execution',
    color: 'from-purple-500 to-violet-500',
    content: "I focus on writing clean code that works perfectly. Whether I am fixing a stubborn bug, speeding up an app, or launching a final product, I make sure the end result is always top quality."
  }
]

const About = () => {
  const [active, setActive] = useState(0)

  return (
    <section id="about" className="py-20 sm:py-32 relative bg-[#030303] min-h-screen flex items-center overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 w-full relative z-10">
        
        {/* Header */}
        <div className="mb-10 sm:mb-16 md:mb-24">
          <p className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 font-display">
            The Mind Behind
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tighter text-white">
            Engineering <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/10">Excellence.</span>
          </h2>
        </div>

        {/* Desktop: Accordion Gallery */}
        <div className="hidden md:flex h-[500px] gap-4 w-full">
          {aboutData.map((item, index) => {
            const isActive = active === index
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-white/5 bg-[#080808] 
                  ${isActive ? 'flex-[6] shadow-[0_0_50px_rgba(255,255,255,0.03)]' : 'flex-[1] opacity-50 hover:opacity-80 hover:bg-[#0a0a0a]'}
                `}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-opacity duration-1000 ${isActive ? 'opacity-[0.15]' : 'opacity-0'}`} />
                
                <div className={`absolute top-8 right-8 font-black font-display text-white/[0.03] transition-all duration-700 leading-none select-none
                  ${isActive ? 'text-[10rem] scale-100' : 'text-8xl scale-90 translate-y-10'}
                `}>
                  {item.id}
                </div>

                <div className="absolute inset-0 flex flex-col justify-end p-10">
                  <div className={`transition-all duration-700 ${isActive ? '' : 'absolute inset-0 flex items-center justify-center'}`}>
                    <div className={`flex items-center gap-4 transition-all duration-500 ${isActive ? 'mb-6' : ''}`}>
                      <div className={`h-px bg-gradient-to-r ${item.color} transition-all duration-500 ${isActive ? 'w-12 opacity-100' : 'w-0 opacity-0'}`} />
                      <h3 className={`font-display font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap transition-all duration-500 origin-center
                        ${isActive ? 'text-3xl' : 'text-xl [writing-mode:vertical-rl] rotate-180'}
                      `}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  <div className={`overflow-hidden transition-all duration-700 ease-out ${isActive ? 'max-h-[200px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-12'}`}>
                    <p className="text-xl font-light text-white/70 leading-relaxed max-w-2xl pl-16">
                      {item.content}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mobile: Tap-to-expand cards */}
        <div className="md:hidden space-y-4">
          {aboutData.map((item, index) => {
            const isActive = active === index
            return (
              <div
                key={item.id}
                onClick={() => setActive(index)}
                className={`relative overflow-hidden rounded-[1.8rem] border border-white/5 bg-[#080808] cursor-pointer transition-all duration-500 ${isActive ? 'border-white/15' : ''}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-opacity duration-700 ${isActive ? 'opacity-10' : 'opacity-0'}`} />

                {/* Header row */}
                <div className="relative z-10 flex items-center justify-between px-6 py-5">
                  <div className="flex items-center gap-4">
                    <span className={`text-2xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r ${item.color}`}>{item.id}</span>
                    <h3 className="text-base font-display font-bold uppercase tracking-[0.15em] text-white">{item.title}</h3>
                  </div>
                  <div className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 transition-all duration-300 ${isActive ? 'rotate-45 bg-white/10' : ''}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 2V12M2 7H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>

                {/* Expandable content */}
                <div className={`overflow-hidden transition-all duration-500 ${isActive ? 'max-h-64 pb-6' : 'max-h-0'}`}>
                  <div className={`h-px bg-gradient-to-r ${item.color} mx-6 mb-5 opacity-30`} />
                  <p className="text-sm text-white/60 leading-relaxed px-6">
                    {item.content}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default About
