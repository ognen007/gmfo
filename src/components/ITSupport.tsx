import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ITSupport = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg p-8 pb-12 border border-gray-200">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-3 bg-primary rounded-full mb-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2 font-playfair">
                {t('it.support.by')}
              </h3>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="md:grid md:grid-cols-3">
                <div className="relative h-64 md:h-auto">
                  <img 
                    src="https://i.ibb.co/wZ9d38K4/image.png"
                    alt="IT Support Professional"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="md:col-span-2 p-8 flex flex-col justify-center space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2 font-playfair">
                      {t('ognen.veljanovski')}
                    </h3>
                    <p className="text-secondary font-medium mb-3 text-sm">{t('ognen.title')}</p>
                  </div>
                  <div>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {t('it.support.description')}
                    </p>
                  </div>
                  
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-y-2">
                      <p className="text-gray-600 font-medium">{t('professional.network')}</p>
                    </div>
                    <div className="flex space-x-3">
                      <a href="https://www.linkedin.com/in/ognen-veljanovski-470069238/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSupport;