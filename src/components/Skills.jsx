const categories = [
  { name: 'Core', color: 'from-orange-500/20 to-orange-500/5', border: 'border-orange-500/30', tools: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'C++'] },
  { name: 'Frontend', color: 'from-cyan-500/20 to-cyan-500/5', border: 'border-cyan-500/30', tools: ['React 18', 'Next.js 14', 'Tailwind CSS', 'Framer Motion', 'Zustand'] },
  { name: 'Backend', color: 'from-purple-500/20 to-purple-500/5', border: 'border-purple-500/30', tools: ['Node.js', 'Express', 'NestJS', 'FastAPI', 'GraphQL'] },
  { name: 'Database', color: 'from-pink-500/20 to-pink-500/5', border: 'border-pink-500/30', tools: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
  { name: 'Architecture', color: 'from-green-500/20 to-green-500/5', border: 'border-green-500/30', tools: ['Microservices', 'REST APIs', 'WebSockets', 'CI/CD'] },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-[#030303] py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] font-bold mb-6 font-display">
            The Arsenal
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Command.</span>
          </h2>
        </div>

        {/* Scattered / Masonry-like Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <div 
              key={i} 
              className={`bg-[#080808] border ${cat.border} rounded-[2rem] p-8 md:p-10 relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-bold text-white mb-8 tracking-wide">
                  {cat.name}
                </h3>
                
                <div className="flex flex-wrap gap-3">
                  {cat.tools.map(tool => (
                    <span 
                      key={tool} 
                      className="bg-black border border-white/10 text-white/70 px-4 py-2.5 rounded-full text-sm font-medium hover:border-white/50 hover:text-white transition-colors duration-300 shadow-xl"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Special Brutalist "Honesty" Card */}
          <div className="bg-orange-500 border border-orange-400 rounded-[2rem] p-8 md:p-10 flex flex-col justify-center transform hover:rotate-2 transition-transform duration-500 text-black">
            <h3 className="text-3xl font-display font-black mb-4 uppercase tracking-tighter">
              99% Googling Errors.
            </h3>
            <p className="text-lg font-medium leading-relaxed opacity-90">
              The other 1% is copy-pasting from Stack Overflow. I am just really fast at it. Don't tell my clients.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skills
