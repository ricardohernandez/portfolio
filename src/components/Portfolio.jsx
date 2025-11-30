import { useState } from 'react';
import { createPortal } from 'react-dom';
import chiletallerImg from '../assets/chiletaller.png';
import slddImg from '../assets/sldd.png';
import chiletallerPwaImg from '../assets/chiletallerpwa.jpg';
import {usePortfolio} from '../hooks/usePortfolio.js';
import { getImageUrl } from '../config/api.js';

// Mapeo de imágenes locales como fallback
const imageMap = {
  'chiletaller': chiletallerImg,
  'sldd': slddImg,
  'chiletallerpwa': chiletallerPwaImg,
};

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalAnimating, setIsModalAnimating] = useState(false);
  const [expandedImage, setExpandedImage] = useState(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);
  const [isImageAnimating, setIsImageAnimating] = useState(false);
  const { portfolio, loading, error } = usePortfolio();

  // Función para obtener la imagen correcta
  const getProjectImage = (project) => {
    if (!project) return '';
    
    // Si tiene imagen en el backend, usarla (puede ser image_url o image)
    const imagePath = project.image_url || project.image;
    if (imagePath) {
      return getImageUrl(imagePath);
    }
    
    // Fallback a imágenes locales mapeadas
    const key = project.title?.toLowerCase().replace(/\s+/g, '') || '';
    return imageMap[key] || chiletallerImg;
  };

  // Función para parsear datos JSON del backend
  const parseJsonField = (field) => {
    if (!field) return [];
    if (Array.isArray(field)) return field;
    if (typeof field === 'string') {
      try {
        return JSON.parse(field);
      } catch (e) {
        return [];
      }
    }
    return [];
  };
 

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    setTimeout(() => setIsModalAnimating(true), 10);
  };

  const closeModal = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setIsModalOpen(false);
      setSelectedProject(null);
    }, 300);
  };

  const openExpandedImage = (image) => {
    setExpandedImage(image);
    setIsImageExpanded(true);
    setTimeout(() => setIsImageAnimating(true), 10);
  };

  const closeExpandedImage = () => {
    setIsImageAnimating(false);
    setTimeout(() => {
      setIsImageExpanded(false);
      setExpandedImage(null);
    }, 300);
  };

 
  return (
    <section id="portafolio" className="relative py-10 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      <div className="absolute top-40 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-5 sm:mb-6 px-4">
            Proyectos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base xs:text-lg sm:text-lg text-gray-600 dark:text-gray-400 px-5">
            Una selección de proyectos que demuestran mis habilidades en desarrollo full stack
            y diseño de interfaces modernas.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolio.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-slate-800 rounded-3xl border border-gray-200 dark:border-slate-700 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-40 xs:h-44 sm:h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-90`}></div>
                <img
                  src={getProjectImage(project)}
                  alt={`Proyecto ${project.title} - ${project.description.substring(0, 100)}`}
                  loading="lazy"
                  width="400"
                  height="192"
                  className="w-full h-full object-cover mix-blend-overlay group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 xs:p-5 sm:p-6">
                <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white mb-3 xs:mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm xs:text-sm leading-relaxed mb-4 xs:mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 xs:gap-2 mb-4 xs:mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 xs:px-3 py-1 xs:py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full border border-gray-200 dark:border-slate-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <button
                  onClick={() => openModal(project)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 xs:py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm xs:text-sm rounded-xl hover:scale-105 transition-transform shadow-lg"
                  aria-label={`Ver detalles del proyecto ${project.title}`}
                >
                  <svg className="w-4 xs:w-4 h-4 xs:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  Ver Proyecto
                </button>
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
        {selectedProject && createPortal(
          <div 
            className={`fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 overflow-y-auto transition-all duration-300 ${
              isModalAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeModal}
          >
            <div 
              className={`relative bg-white dark:bg-slate-800 rounded-3xl w-[98%] max-w-screen-2xl max-h-[95vh] h-full shadow-2xl [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gradient-to-b [&::-webkit-scrollbar-thumb]:from-blue-500 [&::-webkit-scrollbar-thumb]:to-indigo-600 [&::-webkit-scrollbar-thumb]:rounded-full overflow-hidden flex flex-col lg:flex-row transform transition-all duration-300 ${
                isModalAnimating ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button - Top Right of Modal */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-xl p-2.5 hover:scale-110 transition-transform shadow-lg z-20"
                aria-label="Cerrar modal de proyecto"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              {/* Desktop: Left Side - Image */}
              <div className="hidden lg:flex lg:w-2/5 relative flex-shrink-0 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-90`}></div>
                <img
                  src={getProjectImage(selectedProject)}
                  alt={`Proyecto ${selectedProject.title} - vista detallada`}
                  loading="eager"
                  width="400"
                  height="500"
                  className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                {/* Expand Image Button */}
                <button
                  onClick={() => openExpandedImage(getProjectImage(selectedProject))}
                  className="absolute top-4 left-4 bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-xl p-2.5 hover:scale-110 transition-transform shadow-lg z-10"
                  aria-label="Ver imagen en pantalla completa"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4m-4 0l5 5m11-5v4m0-4h-4m4 0l-5 5M4 20v-4m0 4h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/>
                  </svg>
                </button>

                {/* Title on Image */}
                <div className="absolute bottom-0 left-0 right-0 p-5 xs:p-6">
                  <h2 className="text-xl xs:text-2xl sm:text-3xl font-black text-white drop-shadow-lg">
                    {selectedProject.title}
                  </h2>
                </div>
              </div>

              {/* Right Side / Mobile: Content */}
              <div className="w-full lg:w-3/5 overflow-y-auto flex flex-col h-full">
                {/* Mobile Header Image */}
                <div className="lg:hidden relative h-64 xs:h-72 overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${selectedProject.gradient} opacity-90`}></div>
                  <img
                    src={getProjectImage(selectedProject)}
                    alt={`Proyecto ${selectedProject.title} - vista detallada`}
                    loading="eager"
                    width="400"
                    height="192"
                    className="w-full h-full object-cover mix-blend-overlay"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                  {/* Expand Image Button */}
                  <button
                    onClick={() => openExpandedImage(getProjectImage(selectedProject))}
                    className="absolute top-2 left-2 bg-white/90 dark:bg-slate-700/90 backdrop-blur-sm text-gray-900 dark:text-white rounded-lg p-1.5 hover:scale-110 transition-transform shadow-lg z-10"
                    aria-label="Ver imagen en pantalla completa"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4m-4 0l5 5m11-5v4m0-4h-4m4 0l-5 5M4 20v-4m0 4h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5"/>
                    </svg>
                  </button>

                  {/* Title on Image */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 xs:p-4">
                    <h2 className="text-base xs:text-lg font-black text-white drop-shadow-lg">
                      {selectedProject.title}
                    </h2>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-5 xs:p-6 sm:p-7 lg:p-8 overflow-y-auto flex-1 space-y-6 xs:space-y-7">
                  {/* Project Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                      </svg>
                      Descripción del Proyecto
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm xs:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Project Context - Challenge */}
                  {selectedProject.challenge && (
                    <div className="space-y-3">
                      <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z"/>
                        </svg>
                        Contexto del Problema
                      </h3>
                      <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 rounded-r-lg">
                        <p className="text-red-700 dark:text-red-200 text-sm xs:text-base leading-relaxed">
                          {selectedProject.challenge}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Solution Approach */}
                  {selectedProject.solution && (
                    <div className="space-y-3">
                      <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                        </svg>
                        Enfoque de Solución
                      </h3>
                      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg">
                        <p className="text-blue-700 dark:text-blue-200 text-sm xs:text-base leading-relaxed">
                          {selectedProject.solution}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Technical Stack */}
                  <div className="space-y-3">
                    <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                      </svg>
                      Stack Tecnológico
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2 xs:gap-3">
                      {parseJsonField(selectedProject.stack || selectedProject.technologies).map((tech, i) => (
                        <div
                          key={i}
                          className={`p-3 bg-gradient-to-r ${selectedProject.gradient} bg-opacity-10 rounded-xl border border-gray-200 dark:border-slate-700 hover:shadow-md transition-shadow`}
                        >
                          <span className="text-gray-700 dark:text-gray-300 font-semibold text-sm block text-center">
                            {tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Features */}
                  <div className="space-y-3">
                    <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                      Características Principales
                    </h3>
                    <div className="grid grid-cols-1 gap-2 xs:gap-3">
                      {parseJsonField(selectedProject.features).map((feature, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-slate-800/50 rounded-lg border border-gray-200 dark:border-slate-700">
                          <span className={`flex-shrink-0 h-5 w-5 bg-gradient-to-r ${selectedProject.gradient} rounded-full flex items-center justify-center mt-0.5`}>
                            <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                            </svg>
                          </span>
                          <span className="text-gray-700 dark:text-gray-300 text-sm xs:text-base leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results & Impact */}
                  {selectedProject.impact && (
                    <div className="space-y-3">
                      <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                        </svg>
                        Resultados e Impacto
                      </h3>
                      <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r-lg">
                        <p className="text-green-700 dark:text-green-200 text-sm xs:text-base leading-relaxed font-medium">
                          {selectedProject.impact}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Action Links */}
                  {(selectedProject.demo_url || selectedProject.github_url) && (
                    <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-slate-700">
                      <h3 className="text-lg xs:text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                        <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/>
                        </svg>
                        Enlaces del Proyecto
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-3">
                        {selectedProject.demo_url && (
                          <a
                            href={selectedProject.demo_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                            </svg>
                            Ver Demo
                          </a>
                        )}
                        {selectedProject.github_url && (
                          <a
                            href={selectedProject.github_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gray-800 dark:bg-gray-700 text-white font-bold rounded-xl hover:scale-105 transition-transform shadow-lg"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                            </svg>
                            Ver Código
                          </a>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}

        {/* Expanded Image Modal */}
        {expandedImage && createPortal(
          <div 
            className={`fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 overflow-y-auto transition-all duration-300 ${
              isImageAnimating ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            onClick={closeExpandedImage}
          >
            <div 
              className={`relative max-w-4xl w-full max-h-[90vh] flex flex-col transform transition-all duration-300 ${
                isImageAnimating ? 'scale-100 translate-y-0 opacity-100' : 'scale-95 translate-y-10 opacity-0'
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeExpandedImage}
                className="absolute top-4 right-4 bg-white dark:bg-slate-700 text-gray-900 dark:text-white rounded-xl p-3 hover:scale-110 transition-transform shadow-lg z-10"
                aria-label="Cerrar imagen expandida"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>

              {/* Image Container */}
              <div className="flex items-center justify-center overflow-auto">
                <img
                  src={expandedImage}
                  alt="Proyecto expandido"
                  className="max-w-full max-h-[calc(90vh-2rem)] w-auto h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  );
}
