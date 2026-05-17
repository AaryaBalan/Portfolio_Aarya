import { useState } from 'react'
import { ExternalLinkIcon, CodeIcon, ArrowRightIcon } from './Icons'

const projects = [
  {
    title: 'WakeBuddy',
    subtitle: 'Google AdMob Hackathon Top 30 Finalist',
    description: 'A social alarm experience where you never wake up alone. Pair with a friend, hit "I\'m Awake", and trigger an instant call. Features shared streaks, leaderboards, and wake-up analytics.',
    tags: ['Social App', 'Real-time', 'AdMob Integration'],
    color: 'from-orange-500 to-pink-500',
    link: 'https://lnkd.in/gdhQEghu', 
    github: 'https://lnkd.in/gXTsUwJz'
  },
  {
    title: 'Dayable',
    subtitle: 'Minimal Daily Social Media',
    description: 'A calm, minimal space focused on your day, not your status. Share simple daily moments, track how your day went, and connect with friends through honest check-ins without endless scrolling.',
    tags: ['Social Media', 'Wellness', 'UI/UX'],
    color: 'from-cyan-500 to-blue-500',
    link: '#',
    github: '#'
  },
  {
    title: 'Zorphix',
    subtitle: 'Department Symposium Platform',
    description: 'The official event website for our college department symposium. A highly interactive, performance-optimized platform designed to handle registrations, event schedules, and showcase activities.',
    tags: ['Event Website', 'College Symposium', 'Interactive'],
    color: 'from-purple-500 to-violet-500',
    link: 'https://www.zorphix.com/',
    github: '#'
  },
  {
    title: 'Hacksymmetric',
    subtitle: 'Hackathon Registration Hub',
    description: 'The official registration and information portal for the Asymmetric Club hackathon. Built to handle team formations, live event updates, and provide a seamless onboarding experience for hackers.',
    tags: ['Hackathon', 'Registration Portal', 'College Club'],
    color: 'from-green-500 to-emerald-500',
    link: 'https://hacksymmetric.vercel.app/',
    github: '#'
  },
]

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  // Minimum swipe distance
  const minSwipeDistance = 50 

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextCard()
    }
    if (isRightSwipe) {
      prevCard()
    }
  }

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projects" className="min-h-screen bg-[#030303] flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      
      {/* Background Glow */}
      <div className={`absolute inset-0 opacity-20 transition-colors duration-1000 bg-gradient-to-br ${projects[currentIndex].color}`} />

      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center">
        
        <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-10 text-center tracking-tight">
          Featured Creations.
        </h2>

        {/* Story Progress Bars */}
        <div className="flex w-full gap-2 mb-6 max-w-lg">
          {projects.map((_, idx) => (
            <div 
              key={idx} 
              className="h-1.5 flex-1 rounded-full bg-white/20 overflow-hidden cursor-pointer"
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

        {/* Swipeable Card Container */}
        <div 
          className="relative w-full max-w-lg aspect-[3/4] md:aspect-[4/5] perspective-1000 select-none"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {projects.map((p, idx) => {
            // Calculate relative position for stacking effect
            // We use modulo arithmetic to allow wrapping around the stack
            const total = projects.length;
            let offset = (idx - currentIndex + total) % total;
            
            // If it's the "previous" card (just swiped away), we'll animate it sliding left
            // For simplicity, we just look at the raw difference for the exit animation
            let isPrev = (currentIndex === 0 && idx === total - 1) || (idx === currentIndex - 1);
            
            let isActive = offset === 0;
            let isNext1 = offset === 1;
            let isNext2 = offset === 2;

            // Base styling for all cards
            let transformStyle = '';
            let opacityStyle = '';
            let zIndexStyle = '';

            if (isActive) {
              transformStyle = 'translate-x-0 translate-y-0 scale-100 rotate-0';
              opacityStyle = 'opacity-100';
              zIndexStyle = 'z-40';
            } else if (isNext1) {
              // Fanned out to the right slightly, rotated to show the top right corner
              transformStyle = 'translate-x-[15%] translate-y-[5%] scale-95 rotate-3';
              opacityStyle = 'opacity-70';
              zIndexStyle = 'z-30';
            } else if (isNext2) {
              // Fanned out further to the right, rotated more to show even more corner
              transformStyle = 'translate-x-[30%] translate-y-[10%] scale-90 rotate-6';
              opacityStyle = 'opacity-40';
              zIndexStyle = 'z-20';
            } else if (isPrev) {
              // Card sliding out to the left
              transformStyle = '-translate-x-[120%] translate-y-[10%] scale-90 rotate-[-10deg]';
              opacityStyle = 'opacity-0';
              zIndexStyle = 'z-50'; // Keep it above while exiting
            } else {
              // Hidden deep in the stack
              transformStyle = 'translate-x-[45%] translate-y-[15%] scale-85 rotate-9';
              opacityStyle = 'opacity-0';
              zIndexStyle = 'z-10';
            }
            
            return (
              <div 
                key={idx}
                className={`absolute inset-0 w-full h-full rounded-[2.5rem] bg-[#0a0a0a] border border-white/10 p-8 md:p-12 flex flex-col justify-between transition-all duration-700 ease-out shadow-2xl ${zIndexStyle} ${opacityStyle} ${transformStyle} ${isActive ? 'pointer-events-auto cursor-auto' : 'pointer-events-none'}`}
              >
                {/* Header */}
                <div className="flex justify-between items-start">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] mb-4 bg-gradient-to-r ${p.color} text-transparent bg-clip-text`}>
                      {p.subtitle}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-display font-black text-white leading-tight">
                      {p.title}
                    </h3>
                  </div>
                  <span className="text-6xl font-display font-black text-white/5">{`0${idx + 1}`}</span>
                </div>

                {/* Body */}
                <p className="text-lg md:text-xl text-white/50 leading-relaxed font-light my-8">
                  {p.description}
                </p>

                {/* Footer */}
                <div className="mt-auto space-y-8">
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map(tag => (
                      <span key={tag} className="text-xs bg-white/5 text-white/70 px-4 py-2 rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    {p.link !== '#' && (
                      <a href={p.link} target="_blank" rel="noopener noreferrer" className={`flex-1 bg-white text-black font-bold uppercase tracking-widest text-xs py-4 rounded-full flex items-center justify-center gap-2 transition-transform ${isActive ? 'hover:scale-105' : ''}`}>
                        <ExternalLinkIcon size={16} /> View Live
                      </a>
                    )}
                    {p.github !== '#' && (
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                        <CodeIcon size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-6 mt-10">
          <button 
            onClick={prevCard}
            className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-colors rotate-180"
          >
            <ArrowRightIcon size={24} />
          </button>
          <span className="text-xs font-mono tracking-widest uppercase text-white/40">
            Swipe or Click
          </span>
          <button 
            onClick={nextCard}
            className={`w-14 h-14 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110 shadow-lg bg-gradient-to-r ${projects[currentIndex].color}`}
          >
            <ArrowRightIcon size={24} />
          </button>
        </div>

      </div>
    </section>
  )
}

export default Projects
