import { ExternalLinkIcon, CodeIcon, LayersIcon } from './Icons'

const projects = [
  {
    icon: <LayersIcon size={22} className="text-red-400" />,
    title: 'Doctor Service & Blood Donation App',
    subtitle: 'Healthcare Platform',
    description: 'A full-stack healthcare app connecting patients with doctors and blood donors. Because hospitals are great but long queues — not so much.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-red-500/15 to-pink-500/15',
    accent: 'border-red-500/20',
    hoverAccent: 'hover:border-red-500/40',
    badge: 'Featured',
  },
  {
    icon: <CodeIcon size={22} className="text-blue-400" />,
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Shop',
    description: 'A complete online store with auth, cart, payments and admin panel. Basically built Amazon but smaller. Much smaller. Okay — it\'s a prototype.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    color: 'from-blue-500/15 to-cyan-500/15',
    accent: 'border-blue-500/20',
    hoverAccent: 'hover:border-blue-500/40',
    badge: 'Popular',
  },
  {
    icon: <LayersIcon size={22} className="text-purple-400" />,
    title: 'Analytics Dashboard',
    subtitle: 'Data Visualization',
    description: 'Real-time charts and KPIs for businesses who need to feel like they are in a sci-fi movie while looking at their data.',
    tags: ['React', 'D3.js', 'Firebase', 'Recharts'],
    color: 'from-purple-500/15 to-violet-500/15',
    accent: 'border-purple-500/20',
    hoverAccent: 'hover:border-purple-500/40',
    badge: 'Live',
  },
  {
    icon: <CodeIcon size={22} className="text-green-400" />,
    title: 'Real-time Chat App',
    subtitle: 'Messaging Platform',
    description: 'WhatsApp but cooler (in my opinion). End-to-end messaging, rooms, reactions — all the good stuff. Without the blue ticks causing anxiety.',
    tags: ['Socket.io', 'Express', 'React', 'Redis'],
    color: 'from-green-500/15 to-emerald-500/15',
    accent: 'border-green-500/20',
    hoverAccent: 'hover:border-green-500/40',
    badge: 'Fast',
  },
  {
    icon: <LayersIcon size={22} className="text-orange-400" />,
    title: 'AI Discharge Module',
    subtitle: 'Medical AI Tool',
    description: 'Gemini-powered medical discharge analyzer that gives structured diagnostic summaries. Doctors said it was scary accurate. I chose to be proud.',
    tags: ['Gemini API', 'Python', 'FastAPI', 'React'],
    color: 'from-orange-500/15 to-yellow-500/15',
    accent: 'border-orange-500/20',
    hoverAccent: 'hover:border-orange-500/40',
    badge: 'AI-Powered',
  },
  {
    icon: <CodeIcon size={22} className="text-pink-400" />,
    title: 'React Native Task App',
    subtitle: 'Mobile Productivity',
    description: 'A beautiful task manager for people who love making to-do lists but hate doing the todos. Relatable. iOS and Android both.',
    tags: ['React Native', 'Expo', 'SQLite', 'Zustand'],
    color: 'from-pink-500/15 to-rose-500/15',
    accent: 'border-pink-500/20',
    hoverAccent: 'hover:border-pink-500/40',
    badge: 'Mobile',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-purple-500/40" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 justify-center">
          <span className="text-purple-400 text-xs uppercase tracking-[0.2em] font-bold">My Playground</span>
        </div>
        <h2 className="text-white text-4xl md:text-[52px] font-black text-center mb-5 leading-tight">
          My Personal{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Playground</span>
        </h2>
        <p className="text-white/35 text-center max-w-xl mx-auto mb-20 text-base leading-relaxed">
          Projects I built because I was curious, bored, or in desperate need of something to put on my resume.
          They all work. Mostly. At least when I demo them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${p.color} border ${p.accent} ${p.hoverAccent} rounded-3xl p-7 hover:scale-[1.02] transition-all duration-300 group cursor-pointer hover:shadow-2xl`}
            >
              {/* Badge */}
              <span className="absolute top-5 right-5 text-xs bg-white/[0.08] text-white/50 px-3 py-1 rounded-full font-semibold uppercase tracking-wider">
                {p.badge}
              </span>

              {/* Icon */}
              <div className="w-10 h-10 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-200">
                {p.icon}
              </div>

              <div className="text-white/30 text-xs font-semibold uppercase tracking-widest mb-2">{p.subtitle}</div>
              <h3 className="text-white font-black text-lg mb-4 leading-snug">{p.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-6">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/[0.07] text-white/50 px-3 py-1 rounded-lg font-medium border border-white/[0.06]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a href="#" className="flex-1 text-center text-sm font-bold text-white bg-white/[0.08] hover:bg-white hover:text-black py-3 rounded-2xl transition-all duration-200 flex items-center justify-center gap-2">
                  Live Demo <ExternalLinkIcon size={13} />
                </a>
                <a href="#" className="text-sm font-bold text-white/60 border border-white/[0.1] hover:border-white/40 hover:text-white px-5 py-3 rounded-2xl transition-all duration-200 flex items-center gap-1.5">
                  <CodeIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/20 text-sm mt-14 italic">
          All projects are real. Most demos actually work. Best viewed with positive energy and low expectations.
        </p>
      </div>
    </section>
  )
}

export default Projects
