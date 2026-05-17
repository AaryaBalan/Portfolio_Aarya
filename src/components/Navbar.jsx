import { useState, useEffect } from 'react'
import { MenuIcon, XIcon, ArrowRightIcon } from './Icons'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNav = (id) => {
    setCurrentPage(id)
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-500 mt-4 sm:mt-6 px-4`}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 w-full max-w-5xl ${
          scrolled
            ? 'bg-black/70 backdrop-blur-2xl border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]'
            : 'bg-transparent border-transparent px-2 py-2'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-2.5 group relative z-50 cursor-pointer"
        >
          <div className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
            <span className="text-black font-display font-black text-base sm:text-lg">A</span>
            <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-150 group-hover:scale-100 transition-transform duration-500" />
          </div>
          <span className="text-white font-display font-bold text-base sm:text-lg tracking-widest uppercase hidden sm:block">
            Balan<span className="text-orange-500">.</span>
          </span>
        </button>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-[11px] font-display font-bold uppercase tracking-[0.12em] px-4 py-2.5 rounded-full transition-all duration-300 ${
                currentPage === link.id
                  ? 'text-black bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]'
                  : 'text-white/50 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA + Mobile Hamburger */}
        <div className="flex items-center gap-3 relative z-50">
          <a
            href="#"
            className="hidden md:flex items-center gap-2 bg-white hover:bg-orange-500 text-black hover:text-white text-xs font-display font-black uppercase tracking-[0.15em] px-5 py-2.5 rounded-full transition-all duration-300 hover:scale-105"
          >
            Resume <ArrowRightIcon size={13} />
          </a>
          <button
            className="md:hidden w-10 h-10 sm:w-12 sm:h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon size={18} /> : <MenuIcon size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen menu */}
      <div
        className={`fixed inset-0 bg-[#030303]/97 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-5 px-6 w-full max-w-sm">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-3xl font-display font-black uppercase tracking-widest transition-all duration-300 w-full text-center py-2 rounded-2xl ${
                currentPage === link.id
                  ? 'text-orange-500'
                  : 'text-white/50 hover:text-white'
              }`}
              style={{
                transitionDelay: `${i * 40}ms`,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0
              }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#"
            className="mt-6 w-full flex items-center justify-center gap-3 bg-orange-500 text-black text-lg font-display font-black uppercase tracking-[0.15em] px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{
              transitionDelay: '250ms',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              opacity: menuOpen ? 1 : 0
            }}
          >
            Resume <ArrowRightIcon size={18} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
