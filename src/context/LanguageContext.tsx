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
    'message.sent': 'Message Sent',
    
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
    'research.funding.title': 'Research Funding & Project Applications',
    'research.funding.subtitle': 'Supporting Emerging Talents and Established Scholars',
    'research.funding.description': 'The Global Macedonian Foundation Eternal (GMFE) funds academic projects in the fields of history, language, and ethnology – aiming to actively research, preserve, and promote Macedonia\'s cultural heritage worldwide.',
    'research.funding.cta': 'Are you conducting research or preparing a new project?',
    'research.funding.details': 'We invite you to submit your proposal through our online application form. All submissions will be carefully reviewed by our Scientific Advisory Board. Selected projects will receive targeted financial support.',
    'submit.proposal': 'Submit Your Project Proposal',
    'shape.future': 'Shape the Future Together',
    'support.difference': 'Your support makes a difference! By donating, you help preserve and promote Macedonia\'s rich heritage, culture, and history for future generations. Together, we can achieve impactful projects and create a lasting legacy.',
    'donation.confirmation': 'Make Your Impact Today! Click "Donate Now" and receive an automated confirmation email with your donation receipt attached. Your generosity shapes our shared future!',

     'vasil.project.title': 'Vasil Sterjovski Research Project',
    'vasil.project.description': 'Vasil Sterjovski, researcher and PhD candidate in history and international relations...',
    'vasil.support.description': 'The Global Macedonian Foundation Eternal (GMFE) supports Vasil Sterjovski\'s work by:',
    'vasil.support.tuition': 'Covering part of his doctoral tuition fees through our research fund',
    'vasil.support.mentorship': 'Providing mentorship and academic guidance from Advisory Board members',
    'vasil.support.publication': 'Supporting the promotion and publication of his dissertation results',
    'vasil.support.visibility': 'Ensuring visibility and outreach through our PR and cultural diplomacy network',
    'vasil.impact.description': 'This project contributes to:',
    'vasil.impact.preserving': 'Preserving the historical and cultural identity of Macedonians in Albania',
    'vasil.impact.strengthening': 'Strengthening academic research on Macedonian history in European and Balkan contexts',
    'vasil.impact.awareness': 'Raising international awareness about the challenges and resilience of the Macedonian minority in Albania',
    'vasil.impact.inspiring': 'Inspiring future scholars to engage with identity and heritage studies',
    'vasil.focus.title': 'Doctoral Research Focus:',
    'vasil.focus.policies': 'Bulgarian and regional policies toward Macedonians in Albania (1912–2025)',
    'vasil.focus.archival': 'Archival and historical research across the Balkans and Europe',
    'vasil.focus.identity': 'Macedonian identity and cultural heritage in Albania',
    
    // Contact
    'shape.future': 'Shape the Future Together',
    'support.difference': 'Your support makes a difference! By donating, you help preserve and promote Macedonia\'s rich heritage, culture, and history for future generations. Together, we can achieve impactful projects and create a lasting legacy.',
    'donation.confirmation': 'Make Your Impact Today! Click "Donate Now" and receive an automated confirmation email with your donation receipt attached. Your generosity shapes our shared future!',

        // Donation Cards
    'support.mission.title': 'Support Our Mission',
    'support.mission.description': 'Your donation helps sustain the Global Macedonian Foundation Eternal and its long-term initiatives. With your support, we can continue to promote Macedonian heritage, fund key projects, and expand our impact globally.',
    'support.mission.highlight': 'Ensure the foundation\'s success with your contribution!',
    
    'young.researchers.title': 'Fund for Young Researchers',
    'young.researchers.goal': '€15,000 Goal',
    'young.researchers.description': 'We are raising €15,000 to provide scholarships and grants for young historians, linguists, and ethnologists. By supporting this fund, you help the next generation of scholars preserve and share Macedonia\'s history and culture.',
    'young.researchers.highlight': 'Help us reach our goal and empower future academics!',
    'young.researchers.button': 'Support Young Researchers',
    
    'preserving.knowledge.title': 'Preserving Knowledge',
    'preserving.knowledge.goal': '€150,000 Research Fund',
    'preserving.knowledge.description': 'To secure and advance Macedonian historical research, we aim to raise €150,000 for a dedicated research fund. This will finance groundbreaking projects, academic publications, and studies that document and safeguard our national heritage.',
    'preserving.knowledge.highlight': 'Invest in research that protects and strengthens our legacy!',
    'preserving.knowledge.button': 'Support Research Fund',

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

    // Ambassadors
    'ambassadors': 'Ambassadors',
    'our.ambassadors': 'Our Ambassadors',
    'ambassadors.description': 'GMFE appoints Ambassadors representing its mission and Macedonian heritage in cultural, academic, and public spaces worldwide.',
    'kostov.title': 'Ethnochoreologist & Research Associate, Institute of Folklore "Marko Cepenkov", Skopje',
    'kostov.description': 'Stojanče Kostov is a distinguished Macedonian researcher in the field of folk dance and intangible cultural heritage. He holds degrees in ethnocoreology from the University "Goce Delčev" and Ss. Cyril and Methodius University works as a scientific associate at the Institute of Folklore in Skopje. His fieldwork and academic contributions include over 30 publications and participation in numerous international conferences. Kostov is dedicated to documenting, preserving, and promoting the traditional dances and oral heritage of Macedonia.',
    'kostov.focus': 'Research focus: dance tradition, ethnocoreological recordings, methodological aspects, and stage presentation of traditional games.',
    'kostov.quote': 'This collaboration represents a great opportunity for me to promote and affirm the Macedonian intangible cultural heritage. It is especially important to me that, with the support of GMFE – the only foundation of its kind in Macedonia – scientific research projects related to traditional folk dances and our national dance traditions will be published, increasing both the visibility and accessibility of such publications.',

    // Samuel Naumovski Vickius
    'samuel.name': 'Samuel Naumovski Vickius',
    'samuel.title': 'President at Swedish-Macedonian Chamber of Commerce (SMCC)',
    'samuel.description': 'Samuel is a Swedish-Macedonian professional with a background in peace and development, diplomacy, and international cooperation. As an NGO leader and political representative, he actively works on EU enlargement, transatlantic relations, and promoting equality through global initiatives.',
    'samuel.focus': 'Focus: Cultural diplomacy, peace and development, EU enlargement, transatlantic relations, and promotion of equality through global initiatives.',
    'samuel.quote': 'I am a GMFE ambassador to promote cultural heritage, support educational opportunities, and connect communities worldwide. Drawing on my international experience and leadership in global initiatives, I aim to foster collaboration, celebrate shared values, and inspire future generations.',

    // Vasil Sterjovski
    'vasil.name': 'Vasil Sterjovski',
    'vasil.title': 'Researcher & PhD Candidate',
    'vasil.project.title': 'Vasil Sterjovski Research Project',
    'vasil.project.description': 'Vasil Sterjovski, researcher and PhD candidate in history and international relations, is conducting a groundbreaking project focused on the policies toward Macedonians in Albania (1912–2025) and their cultural and historical identity. His doctoral research examines archival sources and political developments across the Balkans and Europe, aiming to document and analyze the persistence, challenges, and affirmation of Macedonians in Albania. This project highlights the intersection of history, diplomacy, and identity, shedding light on an often-overlooked community within the Macedonian cultural space.',
    'vasil.support.description': 'The Global Macedonian Foundation Eternal (GMFE) supports Vasil Sterjovski\'s work by:',
    'vasil.support.tuition': 'Covering part of his doctoral tuition fees through our research fund',
    'vasil.support.mentorship': 'Providing mentorship and academic guidance from Advisory Board members',
    'vasil.support.publication': 'Supporting the promotion and publication of his dissertation results',
    'vasil.support.visibility': 'Ensuring visibility and outreach through our PR and cultural diplomacy network',
    'vasil.impact.description': 'This project contributes to:',
    'vasil.impact.preserving': 'Preserving the historical and cultural identity of Macedonians in Albania',
    'vasil.impact.strengthening': 'Strengthening academic research on Macedonian history in European and Balkan contexts',
    'vasil.impact.awareness': 'Raising international awareness about the challenges and resilience of the Macedonian minority in Albania',
    'vasil.impact.inspiring': 'Inspiring future scholars to engage with identity and heritage studies',
    'vasil.focus.title': 'Doctoral Research Focus:',
    'vasil.focus.policies': 'Bulgarian and regional policies toward Macedonians in Albania (1912–2025)',
    'vasil.focus.archival': 'Archival and historical research across the Balkans and Europe',
    'vasil.focus.identity': 'Macedonian identity and cultural heritage in Albania',
    'vasil.quote': '"It is an honor to serve as an Ambassador of GMFE. I see this role as an opportunity to contribute to the promotion and affirmation of Macedonian identity and cultural heritage, especially of Macedonians in Albania. I believe that through this platform, we can collectively strengthen the bonds among Macedonians worldwide and inspire future generations."',

    // Stefan Ivanovski
    'stefan.name': 'Stefan Ivanovski',
    'stefan.title': 'Researcher & PhD Candidate',
    'stefan.description': 'Stefan is a bike to work researcher at Cornell University\'s School of Industrial and Labor Relations. His research focuses on the intersection of workplace democracy, job quality, AI, and the future of work. He studies how organizations can maintain high job quality and protect worker dignity amid the changes expected with the rise of artificial intelligence.',
    'stefan.focus': 'Focus: workplace democracy, cooperatives, job quality, life quality, AI, future of work, city and regional development, international relations',
    'stefan.quote': 'I am a GMFE ambassador to promote the beautiful and melodic Macedonian culture and connect Macedonians with the global tribes around the world. I draw on my experiences having lived, worked, and traveled in Europe, North America, South America, Asia, and Africa in bringing and promoting Macedonia, Macedonians, and the Macedonian culture to the world.',

    // Community Cards
    'stay.connected': 'Stay Connected',
    'stay.connected.desc': 'Get the latest updates and insights',
    'join.community': 'Join Our Community',
    'join.community.desc': 'Be part of our growing network',
    'global.impact': 'Global Impact',
    'global.impact.desc': 'Help spread our message worldwide',
    
    // Read More/Show Less
    'read.more': 'Read More',
    'show.less': 'Show Less',

    // IT Support
    'it.support': 'IT Support',
    'it.support.by': 'IT Support by',
    'it.support.description': 'Software Engineer & Entrepreneur. Founder of Excelerator-AI, building custom AI-powered CRM solutions for industries such as construction, finance, and real estate. Passionate about combining technology and business strategy to deliver innovation.',
    'professional.network': 'Professional Network',
    'ognen.veljanovski': 'Ognen Veljanovski',
    'ognen.title': 'Software Engineer, Entrepreneur, Innovator',

    // Heritage Preservation Page
    'heritage.preservation.title': 'Safeguarding Macedonia\'s Cultural Memory',
    'heritage.preservation.intro': 'Macedonia\'s cultural heritage is not only history – it is a living identity. Through Heritage Preservation projects, GMFE supports the research, documentation, and promotion of traditions, folklore, archaeology, and historical narratives. Our goal is to ensure that both tangible and intangible heritage remain preserved, celebrated, and accessible for future generations – in Macedonia and worldwide.',
    'ethnochoreological.study.title': 'Safeguarding Intangible Heritage – Ethnochoreological Study',
    'ethnochoreological.study.intro': 'Preserving the living traditions of Macedonia is at the heart of GMFE\'s mission. Folklore, dance, and oral culture are not only artistic expressions but also the carriers of collective memory.',
    'project.description': 'Project Description',
    'ethnochoreological.study.description': 'Assoc. Prof. Dr. Stojanche Kostov (Стојанче Костов), affiliated with the "Marko Cepenkov" Institute of Folklore in Skopje, leads a major project documenting and analyzing Macedonian dance traditions (оrа) in the regions of Ovče Pole, Štip, Kočani, Kratovo, and Zletovo. Based on over ten years of field research, his work includes melodic and kinetic notation of dances, contextual analysis of performance practices, and preservation of intangible cultural heritage.',
    'our.support': 'Our Support',
    'our.support.description': 'GMFE is going to partnering with Macedonian publishing houses to bring the research from Stojanche Kostov to print and distribution.',
    'support.monograph': 'Publication of a scientific monograph',
    'support.promotion': 'Promotion at academic and cultural events',
    'support.distribution': 'International distribution to universities and libraries',
    'project.impact': 'This project ensures that Macedonia\'s folk dance traditions are documented, published, and accessible for generations to come, strengthening both cultural identity and academic heritage.',
    'heritage.cta': 'By supporting GMFE\'s Heritage Preservation fund, you help safeguard traditions that might otherwise fade into silence.',
    
    // Educational Initiatives Page
    'educational.initiatives.title': 'Empowering the Next Generation of Macedonian Scholars',
    'educational.initiatives.intro': 'At GMFE, we believe that investing in education means investing in the future of Macedonia. Through our Educational Initiatives, we provide scholarships, mentorship, and project support to young researchers from Macedonia and beyond. These initiatives enable students and early-career scholars to pursue advanced studies, publish groundbreaking research, and represent Macedonian identity in the global academic landscape.',
    'empowering.scholars.title': 'Empowering Future Scholars – Research Project',
    'empowering.scholars.intro': 'The Global Macedonian Foundation Eternal (GMFE) proudly supports young scholars whose work strengthens the academic and cultural understanding of Macedonia.',
    'grujeski.project.description': 'Vladimir Grujeski, an emerging researcher with a Master\'s degree in International Relations and European Studies from the University of Florence, is conducting groundbreaking research on Italy\'s foreign policy toward Macedonia from the late 19th century until 1919. His project combines archival research in Italy, Portugal, and Hungary with a strong focus on understanding Macedonia\'s place in European diplomacy and history.',
    'grujeski.support.description': 'GMFE supports Vladimir\'s work by:',
    'grujeski.support.costs': 'Covering essential research and publication costs',
    'grujeski.support.mentorship': 'Providing mentorship and advisory support from senior scholars',
    'grujeski.support.showcase': 'Showcasing his work as part of the Foundation\'s Educational Initiatives',
    'grujeski.impact': 'This project will not only highlight Macedonia\'s international historical position but will also serve as an example of how young researchers, with the right support, can contribute to global academic discourse.',
    'educational.cta': 'Your support enables us to fund more young talents like Vladimir. Every contribution helps pave the way for a new generation of Macedonian scholars.',
    
    // Friends of GMFE
    'friends.gmfe.title': 'Friends of GMFE',
    'friends.gmfe.goal': '€5–10 Monthly Support',
    'friends.gmfe.description': 'Join our circle of Friends of GMFE and become part of a global community preserving Macedonia\'s roots and shaping its future. Your monthly support helps fund research, publications, and cultural initiatives that strengthen Macedonian identity worldwide.',
    'friends.gmfe.highlight': 'By becoming a Friend of GMFE, you\'ll receive exclusive updates, early access to new studies, and public recognition as a valued supporter.',
    'friends.gmfe.cta': 'Together, we nurture Roots and build the Future!',
    'friends.gmfe.button': 'Join as a Friend',
  },
  mk: {
    // Header
    'roots.future': 'Корени и Иднина',
    'preserving.past': 'Да го зачуваме минатото, да ја обликуваме иднината',
    'welcome.message': 'Добредојдовте во Глобалната Македонска Фондација Вечна',
    'foundation.description': 'Посветена на зачувување на македонското наследство и обликување на иднината, Глобална Македонска Фондација Вечна промовира единство преку историја, култура и образование.',
    'join.message': 'Придружете ни се во чествувањето на нашето славно наследство и градењето на посветла иднина.',
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

    'vasil.project.title': 'Истражувачки проект на Васил Стерјовски',
    'vasil.project.description': 'Васил Стерјовски, истражувач и докторанд по историја и меѓународни односи...',
    'vasil.support.description': 'Глобалната Македонска Фондација „ВЕЧНА" (ГМФВ) го поддржува проектот на Васил Стерјовски преку:',
    'vasil.support.tuition': 'Покривање на дел од неговата докторска школарина преку фондот за истражување',
    'vasil.support.mentorship': 'Обезбедување на менторска и академска поддршка од членови на Советодавниот одбор',
    'vasil.support.publication': 'Поддршка за промоција и објавување на резултатите од дисертацијата',
    'vasil.support.visibility': 'Обезбедување видливост и промоција преку нашата ПР-мрежа и културна дипломатија',
    'vasil.impact.description': 'Овој проект придонесува за:',
    'vasil.impact.preserving': 'Зачувување на историскиот и културниот идентитет на Македонците во Албанија',
    'vasil.impact.strengthening': 'Зајакнување на академското истражување за македонската историја во европски и балкански контекст',
    'vasil.impact.awareness': 'Подигање на меѓународната свест за предизвиците и истрајноста на македонското малцинство во Албанија',
    'vasil.impact.inspiring': 'Поттикнување на идни истражувачи да се посветат на теми за идентитет и културно наследство',
    'vasil.focus.title': 'Фокус на докторското истражување:',
    'vasil.focus.policies': 'Бугарските и регионалните политики кон Македонците во Албанија (1912–2025)',
    'vasil.focus.archival': 'Архивски и историски истражувања низ Балканот и Европа',
    'vasil.focus.identity': 'Македонски идентитет и културно наследство во Албанија',

    // Board
    'who.we.are': 'Кои сме ние',
    'board.subtitle': 'Запознајте ги визионерите зад фондацијата',
    'board.description': 'Глобалната Македонска Фондација Вечна ја предводат страсни и посветени личности, целосно оддадени на зачувувањето и промовирањето на македонското наследство. Нашето раководство ја отсликува заедничката визија за заштита на културата, унапредување на образованието и негување на глобалното единство.',
    'founders.board': 'Основачи и Одбор',
    'founders.description': 'Семејството Крстески е движечката сила зад создавањето на Глобалната Македонска Фондација Вечна (ГМФВ). Со длабока поврзаност со македонската историја и култура, како и со силна желба да остават значаен придонес во зачувувањето и промовирањето на националното наследство, Грозданка, Ацо и Мирчо Крстески ја презедоа иницијативата за оживување на оваа фондација.',
    'founders.mission': 'Како основачи и членови на одборот, тие се посветени на реализирање на визијата и мисијата на фондацијата. Заедно, тие се одговорни за стратешката насока и одржливиот успех на ГМФВ. Нивната цел е да создадат силна основа за иднината преку проекти во образованието, истражувањето и културата – оставајќи наследство кое ќе трае со генерации.',
    'founders.invitation': 'Семејството Крстески со срце ги повикува сите да се приклучат на оваа значајна иницијатива и заедно да работиме на зачувувањето и возвишувањето на македонското културно наследство и вредности.',
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
    "message.sent": "Порака испратена",
    
    // Navigation
    'mission': 'Мисија',
    'endeavors': 'Иницијативи',
    'board': 'Одбор',
    'ambassadors': 'Амбасадори',
    'donate': 'Донирај',
    'contact': 'Контакт',

    // Chairman
    'chairman.title': 'Претседател на Фондацијата',
    'chairman.description': 'Како движечка сила зад фондацијата, Мирчо внесува големо искуство и длабока посветеност на славењето и зачувувањето на македонското наследство. Со позадина во лидерство и ангажман во заедницата, тој ја замислува фондацијата како мост помеѓу богатата историја на Македонија и нејзината ветувачка иднина.',
    'chairman.quote': 'Како Претседател на Глобалната Македонска Фондација Вечна, за мене е чест да ја предводам оваа иницијатива што го спојува нашето минато со иднината. Нашата мисија не е само да го зачуваме богатото наследство на Македонија, туку и да поттикнеме глобална поврзаност со нашите корени. Заедно можеме да обезбедиме нашата историја и култура да продолжат да живеат и да се одбележуваат ширум светот.',

    // Events
    'events.title': 'Наши настани и проекти',
    'events.subtitle': 'Посветени на напредок и единство',
    'events.description': 'Глобалната Македонска Фондација Вечна ја предводат страсни и посветени личности, целосно оддадени на зачувувањето и промовирањето на македонското наследство. Нашето раководство ја отсликува заедничката визија за заштита на културата, унапредување на образованието и негување на глобалното единство..',
    'heritage.title': 'Зачувување на наследството',
    'heritage.description': 'Да го промовираме и зачуваме богатото македонско историско и културно наследство на глобално ниво, градејќи свесност и почит низ култури.',
    'workshops.title': 'Културни работилници',
    'workshops.description': 'Да ги поддржиме иновативните истражувања и објавувањето на непроценливото македонско културно наследство, кое избледело со текот на времето, обезбедувајќи финансиска поддршка за иницијативи што го зачувуваат и го вреднуваат ова трајно богатство.',
    'education.title': 'Образовни иницијативи',
    'education.description': 'Да ја инспирираме следната генерација на научници од Македонија и соседните региони преку доделување престижни стипендии, овозможувајќи им да продолжат со напредни постдипломски студии и да придонесат во глобалниот академски пејзаж.',

    // Contact
    'shape.future': 'Обликувајте ја иднината заедно',
    'support.difference': 'Вашата поддршка прави разлика!',
    'donation.impact': 'Со донирање помагате за зачувување и промовирање на богатото наследство, култура и историја на Македонија за идните генерации. Заедно, можеме да постигнеме влијателни проекти и да создадеме трајно наследство.',
    'make.impact': 'Направете го вашето влијание денес!',
    'donation.confirmation': 'Кликнете „Донирај сега" и добијте автоматска потврдна е-пошта со приложена потврда за донација. Вашата великодушност ја обликува нашата заедничка иднина!',

    // Donation Cards
    'support.mission.title': 'Поддржете ја нашата мисија',
    'support.mission.description': 'Вашата донација помага во одржувањето на Глобалната Македонска Фондација Вечна и нејзините долгорочни иницијативи. Со вашата поддршка, можеме да продолжиме да го промовираме македонското наследство, да финансираме клучни проекти и да го прошириме нашето влијание глобално.',
    'support.mission.highlight': 'Осигурајте го успехот на фондацијата со вашиот придонес!',
    
    'young.researchers.title': 'Фонд за млади истражувачи',
    'young.researchers.goal': 'Цел €15,000',
    'young.researchers.description': 'Собираме €15,000 за да обезбедиме стипендии и грантови за млади историчари, лингвисти и етнолози. Со поддршка на овој фонд, помагате на следната генерација на научници да го зачуваат и споделат македонското историја и култура.',
    'young.researchers.highlight': 'Помогнете ни да ја достигнеме нашата цел и да ги зајакнеме идните академици!',
    'young.researchers.button': 'Поддржете млади истражувачи',
    
    'preserving.knowledge.title': 'Зачувување на знаењето',
    'preserving.knowledge.goal': 'Истражувачки фонд €150,000',
    'preserving.knowledge.description': 'За да го обезбедиме и унапредиме македонското историско истражување, целиме да собереме €150,000 за наменски истражувачки фонд. Ова ќе финансира иновативни проекти, академски публикации и студии кои го документираат и штитат нашето национално наследство.',
    'preserving.knowledge.highlight': 'Инвестирајте во истражување кое го штити и зајакнува нашето наследство!',
    'preserving.knowledge.button': 'Придонесете во истражувачкиот фонд',
    // Common buttons and labels
    'donate.now': 'Донирајте сега',
    'learn.more': 'Дознајте повеќе',

    // Contact
    'research.funding.title': 'Истражувачки фондови и пријави за проекти',
    'research.funding.subtitle': 'Поддршка за млади таленти и етаблирани истражувачи',
    'research.funding.description': 'Глобалната Македонска Фондација Вечна (ГМФВ) нуди финансиска поддршка за научни проекти во областа на историјата, македонскиот јазик и етнологијата — со јасна мисија за активно истражување, зачувување и промоција на македонското културно наследство ширум светот.',
    'research.funding.cta': 'Дали веќе работите на истражувачки проект или подготвувате нов?',
    'research.funding.details': 'Ве охрабруваме да ја поднесете вашата апликација преку нашиот онлајн формулар. Сите пријави ќе бидат темелно разгледани од страна на Научниот совет на Фондацијата. Одбраните проекти ќе добијат финансиска поддршка за нивна реализација.',
    'submit.proposal': 'Поднеси проектна апликација',
    'shape.future': 'Обликувајте ја иднината заедно',
    'support.difference': 'Вашата поддршка прави разлика!',
    'donation.impact': 'Со донирање помагате за зачувување и промовирање на богатото наследство, култура и историја на Македонија за идните генерации. Заедно, можеме да постигнеме влијателни проекти и да создадеме трајно наследство.',
    'make.impact': 'Направете го вашето влијание денес!',
    'donation.confirmation': 'Кликнете „Донирај сега" и добијте автоматска потврдна е-пошта со приложена потврда за донација. Вашата великодушност ја обликува нашата заедничка иднина!',
    