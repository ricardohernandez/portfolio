import { useState, useEffect } from 'react';

export default function HeroSlider() {
  // Datos de los 3 sliders
  const sliders = [
    {
      id: 'general',
      h1: 'Desarrollo Ágil de Soluciones Hechas a Medida',
      h1Highlight: 'Soluciones Hechas a Medida',
      roles: ['Desarrollo Ágil', 'Soluciones Hechas a Medida', 'Apps Empresariales', 'Consultoría Técnica'],
      proposals: [
        'Desarrollo soluciones web ágiles que impulsan el crecimiento de tu negocio con entregas rápidas y resultados medibles.',
        'Creo aplicaciones web personalizadas que optimizan procesos y maximizan la eficiencia operativa de tu empresa.',
        'Innovo con aplicaciones web escalables que transforman ideas en oportunidades reales de negocio sostenible.',
        'Construyo aplicaciones web confiables que generan retorno de inversión inmediato y fortalecen tu presencia digital.',
        'Transformo conceptos en aplicaciones web de alto rendimiento que elevan la experiencia de tus usuarios y potencian tus ventas.'
      ]
    },
    {
      id: 'startup',
      h1: 'Impulsa tu Startup con Desarrollo Rápido y Escalable',
      h1Highlight: 'Desarrollo Rápido y Escalable',
      roles: ['Desarrollo Ágil', 'Soluciones Hechas a Medida', 'Apps Empresariales', 'Consultoría Técnica'],
      proposals: [
        'Transformo ideas de startup en productos digitales funcionales que atraen inversores y usuarios rápidamente.',
        'Construyo MVPs escalables que validan tu concepto de negocio sin invertir meses de desarrollo.',
        'Creo aplicaciones web de alto crecimiento diseñadas para escalar desde día uno con cientos de usuarios.',
        'Desarrollo soluciones tech innovadoras que posicionan tu startup como competencia en el mercado.',
        'Acelero el time-to-market de tu producto con metodologías ágiles y arquitectura cloud-ready.'
      ]
    },
    {
      id: 'enterprise',
      h1: 'Transformación para Empresas: Eficiencia y Resultados',
      h1Highlight: 'Eficiencia y Resultados',
      roles: ['Desarrollo Ágil', 'Soluciones Hechas a Medida', 'Apps Empresariales', 'Consultoría Técnica'],
      proposals: [
        'Digitalización de  procesos empresariales complejos en sistemas web confiables que generan ahorros inmediatos.',
        'Creo soluciones empresariales robustas que integran tus sistemas existentes y multiplican tu productividad.',
        'Implemento aplicaciones web corporativas seguras que cumplen normativas y escalan con tu organización.',
        'Automatizo operaciones críticas de tu empresa con plataformas web personalizadas y de alto rendimiento.',
        'Transformo datos dispersos en sistemas inteligentes que dan visibilidad total de tu negocio en tiempo real.'
      ]
    }
  ];

  // Estado para slider actual y textos animados
  const [sliderIndex, setSliderIndex] = useState(0);
  const currentSlider = sliders[sliderIndex];

  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Resetear progreso solo cuando cambia el slider
  useEffect(() => {
    setProgress(0);
  }, [sliderIndex]);

  // Efecto para controlar el progreso del slider
  useEffect(() => {
    if (isHovered) return; // Pausar si el ratón está encima

    let hasChangedSlider = false; // Flag para evitar cambios múltiples

    const interval = setInterval(() => {
      setProgress((prev) => {
        const SLIDER_DURATION = 5000; // Duración en milisegundos (5 segundos)
        const UPDATE_INTERVAL = 50; // Actualización cada 50ms
        const increment = (UPDATE_INTERVAL / SLIDER_DURATION) * 100;
        const newProgress = prev + increment;

        if (newProgress >= 100 && !hasChangedSlider) {
          hasChangedSlider = true;
          clearInterval(interval); // Detener el intervalo inmediatamente
          
          setIsTransitioning(true);
          setTimeout(() => {
            setSliderIndex((prevIndex) => {
              const nextIndex = (prevIndex + 1) % sliders.length;
              return nextIndex;
            });
            setDisplayedText('');
            setRoleIndex(0);
            setIsDeleting(false);
            setIsTransitioning(false);
          }, 300);
          return 100;
        }
        return newProgress;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isHovered, sliders.length, sliderIndex]);

  useEffect(() => {
    const currentRole = currentSlider.roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayedText === '') {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % currentSlider.roles.length);
      } else {
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex, sliderIndex]);

  return (
    <div className="space-y-6 sm:space-y-8 animate-fade-in-up">
      {/* Main Heading */}
      <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white leading-tight mb-3 sm:mb-4">
          {currentSlider.h1.split(currentSlider.h1Highlight)[0]}
          <span className="bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
            {currentSlider.h1Highlight}
          </span>
          {currentSlider.h1.split(currentSlider.h1Highlight)[1]}
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
      <p className={`text-base xs:text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl font-medium min-h-[80px] transition-all duration-300 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <span className="font-bold text-cyan-600 dark:text-cyan-400">
          {currentSlider.proposals[0]}
        </span>
      </p>

      {/* Slider Progress Bar */}
      <div className="w-full max-w-xl mx-0 flex justify-center">
        {/* Progress Bar Container */}
        <div 
          className="w-full flex items-center gap-2"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {sliders.map((_, index) => (
            <div
              key={index}
              className="flex-1 h-1 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden cursor-pointer hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors duration-300"
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setSliderIndex(index);
                  setDisplayedText('');
                  setRoleIndex(0);
                  setIsDeleting(false);
                  setIsTransitioning(false);
                  setProgress(0);
                }, 300);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Ir al slider ${index + 1}`}
            >
              <div
                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-100"
                style={{
                  width: index === sliderIndex ? `${progress}%` : '0%'
                }}
              />
            </div>
          ))}
        </div>
      </div>
      
      <p className="text-sm xs:text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl">
         Desde startups hasta empresas consolidadas: desarrollo soluciones personalizadas con las últimas tecnologías.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
        <button
          onClick={() => document.getElementById('portafolio').scrollIntoView({ behavior: 'smooth' })}
          className="group relative px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm xs:text-base rounded-xl shadow-2xl shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 hover:scale-105 overflow-hidden"
          aria-label="Ver proyectos de portafolio"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <span className="relative flex items-center justify-center gap-2">
            <svg className="w-4 xs:w-5 h-4 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
            </svg>
            Ver Mi Trabajo
          </span>
        </button>

        <button
          onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
          className="px-6 xs:px-8 py-3 xs:py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-bold text-sm xs:text-base rounded-xl border-2 border-cyan-500 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          aria-label="Ir a sección de contacto"
        >
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 xs:w-5 h-4 xs:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            Hablemos de tu Proyecto
          </span>
        </button>
      </div>
    </div>
  );
}
