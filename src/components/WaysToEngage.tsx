import React from 'react';
import { Heart, Users, Calendar, BookOpen, Briefcase, GraduationCap, Handshake, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '../context/LanguageContext';

const WaysToEngage = () => {
  const { t, language } = useLanguage();

  const engagementOptions = [
    {
      icon: Heart,
      title: language === 'en' ? 'Project Partnerships' : 'Проектни партнерства',
      description: language === 'en'
        ? 'Support specific projects in research, culture, and education. Project partnerships enable targeted engagement with clearly defined goals, timelines, and impact.'
        : 'Поддршка на конкретни проекти во областа на истражувањето, културата и образованието. Проектните партнерства овозможуваат насочено учество со јасно дефинирани цели, временски рамки и мерливо влијание.',
      link: 'https://donate.raisenow.io/jsdvv',
      color: 'bg-secondary'
    },
    {
      icon: BookOpen,
      title: language === 'en' ? 'Research & Knowledge Programs' : 'Програми за истражување и знаење',
      description: language === 'en'
        ? 'Support research initiatives, publications, and academic cooperation that preserve and advance Macedonian knowledge and heritage.'
        : 'Поддршка на истражувачки иницијативи, публикации и академска соработка кои го зачувуваат и унапредуваат македонското знаење и културно наследство.',
      link: 'https://donate.raisenow.io/mvfdt',
      color: 'bg-primary'
    },
    {
      icon: Briefcase,
      title: language === 'en' ? 'Endowment & Long-Term Support' : 'Endowment и долгорочна поддршка',
      description: language === 'en'
        ? 'Contribute to the long-term institutional strength of the Foundation. Endowment contributions ensure sustainable impact beyond individual projects.'
        : 'Придонес кон долгорочната институционална стабилност и независност на Фондацијата. Endowment придонесите обезбедуваат одржливо влијание кое ги надминува поединечните проекти.',
      link: 'https://donate.raisenow.io/qrykn',
      color: 'bg-secondary'
    },
    {
      icon: Globe,
      title: language === 'en' ? 'Impact-Oriented Funding' : 'Финансирање насочено кон влијание',
      description: language === 'en'
        ? 'For selected initiatives, we offer structured funding models such as recoverable grants or program-related investments, aligned with measurable impact.'
        : 'За одбрани иницијативи, применуваме структуриран пристап на финансирање, како што се повратни грантови или program-related investments, усогласени со јасно дефинирани и мерливи резултати.',
      link: 'https://donate.raisenow.io/vscvc',
      color: 'bg-primary'
    },
    {
      icon: Users,
      title: language === 'en' ? 'Volunteer & Mentorship' : 'Волонтирање и менторство',
      description: language === 'en'
        ? 'Share your expertise by becoming a mentor, advisor, or volunteer. Your skills and experience can directly contribute to our programs and the next generation of Macedonian leaders.'
        : 'Споделете го вашето искуство како ментор, советник или волонтер. Вашите вештини и искуство можат директно да придонесат кон нашите програми и следната генерација македонски лидери.',
      link: '#contact',
      color: 'bg-secondary'
    },
    {
      icon: Handshake,
      title: language === 'en' ? 'Corporate Partnerships' : 'Корпоративни партнерства',
      description: language === 'en'
        ? 'Partner with us to align your corporate social responsibility goals with meaningful cultural preservation and educational impact in the Macedonian community.'
        : 'Партнерирајте со нас за да ги усогласите вашите корпоративни цели за општествена одговорност со значајно зачувување на културата и образовно влијание во македонската заедница.',
      link: '#contact',
      color: 'bg-primary'
    },
    {
      icon: Calendar,
      title: language === 'en' ? 'Event Sponsorship' : 'Спонзорство на настани',
      description: language === 'en'
        ? 'Sponsor cultural events, workshops, and educational programs that celebrate and preserve Macedonian heritage while building community connections.'
        : 'Спонзорирајте културни настани, работилници и образовни програми кои го слават и зачувуваат македонското наследство додека градат заеднички врски.',
      link: '#contact',
      color: 'bg-secondary'
    },
    {
      icon: GraduationCap,
      title: language === 'en' ? 'Scholarship Contributions' : 'Придонеси за стипендии',
      description: language === 'en'
        ? 'Support the next generation of Macedonian scholars, researchers, and cultural ambassadors through dedicated scholarship funds and educational grants.'
        : 'Поддржете ја следната генерација македонски научници, истражувачи и културни амбасадори преку посветени стипендиски фондови и образовни грантови.',
      link: 'https://donate.raisenow.io/gmtzs',
      color: 'bg-primary'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Ways to Engage Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <Handshake className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair">
              {language === 'en' ? 'Ways to Engage & Create Impact' : 'Начини за вклучување и создавање влијание'}
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Your engagement, whether through financial support, expertise, or time, enables us to preserve Macedonian heritage and empower future generations.'
                : 'Вашето вклучување, bilo преку финансиска поддршка, експертиза или време, ни овозможува да го зачуваме македонското наследство и да ги оснажиме идните генерации.'}
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Options Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-playfair">
              {language === 'en' ? 'Choose Your Path of Engagement' : 'Изберете го вашиот пат на вклучување'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en'
                ? 'Every contribution, regardless of size or form, makes a meaningful difference in our mission to preserve and promote Macedonian culture.'
                : 'Секој придонес, без разлика на големина или форма, прави значајна разлика во нашата мисија да ја зачуваме и промовираме македонската култура.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {engagementOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                >
                  <div className="p-8">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`${option.color} p-4 rounded-lg flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 font-playfair">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                          {option.description}
                        </p>
                        <a
                          href={option.link}
                          target={option.link.startsWith('http') ? '_blank' : '_self'}
                          rel={option.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className={`inline-flex items-center ${option.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all`}
                        >
                          {language === 'en' ? 'Learn More' : 'Дознајте повеќе'}
                          <span className="ml-2">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Impact Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 md:p-12">
            <div className="inline-flex items-center justify-center p-4 bg-secondary/10 rounded-full mb-6">
              <Heart className="h-12 w-12 text-secondary" />
            </div>
            <h2 className="text-3xl font-bold mb-6 text-primary font-playfair">
              {language === 'en' ? 'Together, We Create Lasting Impact' : 'Заедно создаваме трајно влијание'}
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {language === 'en'
                ? 'Your support enables us to document endangered traditions, support groundbreaking research, and empower the next generation of cultural ambassadors. Every action you take helps preserve the richness of Macedonian heritage for centuries to come.'
                : 'Вашата поддршка ни овозможува да документираме загрозени традиции, да поддржиме пионерски истражувања и да ја оснажиме следната генерација културни амбасадори. Секоја акција што ја преземате помага да се зачува богатството на македонското наследство за вековите што доаѓаат.'}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-colors text-lg"
            >
              <Heart className="h-6 w-6 mr-3" />
              {language === 'en' ? 'Get Started Today' : 'Започнете денес'}
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaysToEngage;
