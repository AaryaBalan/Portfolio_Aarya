import { useState, useEffect } from 'react'
import { MenuIcon, XIcon, ArrowRightIcon } from './Icons'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
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
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center mt-6 px-4 ${
        scrolled ? 'translate-y-0' : 'translate-y-2'
      }`}
    >
      <div 
        className={`flex items-center justify-between transition-all duration-500 w-full max-w-5xl ${
          scrolled 
            ? 'bg-black/60 backdrop-blur-2xl border border-white/10 rounded-full px-6 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.8)]' 
            : 'bg-transparent border-transparent px-2 py-4'
        }`}
      >
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group relative z-10">
          <div className="relative flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <span className="text-black font-display font-black text-lg">A</span>
            <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-150 group-hover:scale-100 transition-transform duration-500" />
          </div>
          <span className="text-white font-display font-bold text-lg tracking-widest uppercase hidden sm:block">
            Balan<span className="text-orange-500">.</span>
          </span>
        </a>

        {/* Desktop links - Center Pill */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md">
          {links.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/50 hover:text-white hover:bg-white/10 text-xs font-display font-bold uppercase tracking-[0.15em] px-5 py-2.5 rounded-full transition-all duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-3 relative z-10">
          <a
            href="#"
            className="hidden md:flex items-center gap-2 bg-white hover:bg-orange-500 text-black hover:text-white text-xs font-display font-black uppercase tracking-[0.15em] px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(249,115,22,0.4)]"
          >
            Resume <ArrowRightIcon size={14} />
          </a>
          <button
            className="md:hidden w-12 h-12 bg-white/10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon size={20} /> : <MenuIcon size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu full screen overlay */}
      <div 
        className={`fixed inset-0 bg-[#030303]/95 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-4xl font-display font-black text-white/50 hover:text-white uppercase tracking-widest transition-all duration-300 hover:scale-110"
              style={{ transitionDelay: `${i * 50}ms`, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0 }}
            >
              {link.label}
            </a>
          ))}
          <a 
            href="#" 
            className="mt-8 flex items-center gap-3 bg-orange-500 text-black text-xl font-display font-black uppercase tracking-[0.2em] px-10 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{ transitionDelay: '300ms', transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0 }}
          >
            Resume <ArrowRightIcon size={20} />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
