import React from 'react';
import { GraduationCap, Heart, BookOpen, Scale, ExternalLink, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

const EducationalInitiatives = () => {
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
              <GraduationCap className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              {t('educational.initiatives.title')}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              {t('educational.initiatives.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Project Image Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <img 
                    src="https://i.ibb.co/2YgpKzgV/image.png"
                    alt="Empowering Future Scholars Research Project"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    {t('empowering.scholars.title')}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {t('empowering.scholars.intro')}
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
                    {language === 'en' ? 'Vladimir Grujeski Research Project' : 'Истражувачки проект на Владимир Грујески'}
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {t('project.description')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {t('grujeski.project.description')}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {t('our.support')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {t('grujeski.support.description')}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">{t('grujeski.support.costs')}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">{t('grujeski.support.mentorship')}</span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">{t('grujeski.support.showcase')}</span>
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
                      {t('grujeski.impact')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Researcher Profile Section */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img 
                  src="https://i.ibb.co/ZzFq9Wc4/image.png"
                  alt="Vladimir Grujeski"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
                    {language === 'en' ? 'Vladimir Grujeski' : 'Владимир Грујески'}
                  </h3>
                  <p className="text-secondary font-medium">
                    {language === 'en' ? 'Master\'s in International Relations & European Studies' : 'Магистер по меѓународни односи и европски студии'}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' ? 'University of Florence' : 'Универзитет во Фиренца'}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Research Focus: Italy\'s foreign policy toward Macedonia (1890-1919)' : 'Истражувачки фокус: Италијанската надворешна политика кон Македонија (1890-1919)'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Archival research across Italy, Portugal, and Hungary' : 'Архивски истражувања низ Италија, Португалија и Унгарија'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en' ? 'Contributing to European diplomatic history' : 'Придонес во европската дипломатска историја'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barbora Tomečková Project Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            {/* Left Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="relative h-64">
                  <img
                    src="https://i.ibb.co/5gkkdbq8/image.png"
                    alt="Advancing Academic Research"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <Scale className="h-8 w-8" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3 font-playfair">
                    {language === 'en'
                      ? 'Advancing Academic Research – Constitutional Identity & Language'
                      : 'Поддршка на академски истражувања – уставен идентитет и јазик'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'en'
                      ? 'GMFE supports international academic work that strengthens the legal, cultural and intellectual understanding of Macedonia and its language in a European context.'
                      : 'ГМФЕ поддржува меѓународна академска работа која придонесува кон правното, културното и интелектуалното разбирање на Македонија и македонскиот јазик во европски контекст.'}
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
                    {language === 'en'
                      ? 'Barbora Tomečková Academic Collaboration Project'
                      : 'Академска соработка со Барбора Томечкова'}
                  </h2>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {t('project.description')}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {language === 'en'
                        ? 'Barbora Tomečková, a PhD candidate in Comparative Constitutional Law at Masaryk University in Brno, is conducting research on official language designation, constitutional identity, language policy and legal linguistics. Her work places particular focus on the Macedonian language and its legal position within constitutional and European frameworks. Through this collaboration, GMFE supports a step-by-step academic pathway aimed at developing high-quality research outputs on the Macedonian language as an element of constitutional identity and its relevance within broader European legal debates.'
                        : 'Барбора Томечкова, докторанд во областа на компаративното уставно право на Универзитетот Масарик во Брно, истражува теми поврзани со официјалното јазично уредување, уставниот идентитет, јазичната политика и правната лингвистика. Нејзината работа има посебен фокус на македонскиот јазик и неговата правна положба во уставни и европски рамки. Преку оваа соработка, ГМФЕ поддржува постепен академски пристап насочен кон развој на квалитетни научни резултати за македонскиот јазик како елемент на уставниот идентитет и неговото значење во пошироки европски правни дебати.'}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 flex items-center gap-2">
                      <div className="w-2 h-2 bg-secondary rounded-full"></div>
                      {t('our.support')}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {language === 'en'
                        ? 'GMFE supports Barbora\'s work by:'
                        : 'ГМФЕ ја поддржува работата на Барбора преку:'}
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">
                            {language === 'en'
                              ? 'Supporting the development of academic articles and abstracts'
                              : 'Поддршка при развој на научни трудови и апстракти'}
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">
                            {language === 'en'
                              ? 'Providing institutional visibility through GMFE\'s knowledge platforms'
                              : 'Институционална видливост преку платформите за знаење на ГМФЕ'}
                          </span>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <div className="flex items-start gap-2">
                          <span className="text-secondary text-lg">•</span>
                          <span className="text-gray-600 text-sm">
                            {language === 'en'
                              ? 'Exploring support for journal submissions, conferences and academic positioning'
                              : 'Разгледување поддршка за научни списанија, конференции и академско позиционирање'}
                          </span>
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
                      {language === 'en'
                        ? 'This collaboration contributes to the international academic visibility of Macedonian language-related issues and strengthens the connection between Macedonian identity, constitutional law and European discourse. It reflects GMFE\'s long-term commitment to building knowledge-based structures with lasting institutional impact.'
                        : 'Оваа соработка придонесува кон меѓународна академска видливост на прашањата поврзани со македонскиот јазик и ја зајакнува врската помеѓу македонскиот идентитет, уставното право и европскиот дискурс. Таа ја одразува долгорочната посветеност на ГМФЕ кон градење структури засновани на знаење со трајно институционално влијание.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Barbora Tomečková Researcher Profile */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-2">
              <div className="relative h-64 md:h-auto">
                <img
                  src="https://i.ibb.co/Y4PKfTqN/image.png"
                  alt="Barbora Tomeckova"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2 font-playfair">
                    {language === 'en' ? 'Barbora Tomečková' : 'Барбора Томечкова'}
                  </h3>
                  <p className="text-secondary font-medium">
                    {language === 'en'
                      ? 'PhD Candidate in Comparative Constitutional Law'
                      : 'Докторанд по компаративно уставно право'}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {language === 'en' ? 'Masaryk University, Brno' : 'Универзитет Масарик, Брно'}
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en'
                        ? 'Research Focus: official language designation, constitutional identity and legal linguistics'
                        : 'Истражувачки фокус: официјално јазично уредување, уставен идентитет и правна лингвистика'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en'
                        ? 'Special interest in the Macedonian language and its constitutional position'
                        : 'Посебен интерес за македонскиот јазик и неговата уставна положба'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en'
                        ? 'Member and Vice Secretary of the Austrian Association for Legal Linguistics'
                        : 'Член и заменик-секретар на Austrian Association for Legal Linguistics'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en'
                        ? 'Guest lecturer at the University of Vienna'
                        : 'Гостин-предавач на Универзитетот во Виена'}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2"></div>
                    <p className="text-gray-600 text-sm">
                      {language === 'en'
                        ? 'Studying Macedonian since 2018'
                        : 'Го изучува македонскиот јазик од 2018 година'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic References & Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 font-playfair text-center">
            {language === 'en'
              ? 'Additional Academic References & Contact'
              : 'Дополнителни академски референци и контакт'}
          </h2>

          {/* Selected Publications */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-8">
            <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
              <div className="w-2 h-2 bg-secondary rounded-full"></div>
              {language === 'en' ? 'Selected Publications' : 'Избрани публикации'}
            </h3>
            <div className="space-y-6">
              <div className="border-l-2 border-secondary/30 pl-4">
                <p className="text-gray-700 text-sm font-medium mb-1">
                  TOMEČKOVÁ, Barbora. <em>Macedonian Language and Its Ausbau and Abstand Dimension Applied to Constitutional Law.</em>
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  {language === 'en'
                    ? 'Современа филологија, Faculty of Philology "Blaze Koneski", Skopje, 2024, Vol. 7, No. 1, pp. 7–14. ISSN 2545-4765'
                    : 'Современа филологија, Филолошки факултет „Блаже Конески", Скопје, 2024, Том 7, Бр. 1, стр. 7–14. ISSN 2545-4765'}
                </p>
                <a
                  href="https://journals.ukim.mk/index.php/jcp/en/article/view/2597"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary text-sm hover:underline gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  {language === 'en' ? 'Available at' : 'Достапно на'}: journals.ukim.mk
                </a>
              </div>

              <div className="border-l-2 border-secondary/30 pl-4">
                <p className="text-gray-700 text-sm font-medium mb-1">
                  TOMEČKOVÁ, Barbora. <em>Linguistic Relativism: The Limits of Language in Relation to Non-binary and Intersex People in the Jurisprudence of the Austrian and Czech Constitutional Courts.</em>
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  {language === 'en'
                    ? 'International Journal for the Semiotics of Law, Springer, Netherlands, 2025, Vol. 38, No. 3, pp. 859–876. ISSN 0952-8059'
                    : 'International Journal for the Semiotics of Law, Springer, Холандија, 2025, Том 38, Бр. 3, стр. 859–876. ISSN 0952-8059'}
                </p>
                <a
                  href="https://link.springer.com/article/10.1007/s11196-024-10221-4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary text-sm hover:underline gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  {language === 'en' ? 'Available at' : 'Достапно на'}: link.springer.com
                </a>
              </div>

              <div className="border-l-2 border-secondary/30 pl-4">
                <p className="text-gray-700 text-sm font-medium mb-1">
                  TOMEČKOVÁ, Barbora. <em>European States and Status of State Languages De Jure and De Facto.</em>
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  {language === 'en'
                    ? 'Comparative Law and Language, University of Trento, 2025, Vol. 4, No. 1, pp. 52–69. ISSN 2785-7417'
                    : 'Comparative Law and Language, Универзитет во Тренто, 2025, Том 4, Бр. 1, стр. 52–69. ISSN 2785-7417'}
                </p>
                <a
                  href="https://teseo.unitn.it/cll/issue/view/236"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary text-sm hover:underline gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  {language === 'en' ? 'Available at' : 'Достапно на'}: teseo.unitn.it
                </a>
              </div>

              <div className="border-l-2 border-secondary/30 pl-4">
                <p className="text-gray-700 text-sm font-medium mb-1">
                  TOMEČKOVÁ, Barbora. <em>Review of: Official Language Designation: Constitution‑Building Primer 20.</em>
                </p>
                <p className="text-gray-500 text-sm mb-2">
                  {language === 'en'
                    ? 'The Lawyer Quarterly, Institute of State and Law of the Czech Academy of Sciences, Prague, 2025, Vol. 15, No. 1, pp. 114–117. ISSN 1805-840X'
                    : 'The Lawyer Quarterly, Institute of State and Law of the Czech Academy of Sciences, Прага, 2025, Том 15, Бр. 1, стр. 114–117. ISSN 1805-840X'}
                </p>
                <a
                  href="https://tlq.ilaw.cas.cz/index.php/tlq/article/view/634"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary text-sm hover:underline gap-1"
                >
                  <ExternalLink className="h-3 w-3" />
                  {language === 'en' ? 'Available at' : 'Достапно на'}: tlq.ilaw.cas.cz
                </a>
              </div>
            </div>
          </div>

          {/* Professional Links & Contact */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                {language === 'en' ? 'Professional Links' : 'Професионални линкови'}
              </h3>
              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/barbora-tome%C4%8Dkov%C3%A1-3b2b56182/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-secondary transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-secondary" />
                  <span className="text-sm">LinkedIn</span>
                </a>
                <a
                  href="https://oegrl.com/index.php/about-us-2-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-secondary transition-colors"
                >
                  <ExternalLink className="h-4 w-4 text-secondary" />
                  <span className="text-sm">Austrian Association for Legal Linguistics</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full"></div>
                {language === 'en' ? 'Contact' : 'Контакт'}
              </h3>
              <div className="flex items-center gap-3 text-gray-600">
                <Mail className="h-4 w-4 text-secondary" />
                <a
                  href="mailto:468668@mail.muni.cz"
                  className="text-sm hover:text-secondary transition-colors"
                >
                  468668@mail.muni.cz
                </a>
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
              {t('educational.cta')}
            </p>
            <a
              href={`https://donate.raisenow.io/gmtzs?lng=${language}`}
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

export default EducationalInitiatives;