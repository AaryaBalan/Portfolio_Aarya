const experience = [
  {
    role: 'Full Stack Developer Intern',
    company: 'TechVerse Solutions',
    period: 'Jun 2024 – Oct 2024',
    type: 'Internship',
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
    color: 'bg-purple-500',
    bullets: [
      'Handled MongoDB indexing, caching, search, find, and pagination using Atlas Search; optimized DB structure.',
      'Integrated Cloudflare R2, Blueprism, HubSpot, Stripe, PayPal, and real-time notifications.',
      'Built web portables (added & developed, responsive dashboards, and analytics tooling).',
    ],
  },
  {
    role: 'Open Source Contributor',
    company: 'Various Projects',
    period: '2023 – Present',
    type: 'Volunteer',
    color: 'bg-cyan-500',
    bullets: [
      'Submitted PRs to several React and Node.js open source libraries.',
      'Fixed bugs that had been open for months. Become the hero nobody asked for.',
      'Learned that code reviews can be humbling. Very, very humbling.',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="bg-[#111111] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-transparent to-orange-500/50" />

      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-4 justify-center">
          <span className="text-orange-400 text-xs uppercase tracking-widest font-bold">Work History</span>
        </div>
        <h2 className="text-white text-4xl md:text-5xl font-black text-center mb-2">
          Where I've <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-500">Worked</span>
        </h2>
        <p className="text-gray-500 text-center text-sm mb-16 max-w-lg mx-auto">
          Places that trusted me with their codebase. Brave souls, every single one of them.
        </p>

        <div className="max-w-3xl mx-auto space-y-6">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="bg-white/3 border border-white/10 rounded-3xl p-7 hover:border-orange-500/20 hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Active indicator dot */}
              <div className={`absolute top-7 right-7 w-3 h-3 ${exp.color} rounded-full`}>
                {exp.type === 'Freelance' && (
                  <div className={`absolute inset-0 ${exp.color} rounded-full animate-ping opacity-60`} />
                )}
              </div>

              <div className="flex items-start gap-4 mb-4">
                <div>
                  <div className="text-gray-500 text-xs font-semibold uppercase tracking-wider mb-1">{exp.type}</div>
                  <h3 className="text-white font-black text-lg leading-tight">{exp.role}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-orange-400 font-semibold text-sm">{exp.company}</span>
                    <span className="text-gray-600 text-xs">·</span>
                    <span className="text-gray-500 text-xs">{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-gray-400 text-sm leading-relaxed">
                    <span className="text-orange-500 mt-1 flex-shrink-0">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <h3 className="text-white text-3xl font-black text-center mb-10">
            Certifications &amp; <span className="text-yellow-400">Badges of Honor</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[
              { name: 'Meta Front-End Developer', org: 'Coursera / Meta', emoji: '🏅' },
              { name: 'JavaScript Algorithms & Data Structures', org: 'freeCodeCamp', emoji: '🧩' },
              { name: 'Node.js Developer Certification', org: 'OpenJS Foundation', emoji: '🟢' },
              { name: 'MongoDB for Developers', org: 'MongoDB University', emoji: '🍃' },
              { name: 'AWS Cloud Practitioner', org: 'Amazon Web Services', emoji: '☁️' },
              { name: 'Google UX Design', org: 'Google / Coursera', emoji: '🎨' },
            ].map((cert, i) => (
              <div
                key={i}
                className="bg-white/3 border border-white/10 rounded-2xl p-5 flex items-center gap-4 hover:border-yellow-500/30 hover:bg-white/5 transition-all duration-200"
              >
                <span className="text-2xl">{cert.emoji}</span>
                <div>
                  <p className="text-white font-semibold text-sm leading-snug">{cert.name}</p>
                  <p className="text-gray-500 text-xs">{cert.org}</p>
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
