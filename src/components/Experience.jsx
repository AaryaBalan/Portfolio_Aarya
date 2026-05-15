import { BriefcaseIcon, AwardIcon } from './Icons'

const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'TechVerse Solutions',
    period: 'Jun 2024 – Oct 2024',
    type: 'Internship',
    active: false,
    color: 'bg-orange-500',
    bullets: [
      'Built and maintained scalable frontend systems using React and Next.js for multiple client apps.',
      'Led frontend and back-end teams, handled task distribution, and made key tech decisions.',
      'Designed RESTful APIs, defined flows, and built scalable database schemas for performance and reliability.',
      'Managed 10+ projects in a live codebase, keeping collaboration smooth and documentation sane.',
    ],
  },
  {
    role: 'Software Engineer Freelance',
    company: 'Monster Studio',
    period: 'Jan 2024 – Present',
    type: 'Freelance',
    active: true,
    color: 'bg-purple-500',
    bullets: [
      'Handled MongoDB indexing, caching, search, find, and pagination using Atlas Search; optimized DB structure.',
      'Integrated Cloudflare R2, HubSpot, Stripe, PayPal, and real-time notifications.',
      'Built responsive dashboards and analytics tooling across multiple client projects.',
    ],
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2023 – Present',
    type: 'Volunteer',
    active: true,
    color: 'bg-cyan-500',
    bullets: [
      'Submitted PRs to several React and Node.js open source libraries.',
      'Fixed bugs that had been open for months. Became the hero nobody asked for.',
      'Learned that code reviews can be humbling. Very, very humbling.',
    ],
  },
]

const certifications = [
  { name: 'Meta Front-End Developer', org: 'Coursera / Meta' },
  { name: 'JavaScript Algorithms & Data Structures', org: 'freeCodeCamp' },
  { name: 'Node.js Developer Certification', org: 'OpenJS Foundation' },
  { name: 'MongoDB for Developers', org: 'MongoDB University' },
  { name: 'AWS Cloud Practitioner', org: 'Amazon Web Services' },
  { name: 'Google UX Design', org: 'Google / Coursera' },
]

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0f0f0f] py-32 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-orange-500/40" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-5 justify-center">
          <span className="text-orange-400 text-xs uppercase tracking-[0.2em] font-bold">Work History</span>
        </div>
        <h2 className="text-white text-4xl md:text-[52px] font-black text-center mb-5 leading-tight">
          Where I've{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Worked</span>
        </h2>
        <p className="text-white/35 text-center text-base mb-20 max-w-lg mx-auto leading-relaxed">
          Places that trusted me with their codebase. Brave souls, every single one of them.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="bg-white/[0.03] border border-white/[0.07] rounded-3xl p-8 hover:border-orange-500/20 hover:bg-white/[0.05] transition-all duration-300 relative overflow-hidden group"
            >
              {/* Type badge + active dot */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-white/[0.05] border border-white/[0.08] rounded-xl flex items-center justify-center text-white/40 group-hover:text-orange-400 transition-colors duration-200">
                    <BriefcaseIcon size={16} />
                  </div>
                  <span className="text-white/30 text-xs font-semibold uppercase tracking-widest">{exp.type}</span>
                </div>
                <div className="flex items-center gap-2">
                  {exp.active && (
                    <div className="relative">
                      <div className={`w-2.5 h-2.5 ${exp.color} rounded-full`} />
                      <div className={`absolute inset-0 ${exp.color} rounded-full animate-ping opacity-50`} />
                    </div>
                  )}
                  <span className="text-white/25 text-xs">{exp.period}</span>
                </div>
              </div>

              <h3 className="text-white font-black text-xl leading-tight mb-1">{exp.role}</h3>
              <p className="text-orange-400 font-semibold text-sm mb-6">{exp.company}</p>

              <ul className="space-y-3">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/50 text-sm leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-orange-500/60 rounded-full mt-2 flex-shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-24">
          <h3 className="text-white text-3xl md:text-4xl font-black text-center mb-3">
            Certifications
          </h3>
          <p className="text-white/30 text-center text-base mb-12">Badges of honor. Earned, not borrowed.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-500/25 hover:bg-white/[0.05] transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-colors duration-200">
                  <AwardIcon size={18} className="text-yellow-500/70 group-hover:text-yellow-400 transition-colors duration-200" />
                </div>
                <div>
                  <p className="text-white/80 font-semibold text-sm leading-snug">{cert.name}</p>
                  <p className="text-white/30 text-xs mt-1">{cert.org}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
