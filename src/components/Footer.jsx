import { GitHubIcon, LinkedInIcon, MailIcon, ArrowRightIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="bg-[#030303] pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-[0.03] overflow-hidden translate-y-1/4">
        <h2 className="text-[25vw] font-display font-black leading-none whitespace-nowrap text-center">
          AARYA BALan
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row justify-between items-end pb-20 border-b border-white/10">
          <div className="mb-10 md:mb-0">
            <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-display font-black leading-[0.85] tracking-tighter uppercase">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Work</span><br/>
              Together.
            </h2>
          </div>
          
          <a href="mailto:aarya@example.com" className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-500 hover:scale-110 group shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(249,115,22,0.4)]">
            <div className="flex flex-col items-center gap-2 transform group-hover:rotate-45 transition-transform duration-500">
              <ArrowRightIcon size={48} className="-rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-10 gap-10">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-display font-black text-xl">
              A
            </div>
            <span className="text-white font-display font-bold text-xl tracking-widest uppercase">
              Balan.
            </span>
          </div>

          <div className="flex items-center gap-8">
            {[
              { label: 'My Work', icon: <GitHubIcon size={24} />, href: '#' },
              { label: 'My Network', icon: <LinkedInIcon size={24} />, href: '#' },
              { label: 'Send Email', icon: <MailIcon size={24} />, href: 'mailto:aarya@example.com' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-125 transform"
              >
                {link.icon}
              </a>
            ))}
          </div>

        </div>

        <div className="mt-20 flex flex-col md:flex-row justify-between items-center text-white/30 text-xs font-mono uppercase tracking-widest gap-4">
          <p>&copy; {new Date().getFullYear()} Aarya Balan. Everything is running smoothly.</p>
          <p>Designed to stand out.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
