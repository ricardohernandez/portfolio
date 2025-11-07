import { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const { theme, toggleTheme } = useTheme();

  const navigation = [
    {
      name: 'Inicio',
      id: 'inicio',
      icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'
    },
    {
      name: 'Sobre Mí',
      id: 'sobre-mi',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z'
    },
    {
      name: 'Portafolio',
      id: 'portafolio',
      icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10'
    },
    {
      name: 'Contacto',
      id: 'contacto',
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Top Banner - Professional */}
      <div className="relative w-full bg-gradient-to-r from-slate-900 via-gray-900 to-slate-900 border-b border-gray-700/50 overflow-hidden">
        {/* Subtle animated line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-5 xs:px-6 sm:px-6 lg:px-8 py-2.5 xs:py-3 sm:py-1">
          <div className="flex items-center justify-between gap-3 xs:gap-3 sm:gap-4">
            {/* Left - Status Badge */}
            <div className="flex items-center gap-3 xs:gap-4">
              <div className="hidden xs:flex items-center gap-2 xs:gap-2 text-gray-400 text-base xs:text-base">
                <svg className="w-5 xs:w-5 h-5 xs:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                </svg>
                <span className="hidden sm:inline">Santiago, Chile</span>
              </div>
            </div>

            {/* Right - Contact Info */}
            <div className="flex items-center gap-2 xs:gap-2">
              {/* Email Icon - Visible only on mobile */}
              <a href="mailto:ricardo.hernandez.esp@gmail.com" className="md:hidden flex items-center justify-center text-gray-400 hover:text-cyan-400 transition-colors rounded-md hover:bg-white/5 p-2 xs:p-2">
                <svg className="w-6 xs:w-6 h-6 xs:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </a>
              
              {/* Email Text - Hidden on mobile */}
              <a href="mailto:ricardo.hernandez.esp@gmail.com" className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-gray-400 hover:text-cyan-400 transition-colors">
                <span>ricardo.hernandez.esp@gmail.com</span>
              </a>
              
              {/* GitHub */}
              <a href="https://github.com/ricardohernandez" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-gray-400 hover:text-white transition-colors rounded-md hover:bg-white/5 p-2 xs:p-2">
                <svg className="w-6 xs:w-6 h-6 xs:h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
            
          </div>
        </div>
      </div>

      {/* Main Navigation - Modern Professional */}
      <header className="sticky top-0 z-50 transition-all duration-300">
        <div className="absolute inset-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-700/50"></div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 xs:px-6 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection('inicio')}
                className="group flex items-center gap-3 xs:gap-3 transition-all duration-300"
              >
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl xs:rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                  <div className="relative w-10 xs:w-9 sm:w-12 h-10 xs:h-9 sm:h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl xs:rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-white font-black text-lg xs:text-base sm:text-2xl">R</span>
                  </div>
                </div>
                <div className="block">
                  <span className="block text-lg xs:text-base sm:text-2xl font-black text-gray-900 dark:text-white leading-tight">Ricardo Hernández</span>
                  <span className="block text-sm xs:text-xs sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-0.5">Full Stack Developer</span>
                </div>
              </button>
            </div>

            {/* Desktop Navigation - New Design */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group relative"
                >
                  <div className={`px-4 xl:px-6 py-2 xl:py-3 text-sm xl:text-base font-semibold transition-all duration-300 rounded-lg ${
                    activeSection === item.id
                      ? 'text-white'
                      : 'text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                  }`}>
                    {/* Active background */}
                    {activeSection === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg shadow-lg shadow-cyan-500/30"></div>
                    )}
                    
                    {/* Hover background */}
                    {activeSection !== item.id && (
                      <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    )}
                    
                    <span className="relative z-10 flex items-center gap-1.5 xl:gap-2">
                      <svg className="w-5 xl:w-6 h-5 xl:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/>
                      </svg>
                      {item.name}
                    </span>
                  </div>
                </button>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2.5 xs:gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="w-12 xs:w-11 h-12 xs:h-11 flex items-center justify-center rounded-xl xs:rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <svg className="w-6 xs:w-5 h-6 xs:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
                  </svg>
                ) : (
                  <svg className="w-6 xs:w-5 h-6 xs:h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden w-12 xs:w-11 h-12 xs:h-11 flex items-center justify-center rounded-xl xs:rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg className="w-7 xs:w-6 h-7 xs:h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                ) : (
                  <svg className="w-7 xs:w-6 h-7 xs:h-6 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden absolute w-full bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-xl transition-all duration-300 overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-5 xs:px-4 py-4 xs:py-3 space-y-2.5 xs:space-y-2">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3.5 xs:gap-3 px-4 xs:px-4 py-3.5 xs:py-3 rounded-xl xs:rounded-lg font-semibold text-lg xs:text-lg transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                <svg className="w-6 xs:w-6 h-6 xs:h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/>
                </svg>
                <span>{item.name}</span>
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}
