import React from "react";



export default function AssestsGridScreen() {
  const items = Array.from({ length: 20 }).map((_, i) => ({
    id: `SJ-${517 + i}`,
    status: Math.random() > 0.7 ? "stopped" : Math.random() > 0.85 ? "alarm" : "running",
  }));

  return (
    <div className="min-h-screen flex items-start justify-center bg-gray-100 p-6">
      <div className="w-[320px] bg-white rounded-2xl shadow-xl overflow-hidden">
       
        <div className="px-6 pt-6">
          <h3 className="text-gray-400 text-sm">Asset Operations</h3>
          <div className="mt-4 rounded-full bg-gradient-to-br from-white/70 to-gray-50 p-3 shadow-inner flex items-center">
            <button className="mr-3 w-9 h-9 rounded-full bg-white/60 flex items-center justify-center shadow"> 
             
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 6L9 12L15 18" stroke="#2f855a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex-1 text-green-700 font-medium">Asset Operations</div>
          </div>
        </div>

        
        <div className="px-6 mt-4 pb-4">
          <div className="flex items-center">
            <div className="flex-1">
              <div className="text-sm font-semibold">2 of 114 Assets are running</div>
            </div>
            <div className="w-28 h-28 relative">
            
              <svg viewBox="0 0 36 36" className="w-full h-full rounded-full overflow-visible">
                <path d="M18 2a16 16 0 1 0 11.31 27.31L18 18z" fill="#1f7a4a"/>
                <path d="M18 2a16 16 0 0 1 10.39 3.74L18 18z" fill="#2aa65b" transform="rotate(45 18 18)"/>
                <circle cx="18" cy="18" r="7" fill="#0b3d2e"/>
              </svg>
              
              <div className="absolute right-0 -top-1">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2v20" stroke="#cbd5e0" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>

      
          <div className="mt-4 flex gap-2">
            {['All','Running','Stopped','Alarms'].map((t,i)=> (
              <button key={t} className={`flex-1 text-xs py-2 rounded-full border ${i===1? 'bg-green-50 border-green-200 text-green-700' : 'bg-white border-gray-200 text-gray-500'}`}>
                {t}
              </button>
            ))}
          </div>

         
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-xl p-3 bg-green-50 border border-green-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs text-green-600">Running</div>
                <div className="text-sm font-semibold text-green-800">KN - R21</div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/40 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12h16" stroke="#16a34a" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

            <div className="rounded-xl p-3 bg-red-50 border border-red-200 shadow-sm flex items-center justify-between">
              <div>
                <div className="text-xs text-red-600">Stopped</div>
                <div className="text-sm font-semibold text-red-700">SJ-517</div>
              </div>
              <div className="w-10 h-10 rounded-lg bg-white/40 flex items-center justify-center">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 5v14" stroke="#dc2626" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>

        
          <div className="mt-4 grid grid-cols-3 gap-3">
            {items.map((it, idx) => (
              <div key={it.id} className={`py-2 rounded-lg text-xs font-semibold text-center border ${it.status === 'running' ? 'bg-white border-green-200 text-green-700' : it.status === 'stopped' ? 'bg-white border-red-200 text-red-600' : 'bg-white border-yellow-200 text-yellow-600'}`}>
                {it.id}
              </div>
            ))}
          </div>
        </div>

       
        <div className="mt-4 pt-4 pb-6 px-6 border-t border-gray-100 bg-gradient-to-t from-white/50">
          <div className="flex justify-between items-center">
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12l2-2 4 4 8-8 4 4v6H3z" stroke="#38a169" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke="#16a34a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18" stroke="#2d3748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 3v18" stroke="#2d3748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="w-12 h-12 rounded-full bg-white shadow flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" stroke="#4a5568" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div className="mt-4 opacity-60">
            <img src="/mnt/data/17ae330e-bb15-4109-91f0-8f750c9ba734.png" alt="preview" className="w-full rounded-lg object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
