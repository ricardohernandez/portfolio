export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/ricardohernandez',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
    },
   
  ];

  const quickLinks = [
    { label: 'Inicio', id: 'inicio' },
    { label: 'Sobre Mí', id: 'sobre-mi' },
    { label: 'Portafolio', id: 'portfolio' },
    { label: 'Contacto', id: 'contacto' }
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-slate-950 dark:via-blue-950 dark:to-slate-900 overflow-hidden">
      {/* Light mode border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent dark:via-blue-500/50 dark:from-transparent dark:to-transparent"></div>
      
      {/* Dark mode background effects */}
      <div className="hidden dark:block absolute inset-0">
        <div className="absolute -top-40 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 sm:gap-10 mb-12 sm:mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-400 dark:to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-black text-xl">R</span>
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 dark:text-white">Ricardo Hernández</h2>
                <p className="text-md font-semibold text-blue-600 dark:text-cyan-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-700 dark:text-blue-200 text-sm leading-relaxed max-w-sm">
              Desarrollador Full Stack especializado en crear soluciones web innovadoras, escalables y de alto rendimiento que impactan positivamente en los negocios.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-200 dark:bg-slate-800/60 backdrop-blur-xl hover:bg-blue-500 dark:hover:bg-blue-600 text-gray-700 dark:text-blue-300 hover:text-white rounded-lg flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-4">Enlaces</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 text-sm font-medium"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-wider mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:ricardo.hernandez.esp@gmail.com"
                  className="flex items-start gap-2 text-gray-700 dark:text-blue-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="text-sm font-medium break-all">ricardo.hernandez.esp@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-2 text-gray-700 dark:text-blue-200">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  </svg>
                  <span className="text-sm font-medium">Santiago, Chile</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-slate-700/50"></div>

        {/* Footer Bottom */}
        <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <p className="mx-auto text-gray-600 dark:text-blue-300 text-xs sm:text-sm text-center">
            © {currentYear} Ricardo Hernández. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
