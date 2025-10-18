import React from 'react';
import { BookOpen, Heart } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

const HeritagePreservation = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ================== HERO SECTION ================== */}
      <section className="pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Macedonia Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

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

      {/* ================== PROJECT 1: STOJANCHE KOSTOV ================== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Image Left */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <img
                    src="https://i.ibb.co/k20Pkk84/image.png"
                    alt="Macedonian Folk Dance"
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

            {/* Text Right */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-secondary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
                    {language === 'en'
                      ? 'Stojanche Kostov Research Project'
                      : 'Истражувачки проект на Стојанче Костов'}
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
                      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        • {t('support.monograph')}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        • {t('support.promotion')}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        • {t('support.distribution')}
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

      {/* ================== RESEARCHER PROFILE: STOJANCHE KOSTOV ================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              {/* Image Left */}
              <div className="relative h-70 md:h-85">
                <img
                  src="https://i.ibb.co/3mn91hLy/image.png"
                  alt="Assoc. Prof. Dr. Stojanche Kostov"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Text Right */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
                    {language === 'en'
                      ? 'Assoc. Prof. Dr. Stojanche Kostov'
                      : 'Доц. д-р Стојанче Костов'}
                  </h3>
                  <p className="text-secondary font-medium">
                    {t('kostov.title')}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {language === 'en'
                      ? 'Institute of Folklore "Marko Cepenkov", Skopje'
                      : 'Институт за фолклор „Марко Цепенков", Скопје'}
                  </p>
                </div>

                <div className="space-y-4 text-gray-600 text-sm">
                  <p>• {language === 'en'
                      ? 'Research Focus: Macedonian dance traditions in Ovče Pole, Štip, Kočani, Kratovo, and Zletovo'
                      : 'Истражувачки фокус: Македонски орски традиции во Овче Поле, Штип, Кочани, Кратово и Злетово'}</p>
                  <p>• {language === 'en'
                      ? 'Over 10 years of field research and documentation'
                      : 'Повеќе од 10 години теренски истражувања и документација'}</p>
                  <p>• {language === 'en'
                      ? 'Preserving intangible cultural heritage'
                      : 'Зачувување на нематеријалното културно наследство'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== PROJECT 2: VASIL STERJOVSKI ================== */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Text Left */}
            <div className="lg:col-span-2 order-2 lg:order-1">
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
                    {t('vasil.project.title')}
                  </h2>
                </div>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {t('project.description')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('vasil.project.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {t('our.support')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('vasil.support.description')}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        • {t('vasil.support.tuition')}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        • {t('vasil.support.mentorship')}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        • {t('vasil.support.publication')}
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg text-sm text-gray-600">
                        • {t('vasil.support.visibility')}
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {language === 'en' ? 'Impact' : 'Влијание'}
                    </h3>
                    <ul className="list-disc ml-6 text-gray-600 space-y-2">
                      <li>{t('vasil.impact.preserving')}</li>
                      <li>{t('vasil.impact.strengthening')}</li>
                      <li>{t('vasil.impact.awareness')}</li>
                      <li>{t('vasil.impact.inspiring')}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Right */}
            <div className="lg:col-span-1 order-1 lg:order-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <img
                    src="https://your-vasil-image-url.com"
                    alt="Vasil Sterjovski Research"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 right-4 text-white">
                    <BookOpen className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    {t('vasil.name')}
                  </h3>
                  <p className="text-secondary font-medium mb-2">
                    {t('vasil.title')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== RESEARCHER PROFILE: VASIL STERJOVSKI ================== */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              {/* Text Left */}
              <div className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
                    {t('vasil.name')}
                  </h3>
                  <p className="text-secondary font-medium">
                    {t('vasil.title')}
                  </p>
                </div>
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                  <p>• {t('vasil.focus.policies')}</p>
                  <p>• {t('vasil.focus.archival')}</p>
                  <p>• {t('vasil.focus.identity')}</p>
                </div>
              </div>

              {/* Image Right */}
              <div className="relative h-70 md:h-85 order-1 md:order-2">
                <img
                  src="https://your-vasil-profile-image.com"
                  alt="Vasil Sterjovski"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================== CALL TO ACTION ================== */}
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

      <Footer />
    </div>
  );
};

export default HeritagePreservation;
