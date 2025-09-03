import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Linkedin, Facebook } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

const Ambassadors = () => {
  const { t, language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const truncateText = (text: string, wordLimit: number = 30) => {
    const words = text.split(' ');
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(' ') + '...';
  };

  const toggleExpanded = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 relative">
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              {t('ambassadors')}
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              {t('ambassadors.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Ambassadors Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-80">
                <img 
                  src="https://i.ibb.co/4RfLf983/image.png"
                  alt="Assoc. Prof. Dr. Stojanche Kostov"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/800px-Flag_of_North_Macedonia.svg.png"
                  alt="Macedonian flag"
                  className="absolute bottom-2 right-2 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-playfair">
                  {language === 'en' ? 'Assoc. Prof. Dr. Stojanche Kostov' : 'Доц. д-р Стојанче Костов'}
                </h3>
                <p className="text-secondary font-medium mb-3 text-sm">{t('kostov.title')}</p>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                    {expandedCard === 'kostov' ? t('kostov.description') : truncateText(t('kostov.description'))}
                  </p>
                  
                  {expandedCard === 'kostov' && (
                    <>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        📍 {t('kostov.focus')}
                      </p>
                      <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                        {t('kostov.quote')}
                      </blockquote>
                    </>
                  )}
                  
                  <button
                    onClick={() => toggleExpanded('kostov')}
                    className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                  >
                    {expandedCard === 'kostov' ? t('show.less') : t('read.more')}
                    {expandedCard === 'kostov' ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                    }
                  </button>
                </div>
                
                <div className="flex space-x-3">
                  <a href="https://www.facebook.com/stojance.kostov.2025/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="https://igeografija.academia.edu/StojanceKostov" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary flex items-center justify-center">
                    <div className="h-5 w-5 bg-gray-600 hover:bg-secondary rounded-sm flex items-center justify-center text-white text-xs font-bold transition-colors">
                      A
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="relative h-80">
                <img 
                  src="https://i.ibb.co/s9pXDXTm/image.png"
                  alt="Samuel Naumovski Vickius"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/800px-Flag_of_Sweden.svg.png"
                  alt="Swedish flag"
                  className="absolute bottom-2 right-2 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 font-playfair">
                  {t('samuel.name')}
                </h3>
                <p className="text-secondary font-medium mb-3 text-sm">{t('samuel.title')}</p>
                
                <div className="mb-4">
                  <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                    {expandedCard === 'samuel' ? t('samuel.description') : truncateText(t('samuel.description'))}
                  </p>
                  
                  {expandedCard === 'samuel' && (
                    <>
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        📍 {t('samuel.focus')}
                      </p>
                      <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                        {t('samuel.quote')}
                      </blockquote>
                    </>
                  )}
                  
                  <button
                    onClick={() => toggleExpanded('samuel')}
                    className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                  >
                    {expandedCard === 'samuel' ? t('show.less') : t('read.more')}
                    {expandedCard === 'samuel' ? 
                      <ChevronUp className="ml-1 h-4 w-4" /> : 
                      <ChevronDown className="ml-1 h-4 w-4" />
                    }
                  </button>
                </div>
                
                <div className="flex space-x-3">
                  <a href="https://www.linkedin.com/in/samuel-naumovski-" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ambassadors;