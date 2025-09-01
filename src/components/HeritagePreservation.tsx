import React from 'react';
import { BookOpen, Heart } from 'lucide-react';
import Navbar from './Navbar';
import { useLanguage } from '../context/LanguageContext';

const HeritagePreservation = () => {
  const { t, language } = useLanguage();

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
            <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <BookOpen className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              {t('heritage.preservation.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              {t('heritage.preservation.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Project Image Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <img 
                    src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80"
                    alt="Traditional Macedonian Folk Dance"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <BookOpen className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    {t('ethnochoreological.study.title')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('ethnochoreological.study.intro')}
                  </p>
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
                    {language === 'en' ? 'Stojanche Kostov Research Project' : 'Истражувачки проект на Стојанче Костов'}
                  </h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {t('project.description')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('ethnochoreological.study.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {t('our.support')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('our.support.description')}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">{t('support.monograph')}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">{t('support.promotion')}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">{t('support.distribution')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {language === 'en' ? 'Impact' : 'Влијание'}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('project.impact')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Researcher Profile Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://i.ibb.co/4RfLf983/image.png"
                  alt="Assoc. Prof. Dr. Stojanche Kostov"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
                    {language === 'en' ? 'Assoc. Prof. Dr. Stojanche Kostov' : 'Доц. д-р Стојанче Костов'}
                  </p>
                  <p className="text-secondary font-medium">
                    {t('kostov.title')}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' ? 'Institute of Folklore "Marko Cepenkov", Skopje' : 'Институт за фолклор „Марко Цепенков", Скопје'}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Research Focus: Macedonian dance traditions in Ovče Pole, Štip, Kočani, Kratovo, and Zletovo' : 'Истражувачки фокус: Македонски орски традиции во Овче Поле, Штип, Кочани, Кратово и Злетово'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Over 10 years of field research and documentation' : 'Повеќе од 10 години теренски истражувања и документација'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Preserving intangible cultural heritage' : 'Зачувување на нематеријалното културно наследство'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="inline-flex items-center justify-center p-4 bg-secondary/10 rounded-full mb-6">
              <Heart className="h-12 w-12 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-primary font-playfair">
              {language === 'en' ? 'Call to Action' : 'Повик за акција'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {t('heritage.cta')}
            </p>
            <a
              href={`https://donate.raisenow.io/knqgq?lng=${language}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-colors text-lg"
            >
              <Heart className="h-6 w-6 mr-3" />
              {t('donate.now')}
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-6">
              <img 
                src="https://i.ibb.co/MypN8Tkj/Logo-Wort-Bildmarke-SCREEN-RGB.png"
                alt="GMFE Logo"
                className="max-w-[200px] mx-auto"
              />
            </div>
            <p>© 2025 Global Macedonian Foundation Eternal</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HeritagePreservation;