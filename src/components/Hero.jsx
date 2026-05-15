const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0f0f0f] flex items-center relative overflow-hidden pt-24">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-20 right-[-5%] w-[500px] h-[500px] bg-purple-700 rounded-full blur-[140px] opacity-20" />
      <div className="absolute bottom-0 left-[-5%] w-[400px] h-[400px] bg-orange-600 rounded-full blur-[120px] opacity-15" />

      <div className="max-w-6xl mx-auto px-6 py-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm font-medium">Available for work — hire me before someone else does 😤</span>
            </div>

            {/* Name / intro badge */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
              <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">Hey! 👋</span>
              <span className="text-gray-300 text-sm">I'm <strong className="text-white">Aarya Balan</strong></span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6">
              I build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">full-stack</span>
              <br />
              stuff that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">actually works!</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Code, bugs, and late-night coffee keep it all running.{' '}
              <span className="text-orange-400 font-semibold">No stack overflow questions were harmed</span> in the making of these projects. (Okay, maybe a few.)
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-start mb-10">
              {['Creative ✨', 'Reliable 💪', 'Efficient ⚡', 'Caffeinated ☕'].map(t => (
                <span key={t} className="text-gray-400 text-sm border border-white/10 px-3 py-1 rounded-full hover:border-orange-500/50 hover:text-white transition-all duration-200">
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-12">
              <a
                href="#contact"
                id="contact-cta-btn"
                className="bg-white text-black font-bold px-7 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105 shadow-xl text-sm"
              >
                Contact me →
              </a>
              <a
                href="#projects"
                className="border border-white/20 text-white font-semibold px-7 py-4 rounded-xl hover:border-white/50 hover:bg-white/5 transition-all duration-200 text-sm"
              >
                See my work
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-6 justify-center lg:justify-start">
              {[
                { label: 'GitHub', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
                )},
                { label: 'LinkedIn', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                )},
                { label: 'Instagram', icon: (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                )},
              ].map(social => (
                <a key={social.label} href="#" className="text-gray-500 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile card */}
          <div className="flex-shrink-0 relative">
            {/* Outer envelope shapes (inspired by reference) */}
            <div className="absolute -inset-8 border border-white/5 rounded-3xl rotate-6" />
            <div className="absolute -inset-8 border border-white/5 rounded-3xl -rotate-3" />

            {/* Main card */}
            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center w-72 hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center text-6xl shadow-xl">
                  🧑‍💻
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-[#1a1a2e] w-5 h-5 rounded-full" />
              </div>

              <h2 className="text-white font-black text-xl mb-1">Aarya Balan</h2>
              <p className="text-orange-400 font-semibold text-sm mb-3">Full Stack Developer</p>
              <p className="text-gray-400 text-xs leading-relaxed mb-6">
                Turning coffee into code since forever. Frontend, backend, database — I do it all.
                Sometimes it even works on the first try! (Very rarely.)
              </p>

              {/* Stats row */}
              <div className="flex gap-4 w-full border-t border-white/10 pt-5">
                {[['5+', 'Projects'], ['2+', 'Years'], ['∞', 'Bugs Fixed']].map(([val, lab]) => (
                  <div key={lab} className="flex-1 text-center">
                    <div className="text-white font-black text-lg">{val}</div>
                    <div className="text-gray-500 text-xs">{lab}</div>
                  </div>
                ))}
              </div>

              {/* Download CV */}
              <a
                href="#"
                className="mt-5 w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3 rounded-xl text-sm transition-all duration-200 hover:scale-105 text-center block"
              >
                Download CV 📥
              </a>
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-black text-xs font-black px-3 py-1.5 rounded-xl rotate-6 shadow-lg animate-bounce">
              4.9 ⭐ rating
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1.5 rounded-xl -rotate-3 shadow-lg">
              100+ users 🤯
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
