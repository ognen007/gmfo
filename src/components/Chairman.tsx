import React from 'react';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Chairman = () => {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 hover:shadow-lg">
      <div className="md:grid md:grid-cols-2">
        <div className="relative h-[300px] md:h-full min-h-[400px]">
          <img 
            src="https://i.ibb.co/nNHh5TGM/74b2e5e8-fb70-4052-b9ef-30e159c06be5.jpg"
            alt="Mirčo Krsteski" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        
        <div className="p-6 md:p-8 lg:p-12">
          <h3 className="text-2xl md:text-3xl font-bold mb-2 font-playfair">Mirčo Krsteski</h3>
          <p className="text-secondary font-semibold mb-4 text-lg">{t('chairman.title')}</p>
          <p className="text-gray-600 mb-6 leading-relaxed">
            {t('chairman.description')}
          </p>
          <div className="flex space-x-4 mb-8 items-center">
            <a href="https://www.linkedin.com/in/mirčo-krsteski-13b687104/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
              <Linkedin className="h-6 w-6 transition-colors duration-300" />
            </a>
            <a href="https://x.com/KrsteskiMirco" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary flex items-center justify-center">
              <img 
                src="https://i.ibb.co/rG5fL1vP/image-removebg-preview.png"
                alt="X (formerly Twitter)"
                className="h-6 w-6 invert transition-opacity duration-300 hover:opacity-80"
              />
            </a>
          </div>
          <blockquote className="border-l-4 border-secondary pl-4 italic text-gray-700 text-sm md:text-base">
            {t('chairman.quote')}
          </blockquote>
        </div>
      </div>
    </div>
  );
};

export default Chairman
