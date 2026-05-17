import { useState } from 'react'
import { MenuIcon, XIcon, ArrowRightIcon } from './Icons'

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [menuOpen, setMenuOpen] = useState(false)

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8 flex justify-between items-start pointer-events-none">

        {/* Logo - Top Left Corner */}
        <button
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 group relative pointer-events-auto mix-blend-difference"
        >
          <div className="relative flex items-center justify-center w-12 h-12 bg-orange-500 rounded-full overflow-hidden transition-transform duration-300 group-hover:scale-110">
            <span className="text-black font-display font-black text-xl">A</span>
            <div className="absolute inset-0 border-2 border-white/20 rounded-full scale-150 group-hover:scale-100 transition-transform duration-500" />
          </div>
          <span className="text-white font-display font-bold text-xl tracking-widest uppercase hidden sm:block">
            Balan<span className="text-orange-500">.</span>
          </span>
        </button>

        {/* Desktop Links - Top Right Corner Menu */}
        <div className="hidden lg:flex flex-col items-end gap-3 pointer-events-auto">
          {links.map(link => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`group flex items-center gap-4 text-xs font-display font-bold uppercase tracking-[0.2em] py-2 transition-all duration-300 ${currentPage === link.id ? 'text-white' : 'text-white/30 hover:text-white'
                }`}
            >
              <span className={`w-8 h-[1px] transition-all duration-300 ${currentPage === link.id ? 'bg-orange-500 scale-x-100' : 'bg-white/20 scale-x-0 group-hover:scale-x-100'} origin-right`} />
              {link.label}
            </button>
          ))}

          <div className="mt-4 pt-4 border-t border-white/10 w-full flex justify-end">
            <a
              href="#"
              className="flex items-center gap-2 text-white/50 hover:text-orange-500 text-xs font-display font-black uppercase tracking-[0.2em] transition-all duration-300 hover:scale-105"
            >
              Resume <ArrowRightIcon size={14} />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger - Top Right Corner */}
        <button
          className="lg:hidden w-14 h-14 bg-[#0a0a0a] border border-white/10 rounded-full flex items-center justify-center text-white hover:bg-orange-500 transition-all duration-300 pointer-events-auto shadow-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#030303]/98 backdrop-blur-3xl z-40 flex flex-col items-center justify-center transition-all duration-500 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center gap-6 w-full px-6">
          {links.map((link, i) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-4xl md:text-5xl font-display font-black uppercase tracking-widest transition-all duration-300 hover:scale-110 ${currentPage === link.id ? 'text-orange-500 drop-shadow-[0_0_20px_rgba(249,115,22,0.5)]' : 'text-white/50 hover:text-white'
                }`}
              style={{ transitionDelay: `${i * 50}ms`, transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0 }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="#"
            className="mt-12 flex items-center gap-3 bg-white text-black text-sm font-display font-black uppercase tracking-[0.2em] px-8 py-4 rounded-full transition-all duration-300 hover:scale-105"
            style={{ transitionDelay: '300ms', transform: menuOpen ? 'translateY(0)' : 'translateY(20px)', opacity: menuOpen ? 1 : 0 }}
          >
            Resume <ArrowRightIcon size={16} />
          </a>
        </div>
      </div>
    </>
  )
}

export default Navbar
