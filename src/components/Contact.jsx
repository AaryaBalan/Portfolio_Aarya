import { ArrowRightIcon } from './Icons'

// Minimal, elegant line-art icons for a premium professional aesthetic
const PhoneIcon = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
)

const MailIcon = ({ size = 28, className = '' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

const Contact = () => {
  const emailAddress = 'aaryabalan2006@gmail.com'
  const phoneNumber = '+91 98401 23456' // Clean, professional Indian mobile format placeholder

  return (
    <section 
      id="contact" 
      className="py-24 sm:py-32 md:py-40 relative overflow-hidden min-h-screen flex items-center bg-[#030303]"
    >
      {/* Subtle background ambient lights to add depth */}
      <div className="absolute top-1/4 -left-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-orange-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-pink-500/5 rounded-full blur-[100px] sm:blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-6 relative z-10 w-full">
        
        {/* Simple & Clean Header */}
        <div className="text-center mb-16 sm:mb-24">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 text-xs sm:text-sm uppercase tracking-[0.3em] font-bold mb-4 font-display">
            Get in touch
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter text-white">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500">Connect.</span>
          </h2>
          <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto mt-4 font-light leading-relaxed">
            Have a project in mind or want to discuss software engineering opportunities? Reach out directly.
          </p>
        </div>

        {/* Professional 2-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          
          {/* Email Option */}
          <a
            href={`mailto:${emailAddress}`}
            className="group relative flex flex-col justify-between bg-gradient-to-br from-[#120703]/90 via-[#0a0402]/90 to-[#040201]/95 border border-orange-500/10 hover:border-orange-500/30 rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:scale-[1.02] shadow-[0_10px_35px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Soft, beautiful colorful underglow behind card on hover */}
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div>
              {/* Colorful Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 text-orange-400 flex items-center justify-center mb-8 sm:mb-12 group-hover:scale-110 transition-transform duration-500">
                <MailIcon />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-orange-200 transition-all duration-500">
                Send an Email
              </h3>
              <p className="text-white/40 text-xs sm:text-sm mt-2 font-light">
                For roles, proposals, and official inquiries.
              </p>
              
              <p className="text-orange-400 font-mono text-sm sm:text-base mt-6 select-all tracking-tight font-medium">
                {emailAddress}
              </p>
            </div>

            <div className="mt-12 sm:mt-16 pt-4 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white/50 group-hover:text-orange-400 transition-colors duration-300">
              <span>Write Mail</span>
              <div className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                <ArrowRightIcon size={14} />
              </div>
            </div>
          </a>

          {/* Call Option */}
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, '')}`}
            className="group relative flex flex-col justify-between bg-gradient-to-br from-[#14050b]/90 via-[#0b0306]/90 to-[#050102]/95 border border-pink-500/10 hover:border-pink-500/30 rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:scale-[1.02] shadow-[0_10px_35px_rgba(0,0,0,0.6)] overflow-hidden"
          >
            {/* Soft, beautiful colorful underglow behind card on hover */}
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-pink-500/10 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div>
              {/* Colorful Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-pink-500/15 border border-pink-500/30 text-pink-400 flex items-center justify-center mb-8 sm:mb-12 group-hover:scale-110 transition-transform duration-500">
                <PhoneIcon />
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-pink-200 transition-all duration-500">
                Direct Call
              </h3>
              <p className="text-white/40 text-xs sm:text-sm mt-2 font-light">
                For quick consultations and immediate discussions.
              </p>
              
              <p className="text-pink-400 font-mono text-sm sm:text-base mt-6 select-all tracking-tight font-medium">
                {phoneNumber}
              </p>
            </div>

            <div className="mt-12 sm:mt-16 pt-4 border-t border-white/5 flex items-center justify-between text-xs sm:text-sm font-display font-bold uppercase tracking-wider text-white/50 group-hover:text-pink-400 transition-colors duration-300">
              <span>Initiate Call</span>
              <div className="transform group-hover:translate-x-1.5 transition-transform duration-300">
                <ArrowRightIcon size={14} />
              </div>
            </div>
          </a>

        </div>

      </div>
    </section>
  )
}

export default Contact
