import { useState, useEffect } from 'react'
import PasswordGate from './components/PasswordGate'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Testimonials from './components/Testimonials'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

const CustomCursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
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
    window.addEventListener('mousemove', handleMouseMove)
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

  return (
    <div className="bg-[#030303] min-h-screen text-white overflow-hidden relative selection:bg-orange-500/30 selection:text-white">
      {/* Global Cinematic Noise Overlay */}
      <div className="bg-noise" />
      
      {/* Custom Mouse Cursor */}
      <div className="hidden lg:block">
        <CustomCursor />
      </div>
      
      {!unlocked ? (
        <PasswordGate onUnlock={() => setUnlocked(true)} />
      ) : (
        <div className="relative z-10 animate-[fadeIn_1s_ease-out]">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
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