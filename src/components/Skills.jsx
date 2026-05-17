import { useState } from 'react'
import { SparkleIcon } from './Icons'

const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    span: 'lg:col-span-3 lg:row-span-2',
    color: 'from-orange-500/20 to-amber-500/5',
    accent: 'border-orange-500/30 group-hover:border-orange-500/60',
    skills: [
      { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
      { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
      { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
      { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    ]
  },
  {
    id: 'frontend',
    title: 'Frontend & UI',
    span: 'lg:col-span-6 lg:row-span-1',
    color: 'from-cyan-500/20 to-blue-500/5',
    accent: 'border-cyan-500/30 group-hover:border-cyan-500/60',
    skills: [
      { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Next.js', icon: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', invert: true },
      { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
      { name: 'Vue.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg' },
      { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
      { name: 'Material UI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg' },
      { name: 'Chart.js', icon: 'https://www.chartjs.org/img/chartjs-logo.svg' },
      { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
      { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
      { name: 'Responsive UI Design' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend & Data',
    span: 'lg:col-span-3 lg:row-span-1',
    color: 'from-purple-500/20 to-pink-500/5',
    accent: 'border-purple-500/30 group-hover:border-purple-500/60',
    skills: [
      { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
      { name: 'Express', icon: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', invert: true },
      { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
      { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
      { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
      { name: 'Convex', icon: 'https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/webp/convex.webp', rounded: true },
      { name: 'Database Design' },
      { name: 'System Design' },
      { name: 'API Development' },
      { name: 'Authentication' },
      { name: 'Backend Architecture' },
    ]
  },
  {
    id: 'ml',
    title: 'Machine Learning / AI',
    span: 'lg:col-span-6 lg:row-span-1',
    color: 'from-rose-500/20 to-red-500/5',
    accent: 'border-rose-500/30 group-hover:border-rose-500/60',
    skills: [
      { name: 'NumPy', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg' },
      { name: 'Pandas', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg', invert: true },
      { name: 'Matplotlib', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg' },
      { name: 'Scikit-learn', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/scikitlearn/scikitlearn-original.svg' },
      { name: 'Machine Learning' },
      { name: 'Data Preprocessing' },
      { name: 'Artificial Intelligence' },
      { name: 'Data Analysis' },
      { name: 'Data Visualization' },
      { name: 'Regression Models' },
    ]
  },
  {
    id: 'systems',
    title: 'Systems & Tools',
    span: 'lg:col-span-3 lg:row-span-1',
    color: 'from-green-500/20 to-emerald-500/5',
    accent: 'border-green-500/30 group-hover:border-green-500/60',
    skills: [
      { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
      { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
      { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg' },
      { name: 'Android OS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg' },
      { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    ]
  },
  {
    id: 'leadership',
    title: 'Leadership & Soft Skills',
    span: 'lg:col-span-12 lg:row-span-1',
    color: 'from-yellow-500/20 to-amber-500/5',
    accent: 'border-yellow-500/30 group-hover:border-yellow-500/60',
    skills: [
      { name: 'Leadership' },
      { name: 'Team Management' },
      { name: 'Event Coordination' },
      { name: 'Mentorship' },
      { name: 'Strategic Planning' },
      { name: 'Communication' },
      { name: 'Resource Allocation' },
      { name: 'Documentation' },
    ]
  }
]

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-[#030303] flex items-center py-20 sm:py-32 relative overflow-hidden">
      
      {/* Soft background mesh gradient */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{ 
          background: 'radial-gradient(circle at 0% 0%, #a855f7 0%, transparent 50%), radial-gradient(circle at 100% 100%, #3b82f6 0%, transparent 50%)' 
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        <div className="text-center mb-12 sm:mb-20">
          <p className="text-white/30 text-xs sm:text-sm uppercase tracking-[0.4em] font-bold mb-3 sm:mb-4 font-display">
            The Arsenal
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-none tracking-tighter text-white">
            Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Stack.</span>
          </h2>
        </div>

        {/* Massive Bento Box Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-6 md:gap-8 space-y-4 sm:space-y-6 md:space-y-8">
          
          {skillGroups.map((group, idx) => (
            <div 
              key={group.id}
              className={`group relative flex flex-col justify-start overflow-hidden bg-[#080808] border ${group.accent} rounded-[1.8rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 transition-all duration-500 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(0,0,0,0.8)] break-inside-avoid`}
            >
              {/* Animated Hover Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${group.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />
              
              {/* Grid Lines Pattern */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

              <h3 className="relative z-10 text-xl sm:text-2xl md:text-3xl font-display font-black text-white/80 uppercase tracking-widest mb-5 sm:mb-8 group-hover:text-white transition-colors">
                {group.title}
              </h3>

              <div className="relative z-10 flex flex-wrap gap-2 sm:gap-3 md:gap-4">
                {group.skills.map((skill) => (
                  <div 
                    key={skill.name}
                    className="relative flex items-center justify-center bg-black/40 backdrop-blur-md border border-white/10 px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl hover:bg-white hover:border-white transition-all duration-300 group/skill cursor-default"
                  >
                    {skill.icon ? (
                      <>
                        <img 
                          src={skill.icon} 
                          alt={skill.name} 
                          className={`w-10 h-10 sm:w-14 sm:h-14 object-contain transition-transform duration-300 group-hover/skill:scale-110 ${skill.invert ? 'filter invert brightness-0 contrast-200 group-hover/skill:invert-0 group-hover/skill:contrast-100 group-hover/skill:brightness-0' : ''}`}
                        />
                        {/* Hover Tooltip */}
                        <div className="absolute -top-9 sm:-top-12 opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                          <span className="bg-[#111] text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap shadow-xl border border-white/10">
                            {skill.name}
                          </span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-2 h-2 rounded-full bg-white/20 group-hover/skill:bg-black transition-colors duration-300 mr-3" />
                        <span className="text-xs sm:text-sm font-bold text-white/70 group-hover/skill:text-black transition-colors whitespace-nowrap">
                          {skill.name}
                        </span>
                      </>
                    )}
                  </div>
                ))}
              </div>
              
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Skills
