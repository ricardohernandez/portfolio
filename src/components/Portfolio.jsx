import { useState } from 'react';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'Chiletaller.cl',
      description: 'Plataforma integral de servicios automotrices que conecta usuarios con talleres certificados. Sistema de cotizaciones dinámicas, contratos inteligentes, pagos integrados con Transbank y negociación de precios en tiempo real.',
      image: '/src/assets/chiletaller.png',
      tags: ['Laravel 10', 'Vue.js', 'MySQL', 'Transbank', 'Redis', 'Docker', 'Inertia'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '#',
      features: [
        'Cotizaciones dinámicas y automáticas',
        'Sistema de pagos integrado con Transbank',
        'Contratos inteligentes digitales',
        'Negociación de precios en tiempo real',
        'Gestor de talleres certificados',
        'Rating y reseñas de usuarios'
      ]
    },
    {
      title: 'SLDD - Sistema de Distribución',
      description: 'Sistema de gestión integral para proyectos de infraestructura de telecomunicaciones con control de construcción, certificaciones, mediciones, pagos y gestión de avances con seguimiento de personal de obra.',
      image: '/src/assets/sldd.png',
      tags: ['CodeIgniter', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap', 'jQuery'],
      gradient: 'from-green-500 to-emerald-500',
      link: '#',
      features: [
        'Control de construcción y avances',
        'Gestión de mediciones y certificaciones',
        'Sistema de pagos integrado',
        'Seguimiento de personal de obra',
        'Reportes detallados por fase',
        'Control de proveedores y materiales'
      ]
    },
    {
      title: 'Chiletaller Mobile',
      description: 'Aplicación móvil PWA para iOS y Android desarrollada con Quasar Framework. Permite a usuarios y talleros gestionar solicitudes de servicios, cotizaciones, contratos y pagos desde dispositivos móviles con interfaz optimizada.',
      image: '/src/assets/chiletallerpwa.jpg',
      tags: ['Quasar', 'Vue 3', 'Capacitor', 'Pinia', 'Tailwind CSS', 'PWA', 'Axios'],
      gradient: 'from-orange-500 to-red-500',
      link: '#',
      features: [
        'PWA con soporte offline',
        'Compilación nativa para iOS y Android',
        'Gestión de solicitudes de servicios',
        'Cotizaciones en tiempo real',
        'Pagos integrados',
        'Notificaciones push en tiempo real'
      ]
    },
  
  ];

  return (
    <section id="portafolio" className="relative py-10 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base xs:text-lg sm:text-lg text-gray-600 dark:text-gray-400">
            Una selección de proyectos que demuestran mis habilidades en desarrollo full stack
            y diseño de interfaces modernas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-40 xs:h-44 sm:h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="px-4 xs:px-6 py-2 xs:py-3 bg-white text-gray-900 font-bold text-sm xs:text-base rounded-lg xs:rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center"
                  >
                    Ver Proyecto
                    <svg className="w-4 xs:w-5 h-4 xs:h-5 ml-1.5 xs:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 xs:p-5 sm:p-6">
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-2 xs:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-xs xs:text-sm leading-relaxed mb-3 xs:mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 xs:gap-2">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 xs:px-3 py-0.5 xs:py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full border border-gray-200 dark:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 xs:px-3 py-0.5 xs:py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <a
            href="https://github.com/ricardohernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 xs:px-8 py-3 xs:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm xs:text-base rounded-xl xs:rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 xs:w-6 h-5 xs:h-6 mr-2 xs:mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
            Ver más en GitHub
          </a>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div 
              className="bg-white dark:bg-slate-800 rounded-2xl xs:rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-blue-500 [&::-webkit-scrollbar-thumb]:to-indigo-600 [&::-webkit-scrollbar-thumb]:rounded-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Image */}
              <div className="relative h-48 xs:h-56 sm:h-64 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-90`}></div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-3 xs:top-4 right-3 xs:right-4 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-lg p-1.5 xs:p-2 hover:scale-110 transition-transform"
                >
                  <svg className="w-5 xs:w-6 h-5 xs:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>

                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-4 xs:p-6">
                  <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black text-white">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 xs:p-8">
                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-base xs:text-lg leading-relaxed mb-6 xs:mb-8">
                  {selectedProject.description}
                </p>

                {/* Technologies */}
                <div className="mb-6 xs:mb-8">
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-4">
                    Tecnologías Utilizadas
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 xs:gap-3">
                    {selectedProject.tags.map((tag, i) => (
                      <div
                        key={i}
                        className={`p-2 xs:p-3 bg-gradient-to-r ${selectedProject.gradient} bg-opacity-10 rounded-lg xs:rounded-xl border border-gray-200 dark:border-slate-700`}
                      >
                        <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm xs:text-base">
                          {tag}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6 xs:mb-8">
                  <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-4">
                    Características Principales
                  </h3>
                  <ul className="space-y-2 xs:space-y-3">
                    {selectedProject.features?.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 xs:gap-3">
                        <span className={`flex-shrink-0 h-5 xs:h-6 w-5 xs:w-6 bg-gradient-to-r ${selectedProject.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                          <svg className="h-3 xs:h-4 w-3 xs:w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                        </span>
                        <span className="text-gray-700 dark:text-gray-300 text-sm xs:text-base">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
