import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-emerald-25 text-black selection:bg-purple-100">
      {/* Background Concentric Circles & Orbiting Badges */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Inner Circle - Empty (Visual only) */}
        <div className="absolute w-[800px] h-[800px] rounded-full border-2 border-gray-300"></div>

        {/* Middle Circle - All 5 feature cards (Orbiting) */}
        <div className="absolute w-[1300px] h-[1300px] rounded-full border-2 border-gray-300">
          {/* All 4 Modules */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-0s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-0s' }}>
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                  </svg>
                </div>
                <span className="font-medium text-gray-700">All 4 Modules</span>
                <div className="w-1 h-4 bg-green-500 rounded-full ml-1"></div>
              </div>
            </div>
          </div>
          
          {/* Analytics */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-15s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-15s' }}>
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Analytics</span>
                <div className="w-1 h-4 bg-orange-500 rounded-full ml-1"></div>
              </div>
            </div>
          </div>
          
          {/* AI Insights */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-30s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-30s' }}>
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 1 1 7.072 0l-.548.547A3.374 3.374 0 0 0 18 18.5a3 3 0 1 1-6 0c0-.59.212-1.133.566-1.553l-.566-.547z"></path>
                  </svg>
                </div>
                <span className="font-medium text-gray-700">AI Insights</span>
                <div className="w-1 h-4 bg-purple-500 rounded-full ml-1"></div>
              </div>
            </div>
          </div>
          
          {/* Performance Tracking */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-45s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-45s' }}>
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 3v5h5"></path>
                    <path d="M21 21v-5h-5"></path>
                    <path d="M21 3l-7 7m-4-4l7 7"></path>
                    <path d="M3 21l7-7m4 4l-7-7"></path>
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Performance Tracking</span>
                <div className="w-1 h-4 bg-indigo-500 rounded-full ml-1"></div>
              </div>
            </div>
          </div>
          
          {/* Mock Tests */}
          <div className="absolute inset-0 animate-[orbit_60s_linear_infinite]" style={{ animationDelay: '-54s' }}>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[orbit_60s_linear_infinite_reverse]" style={{ animationDelay: '-54s' }}>
              <div className="flex items-center gap-3 bg-white px-4 py-3 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
                <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14,2 14,8 20,8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10,9 9,9 8,9"></polyline>
                  </svg>
                </div>
                <span className="font-medium text-gray-700">Mock Tests</span>
                <div className="w-1 h-4 bg-blue-500 rounded-full ml-1"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Planets scattered around the screen */}
        <div className="absolute top-1/3 left-1/3 w-12 h-12 bg-gray-900 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.3)] opacity-20" />
        <div className="absolute top-1/4 right-1/3 w-8 h-8 bg-gray-700 rounded-full shadow-[0_3px_15px_rgba(0,0,0,0.2)] opacity-15" />
        <div className="absolute bottom-1/3 left-2/5 w-16 h-16 bg-black rounded-full shadow-[0_6px_25px_rgba(0,0,0,0.4)] opacity-10" />
        <div className="absolute bottom-1/4 right-2/5 w-6 h-6 bg-gray-600 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.2)] opacity-20" />
        <div className="absolute top-2/5 left-1/4 w-10 h-10 bg-gray-800 rounded-full shadow-[0_4px_18px_rgba(0,0,0,0.25)] opacity-15" />

        {/* Small floating dots in background */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-200 rounded-full animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-gray-100 rounded-full" />
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gray-200 rounded-full" />
      </div>

      {/* Main Content */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-tight" style={{ fontFamily: 'var(--font-poppins)' }}>
            <span className="text-gray-900">
              Super
            </span>
            <span className="text-red-500">
              IELTS
            </span>
          </h1>

          {/* Platform Subheading */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide text-gray-800" style={{ 
            fontFamily: 'var(--font-poppins)'
          }}>
            Mock test platform
          </h2>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            Everything your centre needs to run IELTS mocks better.
          </p>

          {/* Early Access */}
          <div className="max-w-xl mx-auto mt-4 space-y-4">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join the waitlist</h3>
            </div>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-black/5 focus:border-gray-300 transition-all"
              />
              <button className="w-full h-12 px-6 rounded-xl bg-black text-white font-medium hover:bg-gray-800 transition-colors flex items-center justify-center gap-2">
                Join as a Founding Centre
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-600 hover:text-black hover:border-gray-300 transition-all shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-600 hover:text-black hover:border-gray-300 transition-all shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-gray-100 text-gray-600 hover:text-black hover:border-gray-300 transition-all shadow-sm">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"></rect>
              <path d="m22 7-10 5L2 7"></path>
            </svg>
          </a>
        </div>
      </footer>

      {/* British Council & IELTS Logos - Bottom Right */}
      <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3">
        <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
          <Image
            src="/british-council-ielts-logo.png"
            alt="British Council IELTS"
            width={240}
            height={80}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
