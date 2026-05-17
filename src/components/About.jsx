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
    <section id="about" className="py-32 relative bg-[#030303] min-h-screen flex items-center overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-white/30 text-sm uppercase tracking-[0.4em] font-bold mb-4 font-display">
              The Mind Behind
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black leading-none tracking-tighter text-white">
              Engineering <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/50 to-white/10">Excellence.</span>
            </h2>
          </div>
          <div className="max-w-sm text-white/50 font-light text-sm md:text-base">
            Hover over the pillars to explore my engineering philosophy, technical stack, and execution strategy.
          </div>
        </div>

        {/* Interactive Accordion Gallery */}
        <div className="flex flex-col md:flex-row h-[600px] md:h-[550px] gap-4 w-full">
          {aboutData.map((item, index) => {
            const isActive = active === index

            return (
              <div 
                key={item.id}
                onMouseEnter={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`relative overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer border border-white/5 bg-[#080808] 
                  ${isActive ? 'flex-[4] md:flex-[6] shadow-[0_0_50px_rgba(255,255,255,0.03)]' : 'flex-[1] opacity-50 hover:opacity-80 hover:bg-[#0a0a0a]'}
                `}
              >
                {/* Background Glow */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-opacity duration-1000 ${isActive ? 'opacity-[0.15]' : 'opacity-0'}`}
                />
                
                {/* Large Background Watermark Number */}
                <div className={`absolute top-6 right-6 md:top-10 md:right-10 font-black font-display text-white/[0.03] transition-all duration-700 leading-none select-none
                  ${isActive ? 'text-8xl md:text-[12rem] scale-100 translate-x-0 translate-y-0' : 'text-6xl md:text-8xl scale-90 translate-x-4 md:translate-x-0 md:translate-y-10'}
                `}>
                  {item.id}
                </div>

                {/* Content Wrapper */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
                  
                  {/* Title Area */}
                  <div className={`transition-all duration-700 ${isActive ? '' : 'md:absolute md:inset-0 md:flex md:items-center md:justify-center'}`}>
                    <div className={`flex items-center gap-4 transition-all duration-500 ${isActive ? 'mb-6' : ''}`}>
                      {/* Colored Indicator Line */}
                      <div className={`h-px bg-gradient-to-r ${item.color} transition-all duration-500 ${isActive ? 'w-12 opacity-100' : 'w-0 opacity-0'}`} />
                      
                      <h3 className={`font-display font-bold uppercase tracking-[0.2em] text-white whitespace-nowrap transition-all duration-500 origin-center
                        ${isActive ? 'text-2xl md:text-4xl' : 'text-lg md:text-2xl md:[writing-mode:vertical-rl] md:rotate-180'}
                      `}>
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {/* Paragraph Area */}
                  <div 
                    className={`overflow-hidden transition-all duration-700 ease-out origin-bottom
                      ${isActive ? 'max-h-[300px] opacity-100 translate-y-0 blur-0' : 'max-h-0 opacity-0 translate-y-12 blur-sm'}
                    `}
                  >
                    <p className="text-base md:text-2xl font-light text-white/70 leading-relaxed md:max-w-2xl pl-0 md:pl-16">
                      {item.content}
                    </p>
                  </div>

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
