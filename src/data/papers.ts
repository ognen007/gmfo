export interface Contributor {
  role: {
    en: string;
    mk: string;
  };
  name: string;
  affiliation?: string;
  biography?: {
    en: string;
    mk: string;
  };
}

export interface Paper {
  id: string;
  number: string;
  title: {
    en: string;
    mk: string;
  };
  subtitle?: {
    en: string;
    mk: string;
  };
  author: {
    en: string;
    mk: string;
  };
  year: number;
  categories: string[];
  abstract: {
    en: string;
    mk: string;
  };
  keywords: {
    en: string[];
    mk: string[];
  };
  researchContext?: {
    en: string;
    mk: string;
  };
  citation: {
    en: string;
    mk: string;
  };
  pdfUrl: string;
  pdfs?: Array<{
    number: string;
    url: string;
    language: "en" | "mk";
  }>;
  authorSection?: {
    name: {
      en: string;
      mk: string;
    };
    roles: {
      en: string[];
      mk: string[];
    };
    shortBio: {
      en: string;
      mk: string;
    };
    researchAreas: {
      en: string[];
      mk: string[];
    };
    email: string;
    linkedin: string;
    orcid: string;
    orcidUrl: string;
    photo: string;
  };
  contributors?: Contributor[];
  researchAreas?: {
    en: string[];
    mk: string[];
  };
  contact?: {
    general: string;
    website: string;
    academicProfiles?: string;
  };
  publishedDate?: string;
}

export const papers: Paper[] = [
  {
    id: "GMFE-RP-2026-001-brexit-eu-language-regime",
    number: "GMFE-RP-2026-001",
    title: {
      en: "Brexit and Its Potential Influence on the EU Language Regime",
      mk: "Брегзит и неговото потенцијално влијание врз јазичниот режим на ЕУ",
    },
    subtitle: {
      en: "A Legal and Scenario-Based Analysis of the Case of Macedonia",
      mk: "Правна и сценарио-базирана анализа на случајот на Македонија",
    },
    author: {
      en: "Mgr. Bc. Barbora Tomečková",
      mk: "Мгр. Бц. Барбора Томечкова",
    },
    year: 2026,
    abstract: {
      en: "This paper examines how Brexit may influence the EU language regime and the future language choices of Macedonia as an EU candidate country. It focuses on treaty and official languages, the continued role of English, and the legal and constitutional variables that may shape possible accession scenarios.",
      mk: "Овој труд испитува како Брегзит може да влијае врз јазичниот режим на ЕУ и врз идните јазични избори на Македонија како земја-кандидат за членство во ЕУ. Фокусот е врз договорните и официјалните јазици, понатамошната улога на англискиот јазик, како и правните и уставните променливи кои може да ги обликуваат можните сценарија за пристапување.",
    },
    keywords: {
      en: [
        "Brexit",
        "EU language regime",
        "Macedonia",
        "EU accession",
        "treaty languages",
        "official languages",
        "language notification",
        "constitutional language policy",
      ],
      mk: [
        "Брегзит",
        "Јазичен режим на ЕУ",
        "Македонија",
        "Пристапување кон ЕУ",
        "Договорни јазици",
        "Официјални јазици",
        "Јазична нотификација",
        "Уставна јазична политика",
      ],
    },
    categories: ["language", "policy", "research"],
    researchContext: {
      en: "This paper is based on research presented at The Future of European Law and Policy IX: The EU and the UK, 10 Years After the Referendum, hosted by the University of Birmingham Law School.",
      mk: "Овој труд се заснова на истражување презентирано на The Future of European Law and Policy IX: The EU and the UK, 10 Years After the Referendum, во организација на Правниот факултет на Универзитетот во Бирмингем.",
    },
    citation: {
      en: "Tomečková, B. (2026). Brexit and Its Potential Influence on the EU Language Regime: A Legal and Scenario-Based Analysis of the Case of Macedonia. GMFE Research Papers – Knowledge Series, Paper No. GMFE-RP-2026-001. Global Macedonian Foundation Eternal.",
      mk: "Томечкова, Б. (2026). Брегзит и неговото потенцијално влијание врз јазичниот режим на ЕУ: Правна и сценарио-базирана анализа на случајот на Македонија. ГМФВ Научни трудови / Серија „Сознание“, Бр. GMFE-RP-2026-001. Глобална Македонска Фондација Вечна.",
    },
    pdfUrl:
      "https://drive.google.com/file/d/1LPxvvAXcbozkZ1nL10SrQsl7-XZVg-tC/view?usp=sharing",
    authorSection: {
      name: {
        en: "Mgr. Bc. Barbora Tomečková",
        mk: "Мгр. Бц. Барбора Томечкова",
      },
      roles: {
        en: [
          "GMFE International Academic and Research Cooperation Contributor",
          "PhD Candidate, Department of Constitutional Law and Political Studies, Faculty of Law, Masaryk University",
          "Vice-Secretary, Austrian Association for Legal Linguistics",
        ],
        mk: [
          "Соработник за меѓународна академска и истражувачка соработка на ГМФВ",
          "Докторанд, Катедра за уставно право и политички студии, Правен факултет, Универзитет Масарик",
          "Заменик-секретар, Австриско здружение за правна лингвистика",
        ],
      },
      shortBio: {
        en: "Barbora Tomečková is a PhD candidate at the Faculty of Law of Masaryk University. Her doctoral research combines the study of official-language designation with language and status planning, national conceptualisations of official languages, and constitutional identity. Her principal countries of interest are Macedonia and Ireland. She contributes to GMFE as an International Academic and Research Cooperation Contributor and also serves as Vice-Secretary of the Austrian Association for Legal Linguistics.",
        mk: "Барбора Томечкова е докторанд на Правниот факултет на Универзитетот Масарик. Нејзиното докторско истражување ја комбинира студијата за одредување на официјален јазик со планирање на јазикот и статусот, националните концептуализации на официјалните јазици и уставниот идентитет. Нејзини главни земји на интерес се Македонија и Ирска. Таа придонесува во ГМФВ како Соработник за меѓународна академска и истражувачка соработка, а исто така е и заменик-секретар на Австриското здружение за правна лингвистика.",
      },
      researchAreas: {
        en: [
          "Legal linguistics",
          "Official-language designation",
          "EU language regime",
          "Language and status planning",
          "Official languages of Ireland",
          "Official language policy in Macedonia",
          "Constitutional and national identity",
          "AI in translation studies and human rights",
        ],
        mk: [
          "Правна лингвистика",
          "Одредување на официјален јазик",
          "Јазичен режим на ЕУ",
          "Планирање на јазик и статус",
          "Официјални јазици на Ирска",
          "Политика за официјален јазик во Македонија",
          "Уставен и национален идентитет",
          "Вештачка интелигенција во студиите за превод и човекови права",
        ],
      },
      email: "BALARAZ@outlook.cz",
      linkedin: "https://www.linkedin.com/in/barbora-tomečková-3b2b56182",
      orcid: "0009-0002-4848-2152",
      orcidUrl: "https://orcid.org/0009-0002-4848-2152",
      photo: "https://i.ibb.co/Y4PKfTqN/image.png",
    },
  },
  {
    id: "2026-004",
    number: "GMFE-RP-2026-002-MK",
    title: {
      en: "Mapping Macedonian Identity in the Balkans",
      mk: "Мапирање на македонскиот идентитет на Балканот",
    },
    author: {
      en: "Global Macedonian Foundation Eternal (GMFE)",
      mk: "Глобална Македонска Фондација Вечна (ГМФЕ)",
    },
    year: 2026,
    categories: ["History", "Identity", "Culture", "Research"],
    abstract: {
      en: "This study examines the historical development, preservation, and different forms of expression of Macedonian identity in the Balkans. Drawing on available historical sources, academic literature, and relevant testimonies, it identifies key processes that have influenced its formation and continuity. The study seeks to contribute to a structured and evidence-based understanding of Macedonian identity within its broader historical and regional context.",
      mk: "Оваа студија го разгледува историскиот развој, зачувувањето и различните облици на изразување на македонскиот идентитет на Балканот. Преку анализа на достапни историски извори, научна литература и релевантни сведоштва, се издвојуваат клучните процеси што влијаеле врз неговото формирање и континуитет. Целта на студијата е да придонесе кон систематизирано и аргументирано разбирање на македонскиот идентитет во неговиот поширок историски и регионален контекст.",
    },
    keywords: {
      en: [
        "Macedonian identity",
        "Macedonia",
        "Balkans",
        "history",
        "cultural heritage",
        "national consciousness",
        "historical continuity",
      ],
      mk: [
        "македонски идентитет",
        "Македонија",
        "Балкан",
        "историја",
        "културно наследство",
        "национална свест",
        "историски континуитет",
      ],
    },
    researchContext: {
      en: "The study was developed within the GMFE project \"Mapping Macedonian Identity in the Balkans.\" It brings together historical material and relevant academic perspectives to support the documentation, preservation, and informed examination of Macedonian identity. The publication forms part of the GMFE Research Papers – Knowledge Series and contributes to the research and knowledge objectives of Vision Eternal 2035.",
      mk: "Студијата е подготвена во рамките на проектот на ГМФЕ \"Мапирање на македонскиот идентитет на Балканот\". Таа обединува историски материјали и релевантни научни согледувања со цел да придонесе кон документирањето, зачувувањето и аргументираното проучување на македонскиот идентитет. Публикацијата е дел од едицијата \"GMFE Research Papers – Knowledge Series\" и придонесува кон истражувачките и образовните цели на Vision Eternal 2035.",
    },
    publishedDate: "2026-04-15",
    citation: {
      en: "Global Macedonian Foundation Eternal. (2026). Mapping Macedonian Identity in the Balkans. GMFE Research Papers – Knowledge Series, No. GMFE-RP-2026-002-MK. Global Macedonian Foundation Eternal.",
      mk: "Глобална Македонска Фондација Вечна. (2026). Мапирање на македонскиот идентитет на Балканот. GMFE Research Papers – Knowledge Series, бр. GMFE-RP-2026-002-MK. Глобална Македонска Фондација Вечна.",
    },
    pdfUrl: "https://drive.google.com/file/d/1zCui7I0gN91_erLDOSdI9WTiY3pYwwO3/view?usp=sharing",
    contributors: [
      {
        role: {
          en: "Institutional author and publisher",
          mk: "Институционален автор и издавач",
        },
        name: "Global Macedonian Foundation Eternal (GMFE)",
      },
      {
        role: {
          en: "Concept, compilation, coordination, and editorial preparation",
          mk: "Концепт, составување, координација и уредничка подготовка",
        },
        name: "Mirčo Krsteski",
        affiliation:
          "Chairman of the Global Macedonian Foundation Eternal and Coordinator of the project \"Mapping Macedonian Identity in the Balkans.\"",
        biography: {
          en: "Mirčo Krsteski is Chairman of the Global Macedonian Foundation Eternal and Coordinator of the project \"Mapping Macedonian Identity in the Balkans.\" He developed the publication concept, compiled and structured its content, coordinated the expert consultation process, and managed its editorial preparation. His work focuses on cultural diplomacy, the preservation of Macedonian cultural heritage, and the international promotion of Macedonian identity.",
          mk: "Мирчо Крстески е претседател на Глобалната Македонска Фондација ВЕЧНА и координатор на проектот \"Мапирање на македонскиот идентитет на Балканот\". Тој го разви концептот на публикацијата, ја состави и структурираше нејзината содржина, го координираше процесот на стручни консултации и ја водеше уредничката подготовка. Неговата работа е насочена кон културната дипломатија, зачувувањето на македонското културно наследство и меѓународната афирмација на македонскиот идентитет.",
        },
      },
      {
        role: {
          en: "Expert consultation and review",
          mk: "Стручна консултација и преглед",
        },
        name: "Prof. Dr. Stojko Stojkov",
      },
      {
        role: {
          en: "Expert consultation and review",
          mk: "Стручна консултација и преглед",
        },
        name: "MA Ile Velkov",
      },
      {
        role: {
          en: "Expert consultation and review",
          mk: "Стручна консултација и преглед",
        },
        name: "Dr. Marjan Gijovski",
      },
    ],
    researchAreas: {
      en: [
        "Macedonian identity",
        "Macedonian history",
        "cultural heritage",
        "historical memory",
        "Macedonians in the Balkans",
        "cultural diplomacy",
        "minority rights",
      ],
      mk: [
        "македонски идентитет",
        "македонска историја",
        "културно наследство",
        "историска меморија",
        "Македонците на Балканот",
        "културна дипломатија",
        "малцински права",
      ],
    },
    contact: {
      general: "contact@gmfe.org",
      website: "www.gmfe.org",
      academicProfiles: "Individual academic profiles are not currently listed.",
    },
  },
  {
    id: "2026-005",
    number: "GMFE-RP-2026-002-EN",
    title: {
      en: "Mapping Macedonian Identity in the Balkans",
      mk: "Мапирање на македонскиот идентитет на Балканот",
    },
    author: {
      en: "Global Macedonian Foundation Eternal (GMFE)",
      mk: "Глобална Македонска Фондација Вечна (ГМФЕ)",
    },
    year: 2026,
    categories: ["History", "Identity", "Culture", "Research"],
    abstract: {
      en: "This study examines the historical development, preservation, and different forms of expression of Macedonian identity in the Balkans. Drawing on available historical sources, academic literature, and relevant testimonies, it identifies key processes that have influenced its formation and continuity. The study seeks to contribute to a structured and evidence-based understanding of Macedonian identity within its broader historical and regional context.",
      mk: "Оваа студија го разгледува историскиот развој, зачувувањето и различните облици на изразување на македонскиот идентитет на Балканот. Преку анализа на достапни историски извори, научна литература и релевантни сведоштва, се издвојуваат клучните процеси што влијаеле врз неговото формирање и континуитет. Целта на студијата е да придонесе кон систематизирано и аргументирано разбирање на македонскиот идентитет во неговиот поширок историски и регионален контекст.",
    },
    keywords: {
      en: [
        "Macedonian identity",
        "Macedonia",
        "Balkans",
        "history",
        "cultural heritage",
        "national consciousness",
        "historical continuity",
      ],
      mk: [
        "македонски идентитет",
        "Македонија",
        "Балкан",
        "историја",
        "културно наследство",
        "национална свест",
        "историски континуитет",
      ],
    },
    researchContext: {
      en: "The study was developed within the GMFE project \"Mapping Macedonian Identity in the Balkans.\" It brings together historical material and relevant academic perspectives to support the documentation, preservation, and informed examination of Macedonian identity. The publication forms part of the GMFE Research Papers – Knowledge Series and contributes to the research and knowledge objectives of Vision Eternal 2035.",
      mk: "Студијата е подготвена во рамките на проектот на ГМФЕ \"Мапирање на македонскиот идентитет на Балканот\". Таа обединува историски материјали и релевантни научни согледувања со цел да придонесе кон документирањето, зачуввањето и аргументираното проучување на македонскиот идентитет. Публикацијата е дел од едицијата \"GMFE Research Papers – Knowledge Series\" и придонесува кон истражувачките и образовните цели на Vision Eternal 2035.",
    },
    publishedDate: "2026-04-15",
    citation: {
      en: "Global Macedonian Foundation Eternal. (2026). Mapping Macedonian Identity in the Balkans. GMFE Research Papers – Knowledge Series, No. GMFE-RP-2026-002-EN. Global Macedonian Foundation Eternal.",
      mk: "Глобална Македонска Фондација Вечна. (2026). Мапирање на македонскиот идентитет на Балканот. GMFE Research Papers – Knowledge Series, бр. GMFE-RP-2026-002-EN. Глобална Македонска Фондација Вечна.",
    },
    pdfUrl: "https://drive.google.com/file/d/1w7eFVc9JPBjsXZ8ELY80Ksks91lGZV0Z/view?usp=drive_link",
    contributors: [
      {
        role: {
          en: "Institutional author and publisher",
          mk: "Институционален автор и издавач",
        },
        name: "Global Macedonian Foundation Eternal (GMFE)",
      },
      {
        role: {
          en: "Concept, compilation, coordination, and editorial preparation",
          mk: "Концепт, составување, координација и уредничка подготовка",
        },
        name: "Mirčo Krsteski",
        affiliation:
          "Chairman of the Global Macedonian Foundation Eternal and Coordinator of the project \"Mapping Macedonian Identity in the Balkans.\"",
        biography: {
          en: "Mirčo Krsteski is Chairman of the Global Macedonian Foundation Eternal and Coordinator of the project \"Mapping Macedonian Identity in the Balkans.\" He developed the publication concept, compiled and structured its content, coordinated the expert consultation process, and managed its editorial preparation. His work focuses on cultural diplomacy, the preservation of Macedonian cultural heritage, and the international promotion of Macedonian identity.",
          mk: "Мирчо Крстески е претседател на Глобалната Македонска Фондација ВЕЧНА и координатор на проектот \"Мапирање на македонскиот идентитет на Балканот\". Тој го разви концептот на публикацијата, ја состави и структурираше нејзината содржина, го координираше процесот на стручни консултации и ја водеше уредничката подготовка. Неговата работа е насочена кон културната дипломатија, зачуввањето на македонското културно наследство и меѓународната афирмација на македонскиот идентитет.",
        },
      },
      {
        role: {
          en: "Expert consultation and review",
          mk: "Стручна консултација и преглед",
        },
        name: "Prof. Dr. Stojko Stojkov",
      },
      {
        role: {
          en: "Expert consultation and review",
          mk: "Стручна консултација и преглед",
        },
        name: "MA Ile Velkov",
      },
      {
        role: {
          en: "Expert consultation and review",
          mk: "Стручна консултација и преглед",
        },
        name: "Dr. Marjan Gijovski",
      },
    ],
    researchAreas: {
      en: [
        "Macedonian identity",
        "Macedonian history",
        "cultural heritage",
        "historical memory",
        "Macedonians in the Balkans",
        "cultural diplomacy",
        "minority rights",
      ],
      mk: [
        "македонски идентитет",
        "македонска историја",
        "културно наследство",
        "историска меморија",
        "Македонците на Балканот",
        "културна дипломатија",
        "малцински права",
      ],
    },
    contact: {
      general: "contact@gmfe.org",
      website: "www.gmfe.org",
      academicProfiles: "Individual academic profiles are not currently listed.",
    },
  },
  {
    id: "2026-006",
    number: "GMFE-RP-2026-003-EN",
    title: {
      en: "Macedonia as a Symbol of Ancient Knowledge and Wisdom in World Literature",
      mk: "Македонија како симбол на древното знаење и мудроста во светската литература",
    },
    subtitle: {
      en: "From Aristotle and Alexander to the Alchemists of García Márquez",
      mk: "Од Аристотел и Александар до алхемичарите кај Гарсија Маркес",
    },
    author: {
      en: "Global Macedonian Foundation Eternal (GMFE)",
      mk: "Глобална Македонска Фондација Вечна (ГМФЕ)",
    },
    year: 2026,
    categories: ["History", "Culture", "Heritage", "Research"],
    abstract: {
      en: "This paper examines Macedonia as a setting and symbol of knowledge in selected literary traditions. It compares García Márquez's alchemists, Plutarch's Aristotle and Alexander, Euripidean poetry and royal patronage, and Nizami's philosophical Iskandar. New Testament passages add inquiry, hospitality and generosity. The comparison distinguishes historical testimony, literary imagination and later reception. It supports a plural image of intellectual and ethical encounter, without establishing an uninterrupted institution, a direct chain of influence or an unchanged national identity.",
      mk: "Овој труд ја разгледува Македонија како простор и симбол на знаењето во избрани книжевни традиции. Ги споредува алхемичарите кај Гарсија Маркес, Аристотел и Александар во делото на Плутарх, поезијата на Еврипид и кралското покровителство, како и филозофскиот Искандар на Низами. Пасусите од Новиот завет ја дополнуваат анализата со мотиви на испитување, гостопримство и дарежливост. Споредбата прави разлика меѓу историските сведоштва, книжевната имагинација и подоцнежната рецепција. Таа поддржува повеќеслојна слика на интелектуални и етички средби, без притоа да докажува непрекинато постоење на една институција, директен синџир на влијанија или непроменет национален идентитет.",
    },
    keywords: {
      en: [
        "Macedonia",
        "cultural memory",
        "knowledge and wisdom",
        "Gabriel García Márquez",
        "Aristotle and Alexander",
        "Euripides",
        "Nizami",
        "literary reception",
      ],
      mk: [
        "Македонија",
        "културна меморија",
        "знаење и мудрост",
        "Габриел Гарсија Маркес",
        "Аристотел и Александар",
        "Еврипид",
        "Низами",
        "книжевна рецепција",
      ],
    },
    researchContext: {
      en: "Developed for the GMFE Research Papers – Knowledge Series, this comparative study examines selected literary and religious representations of knowledge associated with Macedonia and Alexander. It contributes to the cultural and educational aims of Vision Eternal 2035 through close reading, historical context and transparent source references. The study brings different traditions into dialogue while keeping historical testimony, literary imagination and modern heritage interpretation distinct.",
      mk: "Оваа компаративна студија е подготвена за серијата „Знаење“ во рамките на истражувачките трудови на ГМФВ. Во неа се разгледуваат избрани книжевни и религиски претстави за знаењето поврзани со Македонија и Александар. Преку внимателна анализа на текстовите, нивно сместување во историски контекст и јасно наведување на изворите, студијата придонесува кон културните и образовните цели на Визија ВЕЧНА 2035. Таа воспоставува дијалог меѓу различни традиции, притоа јасно разграничувајќи ги историските сведоштва, книжевната имагинација и современото толкување на културното наследство.",
    },
    publishedDate: "2026-04-15",
    citation: {
      en: "Global Macedonian Foundation Eternal. (2026). Macedonia as a Symbol of Ancient Knowledge and Wisdom in World Literature. GMFE Research Papers – Knowledge Series, Paper No. GMFE-RP2026-003-EN. Global Macedonian Foundation Eternal.",
      mk: "Глобална Македонска Фондација Вечна. (2026). Македонија како симбол на древното знаење и мудроста во светската литература. ГМФВ Научни трудови / Серија „Сознание“, Бр. GMFE-RP2026-003-EN. Глобална Македонска Фондација Вечна.",
    },
    pdfUrl: "https://drive.google.com/file/d/13imrs6evpk7r_s3xuziM4qY69k_TCpnr/view?usp=sharing",
    contributors: [
      {
        role: {
          en: "Institutional author and publisher",
          mk: "Институционален автор и издавач",
        },
        name: "Global Macedonian Foundation Eternal (GMFE)",
        affiliation: "Institutional author and publisher of the GMFE Research Papers – Knowledge Series.",
        biography: {
          en: "The Global Macedonian Foundation Eternal (GMFE) connects research, culture and international cooperation. Its Knowledge Series provides a platform for examining Macedonian history, heritage and cultural memory. GMFE is the institutional author and publisher of this paper.",
          mk: "Глобалната Македонска Фондација ВЕЧНА (ГМФВ) ги поврзува истражувањето, културата и меѓународната соработка. Нејзината Серија „Знаење“ обезбедува платформа за проучување на македонската историја, културното наследство и културната меморија. ГМФВ е институционален автор и издавач на овој труд.",
        },
      },
      {
        role: {
          en: "Concept and project initiation",
          mk: "Концепт и иницирање на проектот",
        },
        name: "Mirčo Krsteski",
        affiliation: "Chairman of GMFE and initiator of the paper's research question.",
        biography: {
          en: "Chairman of GMFE and initiator of the paper's research question.",
          mk: "Претседател на ГМФВ и иницијатор на истражувачкото прашање на овој труд.",
        },
      },
    ],
    researchAreas: {
      en: [
        "Comparative literature",
        "Macedonian cultural heritage",
        "Classical reception",
        "History of education",
        "Persian Alexander traditions",
        "Cultural memory",
        "Biblical reception",
      ],
      mk: [
        "Компаративна книжевност",
        "Македонско културно наследство",
        "Рецепција на антиката",
        "Историја на образованието",
        "Персиски традиции за Александар",
        "Културна меморија",
        "Рецепција на Библијата",
      ],
    },
    contact: {
      general: "contact@gmfe.org",
      website: "www.gmfe.org",
      academicProfiles: "Source-based research analysis. No external peer review is claimed for this edition.",
    },
  },
];

export const categories = [
  { id: "all", nameEn: "All", nameMk: "Сите" },
  { id: "history", nameEn: "History", nameMk: "Историја" },
  { id: "identity", nameEn: "Identity", nameMk: "Идентитет" },
  { id: "language", nameEn: "Language", nameMk: "Јазик" },
  { id: "culture", nameEn: "Culture", nameMk: "Култура" },
  { id: "education", nameEn: "Education", nameMk: "Образование" },
  { id: "heritage", nameEn: "Heritage", nameMk: "Наследство" },
  { id: "christianity", nameEn: "Christianity", nameMk: "Христијанство" },
  { id: "diaspora", nameEn: "Diaspora", nameMk: "Дијаспора" },
  { id: "policy", nameEn: "Policy", nameMk: "Јавни политики" },
  { id: "research", nameEn: "Research", nameMk: "Истражување" },
];
