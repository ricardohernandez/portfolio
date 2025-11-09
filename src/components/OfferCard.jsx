export default function OfferCard() {
  return (
    <div className="relative animate-fade-in-up w-full lg:w-auto">
      <div className="relative">
        {/* Offer Card */}
        <div className="relative rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
          {/* Gradient border effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-400 to-pink-400 dark:from-orange-500 dark:via-red-500 dark:to-pink-500 opacity-75"></div>
          <div className="relative bg-white dark:bg-gray-900 m-[2px] rounded-[14px] p-5 lg:p-6">
            
            {/* Badge */}
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-full text-xs font-black uppercase animate-pulse">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"/>
                </svg>
                Oferta Relámpago
              </span>
            </div>

            {/* Title */}
            <h2 className="text-xl lg:text-2xl font-black text-gray-900 dark:text-white mb-2">
              Página Web{' '}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Profesional
              </span>
            </h2>
            
            <p className="text-xs lg:text-sm text-gray-600 dark:text-gray-400 mb-4">
              Presencia digital completa para tu negocio
            </p>

            {/* Price */}
            <div className="mb-5 p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-sm text-gray-400 dark:text-gray-500 line-through font-bold">$400.000</span>
                <span className="px-1.5 py-0.5 bg-red-500 text-white text-xs font-black rounded-full">-37.5%</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl lg:text-4xl font-black bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                  $250.000
                </span>
                <span className="text-lg font-bold text-gray-600 dark:text-gray-400">CLP</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-2 mb-5">
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">4 Páginas Completas</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Home + Servicios + Sobre Nosotros + Contacto</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">Botón WhatsApp Flotante</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Contacto directo con tus clientes</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">Diseño 100% Responsivo</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Perfecto en todos los dispositivos</p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 w-4 h-4 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mt-0.5">
                  <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-xs lg:text-sm text-gray-900 dark:text-white">Entrega Rápida</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Solo 2-5 días hábiles</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => window.open('https://wa.me/56936394124?text=Hola!%20Me%20interesa%20la%20oferta%20de%20página%20web%20profesional', '_blank')}
              className="w-full group relative px-6 py-3 bg-gradient-to-r from-blue-800 to-blue-900 dark:from-blue-900 dark:to-slate-950 text-white font-bold text-sm rounded-lg shadow-lg shadow-blue-900/40 hover:shadow-blue-900/60 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-slate-950 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                ¡Lo Quiero Ahora!
              </span>
            </button>

            {/* Trust Badges */}
            <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">Garantía</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
                <span className="font-semibold">Calidad</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
