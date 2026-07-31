export interface Paper {
  id: string;
  number: string;
  title: {
    en: string;
    mk: string;
  };
  subtitle: {
    en: string;
    mk: string;
  };
  author: {
    en: string;
    mk: string;
  };
  year: number;
  abstract: {
    en: string;
    mk: string;
  };
  keywords: {
    en: string[];
    mk: string[];
  };
  categories: string[];
  researchContext: {
    en: string;
    mk: string;
  };
  citation: {
    en: string;
    mk: string;
  };
  pdfUrl: string;
  authorSection: {
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
