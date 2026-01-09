import React from 'react';
import { useState } from 'react';
import { Linkedin, ChevronDown, ChevronUp, Facebook } from 'lucide-react';
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
    <section id="ambassadors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-playfair text-center">
            {t('ambassadors')}
          </h3>
          <p className="text-xl text-gray-600 text-center">
            {t('ambassadors.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kostov */}
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
                {language === 'en'
                  ? 'Assoc. Prof. Dr. Stojanche Kostov'
                  : 'Доц. д-р Стојанче Костов'}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {t('kostov.title')}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === 'kostov'
                    ? t('kostov.description')
                    : truncateText(t('kostov.description'))}
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
                  {expandedCard === 'kostov' ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/stojance.kostov.2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://igeografija.academia.edu/StojanceKostov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary flex items-center justify-center"
                >
                  <div className="h-5 w-5 bg-gray-600 hover:bg-secondary rounded-sm flex items-center justify-center text-white text-xs font-bold transition-colors">
                    A
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Samuel */}
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
              <p className="text-secondary font-medium mb-3 text-sm">
                {t('samuel.title')}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === 'samuel'
                    ? t('samuel.description')
                    : truncateText(t('samuel.description'))}
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
                  {expandedCard === 'samuel' ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/samuel-naumovski-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Vasil */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img
                src="https://i.ibb.co/pjV64TkK/image.png"
                alt="Vasil Sterjovski"
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
                {t('vasil.name')}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {t('vasil.title')}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === 'vasil'
                    ? t('vasil.project.description')
                    : truncateText(t('vasil.project.description'))}
                </p>

                {expandedCard === 'vasil' && (
                  <>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">{t('our.support')}</h4>
                      <p className="text-gray-600 mb-2 text-sm">{t('vasil.support.description')}</p>
                      <ul className="text-gray-600 text-xs space-y-1 ml-4">
                        <li>• {t('vasil.support.tuition')}</li>
                        <li>• {t('vasil.support.mentorship')}</li>
                        <li>• {t('vasil.support.publication')}</li>
                        <li>• {t('vasil.support.visibility')}</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">{language === 'en' ? 'Impact' : 'Влијание'}</h4>
                      <p className="text-gray-600 mb-2 text-sm">{t('vasil.impact.description')}</p>
                      <ul className="text-gray-600 text-xs space-y-1 ml-4">
                        <li>• {t('vasil.impact.preserving')}</li>
                        <li>• {t('vasil.impact.strengthening')}</li>
                        <li>• {t('vasil.impact.awareness')}</li>
                        <li>• {t('vasil.impact.inspiring')}</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">{t('vasil.focus.title')}</h4>
                      <ul className="text-gray-600 text-xs space-y-1 ml-4">
                        <li>• {t('vasil.focus.policies')}</li>
                        <li>• {t('vasil.focus.archival')}</li>
                        <li>• {t('vasil.focus.identity')}</li>
                      </ul>
                    </div>
                  </>
                )}

                <button
                  onClick={() => toggleExpanded('vasil')}
                  className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {expandedCard === 'vasil' ? t('show.less') : t('read.more')}
                  {expandedCard === 'vasil' ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100064082676439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/vasil.sterjovski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Stefan Ivanovski */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img
                src="https://i.ibb.co/cKPZRpH6/aedd4c20-1c03-4ae9-a6ff-15547ecfb084.jpg"
                alt="Stefan Ivanovski"
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
                {t('stefan.name')}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {t('stefan.title')}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === 'stefan'
                    ? t('stefan.description')
                    : truncateText(t('stefan.description'))}
                </p>

                {expandedCard === 'stefan' && (
                  <>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      📍 {t('stefan.focus')}
                    </p>
                    <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                      {t('stefan.quote')}
                    </blockquote>
                  </>
                )}

                <button
                  onClick={() => toggleExpanded('stefan')}
                  className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {expandedCard === 'stefan' ? t('show.less') : t('read.more')}
                  {expandedCard === 'stefan' ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/stefanivanovski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;
