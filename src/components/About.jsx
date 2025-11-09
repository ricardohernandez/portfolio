export default function About() {
  const skills = [
    {
      category: 'Frontend',
      color: 'from-blue-500 to-cyan-500',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      items: ['Vue.js', 'React', 'Quasar', 'Tailwind CSS', 'HTML5/CSS3']
    },
    {
      category: 'Backend',
      color: 'from-purple-500 to-pink-500',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
      items: ['Laravel', 'Node.js', 'Codeigniter', 'WordPress', 'WooCommerce', 'RESTful APIs']
    },
    {
      category: 'Base de Datos',
      color: 'from-indigo-500 to-blue-500',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
      items: ['MySQL', 'Redis', 'PostgreSQL']
    },
    {
      category: 'DevOps & Tools',
      color: 'from-orange-500 to-red-500',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      items: ['Git', 'Docker', 'AWS , DO', 'CI/CD', 'Linux']
    }
  ];

  return (
    <section id="sobre-mi" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-black overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0">
        {/* Light mode background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10 dark:hidden"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl hidden dark:block"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl hidden dark:block"></div>
        
        {/* Dark mode background */}
        <div className="hidden dark:block absolute inset-0">
          {/* Animated gradient blobs */}
          <div className="absolute -top-40 -right-40 w-80 sm:w-96 h-80 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 sm:w-96 h-80 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 sm:w-full h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
          
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41IiBzdHJva2Utb3BhY2l0eT0iMC4wNSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-4 sm:mb-6">
            Conoce mi{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:via-cyan-400 dark:to-indigo-500 bg-clip-text text-transparent">
              experiencia
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base xs:text-lg sm:text-lg text-gray-600 dark:text-slate-300 px-4">
            Desarrollador Full Stack con más de 5 años de experiencia creando soluciones web innovadoras
            y escalables que impactan positivamente en los negocios.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative h-full animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
              
              {/* Card content */}
              <div className="relative h-full bg-white dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-slate-700/50 dark:group-hover:border-slate-600/80 shadow-xl dark:shadow-none p-6 sm:p-7 lg:p-8 transition-all duration-500 overflow-hidden hover:shadow-lg dark:hover:shadow-none">
                
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/0 via-slate-700/0 to-slate-700/0 group-hover:from-blue-500/10 group-hover:via-cyan-500/5 group-hover:to-slate-800/10 transition-all duration-500 dark:block hidden"></div>

                {/* Content */}
                <div className="relative z-10 space-y-5">
                  {/* Icon Container */}
                  <div className="flex justify-center">
                    <div className={`relative w-16 h-16 sm:w-18 sm:h-18 bg-gradient-to-br ${skill.color} rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300`}>
                      {/* Floating animation */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-xl sm:rounded-2xl group-hover:animate-pulse"></div>
                      
                      <svg className="relative w-8 h-8 sm:w-9 sm:h-9 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d={skill.icon}/>
                      </svg>
                    </div>
                  </div>

                  {/* Category Title */}
                  <div className="text-center space-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-blue-300 dark:group-hover:to-cyan-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {skill.category}
                    </h3>
                    <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-blue-500 dark:to-cyan-500 rounded-full mx-auto group-hover:w-12 transition-all duration-300"></div>
                  </div>

                  {/* Skills List */}
                  <ul className="space-y-2.5 sm:space-y-3 pt-2">
                    {skill.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-center text-gray-700 dark:text-slate-300 text-sm sm:text-base dark:group-hover:text-white transition-colors duration-300 transform dark:group-hover:translate-x-1 delay-100"
                        style={{ transitionDelay: `${i * 50}ms` }}
                      >
                        <div className="relative flex-shrink-0">
                          <svg className="w-5 h-5 sm:w-5 sm:h-5 text-blue-500 dark:text-cyan-400 mr-3 transition-all duration-300 dark:group-hover:text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                          </svg>
                        </div>
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/0 via-white/0 to-white/0 group-hover:from-white/10 group-hover:via-white/5 group-hover:to-white/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom accent */}
     
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
}
