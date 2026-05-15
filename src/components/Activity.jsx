import { useState, useEffect } from 'react'
import { CodeIcon, EyeIcon } from './Icons'

// Generates data with distinct types: github, leetcode, both, none
const generateCombinedDevData = () => {
  return Array.from({ length: 364 }, () => {
    const r = Math.random();
    let type = 'none';
    
    // Probability distribution
    if (r > 0.88) type = 'both';        // 12% chance of both
    else if (r > 0.55) type = 'github';   // 33% chance of github
    else if (r > 0.35) type = 'leetcode'; // 20% chance of leetcode
    
    if (type === 'none') return { type: 'none', level: 0 };
    
    // Intensity level (1 to 3)
    const level = Math.floor(Math.random() * 3) + 1;
    return { type, level };
  });
}

// Generates standard single-color intensity data for views
const generateViewData = (baseProbability = 0.2) => {
  return Array.from({ length: 364 }, () => {
    const isActive = Math.random() > baseProbability;
    if (!isActive) return 0;
    
    const intensity = Math.random();
    if (intensity > 0.8) return 3;
    if (intensity > 0.4) return 2;
    return 1;
  });
}

const Activity = () => {
  const [devData, setDevData] = useState([])
  const [viewData, setViewData] = useState([])

  useEffect(() => {
    setDevData(generateCombinedDevData())
    setViewData(generateViewData(0.25))
  }, [])

  // Complex color mapping for mixed grid
  const getDevColor = (data) => {
    if (data.type === 'none') return 'bg-[#111] border border-white/5'
    
    if (data.type === 'github') {
      if (data.level === 1) return 'bg-green-900/40 border border-green-500/20'
      if (data.level === 2) return 'bg-green-700/60 border border-green-500/40'
      if (data.level === 3) return 'bg-green-500 border border-green-400 shadow-[0_0_12px_rgba(34,197,94,0.6)] z-10'
    }
    
    if (data.type === 'leetcode') {
      if (data.level === 1) return 'bg-yellow-900/40 border border-yellow-500/20'
      if (data.level === 2) return 'bg-yellow-700/60 border border-yellow-500/40'
      if (data.level === 3) return 'bg-yellow-500 border border-yellow-400 shadow-[0_0_12px_rgba(234,179,8,0.6)] z-10'
    }
    
    if (data.type === 'both') {
      if (data.level === 1) return 'bg-gradient-to-br from-green-900/60 to-yellow-900/60 border border-white/10'
      if (data.level === 2) return 'bg-gradient-to-br from-green-700/80 to-yellow-700/80 border border-white/30'
      if (data.level === 3) return 'bg-gradient-to-br from-green-500 to-yellow-500 border border-white/80 shadow-[0_0_15px_rgba(255,255,255,0.4)] z-10'
    }
  }

  // Cyan theme for Portfolio Views
  const getViewColor = (level) => {
    if (level === 0) return 'bg-[#111] border border-white/5'
    if (level === 1) return 'bg-cyan-900/40 border border-cyan-500/20'
    if (level === 2) return 'bg-cyan-700/60 border border-cyan-500/30'
    if (level === 3) return 'bg-cyan-400 border border-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.8)] z-10'
  }

  return (
    <section id="activity" className="bg-[#030303] py-32 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="text-center mb-24">
          <p className="text-white/40 text-sm uppercase tracking-[0.3em] font-bold mb-6 font-display">
            The Matrix
          </p>
          <h2 className="text-5xl md:text-7xl font-display font-black leading-tight tracking-tighter">
            Data <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-cyan-400">Streams.</span>
          </h2>
        </div>

        <div className="space-y-16">
          
          {/* GitHub / LeetCode Combined Activity Grid */}
          <div className="bg-[#080808] border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-green-500/30 transition-colors duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
              <CodeIcon size={120} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 group-hover:bg-green-500 group-hover:text-black transition-colors duration-300">
                  <CodeIcon size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">Engineering Output</h3>
                  <p className="text-white/40 text-sm font-mono tracking-widest uppercase">GitHub & LeetCode Activity</p>
                </div>
              </div>
              
              {/* Legend for Mixed Grid */}
              <div className="flex items-center gap-4 bg-[#111] border border-white/10 rounded-full px-5 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-green-500" />
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">GitHub</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-yellow-500" />
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">LeetCode</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm bg-gradient-to-br from-green-500 to-yellow-500" />
                  <span className="text-white/40 text-xs font-bold uppercase tracking-widest">Both</span>
                </div>
              </div>
            </div>

            <div className="w-full overflow-x-auto no-scrollbar pb-4 cursor-crosshair">
              <div className="min-w-[800px] grid grid-cols-[repeat(52,1fr)] gap-1.5 grid-rows-7">
                {devData.map((data, i) => (
                  <div 
                    key={i} 
                    className={`w-full aspect-square rounded-[2px] ${getDevColor(data)} transition-all duration-300 hover:scale-[2.5] hover:rounded-sm hover:z-20 relative`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio Views Activity Grid */}
          <div className="bg-[#080808] border border-white/10 rounded-[2.5rem] p-8 md:p-12 hover:border-cyan-500/30 transition-colors duration-500 group relative overflow-hidden">
            <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 group-hover:scale-110 transform">
              <EyeIcon size={120} />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors duration-300">
                  <EyeIcon size={20} />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">Global Surveillance</h3>
                  <p className="text-white/40 text-sm font-mono tracking-widest uppercase">Portfolio & Profile Views</p>
                </div>
              </div>
            </div>

            <div className="w-full overflow-x-auto no-scrollbar pb-4 cursor-crosshair">
              <div className="min-w-[800px] grid grid-cols-[repeat(52,1fr)] gap-1.5 grid-rows-7">
                {viewData.map((level, i) => (
                  <div 
                    key={i} 
                    className={`w-full aspect-square rounded-[2px] ${getViewColor(level)} transition-all duration-300 hover:scale-[2.5] hover:rounded-sm hover:z-20 relative`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Activity
