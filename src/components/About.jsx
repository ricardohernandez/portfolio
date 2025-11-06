export default function About() {
  const skills = [
    {
      category: 'Frontend',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      items: ['Vue.js', 'React', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      category: 'Backend',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      items: ['Laravel', 'Node.js', 'PHP', 'RESTful APIs', 'GraphQL']
    },
    {
      category: 'Base de Datos',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      items: ['MySQL', 'Redis', 'MongoDB', 'PostgreSQL']
    },
    {
      category: 'DevOps & Tools',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      items: ['Git', 'Docker', 'AWS , DO', 'CI/CD', 'Linux']
    }
  ];

  return (
    <section id="sobre-mi" className="relative py-10 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
            Conoce mi{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              experiencia
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base xs:text-lg sm:text-lg text-gray-600 dark:text-gray-400">
            Desarrollador Full Stack con más de 5 años de experiencia creando soluciones web innovadoras
            y escalables que impactan positivamente en los negocios.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="mb-16 sm:mb-20">
          {/* About Text */}
          <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
            <div className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl p-6 xs:p-7 sm:p-8">
              <div className="flex items-start gap-3 xs:gap-4 mb-4 xs:mb-6">
                <div className="w-10 xs:w-12 h-10 xs:h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg xs:rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 xs:w-6 h-5 xs:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl xs:text-2xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-4">
                    Mi Historia
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3 xs:mb-4 text-sm xs:text-base">
                    Comencé mi viaje en el desarrollo web hace más de 5 años, y desde entonces he estado
                    comprometido con la creación de experiencias digitales excepcionales. Mi pasión por la
                    tecnología me impulsa a estar siempre aprendiendo y adoptando las últimas tendencias.
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm xs:text-base">
                    Me especializo en construir aplicaciones web modernas, escalables y de alto rendimiento,
                    trabajando tanto en el frontend como en el backend. Disfruto enfrentarme a desafíos
                    complejos y convertirlos en soluciones elegantes y eficientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 xs:gap-4 sm:gap-6">
              {[
                { number: '5+', label: 'Años de Experiencia', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
                { number: '50+', label: 'Proyectos Completados', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
                { number: '20+', label: 'Clientes Satisfechos', icon: 'M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl p-4 xs:p-5 sm:p-6 text-center transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-10 xs:w-12 h-10 xs:h-12 mx-auto mb-3 xs:mb-4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg xs:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-5 xs:w-6 h-5 xs:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon}/>
                    </svg>
                  </div>
                  <div className="text-3xl xs:text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent mb-1 xs:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs xs:text-sm font-bold text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div>
          <h3 className="text-2xl xs:text-3xl font-bold text-gray-900 dark:text-white mb-8 xs:mb-10 text-center">
            Habilidades Técnicas
          </h3>
          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-5 sm:gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group bg-white dark:bg-gray-800 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl p-5 xs:p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 dark:hover:border-cyan-400"
              >
                <div className="w-12 xs:w-14 h-12 xs:h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl xs:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg className="w-6 xs:w-7 h-6 xs:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={skill.icon}/>
                  </svg>
                </div>
                <h4 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-4">
                  {skill.category}
                </h4>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300 text-sm xs:text-base">
                      <svg className="w-4 h-4 text-cyan-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
