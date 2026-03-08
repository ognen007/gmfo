import {
  BookOpen,
  Globe,
  GraduationCap,
  Scale,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const VisionEternal = () => {
  const { language } = useLanguage();

  const isEnglish = language === "en";

  const programmes = isEnglish
    ? [
        {
          id: 1,
          icon: BookOpen,
          title: "Macedonian Heritage & Knowledge Initiative (MHKI)",
          description:
            "Preserving and advancing Macedonia's intellectual legacy.",
          color: "bg-blue-50",
          accentColor: "text-blue-600",
        },
        {
          id: 2,
          icon: Globe,
          title: "Diaspora, Identity & Social Cohesion Programme",
          description:
            "Connecting global Macedonian communities institutionally.",
          color: "bg-blue-50",
          accentColor: "text-blue-600",
        },
        {
          id: 3,
          icon: GraduationCap,
          title: "Youth, Research & Future Leaders Programme",
          description: "Investing in Macedonia's next generation of scholars.",
          color: "bg-blue-50",
          accentColor: "text-blue-600",
        },
        {
          id: 4,
          icon: Scale,
          title: "Memory, Democracy & Cultural Resilience Programme",
          description:
            "Strengthening democratic culture and institutional memory.",
          color: "bg-purple-50",
          accentColor: "text-purple-600",
        },
        {
          id: 5,
          icon: Building2,
          title: "Institutional Capacity & Impact Fund (ICIF)",
          description:
            "Ensuring long-term financial independence and governance.",
          color: "bg-slate-50",
          accentColor: "text-slate-600",
        },
      ]
    : [
        {
          id: 1,
          icon: BookOpen,
          title: "Иницијатива за македонско наследство и знаење (MHKI)",
          description:
            "Зачувување и унапредување на интелектуалното наследство на Македонија.",
          color: "bg-blue-50",
          accentColor: "text-blue-600",
        },
        {
          id: 2,
          icon: Globe,
          title: "Програма за дијаспора, идентитет и општествена кохезија",
          description:
            "Институционално поврзување на глобалните македонски заедници.",
          color: "bg-blue-50",
          accentColor: "text-blue-600",
        },
        {
          id: 3,
          icon: GraduationCap,
          title: "Програма за млади, истражување и идни лидери",
          description: "Инвестирање во новата генерација научници и мислители.",
          color: "bg-blue-50",
          accentColor: "text-blue-600",
        },
        {
          id: 4,
          icon: Scale,
          title: "Програма за меморија, демократија и културна отпорност",
          description:
            "Зајакнување на демократската култура и институционалната меморија.",
          color: "bg-purple-50",
          accentColor: "text-purple-600",
        },
        {
          id: 5,
          icon: Building2,
          title: "Фонд за институционален капацитет и влијание (ICIF)",
          description:
            "Обезбедување долгорочна финансиска независност и институционална стабилност.",
          color: "bg-slate-50",
          accentColor: "text-slate-600",
        },
      ];

  const timeline = isEnglish
    ? [
        {
          period: "2025-2027",
          title: "Foundation Building",
          points: [
            "Establish core programmes",
            "Build international partnerships",
            "Develop governance structures",
          ],
        },
        {
          period: "2028-2031",
          title: "Institutional Maturity",
          points: [
            "Scale flagship programmes",
            "Achieve financial sustainability",
            "Strengthen global recognition",
          ],
        },
        {
          period: "2032-2035",
          title: "International Reference",
          points: [
            "Lead in Macedonian scholarship",
            "Achieve institutional independence",
            "Establish global academic network",
          ],
        },
      ]
    : [
        {
          period: "2025–2027",
          title: "Поставување темели",
          points: [
            "Консолидирање на основните програми",
            "Градење меѓународни партнерства",
            "Развој на стабилни управувачки структури",
          ],
        },
        {
          period: "2028–2031",
          title: "Институционална зрелост",
          points: [
            "Проширување на стратешките програми",
            "Обезбедување финансиска одржливост",
            "Зајакнување на меѓународната препознатливост",
          ],
        },
        {
          period: "2032–2035",
          title: "Меѓународна референтност",
          points: [
            "Водечка улога во македонските научни истражувања",
            "Институционална независност",
            "Воспоставена глобална академска мрежа",
          ],
        },
      ];

  const principles = isEnglish
    ? [
        "Quality over volume",
        "Impact over activity",
        "Excellence over symbolism",
        "Institutional relevance over publicity",
        "Long-term value over short-term visibility",
      ]
    : [
        "Квалитет пред обем",
        "Влијание пред активност",
        "Извонредност пред симболика",
        "Институционална релевантност пред публицитет",
        "Долгорочна вредност пред краткорочна видливост",
      ];

  const defines = isEnglish
    ? [
        "Long-term institutional continuity",
        "Independence from political cycles",
        "Knowledge beyond short-term activism",
        "International cooperation & positioning",
        "Structured, scalable programmes",
        "Durable institutional impact",
      ]
    : [
        "Долгорочен институционален континуитет",
        "Независност од политички циклуси",
        "Знаење над краткорочен активизам",
        "Меѓународна соработка и позиционирање",
        "Структурирани и скалабилни програми",
        "Траен институционален импакт",
      ];

  const positionFrames = isEnglish
    ? [
        {
          id: 1,
          eyebrow: "Institutional Logic",
          primary: "We do not build projects.",
          secondary: "We build structures.",
          detail:
            "Our work is designed as durable systems with governance, continuity, and compounding academic value.",
        },
        {
          id: 2,
          eyebrow: "Strategic Discipline",
          primary: "We do not seek short-term visibility.",
          secondary: "We create long-term institutional weight.",
          detail:
            "Visibility can fluctuate. Institutional weight grows through consistency, standards, and measurable long-term outcomes.",
        },
      ]
    : [
        {
          id: 1,
          eyebrow: "Институционална логика",
          primary: "Ние не градиме проекти.",
          secondary: "Ние градиме структури.",
          detail:
            "Нашата работа е дизајнирана како трајни системи со управување, континуитет и акумулирачка академска вредност.",
        },
        {
          id: 2,
          eyebrow: "Стратешка дисциплина",
          primary: "Не бараме краткорочна видливост.",
          secondary: "Создаваме долгорочна институционална тежина.",
          detail:
            "Видливоста варира, но институционалната тежина расте преку конзистентност, стандарди и мерливи долгорочни резултати.",
        },
      ];

  const missionPaths = isEnglish
    ? [
        {
          id: 1,
          label: "Partner",
          title: "Become a partner institution",
          detail:
            "Co-develop institutional initiatives, shared programmes, and long-horizon collaborations.",
        },
        {
          id: 2,
          label: "Support",
          title: "Support our flagship programmes",
          detail:
            "Back high-impact programmes that are structured for continuity and measurable outcomes.",
        },
        {
          id: 3,
          label: "Contribute",
          title: "Engage as a research fellow or advisor",
          detail:
            "Contribute expertise, research direction, and academic guidance to strategic workstreams.",
        },
      ]
    : [
        {
          id: 1,
          label: "Партнерство",
          title: "Станете партнер-instituција",
          detail:
            "Ко-развивајте институционални иницијативи, заеднички програми и долгорочни соработки.",
        },
        {
          id: 2,
          label: "Поддршка",
          title: "Поддржете ги нашите стратешки програми",
          detail:
            "Поддржете програми со висок импакт, изградени за континуитет и мерливи резултати.",
        },
        {
          id: 3,
          label: "Придонес",
          title: "Вклучете се како истражувачки соработник или советник",
          detail:
            "Придонесете со експертиза, истражувачки насоки и академско менторство во стратешките линии.",
        },
      ];

  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);
  const activeRoadmap = timeline[activeRoadmapStep];
  const roadmapProgress = ((activeRoadmapStep + 1) / timeline.length) * 100;
  const [activeProgrammeId, setActiveProgrammeId] = useState(
    programmes[0]?.id ?? 1,
  );
  const [activePrincipleIndex, setActivePrincipleIndex] = useState(0);
  const [activePositionFrame, setActivePositionFrame] = useState(0);
  const [activeMissionPath, setActiveMissionPath] = useState(0);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#060b17] text-slate-100">
      <Navbar />

      <style>{`
        @keyframes ve-float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-14px) translateX(8px); }
        }

        @keyframes ve-reveal {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0px); }
        }

        .ve-float {
          animation: ve-float 12s ease-in-out infinite;
        }

        .ve-reveal {
          animation: ve-reveal 0.6s ease-out both;
        }
      `}</style>

      <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255, 164, 60, 0.12),transparent_35%),radial-gradient(circle_at_82%_22%,rgba(96,165,250,0.18),transparent_34%),radial-gradient(circle_at_52%_85%,rgba(30,41,59,0.6),transparent_55%)]" />
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Macedonia"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0,transparent_96%,rgba(148,163,184,0.15)_97%),linear-gradient(90deg,transparent_0,transparent_96%,rgba(148,163,184,0.12)_97%)] bg-[size:28px_28px]" />
        <div className="ve-float absolute -left-20 top-36 h-52 w-52 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="ve-float absolute -right-10 bottom-16 h-64 w-64 rounded-full bg-blue-300/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-12">
            <div
              className="ve-reveal lg:col-span-7"
              style={{ animationDelay: "40ms" }}
            >
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.22em] text-slate-200 backdrop-blur">
                {isEnglish
                  ? "Strategic Framework 2025-2035"
                  : "Стратешка рамка 2025-2035"}
              </span>

              <h1 className="mt-6 font-playfair text-5xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
                <span className="bg-gradient-to-r from-slate-100 via-blue-100 to-blue-300 bg-clip-text text-transparent">
                  {isEnglish ? "Vision Eternal 2035" : "Визија Вечна 2035"}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-xl font-semibold text-blue-100 sm:text-2xl">
                {isEnglish
                  ? "Institution. Knowledge. Impact."
                  : "Институција. Знаење. Влијание."}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {isEnglish
                  ? "Vision Eternal 2035 is our strategic commitment to building a lasting, internationally recognised institution connecting Macedonia with global knowledge, research, and cultural dialogue."
                  : "Визија ВЕЧНА 2035 е нашата стратешка определба за градење трајна, меѓународно препознатлива институција која ја поврзува Македонија со глобалното знаење, научното истражување и културниот дијалог."}
              </p>

              <blockquote className="mt-8 max-w-2xl border-l-2 border-blue-300/70 pl-5 text-lg italic text-blue-100 sm:text-xl">
                {isEnglish
                  ? '"We preserve, promote and shape Macedonia globally, sustainably and effectively."'
                  : '"Го зачувуваме, промовираме и обликуваме македонското глобално, одржливо и одговорно."'}
              </blockquote>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#programmes"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-300 to-blue-400 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-slate-900 transition hover:scale-[1.02]"
                >
                  {isEnglish ? "Explore Programmes" : "Истражете програми"}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="mailto:vision2035@gmfe.org"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition hover:bg-white/10"
                >
                  {isEnglish ? "Contact Team" : "Контакт тим"}
                </a>
              </div>
            </div>

            <div
              className="ve-reveal lg:col-span-5"
              style={{ animationDelay: "150ms" }}
            >
              <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[24px] border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.18),rgba(255,255,255,0.04))] p-1 shadow-[0_25px_65px_rgba(15,23,42,0.45)]">
                <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-blue-300/25 blur-2xl" />
                <div className="absolute -bottom-12 -left-12 h-36 w-36 rounded-full bg-blue-300/25 blur-3xl" />

                <div className="relative rounded-[20px] border border-white/10 bg-slate-950/55 p-5 backdrop-blur-xl sm:p-7">
                  <div className="mx-auto h-20 w-20 overflow-hidden rounded-2xl border border-white/15 bg-white/10 sm:h-24 sm:w-24">
                    <img
                      src="https://i.ibb.co/23JYWPS5/0eb91ee9-bc90-47c2-a5eb-eef397207198.jpg"
                      alt="Vision 2035 Logo"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-6 text-center font-playfair text-xl font-semibold leading-snug text-white sm:text-2xl">
                    {isEnglish
                      ? "This is not a campaign. This is institutional continuity."
                      : "Ова не е кампања. Ова е институционален континуитет."}
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    <div className="rounded-2xl border border-blue-200/25 bg-blue-200/10 p-4 text-center">
                      <p className="text-3xl font-black tracking-tight text-blue-300 sm:text-2xl">
                        5
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100/90">
                        {isEnglish ? "Programmes" : "Програми"}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-blue-200/25 bg-blue-200/10 p-4 text-center">
                      <p className="text-3xl font-black tracking-tight text-blue-300 sm:text-2xl">
                        10
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100/90">
                        {isEnglish ? "Years" : "Години"}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-blue-200/25 bg-blue-200/10 p-4 text-center">
                      <p className="text-3xl font-black tracking-tight text-blue-300 sm:text-2xl">
                        2035
                      </p>
                      <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-blue-100/90">
                        {isEnglish ? "Horizon" : "Хоризонт"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute -left-16 top-12 h-48 w-48 rounded-full bg-blue-300/10 blur-3xl" />
        <div className="absolute -right-12 bottom-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-playfair text-4xl font-bold text-primary sm:text-5xl">
            {isEnglish
              ? "OUR LONG-TERM ASPIRATION"
              : "НАШАТА ДОЛГОРОЧНА АМБИЦИЈА"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm uppercase tracking-[0.22em] text-slate-500 sm:text-base">
            {isEnglish
              ? "Institutional Continuity Through 2035"
              : "Институционален континуитет до 2035"}
          </p>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-12">
            <article className="ve-reveal relative overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(145deg,rgba(219,234,254,0.65),rgba(255,255,255,1))] p-1 lg:col-span-8">
              <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-300/20 blur-2xl" />
              <div className="relative rounded-[14px] border border-slate-200 bg-white/90 p-7 backdrop-blur-xl sm:p-10">
                <span className="inline-flex rounded-full border border-blue-300/40 bg-blue-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-800">
                  {isEnglish ? "Vision Objective" : "Визиска цел"}
                </span>

                <p className="mt-5 text-xl font-semibold leading-snug text-primary sm:text-3xl">
                  {isEnglish
                    ? "By 2035, GMFE will be the internationally recognised reference institution for Macedonian heritage, academic research, and institutional development."
                    : "До 2035 година, GMFE ќе се позиционира како меѓународно призната референтна instituция за македонско наследство, научни истражувања и институционален развој."}
                </p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-700 sm:text-lg">
                  {isEnglish
                    ? "We are building an institutional voice in international discourse on Macedonia."
                    : "Градиме институционален глас во меѓународните дискусии поврзани со Македонија."}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {isEnglish
                        ? "Global Positioning"
                        : "Глобално позиционирање"}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {isEnglish
                        ? "Reference institution for Macedonian heritage."
                        : "Референтна институција за македонско наследство."}
                    </p>
                  </div>
                  <div className="rounded-xl border border-blue-100 bg-blue-50 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      {isEnglish ? "Academic Impact" : "Академски импакт"}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-primary">
                      {isEnglish
                        ? "Durable research and institutional development."
                        : "Трајно истражување и институционален развој."}
                    </p>
                  </div>
                </div>
              </div>
            </article>

            <aside
              className="ve-reveal rounded-2xl border border-slate-200 bg-white p-6 lg:col-span-4"
              style={{ animationDelay: "130ms" }}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                {isEnglish ? "2035 Horizon" : "Хоризонт 2035"}
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-xl border border-blue-200/40 bg-blue-50 p-4">
                  <p className="text-3xl font-black text-blue-700">2035</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-blue-700/90">
                    {isEnglish ? "Target Year" : "Целна година"}
                  </p>
                </div>

                <div className="rounded-xl border border-blue-200/40 bg-blue-50 p-4">
                  <p className="text-2xl font-bold text-blue-700">
                    {isEnglish
                      ? "Internationally Recognised"
                      : "Меѓународно препознатлива"}
                  </p>
                  <p className="mt-1 text-xs text-blue-700/85">
                    {isEnglish
                      ? "Institutional status benchmark"
                      : "Институционален статус - репер"}
                  </p>
                </div>

                <div className="rounded-xl border border-blue-200/40 bg-blue-50 p-4">
                  <p className="text-2xl font-bold text-blue-700">
                    {isEnglish
                      ? "Research + Heritage"
                      : "Истражување + Наследство"}
                  </p>
                  <p className="mt-1 text-xs text-blue-700/85">
                    {isEnglish
                      ? "Dual pillar growth model"
                      : "Модел со двоен столб на раст"}
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#060b17] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-playfair text-4xl font-bold text-white sm:text-5xl">
            {isEnglish
              ? "WHAT DEFINES VISION ETERNAL 2035"
              : "ШТО ЈА ДЕФИНИРА ВИЗИЈА ВЕЧНА 2035"}
          </h2>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {defines.map((item, index) => (
              <div
                key={index}
                className="ve-reveal flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:-translate-y-1 hover:bg-white/[0.08]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <Check className="h-5 w-5 text-blue-300" />
                </div>
                <p className="text-base font-semibold text-slate-100">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programmes" className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-4 flex justify-center">
            <img
              src="https://i.ibb.co/k2HgWXWx/4be2fca6-c79b-4d15-878a-17efa100d17b.jpg"
              alt="Flagship Programmes"
              className="h-auto w-52 rounded-lg sm:w-64"
            />
          </div>

          <h2 className="text-center font-playfair text-4xl font-bold text-primary sm:text-5xl">
            {isEnglish
              ? "THE FIVE FLAGSHIP PROGRAMMES"
              : "ПЕТТЕ СТРАТЕШКИ ПРОГРАМИ"}
          </h2>

          <div className="mt-12">
            <div className="hidden md:flex justify-center">
              <div className="flex max-w-full gap-3 overflow-x-auto pb-2">
                {programmes.map((programme, index) => {
                  const IconComponent = programme.icon;
                  const isActive = activeProgrammeId === programme.id;

                  return (
                    <button
                      key={programme.id}
                      type="button"
                      onClick={() => setActiveProgrammeId(programme.id)}
                      className={`ve-reveal flex h-64 shrink-0 overflow-hidden rounded-2xl border text-left transition-all duration-500 ${
                        isActive
                          ? "w-[30rem] border-blue-300 bg-blue-50 shadow-lg"
                          : "w-28 border-slate-200 bg-white hover:border-blue-200"
                      }`}
                      style={{ animationDelay: `${(index + 1) * 90}ms` }}
                      aria-expanded={isActive}
                    >
                      <div
                        className={`flex h-full w-28 shrink-0 flex-col items-center justify-center border-r ${isActive ? "border-blue-200 bg-blue-100/70" : "border-slate-200 bg-slate-50"}`}
                      >
                        <IconComponent className="h-7 w-7 text-primary" />
                        <p className="mt-3 px-2 text-center text-[11px] font-bold uppercase leading-tight tracking-[0.1em] text-primary">
                          {isEnglish
                            ? `Phase ${programme.id}`
                            : `Фаза ${programme.id}`}
                        </p>
                      </div>

                      <div
                        className={`flex-1 p-5 transition-all duration-500 ${isActive ? "opacity-100" : "opacity-0"}`}
                      >
                        <h3 className="text-lg font-bold text-primary">
                          {programme.title}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-slate-700">
                          {programme.description}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="space-y-3 md:hidden">
              {programmes.map((programme) => {
                const IconComponent = programme.icon;
                const isActive = activeProgrammeId === programme.id;

                return (
                  <button
                    key={programme.id}
                    type="button"
                    onClick={() =>
                      setActiveProgrammeId(isActive ? -1 : programme.id)
                    }
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      isActive
                        ? "border-blue-300 bg-blue-50"
                        : "border-slate-200 bg-white"
                    }`}
                    aria-expanded={isActive}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <IconComponent className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-sm font-bold text-primary">
                        {programme.title}
                      </h3>
                    </div>
                    {isActive && (
                      <p className="mt-3 text-sm leading-relaxed text-slate-700">
                        {programme.description}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#060b17] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-playfair text-4xl font-bold text-white sm:text-5xl">
            {isEnglish ? "OUR PATH TO 2035" : "НАШИОТ ПАТ ДО 2035"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm uppercase tracking-[0.2em] text-slate-400 sm:text-base">
            {isEnglish
              ? "Interactive Roadmap - Click any phase"
              : "Интерактивна патека - Кликнете на која било фаза"}
          </p>

          <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent p-4 backdrop-blur sm:p-8">
            <div className="hidden md:block">
              <div className="relative h-44">
                <svg
                  aria-hidden="true"
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 1000 220"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient
                      id="roadmapRail"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop
                        offset="0%"
                        stopColor="#bfdbfe"
                        stopOpacity="0.85"
                      />
                      <stop
                        offset="50%"
                        stopColor="#60a5fa"
                        stopOpacity="0.95"
                      />
                      <stop
                        offset="100%"
                        stopColor="#1d4ed8"
                        stopOpacity="0.95"
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 40 170 C 220 40, 420 40, 500 118 C 620 210, 760 190, 960 72"
                    fill="none"
                    stroke="rgba(148,163,184,0.25)"
                    strokeWidth="16"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 40 170 C 220 40, 420 40, 500 118 C 620 210, 760 190, 960 72"
                    fill="none"
                    stroke="url(#roadmapRail)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeDasharray="8 14"
                  />
                </svg>

                <div className="absolute inset-x-8 top-0 flex h-full items-center justify-between">
                  {timeline.map((phase, index) => {
                    const isActive = activeRoadmapStep === index;
                    const isCompleted = activeRoadmapStep > index;

                    return (
                      <button
                        key={phase.period}
                        type="button"
                        onClick={() => setActiveRoadmapStep(index)}
                        className="group flex w-56 flex-col items-center text-center"
                      >
                        <div
                          className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border transition-all duration-300 ${
                            isActive
                              ? "border-blue-100 bg-blue-200/30 shadow-[0_0_28px_rgba(147,197,253,0.6)]"
                              : isCompleted
                                ? "border-blue-200/70 bg-blue-300/25"
                                : "border-white/20 bg-slate-900/60 group-hover:border-white/40"
                          }`}
                        >
                          <span
                            className={`text-base font-black ${
                              isActive || isCompleted
                                ? "text-slate-900"
                                : "text-slate-200"
                            }`}
                          >
                            {index + 1}
                          </span>
                          {isActive && (
                            <span className="absolute -inset-2 rounded-2xl border border-blue-200/30" />
                          )}
                        </div>

                        <p className="mt-3 rounded-full border border-white/20 bg-slate-900/60 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-200">
                          {phase.period}
                        </p>
                        <p
                          className={`mt-2 max-w-[13rem] text-base font-bold leading-tight transition-colors ${
                            isActive ? "text-white" : "text-slate-200"
                          }`}
                        >
                          {phase.title}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="space-y-3 md:hidden">
              {timeline.map((phase, index) => {
                const isActive = activeRoadmapStep === index;
                const isCompleted = activeRoadmapStep > index;

                return (
                  <button
                    key={phase.period}
                    type="button"
                    onClick={() => setActiveRoadmapStep(index)}
                    className={`w-full rounded-xl border p-4 text-left transition ${
                      isActive
                        ? "border-blue-200/60 bg-blue-300/15"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-black ${
                          isActive || isCompleted
                            ? "bg-blue-200 text-slate-900"
                            : "bg-slate-700 text-slate-100"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300">
                          {phase.period}
                        </p>
                        <p className="text-base font-bold text-white">
                          {phase.title}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-12">
            <article className="relative overflow-hidden rounded-2xl border border-blue-200/20 bg-gradient-to-br from-blue-500/15 via-indigo-500/10 to-slate-900/20 p-6 lg:col-span-5">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-300/25 blur-2xl" />
              <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.2em] text-blue-200">
                {activeRoadmap.period}
              </p>
              <h3 className="relative z-10 mt-3 text-3xl font-bold text-white">
                {activeRoadmap.title}
              </h3>
              <p className="relative z-10 mt-4 text-sm text-slate-300">
                {isEnglish
                  ? "This is the current selected phase on the roadmap. Use the roadmap cards to navigate through each stage."
                  : "Ова е моментално избраната фаза на патеката. Користете ги картичките за навигација низ секоја етапа."}
              </p>

              <div className="relative z-10 mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-800/70">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-300 via-blue-500 to-blue-700 transition-all duration-500"
                  style={{ width: `${roadmapProgress}%` }}
                />
              </div>
            </article>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:col-span-7">
              <ul className="space-y-3">
                {activeRoadmap.points.map((point, pointIndex) => (
                  <li
                    key={pointIndex}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.06] to-white/[0.02] p-4"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-300" />
                    <span className="text-slate-200">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(96,165,250,0.12),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(37,99,235,0.1),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-playfair text-4xl font-bold text-primary sm:text-5xl">
            {isEnglish ? "OUR WORKING PRINCIPLES" : "НАШИ ПРИНЦИПИ НА РАБОТА"}
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-center text-sm uppercase tracking-[0.2em] text-slate-500 sm:text-base">
            {isEnglish
              ? "Select a number to reveal"
              : "Одберете број за приказ"}
          </p>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50/70 via-white to-blue-50/40 p-5 sm:p-8">
            <div className="relative mx-auto max-w-4xl">
              <div className="absolute left-8 right-8 top-5 h-[2px] rounded-full bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700" />
              <div
                className="absolute top-5 h-[2px] rounded-full bg-gradient-to-r from-blue-400 via-blue-600 to-blue-700 transition-all duration-500"
                style={{
                  width: `${((activePrincipleIndex + 1) / principles.length) * 100}%`,
                }}
              />

              <div className="relative grid grid-cols-5 gap-2 sm:gap-3">
                {principles.map((_, index) => {
                  const isActive = activePrincipleIndex === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setActivePrincipleIndex(index)}
                      className="group flex flex-col items-center"
                      aria-label={
                        isEnglish
                          ? `Reveal principle ${index + 1}`
                          : `Прикажи принцип ${index + 1}`
                      }
                    >
                      <span
                        className={`inline-flex h-10 w-10 items-center justify-center rounded-full border text-sm font-black transition-all ${
                          isActive
                            ? "border-blue-500 bg-blue-600 text-white shadow-[0_0_0_6px_rgba(59,130,246,0.15)]"
                            : "border-blue-200 bg-white text-blue-700 group-hover:border-blue-400"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span
                        className={`mt-2 text-[10px] font-bold uppercase tracking-[0.16em] ${
                          isActive ? "text-blue-700" : "text-slate-500"
                        }`}
                      >
                        {isEnglish ? "Principle" : "Принцип"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <article
              key={activePrincipleIndex}
              className="mt-8 ve-reveal rounded-2xl border border-blue-200 bg-white p-6 shadow-[0_12px_40px_rgba(37,99,235,0.08)] sm:p-8"
            >
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    {isEnglish
                      ? `Principle ${activePrincipleIndex + 1} of ${principles.length}`
                      : `Принцип ${activePrincipleIndex + 1} од ${principles.length}`}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold leading-tight text-primary sm:text-3xl">
                    {principles[activePrincipleIndex]}
                  </h3>
                </div>

                <span className="inline-flex h-14 w-14 items-center justify-center self-start rounded-2xl bg-blue-100 text-xl font-black text-blue-700 sm:self-auto">
                  {activePrincipleIndex + 1}
                </span>
              </div>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

              <p className="mt-6 text-base leading-relaxed text-slate-700 sm:text-lg">
                {isEnglish
                  ? "Each principle is a decision filter for every programme we design. It keeps strategy consistent, outcomes durable, and institutional value higher than short-term visibility."
                  : "Секој принцип е филтер за одлуки во секоја програма што ја креираме. Така стратегијата останува конзистентна, резултатите трајни, а институционалната вредност повисока од краткорочната видливост."}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_32%),radial-gradient(circle_at_80%_80%,rgba(96,165,250,0.1),transparent_35%)]" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-playfair text-4xl font-bold text-primary sm:text-5xl">
            {isEnglish ? "HOW WE MEASURE SUCCESS" : "КАКО ГО МЕРИМЕ УСПЕХОТ"}
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="relative overflow-hidden rounded-2xl border border-blue-300/35 bg-gradient-to-br from-[#0b1733] via-[#0f2347] to-[#102a57] p-7 shadow-[0_16px_44px_rgba(15,23,42,0.35)]">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-blue-300/20 blur-2xl" />
              <h3 className="relative z-10 text-2xl font-bold text-blue-100">
                {isEnglish
                  ? "Institutional KPIs"
                  : "Институционални индикатори"}
              </h3>
              <ul className="mt-6 space-y-3">
                {(isEnglish
                  ? [
                      "International academic partnerships established",
                      "Research publications and knowledge outputs",
                      "Programmes with lasting institutional impact",
                      "Financial independence achieved",
                      "Recognition as reference institution",
                    ]
                  : [
                      "Воспоставени меѓународни академски партнерства",
                      "Научни публикации и знаењски резултати",
                      "Програми со траен институционален ефект",
                      "Постигната финансиска независност",
                      "Препознатливост како референтна институција",
                    ]
                ).map((kpi, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-blue-200/20 bg-white/10 p-3"
                  >
                    <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-200" />
                    <span className="text-slate-100">{kpi}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="relative overflow-hidden rounded-2xl border border-blue-300/35 bg-gradient-to-br from-[#081427] via-[#0a1e3d] to-[#103160] p-7 shadow-[0_16px_44px_rgba(15,23,42,0.35)]">
              <div className="absolute -left-10 -bottom-10 h-28 w-28 rounded-full bg-blue-400/20 blur-2xl" />
              <h3 className="relative z-10 text-2xl font-bold text-blue-100">
                {isEnglish ? "Not by" : "Не според"}
              </h3>
              <ul className="mt-6 space-y-3">
                {(isEnglish
                  ? ["Media mentions", "Event attendance", "Short-term metrics"]
                  : [
                      "Медиумски појавувања",
                      "Број на настани",
                      "Краткорочни метрики",
                    ]
                ).map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-lg border border-blue-200/20 bg-white/10 p-3"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-200 text-xs font-black text-slate-900">
                      ×
                    </span>
                    <span className="text-slate-100">{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(59,130,246,0.08),transparent_32%),radial-gradient(circle_at_85%_80%,rgba(37,99,235,0.08),transparent_34%)]" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-blue-700/80">
                {isEnglish
                  ? "Institutional Position"
                  : "Институционална позиција"}
              </p>
              <h2 className="mt-3 font-playfair text-4xl font-bold text-primary sm:text-5xl">
                {isEnglish ? "What We Stand For" : "За што стоиме"}
              </h2>
              <p className="mt-4 text-slate-600">
                {isEnglish
                  ? "Select a frame to explore the doctrine behind Vision Eternal 2035."
                  : "Одберете рамка за да ја видите доктрината зад Визија ВЕЧНА 2035."}
              </p>

              <div className="mt-6 space-y-3">
                {positionFrames.map((frame, index) => {
                  const isActive = activePositionFrame === index;
                  return (
                    <button
                      key={frame.id}
                      type="button"
                      onClick={() => setActivePositionFrame(index)}
                      className={`w-full rounded-2xl border p-4 text-left transition ${
                        isActive
                          ? "border-blue-500 bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.28)]"
                          : "border-slate-200 bg-white text-primary hover:border-blue-300"
                      }`}
                    >
                      <p
                        className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                          isActive ? "text-blue-100" : "text-slate-500"
                        }`}
                      >
                        {frame.eyebrow}
                      </p>
                      <p className="mt-2 text-base font-bold">
                        {frame.primary}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            <article
              key={activePositionFrame}
              className="ve-reveal relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-[#f8fbff] via-white to-[#eef5ff] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:p-10 lg:col-span-8"
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-300/20 blur-2xl" />
              <p className="relative text-xs font-semibold uppercase tracking-[0.22em] text-blue-700/80">
                {positionFrames[activePositionFrame].eyebrow}
              </p>
              <p className="relative mt-4 font-playfair text-4xl font-bold leading-tight text-primary sm:text-5xl">
                {positionFrames[activePositionFrame].primary}
              </p>
              <p className="relative mt-3 font-playfair text-4xl font-bold leading-tight text-blue-700 sm:text-5xl">
                {positionFrames[activePositionFrame].secondary}
              </p>

              <div className="mt-7 h-px w-full bg-gradient-to-r from-transparent via-blue-300 to-transparent" />

              <p className="mt-7 text-base leading-relaxed text-slate-700 sm:text-lg">
                {positionFrames[activePositionFrame].detail}
              </p>

              <div className="mt-8 rounded-2xl border border-blue-100 bg-white/80 p-5">
                <p className="text-sm leading-relaxed text-slate-700">
                  {isEnglish
                    ? "Vision Eternal 2035 is a strategic framework for enduring intellectual and institutional continuity of Macedonia."
                    : "Визија ВЕЧНА 2035 е стратешка рамка за трајна интелектуална и институционална континуитетност на Македонија."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-20 sm:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_35%),radial-gradient(circle_at_85%_75%,rgba(37,99,235,0.08),transparent_34%)]" />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(135deg,#f9fcff_0%,#ffffff_45%,#eef5ff_100%)] p-6 shadow-[0_20px_60px_rgba(15,23,42,0.12)] sm:p-10">
            <div className="grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-playfair text-4xl font-bold text-primary sm:text-5xl">
                  {isEnglish ? "JOIN OUR MISSION" : "ПРИДРУЖЕТЕ СЕ"}
                </h2>
                <p className="mt-4 text-lg text-slate-600 sm:text-xl">
                  {isEnglish
                    ? "Choose your pathway and help scale Vision Eternal 2035."
                    : "Одберете патека и помогнете во развојот на Визија ВЕЧНА 2035."}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {missionPaths.map((path, index) => {
                    const isActive = activeMissionPath === index;
                    return (
                      <button
                        key={path.id}
                        type="button"
                        onClick={() => setActiveMissionPath(index)}
                        className={`rounded-2xl border p-4 text-left transition ${
                          isActive
                            ? "border-blue-500 bg-blue-600 text-white shadow-[0_10px_30px_rgba(37,99,235,0.25)]"
                            : "border-slate-200 bg-white text-primary hover:border-blue-300"
                        }`}
                      >
                        <p
                          className={`text-[11px] font-bold uppercase tracking-[0.18em] ${
                            isActive ? "text-blue-100" : "text-blue-700"
                          }`}
                        >
                          {path.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold leading-snug">
                          {path.title}
                        </p>
                      </button>
                    );
                  })}
                </div>

                <article
                  key={activeMissionPath}
                  className="ve-reveal mt-6 rounded-2xl border border-blue-200 bg-white p-6"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
                    {isEnglish
                      ? `Path ${activeMissionPath + 1}`
                      : `Патека ${activeMissionPath + 1}`}
                  </p>
                  <h3 className="mt-3 text-2xl font-bold text-primary">
                    {missionPaths[activeMissionPath].title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-slate-700">
                    {missionPaths[activeMissionPath].detail}
                  </p>
                </article>
              </div>

              <aside className="rounded-3xl border border-slate-200 bg-white p-6 lg:col-span-5 lg:p-8">
                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  {isEnglish ? "Direct Contact" : "Директен контакт"}
                </p>
                <a
                  href="mailto:vision2035@gmfe.org"
                  className="mt-4 block text-2xl font-bold text-blue-700 transition-colors hover:text-blue-600"
                >
                  vision2035@gmfe.org
                </a>

                <div className="mt-7 rounded-2xl border border-blue-100 bg-blue-50 p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-blue-700">
                    {isEnglish ? "Response Window" : "Време на одговор"}
                  </p>
                  <p className="mt-2 text-lg font-semibold text-primary">
                    {isEnglish
                      ? "Within 2 business days"
                      : "Во рок од 2 работни дена"}
                  </p>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {isEnglish
                      ? "Every contribution is integrated into a long-term institutional model, not a one-off campaign cycle."
                      : "Секој придонес се интегрира во долгорочен институционален модел, а не во еднократен циклус."}
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VisionEternal;
