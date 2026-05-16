import { ExternalLinkIcon, CodeIcon } from './Icons'

const projects = [
  {
    title: 'WakeBuddy',
    subtitle: 'Google AdMob Hackathon Top 30 Finalist',
    description: 'A social alarm experience where you never wake up alone. Pair with a friend, hit "I\'m Awake", and trigger an instant call. Features shared streaks, leaderboards, and wake-up analytics.',
    tags: ['Social App', 'Real-time', 'AdMob Integration'],
    color: 'from-orange-500/20 to-pink-500/5',
    accent: 'border-orange-500/30',
    link: 'https://lnkd.in/gdhQEghu', // Demo Video
    github: 'https://lnkd.in/gXTsUwJz'
  },
  {
    title: 'Dayable',
    subtitle: 'Minimal Daily Social Media',
    description: 'A calm, minimal space focused on your day, not your status. Share simple daily moments, track how your day went, and connect with friends through honest check-ins without endless scrolling.',
    tags: ['Social Media', 'Wellness', 'UI/UX'],
    color: 'from-cyan-500/20 to-blue-500/5',
    accent: 'border-cyan-500/30',
    link: '#',
    github: '#'
  },
  {
    title: 'Zorphix',
    subtitle: 'Department Symposium Platform',
    description: 'The official event website for our college department symposium. A highly interactive, performance-optimized platform designed to handle registrations, event schedules, and showcase activities.',
    tags: ['Event Website', 'College Symposium', 'Interactive'],
    color: 'from-purple-500/20 to-violet-500/5',
    accent: 'border-purple-500/30',
    link: 'https://www.zorphix.com/',
    github: '#'
  },
  {
    title: 'Hacksymmetric',
    subtitle: 'Hackathon Registration Hub',
    description: 'The official registration and information portal for the Asymmetric Club hackathon. Built to handle team formations, live event updates, and provide a seamless onboarding experience for hackers.',
    tags: ['Hackathon', 'Registration Portal', 'College Club'],
    color: 'from-green-500/20 to-emerald-500/5',
    accent: 'border-green-500/30',
    link: 'https://hacksymmetric.vercel.app/',
    github: '#'
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-[#030303] py-32 relative overflow-hidden">
      
      {/* Infinite scrolling text background */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 opacity-[0.03] pointer-events-none select-none flex flex-col gap-8 transform -rotate-6 scale-125">
        <div className="whitespace-nowrap animate-marquee">
          <span className="text-[150px] font-display font-black mr-8">FEATURED WORK • RECENT PROJECTS • CREATIVE DESIGNS •</span>
          <span className="text-[150px] font-display font-black">FEATURED WORK • RECENT PROJECTS • CREATIVE DESIGNS •</span>
        </div>
        <div className="whitespace-nowrap animate-marquee" style={{ animationDirection: 'reverse' }}>
          <span className="text-[150px] font-display font-black text-transparent -webkit-text-stroke-2 mr-8">WEBSITES • MOBILE APPS • ONLINE STORES •</span>
          <span className="text-[150px] font-display font-black text-transparent -webkit-text-stroke-2">WEBSITES • MOBILE APPS • ONLINE STORES •</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
              Featured <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Creations.</span>
            </h2>
          </div>
          <p className="text-white/40 max-w-sm text-lg font-light leading-relaxed pb-2">
            These aren't just practice ideas. These are real platforms built to solve actual problems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden bg-[#080808] border ${p.accent} rounded-[2.5rem] p-10 md:p-14 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_50px_rgba(0,0,0,0.8)]`}
            >
              {/* Hover glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              <div className="relative z-10 h-full flex flex-col">
                
                <div className="flex justify-between items-start mb-16">
                  <div>
                    <div className="text-white/30 text-sm font-semibold uppercase tracking-[0.2em] mb-3">{p.subtitle}</div>
                    <h3 className="text-4xl md:text-5xl font-display font-black text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/50 transition-all duration-300">
                      {p.title}
                    </h3>
                  </div>
                  
                  {p.link !== '#' && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all duration-300 flex-shrink-0 ml-4">
                      <ExternalLinkIcon size={24} />
                    </a>
                  )}
                </div>

                <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-lg font-light">
                  {p.description}
                </p>

                <div className="mt-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8 border-t border-white/10">
                  <div className="flex flex-wrap gap-3">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/5 text-white/70 px-4 py-2 rounded-full font-medium tracking-wide uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {p.github !== '#' && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white/40 hover:text-white uppercase tracking-widest flex items-center gap-2 transition-colors whitespace-nowrap">
                      <CodeIcon size={16} /> Source Code
                    </a>
                  )}
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
