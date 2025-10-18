import React from 'react';
import { useState } from 'react';
import { Mail, Linkedin, Twitter, Facebook, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Board = () => {
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

{/* Ambassadors Section */}
<div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mt-16">
  <h3
    id="ambassadors"
    className="text-3xl md:text-4xl font-bold text-primary mb-3 font-playfair text-center"
  >
    {t('ambassadors')}
  </h3>
  <p className="text-xl text-gray-600 text-center">
    {t('ambassadors.description')}
  </p>
</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
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

  {/* Samuel #1 */}
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
        {/* Add social links for Vasil if available */}
      </div>
    </div>
  </div>
</div>


      </div>
    </section>
  );
};

export default Board