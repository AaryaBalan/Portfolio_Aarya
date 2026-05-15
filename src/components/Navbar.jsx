import { useState, useEffect } from 'react'
import { MenuIcon, XIcon, ArrowRightIcon } from './Icons'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-2xl border-b border-white/[0.07] shadow-2xl shadow-black/40' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <span className="bg-orange-500 text-white text-sm font-black px-3.5 py-1.5 rounded-xl group-hover:bg-orange-400 transition-colors duration-200">
            aarya
          </span>
          <span className="text-white/30 font-bold text-sm hidden sm:block group-hover:text-white/60 transition-colors duration-200">
            .dev
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/40 hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:flex items-center gap-2 bg-white text-black text-sm font-bold px-5 py-2.5 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105"
          >
            My Resume <ArrowRightIcon size={13} />
          </a>
          <button
            className="md:hidden text-white/60 hover:text-white transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            id="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/98 backdrop-blur-2xl border-t border-white/[0.06] px-6 py-6 flex flex-col gap-1">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/60 hover:text-white text-base font-medium py-3 border-b border-white/[0.04] last:border-0 transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a href="#" className="mt-4 bg-orange-500 text-white text-sm font-bold px-5 py-3.5 rounded-xl text-center hover:bg-orange-400 transition-colors duration-200">
            My Resume
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar
