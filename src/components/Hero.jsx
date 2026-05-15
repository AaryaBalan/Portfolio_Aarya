import {
  GitHubIcon, LinkedInIcon, InstagramIcon, DownloadIcon,
  ArrowRightIcon, SparkleIcon, CheckCircleIcon, TrendingUpIcon, ZapIcon
} from './Icons'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[#0a0a0a] flex items-center relative overflow-hidden pt-24">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Gradient blobs */}
      <div className="absolute top-20 right-[-5%] w-[560px] h-[560px] bg-purple-700 rounded-full blur-[150px] opacity-20" />
      <div className="absolute bottom-0 left-[-5%] w-[440px] h-[440px] bg-orange-600 rounded-full blur-[130px] opacity-15" />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 bg-white/[0.05] border border-white/[0.1] rounded-full px-5 py-2.5 mb-10">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-white/60 text-sm font-medium">Available for work — hire me before someone else does</span>
            </div>

            {/* Intro badge */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-5">
              <span className="bg-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest">Hey</span>
              <span className="text-white/50 text-base">I'm <strong className="text-white font-bold">Aarya Balan</strong></span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-[72px] font-black text-white leading-[1.04] mb-7">
              I build{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">full-stack</span>
              <br />
              stuff that<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">actually works.</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-white/45 text-lg md:text-xl mb-11 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Code, bugs, and late-night coffee keep it all running.
              No Stack Overflow questions were harmed in the making of these projects.
              <span className="text-orange-400/80 font-medium"> (Okay, maybe a few.)</span>
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start mb-11">
              {[
                { label: 'Creative', icon: <SparkleIcon size={14} /> },
                { label: 'Reliable', icon: <CheckCircleIcon size={14} /> },
                { label: 'Efficient', icon: <ZapIcon size={14} /> },
                { label: 'Always Growing', icon: <TrendingUpIcon size={14} /> },
              ].map(t => (
                <span key={t.label} className="text-white/50 text-sm border border-white/[0.1] px-4 py-1.5 rounded-full hover:border-orange-500/40 hover:text-white/80 transition-all duration-200 flex items-center gap-2">
                  <span className="text-orange-400/70">{t.icon}</span>
                  {t.label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-14">
              <a
                href="#contact"
                id="contact-cta-btn"
                className="bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-orange-500 hover:text-white transition-all duration-200 hover:scale-105 shadow-xl text-base flex items-center gap-2.5"
              >
                Contact me <ArrowRightIcon size={16} />
              </a>
              <a
                href="#projects"
                className="border border-white/[0.15] text-white font-semibold px-8 py-4 rounded-2xl hover:border-white/40 hover:bg-white/[0.05] transition-all duration-200 text-base"
              >
                See my work
              </a>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-7 justify-center lg:justify-start">
              {[
                { label: 'GitHub', icon: <GitHubIcon size={20} /> },
                { label: 'LinkedIn', icon: <LinkedInIcon size={20} /> },
                { label: 'Instagram', icon: <InstagramIcon size={20} /> },
              ].map(s => (
                <a key={s.label} href="#" aria-label={s.label} className="text-white/30 hover:text-white transition-colors duration-200 hover:scale-110 transform">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Profile card */}
          <div className="flex-shrink-0 relative">
            {/* Decorative rings */}
            <div className="absolute -inset-10 border border-white/[0.04] rounded-3xl rotate-6" />
            <div className="absolute -inset-10 border border-white/[0.04] rounded-3xl -rotate-3" />

            {/* Card */}
            <div className="relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-9 flex flex-col items-center text-center w-[290px] hover:border-orange-500/25 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10">
              {/* Avatar */}
              <div className="relative mb-7">
                <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-600 flex items-center justify-center shadow-2xl">
                  {/* Developer silhouette */}
                  <svg viewBox="0 0 80 80" width="56" height="56" fill="none">
                    <circle cx="40" cy="28" r="18" fill="white" fillOpacity="0.9"/>
                    <path d="M8 72c0-18 14-30 32-30s32 12 32 30" fill="white" fillOpacity="0.9"/>
                    <rect x="28" y="48" width="24" height="4" rx="2" fill="white" fillOpacity="0.5"/>
                  </svg>
                </div>
                <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-[#0a0a0a] w-5 h-5 rounded-full" />
              </div>

              <h2 className="text-white font-black text-xl mb-1">Aarya Balan</h2>
              <p className="text-orange-400 font-semibold text-sm mb-4">Full Stack Developer</p>
              <p className="text-white/35 text-sm leading-relaxed mb-7">
                Turning coffee into code. Frontend, backend, database — I do it all.
                Sometimes it even works on the first try.
              </p>

              {/* Stats */}
              <div className="flex gap-4 w-full border-t border-white/[0.08] pt-6">
                {[['5+', 'Projects'], ['2+', 'Years'], ['~0', 'Sleep Hours']].map(([val, lab]) => (
                  <div key={lab} className="flex-1 text-center">
                    <div className="text-white font-black text-lg">{val}</div>
                    <div className="text-white/30 text-xs mt-0.5">{lab}</div>
                  </div>
                ))}
              </div>

              {/* CV button */}
              <a
                href="#"
                className="mt-6 w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-3.5 rounded-2xl text-sm transition-all duration-200 hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <DownloadIcon size={15} />
                Download CV
              </a>
            </div>

            {/* Floating stat chips */}
            <div className="absolute -top-5 -right-5 bg-yellow-400 text-black text-xs font-black px-4 py-2 rounded-2xl rotate-6 shadow-xl">
              4.9 / 5.0 rated
            </div>
            <div className="absolute -bottom-5 -left-5 bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded-2xl -rotate-3 shadow-xl">
              100+ happy users
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
