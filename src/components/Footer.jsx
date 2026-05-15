import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons'

const Footer = () => {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.05] py-14">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <span className="bg-orange-500 text-white text-sm font-black px-4 py-2 rounded-xl">aarya</span>
            <span className="text-white/25 font-bold text-sm">.dev</span>
          </div>

          {/* Quote */}
          <p className="text-white/25 text-sm text-center italic max-w-xs leading-relaxed">
            "Code is like humor. When you have to explain it, it's bad."
          </p>

          {/* Social links */}
          <div className="flex items-center gap-5">
            {[
              { label: 'GitHub', icon: <GitHubIcon size={18} />, href: '#' },
              { label: 'LinkedIn', icon: <LinkedInIcon size={18} />, href: '#' },
              { label: 'Email', icon: <MailIcon size={18} />, href: 'mailto:aarya@example.com' },
            ].map(link => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                className="text-white/25 hover:text-white transition-colors duration-200 hover:scale-110 transform"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 pt-10 border-t border-white/[0.04] text-center">
          <p className="text-white/20 text-sm">
            &copy; {new Date().getFullYear()} Aarya Balan. Made with care, coffee, and an unreasonable amount of Stack Overflow.
          </p>
          <p className="text-white/10 text-xs mt-2">
            No pixels were harmed in the making of this portfolio.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
