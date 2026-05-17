import { useState } from 'react'
import { BriefcaseIcon } from './Icons'

const experience = [
  {
    role: 'Technical Lead',
    company: 'Asymmetric',
    period: 'Oct 2025 – Present',
    type: 'Leadership',
    color: 'from-orange-500 to-pink-500',
    glowColor: 'rgba(249,115,22,0.5)', // Orange glow
    bullets: [
      'Leading the technical development and architecture for the club\'s core digital platforms.',
      'Mentoring developers, overseeing code reviews, and ensuring high-quality project delivery.',
      'Architecting React.js applications with robust API integrations for scalable performance.'
    ],
  },
  {
    role: 'Full Stack Intern',
    company: 'BonTon Softwares',
    period: 'Nov 2025 – Dec 2025',
    type: 'On-site · Chennai',
    color: 'from-purple-500 to-cyan-500',
    glowColor: 'rgba(168,85,247,0.5)', // Purple glow
    bullets: [
      'Developed and maintained production-grade React.js applications in a fast-paced, on-site environment.',
      'Integrated complex APIs and collaborated with senior engineers to optimize frontend performance.',
      'Engineered interactive UI components that significantly improved the end-user experience.'
    ],
  },
  {
    role: 'Technical Team Member',
    company: 'Asymmetric',
    period: 'Sep 2024 – Nov 2025',
    type: 'Core Team',
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34,197,94,0.5)', // Green glow
    bullets: [
      'Developed critical features for club platforms, focusing on responsive design and seamless UI/UX.',
      'Collaborated closely with designers and developers to build tools that streamlined operations.',
      'Built a strong foundation in modern web development workflows and API architecture.'
    ],
  },
  {
    role: 'Event Organizer & Speaker',
    company: 'Campus Events',
    period: '2025 – 2026',
    type: 'Management & Speaking',
    color: 'from-blue-500 to-indigo-500',
    glowColor: 'rgba(59,130,246,0.5)', 
    bullets: [
      'Orchestrated operations for a premier technology symposium (TechFiesta 25), scaling attendance to over 3,000 participants while driving strategic sponsorship acquisition.',
      'Delivered engaging keynotes to an expansive junior audience (Catapult 26), articulating strategic vision and fostering active community participation.',
      'Acted as a core representative of the leadership board, navigating high-stakes logistical challenges through decisive action and cross-functional collaboration.'
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="bg-[#030303] py-32 relative overflow-hidden">
      
      {/* Dynamic Background Noise */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-40">
          <p className="text-white/40 text-sm uppercase tracking-[0.4em] font-bold mb-6 font-display">
            The Journey
          </p>
          <h2 className="text-6xl md:text-[8rem] font-display font-black leading-none tracking-tighter uppercase">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20">History.</span>
          </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          
          {/* Massive Center Glowing Fiber Optic Cable */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
            <div className="absolute top-0 w-full h-[30%] bg-gradient-to-b from-transparent via-white to-transparent animate-[pulse_3s_ease-in-out_infinite] shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
          </div>

          <div className="space-y-40">
            {experience.map((exp, i) => {
              const isEven = i % 2 === 0;
              return (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Floating Holographic Node */}
                  <div className="absolute left-8 md:left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-[15px] md:-translate-x-1/2 flex items-center justify-center z-20">
                    <div 
                      className={`w-8 h-8 rounded-full border-[4px] border-[#030303] bg-gradient-to-br ${exp.color} shadow-2xl transition-all duration-500 group-hover:scale-150 group-hover:animate-pulse`}
                      style={{ boxShadow: `0 0 40px ${exp.glowColor}` }}
                    />
                  </div>

                  {/* Empty spacer for the opposite side */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Borderless Content Area */}
                  <div className={`w-full md:w-1/2 pl-24 md:pl-0 ${isEven ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'} relative`}>
                    
                    {/* Massive Background Watermark */}
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0' : 'left-0'} text-[5rem] md:text-[8rem] lg:text-[10rem] font-display font-black uppercase text-white/[0.02] whitespace-nowrap pointer-events-none group-hover:text-white/[0.04] transition-colors duration-700 z-0`}
                    >
                      {exp.company}
                    </div>

                    {/* Actual Content */}
                    <div className="relative z-10">
                      
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mb-6`}>
                        <div className="flex items-center gap-4 mb-4">
                          <BriefcaseIcon size={20} className="text-white/20 group-hover:text-white/80 transition-colors duration-500" />
                          <span className="text-white/40 font-mono text-xs md:text-sm tracking-[0.2em] uppercase">
                            {exp.period}
                          </span>
                        </div>
                        
                        <p className={`text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                          {exp.company} • {exp.type}
                        </p>
                        
                        <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-tight group-hover:scale-[1.02] transition-transform duration-500 origin-left">
                          {exp.role}
                        </h3>
                      </div>

                      <ul className={`space-y-6 mt-10 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        {exp.bullets.map((bullet, j) => (
                          <li 
                            key={j} 
                            className={`flex items-start gap-4 text-white/50 text-lg md:text-xl leading-relaxed font-light group-hover:text-white/90 transition-colors duration-500 max-w-lg ${isEven ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}
                          >
                            <span 
                              className={`w-2 h-2 mt-2.5 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500`}
                              style={{ boxShadow: `0 0 15px ${exp.glowColor}` }}
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </div>

                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience
