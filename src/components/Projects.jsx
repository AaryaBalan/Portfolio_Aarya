const projects = [
  {
    emoji: '🏥',
    title: 'Doctor Service & Blood Donation App',
    subtitle: 'Healthcare Platform',
    description: 'A full-stack healthcare app connecting patients with doctors and blood donors. Because hospitals are great but long queues? Not so much.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    color: 'from-red-500/20 to-pink-500/20',
    accent: 'border-red-500/30',
    badge: '🏆 Featured',
  },
  {
    emoji: '🛒',
    title: 'E-Commerce Platform',
    subtitle: 'Full Stack Shop',
    description: 'A complete online store with auth, cart, payments and admin panel. Basically built Amazon but smaller. Much smaller. Okay it\'s a prototype.',
    tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind'],
    color: 'from-blue-500/20 to-cyan-500/20',
    accent: 'border-blue-500/30',
    badge: '🔥 Popular',
  },
  {
    emoji: '📊',
    title: 'Analytics Dashboard',
    subtitle: 'Data Visualization',
    description: "Beautiful real-time charts and KPIs for businesses who need to feel like they're in a sci-fi movie while looking at their data.",
    tags: ['React', 'D3.js', 'Firebase', 'Recharts'],
    color: 'from-purple-500/20 to-violet-500/20',
    accent: 'border-purple-500/30',
    badge: '✨ Shiny',
  },
  {
    emoji: '💬',
    title: 'Real-time Chat App',
    subtitle: 'Messaging Platform',
    description: 'WhatsApp but cooler (in my opinion). End-to-end messaging, rooms, reactions — all the good stuff. Without the blue ticks causing anxiety.',
    tags: ['Socket.io', 'Express', 'React', 'Redis'],
    color: 'from-green-500/20 to-emerald-500/20',
    accent: 'border-green-500/30',
    badge: '⚡ Fast',
  },
  {
    emoji: '🤖',
    title: 'AI Discharge Module',
    subtitle: 'Medical AI Tool',
    description: 'Gemini-powered medical discharge analyzer that gives structured diagnostic summaries. Doctors said it was scary accurate. I chose to be proud.',
    tags: ['Gemini API', 'Python', 'FastAPI', 'React'],
    color: 'from-orange-500/20 to-yellow-500/20',
    accent: 'border-orange-500/30',
    badge: '🧠 AI-Powered',
  },
  {
    emoji: '📱',
    title: 'React Native Task App',
    subtitle: 'Mobile Productivity',
    description: 'A beautiful task manager for people who love making to-do lists but hate doing the todos. Relatable. Available on both iOS and Android.',
    tags: ['React Native', 'Expo', 'SQLite', 'Zustand'],
    color: 'from-pink-500/20 to-rose-500/20',
    accent: 'border-pink-500/30',
    badge: '📲 Mobile',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0f0f0f] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-purple-500/50" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="text-purple-400 text-xs uppercase tracking-widest font-bold">My Playground</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center mb-4">
          My Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Playground</span>
        </h2>
        <p className="text-gray-500 text-center max-w-xl mx-auto mb-16 text-sm leading-relaxed">
          Projects I built because I was curious, bored, or in desperate need of something to add to my resume.
          They all work. Mostly. At least when I demo them.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`relative bg-gradient-to-br ${p.color} border ${p.accent} rounded-3xl p-6 hover:scale-[1.02] transition-all duration-300 group cursor-pointer hover:shadow-2xl`}
            >
              {/* Badge */}
              <span className="absolute top-4 right-4 text-xs bg-white/10 text-gray-300 px-3 py-1 rounded-full font-medium">
                {p.badge}
              </span>

              {/* Emoji icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200 inline-block">
                {p.emoji}
              </div>

              <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{p.subtitle}</div>
              <h3 className="text-white font-black text-lg mb-3 leading-snug">{p.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-5">{p.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tags.map(tag => (
                  <span key={tag} className="text-xs bg-white/10 text-gray-300 px-2.5 py-1 rounded-lg font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <a href="#" className="flex-1 text-center text-sm font-bold text-white bg-white/10 hover:bg-white hover:text-black py-2.5 rounded-xl transition-all duration-200">
                  Live Demo →
                </a>
                <a href="#" className="text-sm font-bold text-white border border-white/20 hover:border-white/60 px-4 py-2.5 rounded-xl transition-all duration-200">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Fun disclaimer */}
        <p className="text-center text-gray-700 text-xs mt-12 italic">
          * All projects are real. Most demos actually work. Best viewed with positive energy and low expectations.
        </p>
      </div>
    </section>
  )
}

export default Projects
