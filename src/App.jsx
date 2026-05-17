import { useState, useEffect } from 'react'
import PasswordGate from './components/PasswordGate'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Activity from './components/Activity'

import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      setPos({ x: e.clientX, y: e.clientY })
      const target = e.target
      // Detect if hovering over clickable elements
      const isClickable =
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button')

      setIsPointer(isClickable)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <>
      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-orange-500 rounded-full mix-blend-difference pointer-events-none z-[10000] transition-transform duration-75 ease-out"
        style={{ transform: `translate3d(${pos.x - 6}px, ${pos.y - 6}px, 0) scale(${isPointer ? 2.5 : 1})` }}
      />
      {/* Outer Ring */}
      <div
        className={`fixed top-0 left-0 w-12 h-12 border border-orange-500/50 rounded-full pointer-events-none z-[9999] transition-transform duration-300 ease-out ${isPointer ? 'bg-orange-500/10' : ''}`}
        style={{ transform: `translate3d(${pos.x - 24}px, ${pos.y - 24}px, 0) scale(${isPointer ? 1.5 : 1})` }}
      />
    </>
  )
}

const App = () => {
  const [unlocked, setUnlocked] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handlePageChange = (page) => {
    if (page === currentPage) return;
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentPage(page)
      window.scrollTo(0, 0)
      setIsTransitioning(false)
    }, 400) // Match fade out duration
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero setCurrentPage={handlePageChange} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'skills':
        return (
          <>
            <Skills />
            <Activity />
          </>
        );
      case 'experience':
        return <Experience />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero setCurrentPage={handlePageChange} />;
    }
  }

  return (
    <div className="bg-[#030303] min-h-screen text-white overflow-x-hidden relative selection:bg-orange-500/30 selection:text-white flex flex-col">
      {/* Global Cinematic Noise Overlay */}
      <div className="bg-noise" />

      {/* Custom Mouse Cursor */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>

      {!unlocked ? (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <>
          <Navbar currentPage={currentPage} setCurrentPage={handlePageChange} />

          <main className={`relative z-10 flex-grow flex flex-col transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-0 scale-[0.98] blur-sm translate-y-4' : 'opacity-100 scale-100 blur-0 translate-y-0'}`}>
            {renderPage()}

            <div className="mt-auto">
              <Footer />
            </div>
          </main>
        </>
      )}

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); filter: blur(10px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
      `}</style>
    </div>
  )
}

export default App