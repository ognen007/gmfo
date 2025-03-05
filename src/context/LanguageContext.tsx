import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'mk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Header
    'roots.future': 'Roots & Future',
    'preserving.past': 'Preserving Our Past, Shaping Our Tomorrow',
    'welcome.message': 'Welcome to the Global Macedonian Foundation Eternal',
    'foundation.description': 'Dedicated to preserving Macedonia\'s heritage and shaping its future, the Global Macedonian Foundation Eternal fosters unity through history, culture, and education.',
    'join.message': 'Join us in celebrating our shared legacy and building a brighter tomorrow.',
    'support.vision': 'Support Our Vision',
    
    // Mission
    'mission.vision': 'Our Mission & Vision',
    'about.foundation': 'About the Global Macedonian Foundation Eternal',
    'foundation.purpose': 'The Global Macedonian Foundation Eternal was established with the purpose of preserving and promoting Macedonia\'s rich cultural heritage, historical significance, and educational initiatives. As a global platform, our foundation seeks to connect Macedonians worldwide and celebrate the shared values and traditions that define our unique identity.',
    'we.dedicated': 'We are dedicated to:',
    'preservation.title': 'Preservation Macedonian Legacy',
    'research.title': 'Cultural Research Support',
    'empowerment.title': 'Educational Empowerment',
    'heritage.description': 'To champion and preserve the rich tapestry of Macedonian history and identity on a global scale, fostering awareness and appreciation across cultures.',
    'workshops.description': 'To actively support groundbreaking research and the publication of invaluable Macedonian cultural heritage that has faded over time, providing financial assistance to initiatives that safeguard and celebrate these enduring values.',
    'education.description': 'To empower the next generation of scholars from Macedonia and neighboring regions by awarding prestigious scholarships, enabling them to pursue advanced postgraduate studies and contribute to the global academic landscape.',

    // Board
    'who.we.are': 'Who We Are',
    'board.subtitle': 'Meet the Visionaries Behind the Foundation',
    'board.description': 'The Global Macedonian Foundation Eternal is driven by passionate and dedicated personalities committed to preserving and promoting Macedonia\'s heritage. Our leadership embodies a shared vision for cultural preservation, education, and global unity.',
    'founders.board': 'Founders and Board',
    'founders.description': 'The Krsteski family is the driving force behind the establishment of the Global Macedonian Foundation Eternal (GMFE). With a deep connection to the history and culture of Macedonia, and a strong desire to contribute meaningfully to the preservation and promotion of the nation\'s heritage, Grozdanka, Aco and Mirčo Krsteski took the initiative to bring this foundation to life.',
    'founders.mission': 'As founders and board members, they are dedicated to realizing the foundation\'s vision and mission. Together, they are responsible for the strategic direction and sustainable success of GMFE. Their goal is to create a strong foundation for the future through projects in education, research, and culture – leaving a legacy that will endure for generations.',
    'founders.invitation': 'The Krsteski family warmly invites everyone to join this significant initiative and work together to preserve and celebrate Macedonia\'s cultural heritage and values.',
    'advisory.board': 'The Advisory Board',
    'join.board': 'Would you like to join the Advisory Board?',
    'join.board.description': 'We aim to expand our Advisory Board to include experts from diverse fields relevant to the foundation\'s mission. If you are interested in contributing and becoming part of our efforts, we warmly invite you to reach out to us at contact(at)GMFE.org.',
    'role.offer': 'Role Offer',
    'executive.manager': 'Executive Manager',
    'marko.name': 'Marko Vidachek',
    'manager.description': 'PhD Candidate in Security Sciences, LLM in Constitutional Law and MA in Strategic Communication Management. Lecturer and consultant in the areas of constitutional law, security and strategic communication.',
    'executive.director': 'Executive Director',
    'contact.position': 'If you are interested in the position of Executive Manager, we invite you to contact us at:',

    // Stay Tuned
    'stay.tuned': 'Stay Tuned!',
    'stay.tuned.description': 'We\'re actively preparing engaging content to share with you. Here, you will soon find links to our official social media channels, including LinkedIn, where we will provide updates, images, and videos from previous events and exciting campaigns.',
    'coming.soon': 'Coming Soon',
    'get.involved': 'Get Involved',
    'get.involved.description': 'Discover opportunities to make an impact in preserving our heritage',
    'project.updates': 'Project Updates',
    'project.updates.description': 'Stay informed about our ongoing and upcoming initiatives',
    'event.highlights': 'Event Highlights',
    'event.highlights.description': 'Experience the visual journey of our events and collaborations',

    // Contact Form
    'get.in.touch': 'Get in Touch',
    'name': 'Name',
    'email': 'Email',
    'subject': 'Subject',
    'message': 'Message',
    'send.message': 'Send Message',
    'your.name': 'Your name',
    'your.email': 'your@email.com',
    'message.about': 'What is your message about?',
    'your.message': 'Your message...',
    'captcha.error': 'Please complete the CAPTCHA verification',
    
    // Common buttons and labels
    'donate.now': 'Donate Now',
    'learn.more': 'Learn More',
    
    // Chairman
    'chairman.title': 'Chairman of the Global Macedonian Foundation Eternal',
    'chairman.description': 'As the driving force behind the foundation, Mirčo brings a wealth of experience and a deep commitment to celebrating and preserving Macedonian heritage. With a background in leadership and community engagement, he envisions the foundation as a bridge between Macedonia\'s rich history and its promising future.',
    'chairman.quote': 'As Chairman of the Global Macedonian Foundation Eternal, I am honored to lead this initiative that bridges our heritage with the future. Our mission is not just to preserve Macedonia\'s legacy but to inspire a global connection to our roots. Together, we can ensure that our history and culture continue to thrive and resonate across the world.',

    // Events
    'events.title': 'Our Events and Projects',
    'events.subtitle': 'Dedicated to Progress and Unity',
    'events.description': 'At the Global Macedonian Foundation Eternal, we are committed to impactful initiatives that preserve Macedonia\'s heritage while fostering growth and education. Our projects showcase the rich tapestry of Macedonian culture and tradition.',
    'heritage.title': 'Heritage Preservation',
    'heritage.description': 'To champion and preserve the rich tapestry of Macedonian history and identity on a global scale, fostering awareness and appreciation across cultures.',
    'workshops.title': 'Cultural Workshops',
    'workshops.description': 'To actively support groundbreaking research and the publication of invaluable Macedonian cultural heritage that has faded over time, providing financial assistance to initiatives that safeguard and celebrate these enduring values.',
    'education.title': 'Educational Initiatives',
    'education.description': 'To empower the next generation of scholars from Macedonia and neighboring regions by awarding prestigious scholarships, enabling them to pursue advanced postgraduate studies and contribute to the global academic landscape.',

    // Contact
    'shape.future': 'Shape the Future Together',
    'support.difference': 'Your support makes a difference! By donating, you help preserve and promote Macedonia\'s rich heritage, culture, and history for future generations. Together, we can achieve impactful projects and create a lasting legacy.',
    'donation.confirmation': 'Make Your Impact Today! Click "Donate Now" and receive an automated confirmation email with your donation receipt attached. Your generosity shapes our shared future!',

    // Footer
    'quick.links': 'Quick Links',
    'connect.with.us': 'Connect With Us',
    'support.cause': 'Support Our Cause',
    'help.preserve': 'Help us preserve Macedonian heritage for future generations',
    'general.inquiries': 'General Inquiries, Press and Media',
    'stay.connected.desc': 'Get the latest updates and insights',
    'join.community': 'Join Our Community',
    'be.part': 'Be part of our growing network',
    'global.impact': 'Global Impact',
    'help.spread': 'Help spread our message worldwide',
    'contact.us': 'Contact Us',
    'stay.connected': 'Stay Connected',

    // Advisory Board Members
    'zila.title': 'Full Professor',
    'zila.description': 'Full professor at the Institute of National History – Skopje; expert on the Macedonian issue and the national movement; author of textbooks, monographs and scientific papers; member of the International Academy "St. Cyril and Methodius".',
    
    'sardzoski.title': 'English Expert',
    'sardzoski.description': 'An expert in English and a multi-talented person with a special sensitivity for the written word (poetry and prose) but also for music. Lover of Macedonian history and Macedonianism.',
    
    'lazarova.title': 'Professor at KIT & SDU',
    'lazarova.description': 'Professor at the Karlsruhe Institute of Technology (KIT), Germany and Professor at the University of Southern Denmark (SDU); Modeling, simulation and data analysis; Digital twins; Energy systems',
    
    'poposki.title': 'Ophthalmologist',
    'poposki.description': 'Renowned ophthalmologist specializing in retina surgery. Leads research at Consorci Parc de Salut Mar and Institut Català de Retina. Award-winning researcher and lecturer in ophthalmology.',
    
    'nikolovski.title': 'Internal Medicine Specialist',
    'nikolovski.description': 'Specialist in Internal Medicine with extensive experience in clinical care. Currently serving as a department physician, he is dedicated to providing high-quality medical treatment and patient-centered care. Part of the team at ISCC, contributing to the advancement of internal medicine practices.',

    // Community Cards
    'stay.connected': 'Stay Connected',
    'stay.connected.desc': 'Get the latest updates and insights',
    'join.community': 'Join Our Community',
    'join.community.desc': 'Be part of our growing network',
    'global.impact': 'Global Impact',
    'global.impact.desc': 'Help spread our message worldwide',
  },
  mk: {
    // Header
    'roots.future': 'Корени и Иднина',
    'preserving.past': 'Да го зачуваме минатото, да ја обликуваме иднината',
    'welcome.message': 'Добредојдовте во Глобалната Македонска Фондација Вечна',
    'foundation.description': 'Посветена на зачувување на македонското наследство и обликување на иднината, Глобална Македонска Фондација Вечна промовира единство преку историја, култура и образование.',
    'join.message': 'Придружете ни се во славењето на нашето заедничко наследство и создавањето на посветла иднина.',
    'support.vision': 'Поддржете ја нашата визија',
    
    // Mission
    'mission.vision': 'Нашата мисија и визија',
    'about.foundation': 'За Глобалната Македонска Фондација Вечна',
    'foundation.purpose': 'Глобална Македонска Фондација Вечна е основана со цел да го зачува и промовира богатото културно наследство на Македонија, нејзината историска важност и образовните иницијативи. Како глобална платформа, фондацијата се стреми да ги поврзе Македонците ширум светот и да ги слави заедничките вредности и традиции кои ја дефинираат нашата уникатна идентичност.',
    'we.dedicated': 'Посветени сме на:',
    'preservation.title': 'Зачувување на Македонското Наследство',
    'research.title': 'Поддршка на Културни Истражувања',
    'empowerment.title': 'Образовно Зајакнување',
    'heritage.description': 'Да го промовираме и зачуваме богатото македонско историско и културно наследство на глобално ниво, градејќи свесност и почит низ култури.',
    'workshops.description': 'Да поддржиме иновативни истражувања и објавување на непроценливото македонско културно наследство што избледело со текот на времето, обезбедувајќи финансиска помош за иницијативи кои го чуваат и слават ова трајно наследство.',
    'education.description': 'Да ја зајакнеме следната генерација на научници од Македонија и соседните региони преку доделување престижни стипендии, овозможувајќи им да продолжат со напредни постдипломски студии и да придонесат во глобалниот академски пејзаж.',

    // Board
    'who.we.are': 'Кои сме ние',
    'board.subtitle': 'Запознајте ги визионерите зад фондацијата',
    'board.description': 'Глобална Македонска Фондација Вечна е водена од страсни и посветени личности посветени на зачувување и промовирање на македонското наследство. Нашето раководство отелотворува заедничка визија за зачувување на културата, образование и глобално единство.',
    'founders.board': 'Основачи и Одбор',
    'founders.description': 'Семејството Крстески е движечката сила зад основањето на Глобалната Македонска Фондација Вечна (ГМФВ). Со длабока поврзаност со историјата и културата на Македонија, и силна желба да придонесат значајно во зачувувањето и промовирањето на националното наследство, Гроздана, Ацо и Мирчо Крстески ја презедоа иницијативата да ја оживеат оваа фондација.',
    'founders.mission': 'Како основачи и членови на одборот, тие се посветени на реализирање на визијата и мисијата на фондацијата. Заедно, тие се одговорни за стратешката насока и одржливиот успех на ГМФВ. Нивната цел е да создадат силна основа за иднината преку проекти во образованието, истражувањето и културата – оставајќи наследство кое ќе трае со генерации.',
    'founders.invitation': 'Семејството Крстески срдечно ги поканува сите да се придружат на оваа значајна иницијатива и заедно да работиме на зачувување и славење на македонското културно наследство и вредности.',
    'advisory.board': 'Советодавен Одбор',
    'join.board': 'Дали сакате да се придружите на Советодавниот одбор?',
    'join.board.description': 'Наша цел е да го прошириме нашиот Советодавен одбор за да вклучиме експерти од различни области релевантни за мисијата на фондацијата. Доколку сте заинтересирани да придонесете и да станете дел од нашите напори, срдечно ве покануваме да контактирате со нас на contact(at)GMFE.org.',
    'role.offer': 'Понуда за работа',
    'executive.manager': 'Извршен менаџер',
    'marko.name': 'Марко Видачек',
    'manager.description': 'Кандидат за докторски студии во областа на безбедносните науки, магистер по уставно право и магистер по управување со стратешка комуникација. Предавач и консултант во областите на уставното право, безбедноста и стратешката комуникација.',
    'executive.director': 'Извршен директор',
    'contact.position': 'Доколку сте заинтересирани за позицијата извршен менаџер, ве покануваме да не контактирате на:',

    // Stay Tuned
    'stay.tuned': 'Следете нè!',
    'stay.tuned.description': 'Активно подготвуваме содржина за споделување со вас. Тука наскоро ќе ги најдете линковите до нашите официјални социјални медиуми, вклучувајќи LinkedIn, каде што ќе обезбедуваме ажурирања, слики и видеа од претходни настани и возбудливи кампањи.',
    'coming.soon': 'Наскоро',
    'get.involved': 'Вклучете се',
    'get.involved.description': 'Откријте можности да направите влијание во зачувувањето на нашето наследство',
    'project.updates': 'Ажурирања на проекти',
    'project.updates.description': 'Бидете информирани за нашите тековни и претстојни иницијативи',
    'event.highlights': 'Истакнати настани',
    'event.highlights.description': 'Доживејте го визуелното патување на нашите настани и соработки',

    // Contact Form
    'get.in.touch': 'Контактирајте нè',
    'name': 'Име',
    'email': 'Е-пошта',
    'subject': 'Наслов',
    'message': 'Порака',
    'send.message': 'Испрати порака',
    'your.name': 'Вашето име',
    'your.email': 'vasaadresa@email.com',
    'message.about': 'За што се однесува вашата порака?',
    'your.message': 'Вашата порака...',
    'captcha.error': 'Ве молиме пополнете ја CAPTCHA верификацијата',
    
    // Navigation
    'mission': 'Мисија',
    'endeavors': 'Иницијативи',
    'board': 'Одбор',
    'donate': 'Донирај',
    'contact': 'Контакт',

    // Chairman
    'chairman.title': 'Претседател на Фондацијата',
    'chairman.description': 'Како движечка сила зад фондацијата, Мирчо внесува големо искуство и длабока посветеност на славењето и зачувувањето на македонското наследство. Со позадина во лидерство и ангажман во заедницата, тој ја замислува фондацијата како мост помеѓу богатата историја на Македонија и нејзината ветувачка иднина.',
    'chairman.quote': 'Како Претседател на Глобална Македонска Фондација Вечна, чест ми е да ја водам оваа иницијатива која го поврзува нашето наследство со иднината. Нашата мисија не е само да го зачуваме наследството на Македонија, туку и да инспирираме глобална поврзаност со нашите корени. Заедно, можеме да обезбедиме нашата историја и култура да продолжат да живеат и да се слават низ целиот свет.',

    // Events
    'events.title': 'Наши настани и проекти',
    'events.subtitle': 'Посветени на напредок и единство',
    'events.description': 'Глобална Македонска Фондација Вечна работи на значајни иницијативи кои го зачувуваат македонското наследство додека промовираат раст и образование. Нашите проекти ја прикажуваат богатата ткаенина на македонската култура и традиција.',
    'heritage.title': 'Зачувување на наследството',
    'heritage.description': 'Да го промовираме и зачуваме богатото македонско историско и културно наследство на глобално ниво, градејќи свесност и почит низ култури.',
    'workshops.title': 'Културни работилници',
    'workshops.description': 'Да поддржиме иновативни истражувања и објавување на непроценливото македонско културно наследство што избледело со текот на времето, обезбедувајќи финансиска помош за иницијативи кои го чуваат и слават ова трајно наследство.',
    'education.title': 'Образовни иницијативи',
    'education.description': 'Да ја зајакнеме следната генерација на научници од Македонија и соседните региони преку доделување престижни стипендии, овозможувајќи им да продолжат со напредни постдипломски студии и да придонесат во глобалниот академски пејзаж.',

    // Contact
    'shape.future': 'Обликувајте ја иднината заедно',
    'support.difference': 'Вашата поддршка прави разлика!',
    'donation.impact': 'Со донирање помагате за зачувување и промовирање на богатото наследство, култура и историја на Македонија за идните генерации. Заедно, можеме да постигнеме влијателни проекти и да создадеме трајно наследство.',
    'make.impact': 'Направете го вашето влијание денес!',
    'donation.confirmation': 'Кликнете „Донирај сега" и добијте автоматска потврдна е-пошта со приложена потврда за донација. Вашата великодушност ја обликува нашата заедничка иднина!',

    // Common buttons and labels
    'donate.now': 'Донирајте сега',
    'learn.more': 'Дознајте повеќе',

    // Footer
    'quick.links': 'Брзи линкови',
    'connect.with.us': 'Поврзете се со нас',
    'support.cause': 'Поддржете ја нашата кауза',
    'help.preserve': 'Помогнете ни да го зачуваме македонското наследство за идните генерации',
    'general.inquiries': 'Општи прашања, прес и медиуми',
    'stay.connected.desc': 'Добивајте ги најновите информации',
    'join.community': 'Придружете се на нашата заедница',
    'be.part': 'Бидете дел од нашата растечка мрежа',
    'global.impact': 'Глобално влијание',
    'help.spread': 'Помогнете да ја прошириме нашата порака низ светот',
    'contact.us': 'Контактирајте нè',
    'stay.connected': 'Останете поврзани',

    // Advisory Board Members
    'zila.title': 'Редовен професор',
    'zila.description': 'Редовен професор на Институтот за национална историја - Скопје; експерт за македонското прашање и националното движење; автор на учебници, монографии и научни трудови; член на Меѓународната академија „Свети Кирил и Методиј".',
    
    'sardzoski.title': 'Експерт по англиски јазик',
    'sardzoski.description': 'Експерт по англиски јазик и мултиталентирана личност со посебна чувствителност за пишаниот збор (поезија и проза) но и за музиката. Љубител на македонската историја и македонизмот.',
    
    'lazarova.title': 'Професор на KIT и SDU',
    'lazarova.description': 'Професор на Технолошкиот институт во Карлсруе (KIT), Германија и професор на Универзитетот во Јужна Данска (SDU); Моделирање, симулација и анализа на податоци; Дигитални близнаци; Енергетски системи',
    
    'poposki.title': 'Офталмолог',
    'poposki.description': 'Реномиран офталмолог специјализиран за ретинална хирургија. Води истражувања во Consorci Parc de Salut Mar и Institut Català de Retina. Наградуван истражувач и предавач во областа на офталмологијата.',
    
    'nikolovski.title': 'Специјалист по интерна медицина',
    'nikolovski.description': 'Специјалист по интерна медицина со долгогодишно искуство во клиничка нега. Моментално работи како лекар во одделение, посветен на обезбедување висококвалитетен медицински третман и нега фокусирана на пациентот. Дел од тимот на ISCC, придонесувајќи за унапредување на практиките во интерната медицина.',

    // Community Cards
    'stay.connected': 'Останете поврзани',
    'stay.connected.desc': 'Добивајте ги најновите информации',
    'join.community': 'Придружете се на нашата заедница',
    'join.community.desc': 'Бидете дел од нашата растечка мрежа',
    'global.impact': 'Глобално влијание',
    'global.impact.desc': 'Помогнете да ја прошириме нашата порака низ светот',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
