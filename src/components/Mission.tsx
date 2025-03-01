import React from 'react';
import { Target, Users, Calendar } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Mission = () => {
  const { t } = useLanguage();

  return (
    <section id="mission" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">{t('mission.vision')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('about.foundation')}
          </p>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('foundation.purpose')}
          </p>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {t('we.dedicated')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Target className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 font-playfair">{t('preservation.title')}</h3>
            <p className="text-gray-600">{t('heritage.description')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Users className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 font-playfair">{t('research.title')}</h3>
            <p className="text-gray-600">{t('workshops.description')}</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Calendar className="h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-3 font-playfair">{t('empowerment.title')}</h3>
            <p className="text-gray-600">{t('education.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;