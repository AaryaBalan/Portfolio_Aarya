const skillsData = [
  {
    category: 'Languages',
    icon: '🗣️',
    tools: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    tools: ['React', 'Next.js', 'Remix', 'Redux', 'Zustand', 'Tailwind', 'Bootstrap', 'MUI'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    tools: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'JWT', 'Redis', 'Zod'],
  },
  {
    category: 'Database',
    icon: '🗄️',
    tools: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma', 'Firebase'],
  },
  {
    category: 'Mobile',
    icon: '📱',
    tools: ['React Native', 'Expo', 'SQLite'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🔧',
    tools: ['Git', 'GitHub', 'Vite', 'Postman', 'VS Code', 'Linux'],
  },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-[#111111] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-cyan-500/50" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600 rounded-full blur-[140px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="text-cyan-400 text-xs uppercase tracking-widest font-bold">Tech Stack</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center mb-2">
          My Skills &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stack</span>
        </h2>
        <p className="text-gray-500 text-center text-sm mb-16 max-w-lg mx-auto">
          I've touched a lot of technologies. Some have touched me back (with bugs). Here's the full list.
        </p>

        {/* Table-style skill display inspired by reference */}
        <div className="bg-white/3 border border-white/10 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 px-8 py-4">
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest">Category</span>
            <span className="text-gray-500 text-xs font-bold uppercase tracking-widest col-span-2">Tools & Tech</span>
          </div>
          {skillsData.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-8 py-5 border-b border-white/5 last:border-0 hover:bg-white/3 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{row.icon}</span>
                <span className="text-gray-300 font-semibold text-sm">{row.category}</span>
              </div>
              <div className="col-span-2 flex flex-wrap gap-2 items-center">
                {row.tools.map(tool => (
                  <span
                    key={tool}
                    className="bg-white/8 border border-white/10 text-gray-300 text-xs px-3 py-1.5 rounded-lg font-medium hover:bg-cyan-500/20 hover:border-cyan-500/40 hover:text-cyan-300 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Funny note */}
        <div className="mt-12 bg-yellow-500/10 border border-yellow-500/20 rounded-2xl p-6 text-center">
          <p className="text-yellow-400 text-sm font-semibold">
            ⚠️ Warning: I also know jQuery. But I'm not proud of it. Let's never speak of it again.
          </p>
        </div>

        {/* Proficiency bars — humorous */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { skill: 'Writing Code', level: 90, color: 'bg-cyan-500' },
            { skill: 'Googling Errors', level: 99, color: 'bg-orange-500' },
            { skill: 'Stack Overflow Copy-Paste', level: 87, color: 'bg-purple-500' },
            { skill: 'Pretending to Know What I\'m Doing', level: 95, color: 'bg-pink-500' },
            { skill: 'Fixing My Own Bugs', level: 78, color: 'bg-green-500' },
            { skill: 'Meeting Deadlines', level: 60, color: 'bg-yellow-500' },
          ].map((item, i) => (
            <div key={i} className="bg-white/3 border border-white/10 rounded-2xl p-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-300 text-sm font-medium">{item.skill}</span>
                <span className="text-gray-400 text-sm font-bold">{item.level}%</span>
              </div>
              <div className="bg-white/10 rounded-full h-2">
                <div
                  className={`${item.color} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${item.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
