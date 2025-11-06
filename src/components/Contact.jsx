import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    // Inicializar EmailJS con tu Public Key
    emailjs.init('Al0nR-GAwR51BoYz_');
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Obtener hora actual
      const now = new Date().toLocaleString('es-CL');

      // Enviar email con EmailJS
      await emailjs.send('service_bos6l34', 'template_8tzfeoe', {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        time: now,
      }, 'Al0nR-GAwR51BoYz_');

      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      title: 'Email',
      value: 'ricardo.hernandez.esp@gmail.com',
      link: 'mailto:ricardo.hernandez.esp@gmail.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      title: 'Teléfono',
      value: '+56 9 3639 4124',
      link: 'tel:+56936394124',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Ubicación',
      value: 'Santiago, Chile',
      link: '#',
      gradient: 'from-red-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
      url: 'https://github.com/ricardohernandez',
      color: 'hover:text-gray-900 dark:hover:text-white'
    }
  ];

  return (
    <section id="contacto" className="relative py-10 lg:py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-900/10"></div>
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl xs:text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-5 sm:mb-6">
            Hablemos de tu{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              proyecto
            </span>
          </h2>
          <p className="max-w-3xl mx-auto text-base xs:text-lg sm:text-lg text-gray-600 dark:text-gray-400">
            ¿Tienes una idea o proyecto en mente? Me encantaría escucharte y ayudarte a hacerlo realidad.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4 sm:space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group block bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-blue-900/20 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-slate-700 shadow-lg hover:shadow-xl p-4 xs:p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 xs:gap-4">
                    <div className={`w-11 xs:w-12 h-11 xs:h-12 bg-gradient-to-br ${info.gradient} rounded-xl xs:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <svg className="w-5 xs:w-6 h-5 xs:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={info.icon}/>
                      </svg>
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs xs:text-sm font-bold text-gray-500 dark:text-gray-400 mb-0.5">
                        {info.title}
                      </div>
                      <div className="text-xs xs:text-sm text-gray-900 dark:text-white font-semibold truncate">
                        {info.value}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>


            {/* Availability Badge */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl shadow-xl p-4 sm:p-6 text-white">
              <div className="flex items-center mb-2">
                <span className="w-2.5 h-2.5 bg-white rounded-full animate-ping mr-2 xs:mr-3"></span>
                <span className="font-bold text-sm xs:text-sm">Disponible</span>
              </div>
              <p className="text-sm xs:text-sm text-white/90">
                Actualmente acepto proyectos freelance y oportunidades de colaboración.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-blue-900/20 backdrop-blur-sm rounded-3xl border border-gray-200 dark:border-slate-700 shadow-2xl p-5 xs:p-6 sm:p-8">
              <div className="space-y-6 sm:space-y-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-xs xs:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 xs:py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl xs:rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                    placeholder="Tu nombre"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-xs xs:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 xs:py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl xs:rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                    placeholder="tu@email.com"
                  />
                </div>

                {/* Subject Input */}
                <div>
                  <label htmlFor="subject" className="block text-xs xs:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 xs:py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl xs:rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-sm xs:text-base"
                    placeholder="¿En qué puedo ayudarte?"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label htmlFor="message" className="block text-xs xs:text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 xs:py-3 bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 rounded-xl xs:rounded-xl text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none text-sm xs:text-base"
                    placeholder="Cuéntame sobre tu proyecto..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 xs:py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm xs:text-base rounded-xl xs:rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 xs:mr-3 h-4 xs:h-5 w-4 xs:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <svg className="w-4 xs:w-5 h-4 xs:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                      </svg>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 xs:p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 rounded-xl xs:rounded-xl text-green-700 dark:text-green-400 font-semibold flex items-center text-xs xs:text-sm">
                    <svg className="w-4 xs:w-5 h-4 xs:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    ¡Mensaje enviado! Te contactaré pronto.
                  </div>
                )}
                
                {submitStatus === 'error' && (
                  <div className="p-3 xs:p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 rounded-xl xs:rounded-xl text-red-700 dark:text-red-400 font-semibold flex items-center text-xs xs:text-sm">
                    <svg className="w-4 xs:w-5 h-4 xs:h-5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
                    </svg>
                    Error al enviar. Intenta de nuevo.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
