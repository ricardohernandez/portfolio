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
              <span className="text-xl xs:text-2xl font-bold">Ricardo Hernández</span>
            </div>
            <p className="text-blue-200 text-xs xs:text-sm leading-relaxed">
              Desarrollador Full Stack apasionado por crear soluciones web innovadoras y escalables.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-base xs:text-lg font-bold mb-3 xs:mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-1.5 xs:space-y-2">
              {['Inicio', 'Sobre Mí', 'Portafolio', 'Contacto'].map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.getElementById(item.toLowerCase().replace(' ', '-')).scrollIntoView({ behavior: 'smooth' })}
                    className="text-blue-200 hover:text-white transition-colors duration-300 text-xs xs:text-sm"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center sm:text-right">
            <h3 className="text-base xs:text-lg font-bold mb-3 xs:mb-4">Contacto</h3>
            <ul className="space-y-2 xs:space-y-3 text-xs xs:text-sm">
              <li className="flex items-center justify-center sm:justify-end text-blue-200 gap-1.5 xs:gap-2">
                <svg className="w-4 xs:w-5 h-4 xs:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="line-clamp-1">ricardo@ejemplo.com</span>
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
          <p className="text-blue-200 text-xs xs:text-sm text-center">
            © {currentYear} Ricardo Hernández. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
