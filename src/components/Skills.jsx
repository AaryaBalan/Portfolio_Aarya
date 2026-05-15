import { CodeIcon, LayersIcon, DatabaseIcon, SmartphoneIcon, ToolIcon, CpuIcon } from './Icons'

const skillsData = [
  { category: 'Languages', icon: <CodeIcon size={18} />, tools: ['C', 'C++', 'JavaScript', 'TypeScript', 'Python'] },
  { category: 'Frontend', icon: <LayersIcon size={18} />, tools: ['React', 'Next.js', 'Remix', 'Redux', 'Zustand', 'Tailwind', 'Bootstrap', 'MUI'] },
  { category: 'Backend', icon: <CpuIcon size={18} />, tools: ['Node.js', 'Express.js', 'NestJS', 'FastAPI', 'JWT', 'Redis', 'Zod'] },
  { category: 'Database', icon: <DatabaseIcon size={18} />, tools: ['MongoDB', 'Mongoose', 'PostgreSQL', 'Prisma', 'Firebase'] },
  { category: 'Mobile', icon: <SmartphoneIcon size={18} />, tools: ['React Native', 'Expo', 'SQLite'] },
  { category: 'DevOps & Tools', icon: <ToolIcon size={18} />, tools: ['Git', 'GitHub', 'Vite', 'Postman', 'VS Code', 'Linux'] },
]

const proficiency = [
  { skill: 'Writing Code', level: 90, color: 'bg-cyan-500' },
  { skill: 'Googling Errors', level: 99, color: 'bg-orange-500' },
  { skill: 'Stack Overflow Research', level: 87, color: 'bg-purple-500' },
  { skill: 'Staying Calm Under Pressure', level: 95, color: 'bg-pink-500' },
  { skill: 'Fixing My Own Bugs', level: 78, color: 'bg-green-500' },
  { skill: 'Meeting Deadlines', level: 60, color: 'bg-yellow-500' },
]

const Skills = () => {
  return (
    <section id="skills" className="bg-[#0f0f0f] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-cyan-500/40" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600 rounded-full blur-[160px] opacity-10" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 justify-center">
          <span className="text-cyan-400 text-xs uppercase tracking-[0.2em] font-bold">Tech Stack</span>
        </div>
        <h2 className="text-white text-4xl md:text-[52px] font-black text-center mb-5 leading-tight">
          My Skills &amp;{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Stack</span>
        </h2>
        <p className="text-white/35 text-center text-base mb-20 max-w-lg mx-auto leading-relaxed">
          I have touched a lot of technologies. Some have touched me back (with bugs). Here is the full list.
        </p>

        {/* Table layout */}
        <div className="bg-white/[0.03] border border-white/[0.07] rounded-3xl overflow-hidden">
          <div className="grid grid-cols-3 bg-white/[0.04] border-b border-white/[0.07] px-8 py-5">
            <span className="text-white/30 text-xs font-bold uppercase tracking-[0.18em]">Category</span>
            <span className="text-white/30 text-xs font-bold uppercase tracking-[0.18em] col-span-2">Tools & Tech</span>
          </div>
          {skillsData.map((row, i) => (
            <div
              key={i}
              className="grid grid-cols-3 px-8 py-6 border-b border-white/[0.04] last:border-0 hover:bg-white/[0.03] transition-colors duration-200 group"
            >
              <div className="flex items-center gap-3">
                <span className="text-white/30 group-hover:text-cyan-400 transition-colors duration-200">{row.icon}</span>
                <span className="text-white/70 font-semibold text-sm">{row.category}</span>
              </div>
              <div className="col-span-2 flex flex-wrap gap-2 items-center">
                {row.tools.map(tool => (
                  <span
                    key={tool}
                    className="bg-white/[0.06] border border-white/[0.08] text-white/55 text-xs px-3.5 py-1.5 rounded-xl font-medium hover:bg-cyan-500/15 hover:border-cyan-500/30 hover:text-cyan-300 transition-all duration-200 cursor-default"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Warning note */}
        <div className="mt-10 bg-yellow-500/[0.07] border border-yellow-500/15 rounded-2xl p-6 text-center">
          <p className="text-yellow-400/70 text-sm font-medium">
            I also know jQuery. We don't talk about that.
          </p>
        </div>

        {/* Proficiency bars */}
        <div className="mt-14">
          <h3 className="text-white font-black text-2xl md:text-3xl text-center mb-10">
            Proficiency <span className="text-white/30 font-light">(Honest Edition)</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {proficiency.map((item, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
                <div className="flex justify-between mb-3">
                  <span className="text-white/70 text-sm font-medium">{item.skill}</span>
                  <span className="text-white/40 text-sm font-bold">{item.level}%</span>
                </div>
                <div className="bg-white/[0.07] rounded-full h-1.5">
                  <div
                    className={`${item.color} h-1.5 rounded-full transition-all duration-1000`}
                    style={{ width: `${item.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
