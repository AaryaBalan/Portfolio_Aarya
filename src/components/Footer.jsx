const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="bg-orange-500 text-white text-sm font-black px-3 py-1.5 rounded-xl">aarya</span>
            <span className="text-gray-600 font-bold text-sm">.dev</span>
          </div>

          {/* Quote */}
          <p className="text-gray-600 text-sm text-center italic max-w-xs">
            "Code is like humor. When you have to explain it, it's bad." — Me, justifying my lack of comments.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            {['GitHub', 'LinkedIn', 'Twitter', 'Email'].map(link => (
              <a key={link} href="#" className="text-gray-600 hover:text-white text-xs transition-colors duration-200">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-gray-700 text-xs">
            © {new Date().getFullYear()} Aarya Balan. Made with ❤️, ☕, and an unreasonable amount of Stack Overflow.
            <br />
            <span className="text-gray-800">No pixels were harmed in the making of this portfolio.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
