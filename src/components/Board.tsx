import React from 'react';
import { Mail, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Board = () => {
  const { t, language } = useLanguage();

  return (
    <section id="board" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair">
          {t('who.we.are')}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t('board.subtitle')}
        </p>
        
        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mb-16">
          <p>
            {t('board.description')}
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="md:grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://i.ibb.co/QFFsfF9H/0715d1f0-7ce6-4a0a-8ff2-21ae7cf10069.jpg"
                alt="Founders of GMFE"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 font-playfair">
                {t('founders.board')}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">{t('founders.description')}</p>
                <p className="text-gray-600">{t('founders.mission')}</p>
                <p className="text-gray-600">{t('founders.invitation')}</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 font-playfair">
          {t('advisory.board')}</h3>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/sp55fxkV/image.png"
                  alt="Prof. Žila, Lenina"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/800px-Flag_of_North_Macedonia.svg.png"
                  alt="Macedonian flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'en' ? 'Prof. Žila, Lenina' : 'Проф. Жила, Ленина'}</h3>
              <p className="text-secondary font-medium mb-4">{t('zila.title')}</p>
              <p className="text-gray-600 text-sm mb-4">
                {t('zila.description')}
              </p>
              <div className="flex justify-center space-x-4">
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/Kx3xFvdX/image.png"
                  alt="Prof. Sardzoski, Pero"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/800px-Flag_of_North_Macedonia.svg.png"
                  alt="Macedonian flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'en' ? 'Prof. Sardzoski, Pero' : 'Проф. Сарџоски, Перо'}</h3>
              <p className="text-secondary font-medium mb-4">{t('sardzoski.title')}</p>
              <p className="text-gray-600 text-sm mb-4">
                {t('sardzoski.description')}
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/pegasusels2002/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/perica.sardzoski?locale=mk_MK" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/RT6R1W38/image.png"
                  alt="Prof. Lazarova-Molnar, Sanja"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/800px-Flag_of_Germany.svg.png"
                  alt="German flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'en' ? 'Prof. Lazarova-Molnar, Sanja' : 'Проф. Лазарова-Молнар, Сања'}</h3>
              <p className="text-secondary font-medium mb-4">{t('lazarova.title')}</p>
              <p className="text-gray-600 text-sm mb-4">
                {t('lazarova.description')}
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/sanja-lazarova-molnar-0188b12/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://www.facebook.com/sanja.lazarovamolnar?locale=mk_MK" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://x.com/sanjamolnar" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/rG5fL1vP/image-removebg-preview.png"
                    alt="X (formerly Twitter)"
                    className="h-5 w-5 invert"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/Q7rpcbvs/image.png"
                  alt="Dr. Vladimir Poposki"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/800px-Flag_of_Spain.svg.png"
                  alt="Spanish flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'en' ? 'Dr. Vladimir Poposki' : 'Д-р Владимир Попоски'}</h3>
              <p className="text-secondary font-medium mb-4">{t('poposki.title')}</p>
              <p className="text-gray-600 text-sm mb-4">
                {t('poposki.description')}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img 
                  src="https://i.ibb.co/XxkkXR7b/image.png"
                  alt="Dr. Predrag Nikolovski"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png"
                  alt="Italian flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{language === 'en' ? 'Dr. Predrag Nikolovski' : 'Д-р Предраг Николовски'}</h3>
              <p className="text-secondary font-medium mb-4">{t('nikolovski.title')}</p>
              <p className="text-gray-600 text-sm mb-4">
                {t('nikolovski.description')}
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://www.linkedin.com/in/predrag-nikolovski-08603176/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Ambassadors Section */}
        <h3 className="text-2xl font-bold text-center mb-8 font-playfair">
          {t('ambassadors')}
        </h3>
        
        <div className="max-w-4xl mx-auto mb-16">
          <h4 className="text-xl font-semibold mb-4 text-center text-gray-900">{t('our.ambassadors')}</h4>
          <p className="text-gray-600 text-center leading-relaxed">
            {t('ambassadors.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img 
                src="https://i.ibb.co/zVzqwHLT/image.png"
                alt="Assoc. Prof. Dr. Stojanche Kostov"
                className="w-full h-full object-cover"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/800px-Flag_of_North_Macedonia.svg.png"
                alt="Macedonian flag"
                className="absolute top-3 right-3 w-8 h-6 rounded-sm shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-xl font-bold text-white font-playfair">
                  {language === 'en' ? 'Assoc. Prof. Dr. Stojanche Kostov' : 'Доц. д-р Стојанче Костов'}
                </h3>
                <p className="text-gray-200 text-sm">{t('kostov.title')}</p>
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4 leading-relaxed">
                {t('kostov.description')}
              </p>
              <div className="bg-gray-50 p-3 rounded-lg mb-4">
                <p className="text-gray-700 text-sm font-medium">
                  📍 {t('kostov.focus')}
                </p>
              </div>
                    </p>
                    <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                      {t('kostov.quote')}
                    </blockquote>
                  </>
                )}
                
                <button
                  onClick={() => toggleExpanded('kostov')}
                  className="flex items-center text-secondary hover:text-primary text-sm font-medium transition-colors"
                >
                  {expandedCards['kostov'] ? (
                    <>
                      {language === 'en' ? 'Show Less' : 'Прикажи помалку'}
                      <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      {language === 'en' ? 'Read More' : 'Прочитај повеќе'}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
              
              </p>
              <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                {t('kostov.quote')}
              </blockquote>
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
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto mb-16">
          <h3 className="text-2xl font-bold mb-4 text-center font-playfair">{t('join.board')}</h3>
          <p className="text-gray-600 text-center mb-6">
            {t('join.board.description').replace('contact(at)GMFE.org', '')}
          </p>
          <div className="text-center">
            <a 
              href="mailto:contact@gmfe.org" 
              className="inline-flex items-center text-secondary hover:text-primary font-semibold"
            >
              <Mail className="h-5 w-5 mr-2" />
              contact@gmfe.org
            </a>
          </div>
        </div>
        {/* Executive Manager Position */}
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-3xl mx-auto">
          <div className="w-32 h-32 mx-auto mb-6 rounded-xl overflow-hidden relative">
            <img 
              src="https://i.ibb.co/q3hpTcnw/58e03b0c-c501-40f6-ac6f-081ceb2046b4.jpg"
              alt="Marko Vidachek"
              className="w-full h-full object-cover"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/800px-Flag_of_North_Macedonia.svg.png"
              alt="Macedonian flag"
              className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
            />
          </div>
          <h4 className="text-xl font-semibold mb-2 text-center">{t('marko.name')}</h4>
          <p className="text-secondary font-medium mb-4 text-center">{t('executive.director')}</p>
          <p className="text-gray-600 mb-6 text-center">
            {t('manager.description')}
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://www.linkedin.com/in/marko-vidachek-55491721a/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-secondary">
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Board
