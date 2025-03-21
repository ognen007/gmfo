import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t } = useLanguage();

  return (
    <header className="pt-16 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
          alt="Macedonia Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-playfair">
            {t('roots.future')}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold mb-8 font-playfair">
            {t('preserving.past')}
          </p>
          <h2 className="text-xl md:text-2xl mb-6 font-playfair">
            {t('welcome.message')}
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('foundation.description')}
          </p>
          <p className="text-lg md:text-xl mb-12">
            {t('join.message')}
          </p>
          <a 
            href="https://pay.raisenow.io/ndyvq" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors"
          >
            {t('support.vision')} <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
