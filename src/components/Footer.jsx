import { GitHubIcon, LinkedInIcon, LeetCodeIcon, MailIcon, ArrowRightIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="bg-[#030303] pt-16 sm:pt-32 pb-8 sm:pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Watermark background text */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none select-none opacity-[0.03] overflow-hidden translate-y-1/4">
        <h2 className="text-[20vw] font-display font-black leading-none whitespace-nowrap text-center">
          AARYA B
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 relative z-10">
        
        {/* Main CTA row */}
        <div className="flex flex-row justify-between items-start pb-10 sm:pb-20 border-b border-white/10 gap-5 sm:gap-0">
          <div>
            <h2 className="text-[2.2rem] sm:text-6xl md:text-8xl lg:text-[9rem] font-display font-black leading-[0.88] tracking-tighter uppercase">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500">Work</span><br/>
              Together.
            </h2>
          </div>
          
          {/* Email CTA circle */}
          <a
            href="mailto:aaryabalan2006@gmail.com"
            className="w-20 h-20 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full bg-white text-black flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all duration-500 hover:scale-110 group shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_80px_rgba(249,115,22,0.4)] flex-shrink-0 self-center"
          >
            <div className="transform group-hover:rotate-45 transition-transform duration-500">
              <ArrowRightIcon size={28} className="sm:w-10 sm:h-10 md:w-12 md:h-12 -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
            </div>
          </a>
        </div>

        {/* Bottom row: logo + social links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-10 gap-6 sm:gap-10">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-orange-500 rounded-full flex items-center justify-center text-black font-display font-black text-lg sm:text-xl">
              A
            </div>
            <span className="text-white font-display font-bold text-lg sm:text-xl tracking-widest uppercase">
              Aarya.dev
            </span>
          </div>

          <div className="flex items-center gap-6 sm:gap-8">
            {[
              { label: 'GitHub', icon: <GitHubIcon size={22} />, href: 'https://github.com/AaryaBalan' },
              { label: 'LinkedIn', icon: <LinkedInIcon size={22} />, href: 'https://www.linkedin.com/in/aaryabalan/' },
              { label: 'LeetCode', icon: <LeetCodeIcon size={22} />, href: 'https://leetcode.com/u/_aarya_/' },
              { label: 'Send Email', icon: <MailIcon size={22} />, href: 'mailto:aaryabalan2006@gmail.com' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                aria-label={link.label}
                className="text-white/40 hover:text-white transition-all duration-300 hover:scale-125 transform"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row justify-between items-center text-white/30 text-[10px] sm:text-xs font-mono uppercase tracking-widest gap-2 sm:gap-4">
          <p>&copy; {new Date().getFullYear()} Aarya B. Everything is running smoothly.</p>
          <p>Designed to stand out.</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer
