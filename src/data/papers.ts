export interface Paper {
  id: string;
  number: string;
  title: {
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
  category: string;
  publishedDate: string;
  citation: {
    en: string;
    mk: string;
  };
  pdfUrl: string;
}

export const papers: Paper[] = [
  {
    id: "2026-001",
    number: "2026/001",
    title: {
      en: "Macedonians",
      mk: "Македонците",
    },
    author: {
      en: "Branislav Svetozarevikj Pokorni",
      mk: "Бранислав Светозаревиќ Покорни",
    },
    year: 2026,
    abstract: {
      en: "This comprehensive study examines the historical development and cultural identity of Macedonians throughout the centuries, focusing on key periods that shaped their national consciousness and cultural heritage.",
      mk: "Оваа сеопфатна студија го испитува историскиот развој и културниот идентитет на Македонците низ вековите, со фокус на клучните периоди што го обликуваа нивното национално свесност и културно наследство.",
    },
    keywords: {
      en: ["Macedonian identity", "History", "Culture", "Heritage"],
      mk: ["Македонски идентитет", "Историја", "Култура", "Наследство"],
    },
    category: "History",
    publishedDate: "2026-01-15",
    citation: {
      en: "Pokorni, B. S. (2026). Macedonians. GMFE Research Papers – Knowledge Series, 2026/001.",
      mk: "Покорни, Б. С. (2026). Македонците. ГМФВ Научни трудови / Серија \"Сознание\", 2026/001.",
    },
    pdfUrl: "#",
  },
  {
    id: "2026-002",
    number: "2026/002",
    title: {
      en: "Macedonian Identity Issues",
      mk: "Проблеми со македонскиот идентитет",
    },
    author: {
      en: "Prof. Jovanka Kepeska",
      mk: "Проф. Јованка Кепеска",
    },
    year: 2026,
    abstract: {
      en: "An in-depth analysis of contemporary challenges facing Macedonian identity in the global context, exploring the intersection of tradition, modernity, and geopolitical influences on national consciousness.",
      mk: "Длабока анализа на современите предизвици со кои се соочува македонскиот идентитет во глобалниот контекст, истражувајќи го пресекот на традицијата, модерноста и геополитичките влијанија врз националната свесност.",
    },
    keywords: {
      en: ["Identity", "Society", "Culture", "Modernization"],
      mk: ["Идентитет", "Општество", "Култура", "Модернизација"],
    },
    category: "Identity",
    publishedDate: "2026-02-20",
    citation: {
      en: "Kepeska, J. (2026). Macedonian Identity Issues. GMFE Research Papers – Knowledge Series, 2026/002.",
      mk: "Кепеска, Ј. (2026). Проблеми со македонскиот идентитет. ГМФВ Научни трудови / Серија \"Сознание\", 2026/002.",
    },
    pdfUrl: "#",
  },
  {
    id: "2026-003",
    number: "2026/003",
    title: {
      en: "Ancient Macedonians and European Civilization",
      mk: "Античките Македонци и европската цивилизација",
    },
    author: {
      en: "Sveto Toevski",
      mk: "Свето Тоевски",
    },
    year: 2026,
    abstract: {
      en: "This research explores the significant contributions of Ancient Macedonians to the development of European civilization, examining their political, cultural, and intellectual legacy that continues to influence modern Europe.",
      mk: "Ова истражување го истражува значајниот придонес на Античките Македонци кон развојот на европската цивилизација, испитувајќи го нивното политичко, културно и интелектуално наследство што продолжува да влијае врз модерна Европа.",
    },
    keywords: {
      en: ["Ancient Macedonia", "European civilization", "History", "Heritage"],
      mk: ["Античка Македонија", "Европска цивилизација", "Историја", "Наследство"],
    },
    category: "History",
    publishedDate: "2026-03-10",
    citation: {
      en: "Toevski, S. (2026). Ancient Macedonians and European Civilization. GMFE Research Papers – Knowledge Series, 2026/003.",
      mk: "Тоевски, С. (2026). Античките Македонци и европската цивилизација. ГМФВ Научни трудови / Серија \"Сознание\", 2026/003.",
    },
    pdfUrl: "#",
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
