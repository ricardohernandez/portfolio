import HeroSlider from './HeroSlider';
import OfferCard from './OfferCard';

export default function Hero() {

  return (
    /*  min-h-screen */
    <section 
      id="inicio" 
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800"
    >
      {/* Advanced Background Effects */}
      <div className="absolute inset-0">
        {/* Mesh Gradient Layer 1 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-400/8 to-purple-500/15 dark:from-blue-400/10 dark:via-indigo-400/5 dark:to-purple-400/10"></div>
        
        {/* Floating Geometric Elements Layer 2 */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-br from-blue-300/20 to-indigo-400/20 dark:from-blue-400/15 dark:to-indigo-500/15 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-32 -right-32 w-full h-96 bg-gradient-to-br from-indigo-300/20 to-purple-400/20 dark:from-indigo-400/15 dark:to-purple-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '700ms' }}></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-purple-300/20 to-pink-400/20 dark:from-purple-400/15 dark:to-pink-500/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1000ms' }}></div>
        </div>
        
        {/* Grid Pattern Background Layer 3 */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsMC40KSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjQpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] dark:opacity-30 hover:opacity-100 dark:hover:opacity-60 transition-opacity duration-300 cursor-pointer" style={{ animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20">

        <div className="w-full">
          
          {/* Left Content - Presentación */}
          <HeroSlider />

          {/* Right Content - Special Offer Card */}
         {/*  <OfferCard /> */}
        </div>

      </div>
    </section>
  );
}
