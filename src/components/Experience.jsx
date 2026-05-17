import { useState } from 'react'
import { BriefcaseIcon } from './Icons'

const experience = [
  {
    role: 'Technical Lead',
    company: 'Asymmetric',
    period: 'Oct 2025 – Present',
    type: 'Leadership',
    color: 'from-orange-500 to-pink-500',
    glowColor: 'rgba(249,115,22,0.5)',
    bullets: [
      'Leading the technical development and architecture for the club\'s core digital platforms.',
      'Mentoring developers, overseeing code reviews, and ensuring high-quality project delivery.',
      'Architecting React.js applications with robust API integrations for scalable performance.',
      'Led the technical team to develop and deploy the symposium\'s digital infrastructure. Engineered a gamified reverse-coding challenge platform to drive participant engagement and problem-solving.',
      'Managed technical infrastructure and real-time support for a 48-hour hackathon, ensuring smooth event execution.'
    ],
    tags: ['Team Leadership', 'Project Management', 'Mentorship', 'System Architecture', 'React.js', 'Node.js']
  },
  {
    role: 'Full Stack Intern',
    company: 'BonTon Softwares',
    period: 'Nov 2025 – Dec 2025',
    type: 'On-site · Chennai',
    color: 'from-purple-500 to-cyan-500',
    glowColor: 'rgba(168,85,247,0.5)',
    bullets: [
      'Developed and maintained production-grade React.js applications in a fast-paced, on-site environment.',
      'Integrated complex APIs and collaborated with senior engineers to optimize frontend performance.',
      'Engineered interactive UI components that significantly improved the end-user experience.'
    ],
    tags: ['JavaScript', 'Python', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Frontend Optimization', 'Agile']
  },
  {
    role: 'Technical Team Member',
    company: 'Asymmetric',
    period: 'Sep 2024 – Nov 2025',
    type: 'Core Team',
    color: 'from-green-500 to-emerald-500',
    glowColor: 'rgba(34,197,94,0.5)',
    bullets: [
      'Developed critical features for club platforms, focusing on responsive design and seamless UI/UX.',
      'Collaborated closely with designers and developers to build tools that streamlined operations.',
      'Built a strong foundation in modern web development workflows and API architecture.'
    ],
    tags: ['UI/UX Design', 'JavaScript', 'Tailwind CSS', 'Git', 'Responsive Design']
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
    tags: ['Public Speaking', 'Event Management', 'Event Organization', 'Logistics', 'Sponsorships', 'Networking', 'Communication']
  },
  {
    role: 'Co-Founder & Developer',
    company: 'Asteroid Teams',
    period: '2023 – 2024',
    type: 'Startup',
    color: 'from-yellow-500 to-amber-500',
    glowColor: 'rgba(234,179,8,0.5)',
    bullets: [
      'Co-founded a software startup dedicated to designing and developing affordable, high-quality web applications and websites tailored for students.',
      'Spearheaded the engineering of scalable Software as a Service (SaaS) architectures, managing end-to-end frontend and backend operations.',
      'Navigated the full startup lifecycle, gaining critical insights into product development, business strategy, and client relations before strategically concluding operations in 2024.'
    ],
    tags: ['Entrepreneurship', 'SaaS Development', 'Full Stack', 'Business Strategy', 'Web Apps']
  },
]

const Experience = () => {
  const [expanded, setExpanded] = useState(null)

  const toggleMobile = (i) => setExpanded(expanded === i ? null : i)

  return (
    <section id="experience" className="bg-[#030303] py-20 sm:py-32 relative overflow-hidden">
      
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '100px 100px',
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        <div className="text-center mb-16 sm:mb-24 md:mb-40">
          <p className="text-white/40 text-xs sm:text-sm uppercase tracking-[0.4em] font-bold mb-4 sm:mb-6 font-display">
            The Journey
          </p>
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-display font-black leading-none tracking-tighter uppercase">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/80 to-white/20">History.</span>
          </h2>
        </div>

        {/* ─── MOBILE TIMELINE (shown below md) ─── */}
        <div className="md:hidden relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-3.5 top-0 bottom-0 w-[2px] bg-white/5">
            <div className="absolute top-0 w-full h-[30%] bg-gradient-to-b from-transparent via-white/60 to-transparent animate-[pulse_3s_ease-in-out_infinite]" />
          </div>

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="relative">
                {/* Node */}
                <div
                  className={`absolute -left-[29px] top-1 w-7 h-7 rounded-full border-4 border-[#030303] bg-gradient-to-br ${exp.color} shadow-lg flex-shrink-0`}
                  style={{ boxShadow: `0 0 16px ${exp.glowColor}` }}
                />

                {/* Card */}
                <div
                  className="bg-[#080808] border border-white/8 rounded-2xl overflow-hidden cursor-pointer"
                  onClick={() => toggleMobile(i)}
                >
                  {/* Card header */}
                  <div className="px-5 py-4">
                    <p className={`text-[10px] font-bold tracking-[0.25em] uppercase text-transparent bg-clip-text bg-gradient-to-r ${exp.color} mb-1`}>
                      {exp.company} · {exp.type}
                    </p>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl font-display font-black text-white leading-tight">{exp.role}</h3>
                      <span className={`mt-1 w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full border border-white/10 text-white/40 transition-transform duration-300 ${expanded === i ? 'rotate-45' : ''}`}>
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M5 1V9M1 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                        </svg>
                      </span>
                    </div>
                    <p className="text-white/30 font-mono text-[10px] tracking-widest uppercase mt-1">{exp.period}</p>
                  </div>

                  {/* Expandable body */}
                  <div className={`overflow-hidden transition-all duration-500 ${expanded === i ? 'max-h-[600px]' : 'max-h-0'}`}>
                    <div className={`h-px bg-gradient-to-r ${exp.color} opacity-20 mx-5`} />
                    <ul className="px-5 py-4 space-y-3">
                      {exp.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-2.5 text-white/60 text-sm leading-relaxed">
                          <span
                            className={`w-1.5 h-1.5 mt-[6px] rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0`}
                            style={{ boxShadow: `0 0 6px ${exp.glowColor}` }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                    {/* Tags */}
                    <div className="px-5 pb-5 flex flex-wrap gap-1.5">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-bold tracking-wider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ─── DESKTOP TIMELINE (shown md+) ─── */}
        <div className="hidden md:block relative max-w-5xl mx-auto">
          
          {/* Center fiber optic line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2">
            <div className="absolute top-0 w-full h-[30%] bg-gradient-to-b from-transparent via-white to-transparent animate-[pulse_3s_ease-in-out_infinite] shadow-[0_0_30px_rgba(255,255,255,0.8)]" />
          </div>

          <div className="space-y-40">
            {experience.map((exp, i) => {
              const isEven = i % 2 === 0
              return (
                <div key={i} className={`relative flex md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''} group`}>
                  
                  {/* Node */}
                  <div className="absolute left-1/2 top-0 md:top-1/2 md:-translate-y-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                    <div
                      className={`w-8 h-8 rounded-full border-[4px] border-[#030303] bg-gradient-to-br ${exp.color} shadow-2xl transition-all duration-500 group-hover:scale-150 group-hover:animate-pulse`}
                      style={{ boxShadow: `0 0 40px ${exp.glowColor}` }}
                    />
                  </div>

                  {/* Tags side (desktop hover reveal) */}
                  <div className={`hidden md:flex md:w-1/2 flex-wrap gap-3 content-center px-12 ${isEven ? 'justify-start' : 'justify-end'} opacity-0 group-hover:opacity-100 transition-all duration-700 -translate-y-4 group-hover:translate-y-0`}>
                    {exp.tags && exp.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-4 py-2 rounded-full bg-[#080808] border border-white/10 text-white/60 text-sm font-bold tracking-wider hover:text-white transition-colors duration-300 shadow-xl">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Content */}
                  <div className={`w-full md:w-1/2 pl-10 md:pl-0 ${isEven ? 'md:pr-24 text-left md:text-right' : 'md:pl-24 text-left'} relative`}>
                    
                    <div className={`absolute top-1/2 -translate-y-1/2 ${isEven ? 'right-0' : 'left-0'} text-[6rem] lg:text-[9rem] font-display font-black uppercase text-white/[0.02] whitespace-nowrap pointer-events-none group-hover:text-white/[0.04] transition-colors duration-700 z-0`}>
                      {exp.company}
                    </div>

                    <div className="relative z-10">
                      <div className={`flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'} mb-6`}>
                        <div className="flex items-center gap-4 mb-4">
                          <BriefcaseIcon size={18} className="text-white/20 group-hover:text-white/80 transition-colors duration-500" />
                          <span className="text-white/40 font-mono text-xs tracking-[0.2em] uppercase">{exp.period}</span>
                        </div>
                        <p className={`text-xs md:text-sm font-bold tracking-[0.3em] uppercase mb-2 text-transparent bg-clip-text bg-gradient-to-r ${exp.color}`}>
                          {exp.company} • {exp.type}
                        </p>
                        <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-tight group-hover:scale-[1.02] transition-transform duration-500 origin-left">
                          {exp.role}
                        </h3>
                      </div>

                      <ul className={`space-y-5 mt-8 flex flex-col ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                        {exp.bullets.map((bullet, j) => (
                          <li key={j} className={`flex items-start gap-4 text-white/50 text-base md:text-lg leading-relaxed font-light group-hover:text-white/90 transition-colors duration-500 max-w-lg ${isEven ? 'md:flex-row-reverse text-left md:text-right' : 'text-left'}`}>
                            <span className={`w-2 h-2 mt-2 rounded-full bg-gradient-to-r ${exp.color} flex-shrink-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500`} style={{ boxShadow: `0 0 12px ${exp.glowColor}` }} />
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
