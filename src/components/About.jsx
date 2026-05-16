const About = () => {
  return (
    <section id="about" className="py-32 relative z-10 bg-[#030303]">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="mb-32 text-center">
          <p className="text-orange-400 text-sm uppercase tracking-[0.3em] font-bold mb-6 font-display">
            The Approach
          </p>
          <h2 className="text-6xl md:text-[8rem] font-display font-black leading-[0.85] tracking-tighter uppercase text-white/5">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 opacity-100">Mind</span>
            <br />Behind
          </h2>
        </div>

        <div className="space-y-24 pb-32">
          
           <div className="sticky top-24 bg-[#080808] border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl min-h-[50vh] flex flex-col justify-center transform origin-top transition-all duration-500">
              <div className="absolute top-10 right-10 text-[10rem] font-display font-black text-white/[0.02] leading-none pointer-events-none select-none">
                01
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white/40 mb-8 tracking-widest uppercase flex items-center gap-4">
                <span className="w-12 h-px bg-orange-500/50" /> Concept
              </h3>
              
              <p className="text-3xl md:text-5xl font-light leading-[1.2] text-white/80 max-w-4xl relative z-10">
                I don't just build websites. I create <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 font-bold">digital experiences</span>. 
                Every color, every button, and every movement is placed with purpose. 
                I believe in making things that make people stop and stare.
              </p>
           </div>
           
           <div className="sticky top-32 bg-[#0c0c0c] border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-2xl min-h-[50vh] flex flex-col justify-center transform origin-top transition-all duration-500">
              <div className="absolute top-10 right-10 text-[10rem] font-display font-black text-white/[0.02] leading-none pointer-events-none select-none">
                02
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white/40 mb-8 tracking-widest uppercase flex items-center gap-4">
                <span className="w-12 h-px bg-purple-500/50" /> The Whole Picture
              </h3>
              
              <p className="text-3xl md:text-5xl font-light leading-[1.2] text-white/80 max-w-4xl relative z-10">
                From organizing the information <span className="text-purple-400 font-bold">behind the scenes</span> 
                to painting the beautiful visuals <span className="text-cyan-400 font-bold">on your screen</span>. 
                Being a creator means taking responsibility for how the entire puzzle fits together.
              </p>
           </div>

           <div className="sticky top-40 bg-[#111111] border border-orange-500/30 rounded-[3rem] p-12 md:p-20 shadow-[0_-20px_100px_rgba(249,115,22,0.1)] min-h-[50vh] flex flex-col justify-center transform origin-top transition-all duration-500">
              <div className="absolute top-10 right-10 text-[10rem] font-display font-black text-orange-500/[0.03] leading-none pointer-events-none select-none">
                03
              </div>
              
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white/40 mb-8 tracking-widest uppercase flex items-center gap-4">
                <span className="w-12 h-px bg-pink-500/50" /> Reality
              </h3>
              
              <p className="text-3xl md:text-5xl font-light leading-[1.2] text-white/80 max-w-4xl relative z-10">
                I am currently a senior college student studying computers. I run on coffee and an absolute obsession with getting things right. 
                <span className="text-white font-bold block mt-8 text-4xl md:text-6xl">
                  Let's team up before someone else books my time.
                </span>
              </p>
           </div>
           
        </div>
      </div>
    </section>
  )
}

export default About
