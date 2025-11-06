export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel de administración.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['React', 'Laravel', 'MySQL', 'Stripe'],
      gradient: 'from-blue-500 to-cyan-500',
      link: '#'
    },
    {
      title: 'Sistema de Gestión',
      description: 'Sistema ERP para gestión empresarial con módulos de ventas, inventario, recursos humanos y reportería avanzada.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['Vue.js', 'Node.js', 'MySQL', 'Docker'],
      gradient: 'from-green-500 to-emerald-500',
      link: '#'
    },
    {
      title: 'App de Delivery',
      description: 'Aplicación móvil y web para servicio de delivery con tracking en tiempo real, sistema de pagos y chat integrado.',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80',
      tags: ['React Native', 'Firebase', 'Google Maps', 'Redux'],
      gradient: 'from-orange-500 to-red-500',
      link: '#'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interactivo de analíticas con visualización de datos en tiempo real, reportes personalizables y exportación.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
      tags: ['React', 'D3.js', 'FastAPI', 'Redis'],
      gradient: 'from-purple-500 to-pink-500',
      link: '#'
    },
    {
      title: 'Red Social Corporativa',
      description: 'Plataforma social interna para empresas con feed de noticias, chat grupal, compartir archivos y videollamadas.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
      tags: ['Vue.js', 'Laravel', 'WebRTC', 'AWS'],
      gradient: 'from-indigo-500 to-blue-500',
      link: '#'
    },
    {
      title: 'Booking System',
      description: 'Sistema de reservas online para hoteles y servicios con calendario interactivo, pagos y gestión de disponibilidad.',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80',
      tags: ['React', 'GraphQL', 'Prisma', 'Tailwind'],
      gradient: 'from-teal-500 to-green-500',
      link: '#'
    }
  ];

  return (
    <section id="portafolio" className="relative py-10 lg:py-16 bg-gradient-to-b from-white via-gray-50 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            Una selección de proyectos que demuestran mis habilidades en desarrollo full stack
            y diseño de interfaces modernas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
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
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-white text-gray-900 font-bold rounded-xl shadow-2xl hover:scale-110 transition-transform duration-300 flex items-center"
                  >
                    Ver Proyecto
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full border border-gray-200 dark:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Accent */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-16">
          <a
            href="https://github.com/ricardohernandez"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
            </svg>
            Ver más en GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
