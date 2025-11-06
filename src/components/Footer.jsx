export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start mb-3 xs:mb-4">
              <div className="w-9 xs:w-10 h-9 xs:h-10 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg xs:rounded-xl flex items-center justify-center mr-2 xs:mr-3">
                <span className="text-white font-bold text-lg xs:text-xl">R</span>
              </div>
              <span className="text-lg xs:text-2xl lg:text-3xl font-bold">Ricardo Hernández</span>
            </div>
            <p className="text-blue-200 text-xs xs:text-sm lg:text-base leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras y escalables.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-base xs:text-lg lg:text-xl font-bold mb-3 xs:mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-1.5 xs:space-y-2">
              {['Inicio', 'Sobre Mí', 'Portafolio', 'Contacto'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-')).scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-xs xs:text-sm lg:text-base"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right">
            <h3 className="text-base xs:text-lg lg:text-xl font-bold mb-3 xs:mb-4">Contacto</h3>
            <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm lg:text-base">
              <li className="flex items-center justify-center sm:justify-end text-blue-200 gap-1.5 xs:gap-2">
                <svg className="w-4 xs:w-5 h-4 xs:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:ricardo.hernandez.esp@gmail.com" className="hover:text-white transition-colors line-clamp-1">
                  ricardo.hernandez.esp@gmail.com
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-end text-blue-200 gap-1.5 xs:gap-2">
                <svg className="w-4 xs:w-5 h-4 xs:h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <a href="https://github.com/ricardohernandez" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  GitHub
                </a>
              </li>
              <li className="flex items-center justify-center sm:justify-end text-blue-200 gap-1.5 xs:gap-2">
                <svg className="w-4 xs:w-5 h-4 xs:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                Santiago, Chile
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-800/50 pt-6 sm:pt-8 flex justify-center">
          <p className="text-blue-200 text-xs xs:text-sm lg:text-base text-center">
            © {currentYear} Ricardo Hernández. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
