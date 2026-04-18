import {
  ArrowDownToLine,
  BookOpenText,
  CheckCircle2,
  ExternalLink,
  FileText,
  Globe2,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

type DownloadItem = {
  id: number;
  title: string;
  url: string;
};

const HeritagePreservationProject = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      pageTag: "Research & Publication | Knowledge Programme",
      projectStatus: "In preparation (publication phase)",
      title:
        "Macedonian Identity Questions - A Scientific Framework for Understanding Identity",
      subtitle:
        "A long-term research publication project focused on structured, evidence-based identity discourse.",
      categoryLabel: "Category",
      statusLabel: "Project Status",
      overviewTitle: "Overview",
      overviewBody:
        'This project supports the publication of the scientific work "Macedonian Identity Questions" by Prof. Dr. Jovanka Kepeska. The book represents a comprehensive, interdisciplinary analysis of Macedonian identity, grounded in political science, philosophy, and social theory.',
      overviewBody2:
        "Developed over many years of academic research, the work addresses fundamental questions related to identity formation, language, culture, and historical continuity. It aims to contribute to a more structured, scientifically grounded understanding of Macedonian identity in both academic and public discourse.",
      overviewBody3:
        "The project aligns with GMFE's long-term objective to build enduring intellectual structures and strengthen knowledge-based narratives beyond short-term political frameworks.",
      authorTitle: "About the Author",
      authorBody:
        "Prof. Dr. Jovanka Kepeska is a scholar affiliated with the Faculty of Philosophy in Skopje. Her academic work focuses on interdisciplinary approaches to identity, combining political theory, philosophy, and social analysis.",
      authorBody2:
        "Her research emphasizes the relationship between people, language, and cultural expression, highlighting the importance of scientifically grounded approaches to national identity and historical development.",
      structureTitle: "Content & Structure of the Book",
      structureIntro: "The book is structured across several thematic pillars:",
      structureItems: [
        "Political identity of the Macedonian people",
        "Macedonian culture as a form of identity",
        "The Macedonian literary language as a core identity element",
        "Social development as a condition for identity formation",
        "Global developments and their relation to Macedonian identity",
      ],
      structureOutro:
        "Through these dimensions, the work offers a comprehensive and multi-layered perspective on identity as a dynamic and historically rooted concept.",
      relevanceTitle: "Relevance & Contribution",
      relevanceIntro: "The project contributes to:",
      relevanceItems: [
        "Strengthening academic discourse on Macedonian identity",
        "Providing a scientifically grounded reference for future research",
        "Supporting the preservation and interpretation of cultural and historical continuity",
        "Enabling international accessibility through structured presentation and translation",
      ],
      relevanceOutro:
        "The work has received positive academic recognition, highlighting its depth, coherence, and relevance in the current socio-political context.",
      roleTitle: "GMFE Role",
      roleBody:
        "The Global Macedonian Foundation Eternal supports this project as part of its Research & Knowledge Programme, focusing on:",
      roleItems: [
        "Enabling publication and dissemination",
        "Ensuring international visibility",
        "Positioning the work within a broader institutional and intellectual framework",
      ],
      downloadsTitle: "Additional Materials",
      downloadsSubtitle: "Download Section",
      downloadCta: "Download",
      popupTitle: "Supporting Knowledge. Preserving Identity.",
      popupBody:
        "Thank you for your interest in this publication. At the Global Macedonian Foundation Eternal (GMFE), we are committed to building long-term intellectual and cultural foundations through research, knowledge, and international collaboration.",
      popupBody2:
        "If you find value in this work, we invite you to support our mission and contribute to the continuation of projects like this.",
      popupBody3:
        "Every contribution helps us expand our impact and ensure that knowledge, identity, and cultural continuity remain accessible for future generations.",
      supportBtn: "Support Our Work",
      continueBtn: "Continue to Download",
      maybeLater: "Maybe later",
      closeLabel: "Close dialog",
      backdropLabel: "Download support dialog",
      materials: [
        {
          id: 1,
          title: "Project Expose (EN)",
          url: "https://drive.google.com/file/d/1mN9s6ZsEDK0Ft3OACajkRk81Y7sazTzo/view?usp=sharing",
        },
        {
          id: 2,
          title: "About the Author (EN)",
          url: "https://drive.google.com/file/d/1KHTXp5AY7G0QZ2HuOr3NUptGpH4lUuUi/view?usp=sharing",
        },
        {
          id: 3,
          title: "Selected Excerpts (EN)",
          url: "https://drive.google.com/file/d/1cN9p0v863efAjP7Jy9zZECltVxwcN5PM/view?usp=sharing",
        },
      ] as DownloadItem[],
    },
    mk: {
      pageTag: "Истражување и публикација | Програма за знаење",
      projectStatus: "Во подготовка (фаза на објавување)",
      title:
        "Македонските идентитетски прашања - научна рамка за разбирање на идентитетот",
      subtitle:
        "Долгорочен научно-публикациски проект за структурирано и научно засновано разбирање на идентитетот.",
      categoryLabel: "Категорија",
      statusLabel: "Статус на проектот",
      overviewTitle: "Преглед",
      overviewBody:
        'Овој проект ја поддржува публикацијата на научното дело "Македонските идентитетски прашања" од проф. д-р Јованка Кепеска. Книгата претставува сеопфатна, интердисциплинарна анализа на македонскиот идентитет, заснована врз политиколошки, филозофски и социотеориски пристапи.',
      overviewBody2:
        "Создадено врз основа на долгогодишни научни истражувања, делото обработува суштински прашања поврзани со формирањето на идентитетот, јазикот, културата и историскиот континуитет. Неговата цел е да придонесе кон појасно и научно засновано разбирање на македонскиот идентитет во академската и јавната сфера.",
      overviewBody3:
        "Проектот е во согласност со долгорочната мисија на ГМФЕ за градење трајни интелектуални структури и зајакнување на знаењето како основа за континуитет.",
      authorTitle: "За авторката",
      authorBody:
        "Проф. д-р Јованка Кепеска е научник поврзан со Филозофскиот факултет во Скопје. Нејзината работа е насочена кон интердисциплинарни истражувања на идентитетот, комбинирајќи политичка теорија, филозофија и социјална анализа.",
      authorBody2:
        "Нејзиниот пристап ја нагласува врската помеѓу народот, јазикот и културниот израз, како и потребата од научно засновано дефинирање на националниот идентитет.",
      structureTitle: "Содржина и структура на книгата",
      structureIntro: "Книгата е организирана во повеќе тематски целини:",
      structureItems: [
        "Политичкиот идентитет на македонскиот народ",
        "Македонската култура како идентитет",
        "Македонскиот литературен јазик како темел на идентитетот",
        "Општествениот развој како предуслов за идентификација",
        "Аспекти од светскиот развој поврзани со нас",
      ],
      structureOutro:
        "Овие теми овозможуваат сеопфатен и повеќеслоен пристап кон разбирањето на идентитетот како динамична и историски вкоренета категорија.",
      relevanceTitle: "Значење и придонес",
      relevanceIntro: "Проектот придонесува кон:",
      relevanceItems: [
        "Зајакнување на академската дебата за македонскиот идентитет",
        "Обезбедување научна референтна основа за идни истражувања",
        "Поддршка на зачувувањето на културниот и историскиот континуитет",
        "Меѓународна достапност преку структурирана презентација и превод",
      ],
      relevanceOutro:
        "Делото доби позитивна научна препорака, со нагласување на неговата целосност, релевантност и научна вредност.",
      roleTitle: "Улогата на ГМФЕ",
      roleBody:
        "Глобалната Македонска Фондација ВЕЧНА го поддржува овој проект во рамки на својата Програма за истражување и знаење, со фокус на:",
      roleItems: [
        "Поддршка на публикацијата",
        "Обезбедување меѓународна видливост",
        "Институционално позиционирање на делото",
      ],
      downloadsTitle: "Дополнителни материјали",
      downloadsSubtitle: "Download секција",
      downloadCta: "Преземи",
      popupTitle: "Поддршка на знаењето. Зачувување на идентитетот.",
      popupBody:
        "Ви благодариме за интересот за ова издание. Глобалната Македонска Фондација ВЕЧНА е посветена на градење долгорочни интелектуални и културни основи преку знаење, истражување и меѓународна соработка.",
      popupBody2:
        "Доколку го препознавате значењето на ова дело, ве покануваме да ја поддржите нашата мисија и да придонесете кон реализацијата на вакви проекти.",
      popupBody3:
        "Секој придонес помага во зајакнување на нашето влијание и обезбедување континуитет на знаењето и идентитетот за идните генерации.",
      supportBtn: "Поддржете ја нашата работа",
      continueBtn: "Продолжи кон документот",
      maybeLater: "Подоцна",
      closeLabel: "Затвори прозорец",
      backdropLabel: "Прозорец за поддршка пред преземање",
      materials: [
        {
          id: 1,
          title: "Експозе за проектот (MK)",
          url: "https://drive.google.com/file/d/1tQy6HYpgshxNsAL8Tl6JkZL-4lK_Ip_R/view?usp=sharing",
        },
        {
          id: 2,
          title: "Биографија на авторката (MK)",
          url: "https://drive.google.com/file/d/1tCgNsUQgTd7BwfKk3uQqWBwG0nnjmH-j/view?usp=sharing",
        },
        {
          id: 3,
          title: "Избрани извадоци (MK)",
          url: "https://drive.google.com/file/d/1mw8oK6mJokgss1J8YB5OGgozUPYa20E5/view?usp=sharing",
        },
      ] as DownloadItem[],
    },
  };

  const t = content[language];
  const [pendingDownloadUrl, setPendingDownloadUrl] = useState<string | null>(
    null,
  );

  const closeDialog = () => setPendingDownloadUrl(null);

  const handleDownloadClick = (url: string) => {
    setPendingDownloadUrl(url);
  };

  const handleContinueToDownload = () => {
    if (pendingDownloadUrl) {
      window.open(pendingDownloadUrl, "_blank", "noopener,noreferrer");
    }
    closeDialog();
  };

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeDialog();
      }
    };

    if (pendingDownloadUrl) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [pendingDownloadUrl]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Macedonia background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-white/20 backdrop-blur-sm rounded-full mb-6">
              <BookOpenText className="h-12 w-12 text-white" />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight">
              {t.title}
            </h1>

            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-white/95">
              {t.subtitle}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-3xl mx-auto text-left">
              <div className="rounded-xl border border-white/25 bg-white/15 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-white/80">
                  {t.categoryLabel}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {t.pageTag}
                </p>
              </div>
              <div className="rounded-xl border border-white/25 bg-white/15 p-4 backdrop-blur-sm">
                <p className="text-xs uppercase tracking-[0.16em] text-white/80">
                  {t.statusLabel}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">
                  {t.projectStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            <article className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8 md:p-12 h-full">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
                {t.overviewTitle}
              </h2>
              <p className="mt-5 text-gray-600 leading-relaxed">
                {t.overviewBody}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t.overviewBody2}
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t.overviewBody3}
              </p>
            </article>

            <aside className="lg:col-span-1 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 md:p-10 h-full">
              <div className="inline-flex items-center gap-2 text-secondary text-sm font-semibold">
                <Globe2 className="h-4 w-4" />
                GMFE Knowledge Track
              </div>

              <div className="mt-5 rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm">
                <img
                  src="https://i.ibb.co/4nTNm93k/image.png"
                  alt={
                    language === "en"
                      ? "Prof. Dr. Jovanka Kepeska"
                      : "Проф. д-р Јованка Кепеска"
                  }
                  className="w-full h-64 object-cover"
                />
              </div>

              <h3 className="mt-4 text-2xl font-bold text-primary font-playfair">
                {t.authorTitle}
              </h3>
              <p className="mt-4 text-gray-600 leading-relaxed">
                {t.authorBody}
              </p>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {t.authorBody2}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <article className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
                {t.structureTitle}
              </h2>
              <p className="mt-4 text-gray-600">{t.structureIntro}</p>
              <ul className="mt-5 space-y-3">
                {t.structureItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <span className="mt-1 w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-gray-600 leading-relaxed">
                {t.structureOutro}
              </p>
            </article>

            <article className="bg-white rounded-xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
                {t.relevanceTitle}
              </h2>
              <p className="mt-4 text-gray-600">{t.relevanceIntro}</p>
              <ul className="mt-5 space-y-3">
                {t.relevanceItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-lg bg-gray-50 p-4"
                  >
                    <span className="mt-1 w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-gray-600 leading-relaxed">
                {t.relevanceOutro}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair">
              {t.roleTitle}
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed max-w-4xl">
              {t.roleBody}
            </p>
            <div className="mt-7 grid md:grid-cols-3 gap-5">
              {t.roleItems.map((item, index) => (
                <div
                  key={item}
                  className="group bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 rounded-full bg-secondary/10 p-1.5">
                      <CheckCircle2 className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.12em] text-secondary/80">
                        {language === "en"
                          ? `Focus ${index + 1}`
                          : `Фокус ${index + 1}`}
                      </p>
                      <p className="mt-2 text-gray-700 leading-relaxed font-medium">
                        {item}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair">
              {t.downloadsTitle}
            </h2>
            <p className="mt-3 text-gray-600">{t.downloadsSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {t.materials.map((material) => (
              <article
                key={material.id}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <FileText className="h-5 w-5 text-secondary" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    PDF
                  </span>
                </div>

                <h3 className="mt-4 text-lg font-semibold text-primary leading-snug min-h-[56px]">
                  {material.title}
                </h3>

                <button
                  type="button"
                  onClick={() => handleDownloadClick(material.url)}
                  className="mt-5 inline-flex items-center justify-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-colors w-full"
                >
                  <ArrowDownToLine className="h-4 w-4" />
                  {t.downloadCta}
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {pendingDownloadUrl && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/55 px-4"
          role="dialog"
          aria-modal="true"
          aria-label={t.backdropLabel}
          onClick={closeDialog}
        >
          <div
            className="w-full max-w-[500px] rounded-xl bg-white p-6 md:p-7 text-gray-800 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl font-bold leading-tight text-primary font-playfair">
                {t.popupTitle}
              </h3>
              <button
                type="button"
                onClick={closeDialog}
                aria-label={t.closeLabel}
                className="rounded-md border border-gray-200 p-1.5 text-gray-600 transition hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-gray-600">
              {t.popupBody}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {t.popupBody2}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-gray-600">
              {t.popupBody3}
            </p>

            <div className="mt-6 grid gap-3">
              <a
                href="https://donate.raisenow.io/mvfdt?lng=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {t.supportBtn}
                <ExternalLink className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={handleContinueToDownload}
                className="inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm font-semibold text-primary transition hover:bg-gray-50"
              >
                {t.continueBtn}
              </button>
            </div>

            <div className="mt-4 text-center">
              <a
                href="https://pay.raisenow.io/ndyvq"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-secondary underline-offset-2 transition hover:underline"
              >
                {t.maybeLater}
              </a>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default HeritagePreservationProject;
