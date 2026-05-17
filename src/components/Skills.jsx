import { useState } from 'react'

const skillGroups = [
  {
    title: 'Languages',
    color: 'bg-orange-500/50',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg', shadow: 'shadow-yellow-400' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg', shadow: 'shadow-blue-500' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg', shadow: 'shadow-blue-400' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg', shadow: 'shadow-blue-600' },
    ]
  },
  {
    title: 'Frontend & Mobile',
    color: 'bg-cyan-500/50',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', shadow: 'shadow-cyan-500' },
      { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', shadow: 'shadow-white', invert: true },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg', shadow: 'shadow-cyan-400' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg', shadow: 'shadow-emerald-500' },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg', shadow: 'shadow-cyan-400' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg', shadow: 'shadow-blue-400' },
      { name: 'Chart.js', icon: 'https://www.chartjs.org/img/chartjs-logo.svg', shadow: 'shadow-pink-400' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg', shadow: 'shadow-orange-500' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg', shadow: 'shadow-blue-500' },
    ]
  },
  {
    title: 'Backend & Database',
    color: 'bg-purple-500/50',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg', shadow: 'shadow-green-500' },
      { name: 'Express.js', icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', shadow: 'shadow-white', invert: true },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg', shadow: 'shadow-blue-400' },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg', shadow: 'shadow-green-500' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg', shadow: 'shadow-blue-600' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg', shadow: 'shadow-yellow-500' },
      { name: 'Convex', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/convex.webp', shadow: 'shadow-orange-400', rounded: true },
    ]
  },
  {
    title: 'Systems & Tools',
    color: 'bg-green-500/50',
    skills: [
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg', shadow: 'shadow-yellow-200' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg', shadow: 'shadow-gray-400' },
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg', shadow: 'shadow-orange-600' },
      { name: 'Android', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg', shadow: 'shadow-green-400' },
    ]
  }
]

const Skills = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section id="skills" className="bg-[#030303] py-32 relative overflow-hidden">

      {/* Ambient background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[150px] pointer-events-none transition-colors duration-700 ease-out opacity-10 bg-cyan-500"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div className="text-center mb-24">
          <p className="text-cyan-400 text-sm uppercase tracking-[0.3em] font-bold mb-6 font-display">
            The Arsenal
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
            Technologies I <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Command.</span>
          </h2>
        </div>

        {/* Grouped Skills Layout */}
        <div>
          {skillGroups.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-20">

              <h3 className="text-2xl font-display font-bold text-white mb-8 tracking-widest uppercase flex items-center gap-4">
                <span className={`w-12 h-px ${group.color}`} /> {group.title}
              </h3>

              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6">
                {group.skills.map((skill, skillIdx) => {
                  const globalIdx = `${groupIdx}-${skillIdx}`;

                  return (
                    <div
                      key={globalIdx}
                      className={`relative group aspect-square flex flex-col items-center justify-center p-4 rounded-3xl bg-[#080808] border border-white/5 transition-all duration-500 cursor-crosshair
                        ${hoveredIndex !== null && hoveredIndex !== globalIdx ? 'opacity-30 scale-[0.98] blur-[1px]' : 'opacity-100 scale-100'}
                        ${hoveredIndex === globalIdx ? `scale-[1.15] z-20 shadow-[0_0_50px_rgba(255,255,255,0.1)] border-white/20 bg-[#0c0c0c]` : ''}
                      `}
                      onMouseEnter={() => setHoveredIndex(globalIdx)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Inner Glow on hover */}
                      <div className={`absolute inset-0 bg-white/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${skill.shadow}`} />

                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-14 h-14 md:w-16 md:h-16 object-contain transition-all duration-500 transform group-hover:scale-110 group-hover:-translate-y-2
                          ${skill.invert ? 'filter invert brightness-0 contrast-200' : ''}
                          ${skill.rounded ? 'rounded-full' : ''}
                        `}
                      />

                      {/* Floating Name Tooltip */}
                      <div className="absolute bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white whitespace-nowrap bg-black/90 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-xl">
                          {skill.name}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>

            </div>
          ))}
        </div>

        {/* The Brutalist Honest Card attached at the bottom */}
        <div className="mt-12 bg-orange-500 border border-orange-400 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between transform hover:-rotate-1 transition-transform duration-500 text-black shadow-[0_0_50px_rgba(249,115,22,0.3)]">
          <div className="mb-4 md:mb-0">
            <h3 className="text-3xl font-display font-black uppercase tracking-tighter mb-4">
              99% Googling Errors.
            </h3>
            <p className="text-lg font-medium opacity-90 max-w-2xl leading-relaxed">
              The other 1% is copy-pasting from Stack Overflow. I am just really fast at it. Don't tell my clients.
            </p>
          </div>
          <div className="text-6xl md:text-8xl font-black opacity-20">?!</div>
        </div>

      </div>
    </section>
  )
}

export default Skills
