import { useState } from 'react'
import { ExternalLinkIcon, CodeIcon, ArrowRightIcon } from './Icons'

const projects = [
  {
    title: 'WakeBuddy',
    subtitle: 'Google AdMob Hackathon Top 30 Finalist',
    description: 'A social alarm experience where you never wake up alone. Pair with a friend, hit "I\'m Awake", and trigger an instant call. Features shared streaks, leaderboards, and wake-up analytics.',
    tags: ['Social App', 'Real-time', 'AdMob Integration'],
    color: 'from-orange-500 to-pink-500',
    link: 'https://www.youtube.com/watch?v=pam_hI4dpRw',
    github: 'https://github.com/AaryaBalan/WakeupBuddy'
  },
  {
    title: 'Dayable',
    subtitle: 'Minimal Daily Social Media',
    description: 'A calm, minimal space focused on your day, not your status. Share simple daily moments, track how your day went, and connect with friends through honest check-ins without endless scrolling.',
    tags: ['Social Media', 'Wellness', 'UI/UX'],
    color: 'from-cyan-500 to-blue-500',
    link: 'https://www.linkedin.com/in/aaryabalan/details/projects/',
    github: 'https://github.com/AaryaBalan/Dayable'
  },
  {
    title: 'Zorphix',
    subtitle: 'Department Symposium Platform',
    description: 'The official event website for our college department symposium. A highly interactive, performance-optimized platform designed to handle registrations, event schedules, and showcase activities.',
    tags: ['Event Website', 'College Symposium', 'Interactive'],
    color: 'from-purple-500 to-violet-500',
    link: 'https://www.zorphix.com/',
    github: 'https://github.com/ANAND060218/zorphix-2026'
  },
  {
    title: 'Hacksymmetric',
    subtitle: 'Hackathon Registration Hub',
    description: 'The official registration and information portal for the Asymmetric Club hackathon. Built to handle team formations, live event updates, and provide a seamless onboarding experience for hackers.',
    tags: ['Hackathon', 'Registration Portal', 'College Club'],
    color: 'from-green-500 to-emerald-500',
    link: 'https://hacksymmetric.vercel.app/',
    github: 'https://github.com/AaryaBalan/hacksymmetric'
  },
  {
    title: 'LetItOut',
    subtitle: 'Empathetic Community Platform',
    description: 'A secure, community-driven application for emotional expression and mental wellness. Features a gamified reputation system awarding badges to contributors who actively uplift and console others.',
    tags: ['Mental Wellness', 'Community App', 'Gamification'],
    color: 'from-pink-500 to-rose-500',
    link: '#',
    github: 'https://github.com/AaryaBalan/LetItOut'
  },
  {
    title: 'WorkFlow',
    subtitle: 'Productivity Platform',
    description: 'WorkFlow is an all-in-one productivity platform designed to help users organize tasks, manage time efficiently, and improve daily workflow. With its intuitive interface and powerful productivity tools, users can create dedicated project rooms to collaborate, discuss ideas, and enhance teamwork seamlessly.',
    tags: ['Productivity', 'Task Management', 'Time Management', 'Team work', 'Note sharing'],
    color: 'from-yellow-400 to-orange-500',
    link: 'https://flow-work.vercel.app/',
    github: 'https://github.com/AaryaBalan/Flow'
  },
  {
    title: 'TrackMyVibe',
    subtitle: 'Expressive Mood Tracking Platform',
    description: 'An interactive daily journaling app enabling users to log emotional states with contextual tags. Features a "Memory Lane" algorithm surfacing entries from exactly one year prior.',
    tags: ['React.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    color: 'from-purple-400 to-pink-500',
    link: 'https://www.linkedin.com/in/aaryabalan/details/projects/',
    github: 'https://github.com/AaryaBalan/Track_My_Vibe'
  },
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > minSwipeDistance) nextCard()
    if (distance < -minSwipeDistance) prevCard()
  }

  const nextCard = () => setCurrentIndex((prev) => (prev + 1) % projects.length)
  const prevCard = () => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#030303] flex items-center justify-center relative overflow-hidden pt-24 pb-10"
    >
      {/* Background gradient glow */}
      <div
        className={`absolute inset-0 opacity-20 transition-colors duration-1000 bg-gradient-to-br ${projects[currentIndex].color}`}
      />

      <div className="w-full max-w-lg mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">

        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white mb-6 sm:mb-10 text-center tracking-tight">
          Featured Creations.
        </h2>

        {/* Progress bars */}
        <div className="flex w-full gap-1.5 sm:gap-2 mb-5 sm:mb-6">
          {projects.map((_, idx) => (
            <div
              key={idx}
              className="h-1 sm:h-1.5 flex-1 rounded-full bg-white/20 overflow-hidden cursor-pointer"
              onClick={() => setCurrentIndex(idx)}
            >
              <div
                className={`h-full bg-white transition-all duration-300 ${
                  idx === currentIndex ? 'w-full' : idx < currentIndex ? 'w-full opacity-50' : 'w-0'
                }`}
              />
            </div>
          ))}
        </div>

        {/* Card stack */}
        <div
          className="relative w-full select-none"
          style={{ height: 'clamp(420px, 72vw, 520px)' }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((p, idx) => {
            const total = projects.length
            const offset = (idx - currentIndex + total) % total
            const isPrev = (currentIndex === 0 && idx === total - 1) || (idx === currentIndex - 1)

            const isActive = offset === 0
            const isNext1 = offset === 1
            const isNext2 = offset === 2

            let transform = ''
            let opacity = ''
            let zIndex = ''

            if (isActive) {
              transform = 'translate-x-0 translate-y-0 scale-100 rotate-0'
              opacity = 'opacity-100'
              zIndex = 'z-40'
            } else if (isNext1) {
              transform = 'translate-x-[10%] translate-y-[3%] scale-[0.96] rotate-2'
              opacity = 'opacity-70'
              zIndex = 'z-30'
            } else if (isNext2) {
              transform = 'translate-x-[20%] translate-y-[6%] scale-[0.92] rotate-4'
              opacity = 'opacity-40'
              zIndex = 'z-20'
            } else if (isPrev) {
              transform = '-translate-x-[110%] translate-y-[5%] scale-90 -rotate-6'
              opacity = 'opacity-0'
              zIndex = 'z-50'
            } else {
              transform = 'translate-x-[30%] translate-y-[9%] scale-[0.88] rotate-6'
              opacity = 'opacity-0'
              zIndex = 'z-10'
            }

            return (
              <div
                key={idx}
                className={`absolute inset-0 w-full h-full rounded-[1.8rem] sm:rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 flex flex-col justify-between transition-all duration-700 ease-out shadow-2xl ${zIndex} ${opacity} ${transform} ${isActive ? 'pointer-events-auto' : 'pointer-events-none'}`}
              >
                {/* Inner padding wrapper */}
                <div className="flex flex-col h-full p-5 sm:p-8">

                  {/* Header */}
                  <div className="flex justify-between items-start mb-3 sm:mb-5">
                    <div className="flex-1 min-w-0 pr-3">
                      <span className={`inline-block text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] mb-1.5 sm:mb-3 bg-gradient-to-r ${p.color} text-transparent bg-clip-text`}>
                        {p.subtitle}
                      </span>
                      <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-black text-white leading-tight">
                        {p.title}
                      </h3>
                    </div>
                    <span className="text-4xl sm:text-5xl font-display font-black text-white/5 flex-shrink-0">{`0${idx + 1}`}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-white/50 leading-relaxed font-light flex-1 overflow-y-auto pr-0.5 min-h-0">
                    {p.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-5 flex-shrink-0">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {p.tags.map(tag => (
                        <span
                          key={tag}
                          className="text-[9px] sm:text-[10px] bg-white/5 text-white/60 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold tracking-wide"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-3">
                      {p.link !== '#' && (
                        <a
                          href={p.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex-1 bg-white text-black font-bold uppercase tracking-wider text-[10px] sm:text-xs py-2.5 sm:py-3.5 rounded-full flex items-center justify-center gap-2 transition-transform ${isActive ? 'active:scale-95' : ''}`}
                        >
                          <ExternalLinkIcon size={13} /> View Live
                        </a>
                      )}
                      {p.github !== '#' && (
                        <a
                          href={p.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-9 h-9 sm:w-11 sm:h-11 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors flex-shrink-0"
                        >
                          <CodeIcon size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Navigation controls */}
        <div className="flex items-center gap-5 sm:gap-6 mt-6 sm:mt-10">
          <button
            onClick={prevCard}
            className="w-11 h-11 sm:w-14 sm:h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors rotate-180 active:scale-90"
          >
            <ArrowRightIcon size={20} />
          </button>
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-white/30">
            Swipe or click
          </span>
          <button
            onClick={nextCard}
            className={`w-11 h-11 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 active:scale-90 shadow-lg bg-gradient-to-r ${projects[currentIndex].color}`}
          >
            <ArrowRightIcon size={20} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Projects
