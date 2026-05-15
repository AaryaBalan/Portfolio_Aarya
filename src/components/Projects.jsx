import { ExternalLinkIcon, CodeIcon, LayersIcon } from './Icons'

const projects = [
  {
    title: 'Health Core',
    subtitle: 'Doctor & Donor Platform',
    description: 'A full-stack architecture connecting patients with doctors and donors. Because hospitals are great but long queues — not so much.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-red-500/20 to-pink-500/5',
    accent: 'border-red-500/30',
  },
  {
    title: 'Commerce Engine',
    subtitle: 'Full Stack Shop',
    description: 'Complete online store with auth, cart, payments and admin panel. Basically built Amazon but smaller. Much smaller.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    color: 'from-blue-500/20 to-cyan-500/5',
    accent: 'border-blue-500/30',
  },
  {
    title: 'Data Vis',
    subtitle: 'Analytics Dashboard',
    description: 'Real-time charts and KPIs for businesses who need to feel like they are in a sci-fi movie while looking at their data.',
    tags: ['React', 'D3.js', 'Firebase', 'Recharts'],
    color: 'from-purple-500/20 to-violet-500/5',
    accent: 'border-purple-500/30',
  },
  {
    title: 'Sync Chat',
    subtitle: 'Real-time Messaging',
    description: 'WhatsApp but cooler. End-to-end messaging, rooms, reactions — all the good stuff. Without the blue ticks causing anxiety.',
    tags: ['Socket.io', 'Express', 'React', 'Redis'],
    color: 'from-green-500/20 to-emerald-500/5',
    accent: 'border-green-500/30',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-[#030303] py-32 relative overflow-hidden">
      
      {/* Massive Marquee Background */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.03] pointer-events-none select-none flex flex-col gap-8 transform -rotate-6 scale-125">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[150px] font-display font-black mr-8">SELECTED WORKS • RECENT BUILDS • ARCHITECTURE •</span>
          <span className="text-[150px] font-display font-black">SELECTED WORKS • RECENT BUILDS • ARCHITECTURE •</span>
        </div>
        <div className="whitespace-nowrap animate-marquee" style={{ animationDirection: 'reverse' }}>
          <span className="text-[150px] font-display font-black text-transparent -webkit-text-stroke-2 mr-8">FRONTEND • BACKEND • FULLSTACK •</span>
          <span className="text-[150px] font-display font-black text-transparent -webkit-text-stroke-2">FRONTEND • BACKEND • FULLSTACK •</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
              Featured <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Deployments.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed pb-2">
            These aren't just tutorials. These are architectures built to handle reality.
          </p>
        </div>

        {/* Large Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-[#080808] border ${p.accent} rounded-[2.5rem] p-10 md:p-14 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(0,0,0,0.8)]`}
            >
              {/* Animated Glow Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* Inner content wrapper */}
              <div className="relative z-10 h-full flex flex-col">
                
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <div className="text-white/30 text-sm font-semibold uppercase tracking-[0.2em] mb-3">{p.subtitle}</div>
                    <h3 className="text-4xl md:text-5xl font-display font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                      {p.title}
                    </h3>
                  </div>
                  
                  {/* Circular Button */}
                  <a href="#" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300">
                    <ExternalLinkIcon size={24} />
                  </a>
                </div>

                <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-lg font-light">
                  {p.description}
                </p>

                {/* Bottom Row */}
                <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap gap-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/5 text-white/70 px-4 py-2 rounded-full font-medium tracking-wide uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-sm font-bold text-white/40 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors">
                    <CodeIcon size={16} /> Source Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
