import React from 'react';
import { BookOpen, Globe, GraduationCap, Scale, Building2, ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VisionEternal = () => {
  const { language } = useLanguage();

  const isEnglish = language === 'en';

  const programmes = isEnglish
    ? [
        {
          id: 1,
          icon: BookOpen,
          title: 'Macedonian Heritage & Knowledge Initiative (MHKI)',
          description: "Preserving and advancing Macedonia's intellectual legacy.",
          color: 'bg-blue-50',
          accentColor: 'text-blue-600',
        },
        {
          id: 2,
          icon: Globe,
          title: 'Diaspora, Identity & Social Cohesion Programme',
          description: 'Connecting global Macedonian communities institutionally.',
          color: 'bg-emerald-50',
          accentColor: 'text-emerald-600',
        },
        {
          id: 3,
          icon: GraduationCap,
          title: 'Youth, Research & Future Leaders Programme',
          description: "Investing in Macedonia's next generation of scholars.",
          color: 'bg-amber-50',
          accentColor: 'text-amber-600',
        },
        {
          id: 4,
          icon: Scale,
          title: 'Memory, Democracy & Cultural Resilience Programme',
          description: 'Strengthening democratic culture and institutional memory.',
          color: 'bg-purple-50',
          accentColor: 'text-purple-600',
        },
        {
          id: 5,
          icon: Building2,
          title: 'Institutional Capacity & Impact Fund (ICIF)',
          description: 'Ensuring long-term financial independence and governance.',
          color: 'bg-slate-50',
          accentColor: 'text-slate-600',
        },
      ]
    : [
        {
          id: 1,
          icon: BookOpen,
          title: 'Иницијатива за македонско наследство и знаење (MHKI)',
          description: 'Зачувување и унапредување на интелектуалното наследство на Македонија.',
          color: 'bg-blue-50',
          accentColor: 'text-blue-600',
        },
        {
          id: 2,
          icon: Globe,
          title: 'Програма за дијаспора, идентитет и општествена кохезија',
          description: 'Институционално поврзување на глобалните македонски заедници.',
          color: 'bg-emerald-50',
          accentColor: 'text-emerald-600',
        },
        {
          id: 3,
          icon: GraduationCap,
          title: 'Програма за млади, истражување и идни лидери',
          description: 'Инвестирање во новата генерација научници и мислители.',
          color: 'bg-amber-50',
          accentColor: 'text-amber-600',
        },
        {
          id: 4,
          icon: Scale,
          title: 'Програма за меморија, демократија и културна отпорност',
          description: 'Зајакнување на демократската култура и институционалната меморија.',
          color: 'bg-purple-50',
          accentColor: 'text-purple-600',
        },
        {
          id: 5,
          icon: Building2,
          title: 'Фонд за институционален капацитет и влијание (ICIF)',
          description: 'Обезбедување долгорочна финансиска независност и институционална стабилност.',
          color: 'bg-slate-50',
          accentColor: 'text-slate-600',
        },
      ];

  const timeline = isEnglish
    ? [
        {
          period: '2025-2027',
          title: 'Foundation Building',
          points: [
            'Establish core programmes',
            'Build international partnerships',
            'Develop governance structures',
          ],
        },
        {
          period: '2028-2031',
          title: 'Institutional Maturity',
          points: [
            'Scale flagship programmes',
            'Achieve financial sustainability',
            'Strengthen global recognition',
          ],
        },
        {
          period: '2032-2035',
          title: 'International Reference',
          points: [
            'Lead in Macedonian scholarship',
            'Achieve institutional independence',
            'Establish global academic network',
          ],
        },
      ]
    : [
        {
          period: '2025–2027',
          title: 'Поставување темели',
          points: [
            'Консолидирање на основните програми',
            'Градење меѓународни партнерства',
            'Развој на стабилни управувачки структури',
          ],
        },
        {
          period: '2028–2031',
          title: 'Институционална зрелост',
          points: [
            'Проширување на стратешките програми',
            'Обезбедување финансиска одржливост',
            'Зајакнување на меѓународната препознатливост',
          ],
        },
        {
          period: '2032–2035',
          title: 'Меѓународна референтност',
          points: [
            'Водечка улога во македонските научни истражувања',
            'Институционална независност',
            'Воспоставена глобална академска мрежа',
          ],
        },
      ];

  const principles = isEnglish
    ? [
        'Quality over volume',
        'Impact over activity',
        'Excellence over symbolism',
        'Institutional relevance over publicity',
        'Long-term value over short-term visibility',
      ]
    : [
        'Квалитет пред обем',
        'Влијание пред активност',
        'Извонредност пред симболика',
        'Институционална релевантност пред публицитет',
        'Долгорочна вредност пред краткорочна видливост',
      ];

  const defines = isEnglish
    ? [
        'Long-term institutional continuity',
        'Independence from political cycles',
        'Knowledge beyond short-term activism',
        'International cooperation & positioning',
        'Structured, scalable programmes',
        'Durable institutional impact',
      ]
    : [
        'Долгорочен институционален континуитет',
        'Независност од политички циклуси',
        'Знаење над краткорочен активизам',
        'Меѓународна соработка и позиционирање',
        'Структурирани и скалабилни програми',
        'Траен институционален импакт',
      ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Macedonia"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="mb-8">
            <img
              src="https://i.ibb.co/23JYWPS5/0eb91ee9-bc90-47c2-a5eb-eef397207198.jpg"
              alt="Vision 2035 Logo"
              className="h-16 mx-auto mb-8"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 font-playfair">
            {isEnglish ? 'VISION ETERNAL 2035' : 'ВИЗИЈА ВЕЧНА 2035'}
          </h1>

          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-2xl md:text-3xl font-semibold mb-6 font-playfair">
              {isEnglish ? 'Institution. Knowledge. Impact.' : 'Институција. Знаење. Влијание.'}
            </p>

            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              {isEnglish
                ? 'Vision Eternal 2035 is our strategic commitment to building a lasting, internationally recognised institution connecting Macedonia with global knowledge, research, and cultural dialogue.'
                : 'Визија ВЕЧНА 2035 е нашата стратешка определба за градење трајна, меѓународно препознатлива институција која ја поврзува Македонија со глобалното знаење, научното истражување и културниот дијалог.'}
            </p>

            <p className="text-xl font-semibold mb-6">
              {isEnglish ? 'This is not a campaign. This is institutional continuity.' : 'Ова не е кампања. Ова е институционален континуитет.'}
            </p>

            <blockquote className="text-xl md:text-2xl italic border-l-4 border-amber-400 pl-6">
              {isEnglish
                ? '"We preserve, promote and shape Macedonia - globally, sustainably, effectively."'
                : '"Го зачувуваме, промовираме и обликуваме македонското - глобално, одржливо и одговорно."'}
            </blockquote>
          </div>
        </div>
      </section>

      {/* Long-term Aspiration */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair text-slate-900">
            {isEnglish ? 'OUR LONG-TERM ASPIRATION' : 'НАШАТА ДОЛГОРОЧНА АМБИЦИЈА'}
          </h2>

          <div className="bg-white rounded-xl shadow-sm p-8 md:p-12 border border-slate-100">
            <p className="text-2xl font-semibold mb-6 text-slate-800">
              {isEnglish
                ? 'By 2035, GMFE will be the internationally recognised reference institution for Macedonian heritage, academic research, and institutional development.'
                : 'До 2035 година, GMFE ќе се позиционира како меѓународно призната референтна instituция за македонско наследство, научни истражувања и институционален развој.'}
            </p>

            <p className="text-xl text-slate-600">
              {isEnglish
                ? 'We are building an institutional voice in international discourse on Macedonia.'
                : 'Градиме институционален глас во меѓународните дискусии поврзани со Македонија.'}
            </p>
          </div>
        </div>
      </section>

      {/* What Defines Vision Eternal 2035 */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-playfair text-center text-slate-900">
            {isEnglish ? 'WHAT DEFINES VISION ETERNAL 2035' : 'ШТО ЈА ДЕФИНИРА ВИЗИЈА ВЕЧНА 2035'}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {defines.map((item, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-lg">
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-lg font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five Flagship Programmes */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-playfair text-center text-slate-900">
            {isEnglish ? 'THE FIVE FLAGSHIP PROGRAMMES' : 'ПЕТТЕ СТРАТЕШКИ ПРОГРАМИ'}
          </h2>

          <div className="text-center mb-16">
            <img
              src="https://i.ibb.co/F4zSr690/4be2fca6-c79b-4d15-878a-17efa100d17b.jpg"
              alt="Flagship Programmes"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {programmes.map((programme) => {
              const IconComponent = programme.icon;
              return (
                <div
                  key={programme.id}
                  className={`${programme.color} rounded-xl p-8 hover:shadow-lg transition-shadow`}
                >
                  <div className="mb-4">
                    <IconComponent className={`h-12 w-12 ${programme.accentColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{programme.title}</h3>
                  <p className="text-slate-700">{programme.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Path to 2035 Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-playfair text-center text-slate-900">
            {isEnglish ? 'OUR PATH TO 2035' : 'НАШИОТ ПАТ ДО 2035'}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {timeline.map((phase, index) => (
              <div key={index} className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-slate-50 rounded-xl p-8 border-2 border-blue-100">
                  <div className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                    {phase.period}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-6">{phase.title}</h3>
                  <ul className="space-y-3">
                    {phase.points.map((point, pointIndex) => (
                      <li key={pointIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {index < timeline.length - 1 && (
                  <div className="hidden md:flex absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-blue-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Working Principles */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-playfair text-center text-slate-900">
            {isEnglish ? 'OUR WORKING PRINCIPLES' : 'НАШИ ПРИНЦИПИ НА РАБОТА'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-8 w-8 rounded-full bg-blue-100">
                    <Check className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                <p className="text-lg font-semibold text-slate-800">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Measure Success */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 font-playfair text-center text-slate-900">
            {isEnglish ? 'HOW WE MEASURE SUCCESS' : 'КАКО ГО МЕРИМЕ УСПЕХОТ'}
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {isEnglish ? 'Institutional KPIs' : 'Институционални индикатори'}
              </h3>
              <ul className="space-y-4">
                {(isEnglish
                  ? [
                      'International academic partnerships established',
                      'Research publications and knowledge outputs',
                      'Programmes with lasting institutional impact',
                      'Financial independence achieved',
                      'Recognition as reference institution',
                    ]
                  : [
                      'Воспоставени меѓународни академски партнерства',
                      'Научни публикации и знаењски резултати',
                      'Програми со траен институционален ефект',
                      'Постигната финансиска независност',
                      'Препознатливост како референтна институција',
                    ]
                ).map((kpi, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{kpi}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                {isEnglish ? 'Not by' : 'Не според'}
              </h3>
              <ul className="space-y-4">
                {(isEnglish
                  ? ['Media mentions', 'Event attendance', 'Short-term metrics']
                  : [
                      'Медиумски појавувања',
                      'Број на настани',
                      'Краткорочни метрики',
                    ]
                ).map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <div className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5 font-bold text-lg">
                      ✕
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Stance */}
      <section className="relative py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Macedonia"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <div className="space-y-8 mb-12">
            <div>
              <p className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
                {isEnglish ? 'We do not build projects.' : 'Ние не градиме проекти.'}
              </p>
              <p className="text-3xl md:text-4xl font-bold font-playfair text-amber-400">
                {isEnglish ? 'We build structures.' : 'Ние градиме структури.'}
              </p>
            </div>

            <div>
              <p className="text-3xl md:text-4xl font-bold mb-4 font-playfair">
                {isEnglish ? 'We do not seek short-term visibility.' : 'Не бараме краткорочна видливост.'}
              </p>
              <p className="text-3xl md:text-4xl font-bold font-playfair text-amber-400">
                {isEnglish ? 'We create long-term institutional weight.' : 'Создаваме долгорочна институционална тежина.'}
              </p>
            </div>
          </div>

          <p className="text-xl md:text-2xl leading-relaxed">
            {isEnglish
              ? 'Vision Eternal 2035 is a strategic framework for enduring intellectual and institutional continuity of Macedonia.'
              : 'Визија ВЕЧНА 2035 е стратешка рамка за трајна интелектуална и институционална континуитетност на Македонија.'}
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair text-slate-900">
            {isEnglish ? 'JOIN OUR MISSION' : 'ПРИДРУЖЕТЕ СЕ'}
          </h2>

          <p className="text-xl mb-12 text-slate-600">
            {isEnglish ? 'Support Vision Eternal 2035' : 'Поддржете ја Визија ВЕЧНА 2035'}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {(isEnglish
              ? [
                  'Become a partner institution',
                  'Support our flagship programmes',
                  'Engage as a research fellow or advisor',
                ]
              : [
                  'Станете партнер-instituција',
                  'Поддржете ги нашите стратешки програми',
                  'Вклучете се како истражувачки соработник или советник',
                ]
            ).map((item, index) => (
              <div key={index} className="flex items-center space-x-2 justify-center">
                <ArrowRight className="h-5 w-5 text-blue-600 flex-shrink-0" />
                <p className="text-lg font-semibold text-slate-700">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-xl p-8 border-2 border-blue-100">
            <p className="text-lg text-slate-600 mb-2">
              {isEnglish ? 'Contact us:' : 'Контакт:'}
            </p>
            <a
              href="mailto:vision2035@gmfe.org"
              className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
            >
              vision2035@gmfe.org
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionEternal;
