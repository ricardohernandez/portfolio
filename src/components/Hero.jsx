import { useState, useEffect } from 'react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const roles = ['Full Stack Developer', 'Frontend Expert', 'Backend Architect', 'UI/UX Enthusiast'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800">
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
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSg1OSwgMTMwLCAyNDYsMC4yKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-60 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjIpIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] dark:opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start lg:items-center">
          
          {/* Left Content - Presentación */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <div>
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-3 sm:mb-4">
                Ricardo Hernández
              </h1>
              
              <div className="flex items-center gap-2 sm:gap-3 text-lg xs:text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-300 flex-wrap mb-4">
                <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                  Desarrollador Full-Stack
                </span>
              </div>

              <div className="flex items-center gap-2 text-base xs:text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-400 flex-wrap">
                <span className="px-3 xs:px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg min-w-[200px] xs:min-w-[250px] sm:min-w-[320px] animate-glow line-clamp-1">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </span>
              </div>
            </div>

            {/* Description - Propuesta de valor */}
            <p className="text-base xs:text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl font-medium">
              Construyo aplicaciones web <span className="font-bold text-cyan-600 dark:text-cyan-400">escalables y de alto rendimiento</span> con <span className="font-bold">React, Node.js, Laravel y Tailwind CSS</span>.
            </p>
            
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
              ✨ Transformo ideas en productos digitales que impulsan negocios y mejoran la experiencia de usuarios.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                onClick={() => document.getElementById('portafolio').scrollIntoView({ behavior: 'smooth' })}
                className="group relative px-8 xs:px-10 py-4 xs:py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base xs:text-lg rounded-xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 overflow-hidden"
                aria-label="Ver proyectos de portafolio"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative flex items-center justify-center gap-2">
                  <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                  Ver Mis Proyectos
                </span>
              </button>

              <button
                onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
                className="px-8 xs:px-10 py-4 xs:py-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-base xs:text-lg rounded-xl border-2 border-cyan-500 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                aria-label="Ir a sección de contacto"
              >
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  Contáctame
                </span>
              </button>
            </div>

          </div>

          {/* Right Content - Special Offer Card */}
          <div className="relative animate-fade-in-up w-full lg:w-auto">
            <div className="relative">
              {/* Offer Card */}
              <div className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 opacity-75"></div>
                <div className="relative bg-white dark:bg-gray-900 m-[2px] rounded-[14px] p-5 lg:p-6">
                  
                  {/* Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-xs font-black uppercase animate-pulse">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                      </svg>
                      Oferta Relámpago
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-2">
                    Página Web{' '}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                      Profesional
                    </span>
                  </h2>
                  
                  <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Presencia digital completa para tu negocio
                  </p>

                  {/* Price */}
                  <div className="mb-5 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-sm text-gray-400 dark:text-gray-500 line-through font-bold">$400.000</span>
                      <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs font-black rounded-full">-37.5%</span>
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                        $250.000
                      </span>
                      <span className="text-lg font-bold text-gray-600 dark:text-gray-400">CLP</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-5">
                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">3 Páginas Completas</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Home + Servicios + Sobre Nosotros</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">Botón WhatsApp Flotante</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Contacto directo con tus clientes</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">Diseño 100% Responsivo</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Perfecto en todos los dispositivos</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-2">
                      <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                        <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">Entrega Rápida</h3>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Solo 2-5 días hábiles</p>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => window.open('https://wa.me/56936394124?text=Hola!%20Me%20interesa%20la%20oferta%20de%20página%20web%20profesional', '_blank')}
                    className="w-full group relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-sm rounded-lg shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <span className="relative flex items-center justify-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                      ¡Lo Quiero Ahora!
                    </span>
                  </button>

                  {/* Trust Badges */}
                  <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-semibold">Garantía</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span className="font-semibold">Calidad</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-12 sm:mt-16 lg:mt-20 pt-8 sm:pt-10 lg:pt-12 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm xs:text-sm font-bold text-gray-500 dark:text-gray-400 mb-7 xs:mb-8 uppercase tracking-wider text-center px-4">
            Tecnologías que domino
          </p>
          <div className="flex flex-wrap justify-center gap-4 xs:gap-4 sm:gap-5 px-4">
            {[
              { name: 'React', color: 'from-cyan-400 to-blue-500', icon: '⚛️' },
              { name: 'Vue.js', color: 'from-green-400 to-emerald-500', icon: '💚' },
              { name: 'Laravel', color: 'from-red-400 to-red-600', icon: '🔴' },
              { name: 'Node.js', color: 'from-green-500 to-green-700', icon: '🟢' },
              { name: 'Tailwind', color: 'from-sky-400 to-blue-500', icon: '🎨' },
              { name: 'MySQL', color: 'from-blue-600 to-indigo-600', icon: '🗄️' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className="group relative px-5 xs:px-5 sm:px-6 py-3 xs:py-2.5 sm:py-3 bg-white dark:bg-gray-800 rounded-xl xs:rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 rounded-xl xs:rounded-xl transition-opacity`}></div>
                <div className="relative flex items-center gap-2.5 xs:gap-2">
                  <span className="text-2xl xs:text-xl sm:text-2xl">{tech.icon}</span>
                  <span className="font-bold text-base xs:text-base text-gray-700 dark:text-gray-200">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Scroll</span>
            <svg className="w-6 h-6 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
