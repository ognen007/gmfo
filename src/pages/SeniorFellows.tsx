import { ExternalLink } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../context/LanguageContext";

const SeniorFellows = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Senior Fellows background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-playfair leading-tight">
              Senior Fellows
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed text-white/95">
              {isEn
                ? "Senior Fellows contribute independent expertise to GMFE's long-term development through research-informed perspectives, institutional thinking and thematic advisory input."
                : "Сениор соработниците придонесуваат со независна експертиза кон долгорочниот развој на ГМФВ преку истражувачки засновани перспективи, институционално размислување и тематски советодавен придонес."}
            </p>
          </div>
        </div>
      </section>

      {/* Fellow Profile – Iva Divković */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg overflow-hidden">
            <div className="md:grid md:grid-cols-5">
              {/* Photo */}
              <div className="relative md:col-span-2 h-72 md:h-auto">
                <img
                  src="https://i.ibb.co/ZR0h8FKN/image.png"
                  alt={isEn ? "Iva Divković" : "Ива Дивковиќ"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-6">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair mb-2">
                    {isEn ? "Iva Divković" : "Ива Дивковиќ"}
                  </h2>
                  <p className="text-secondary font-medium">
                    {isEn
                      ? "Senior Fellow – Governance, Public Policy & Institutional Development"
                      : "Сениор соработник – Управување, јавни политики и институционален развој"}
                  </p>
                </div>

                {/* Short description bullets */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isEn
                        ? "Contributing expertise at the intersection of governance, legal analysis and institutional development, with a focus on minority rights, self-determination and Macedonian heritage."
                        : "Придонесува со експертиза на пресекот меѓу управувањето, правната анализа и институционалниот развој, со фокус на малцински права, самоопределување и македонско наследство."}
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {isEn
                        ? "Bringing perspectives from law, policy and international advocacy to support research-informed dialogue and long-term institutional thinking."
                        : "Носи перспективи од правото, јавните политики и меѓународната адвокација за поддршка на истражувачки информиран дијалог и долгорочно институционално размислување."}
                    </p>
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-4 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    {isEn
                      ? "Iva Divković is a UK-based legal professional and qualified barrister, holding an LLM in International Commercial Law from University College London. Alongside her work in corporate law, she has contributed to policy-related initiatives, public affairs and human rights work connected to international institutions, including the United Nations."
                      : "Ива Дивковиќ е правен професионалец и квалификуван barrister со седиште во Обединетото Кралство, со магистерски студии (LLM) по меѓународно трговско право од University College London. Покрај нејзината работа во корпоративното право, таа придонесувала во иницијативи поврзани со јавни политики, јавни прашања и човекови права во рамки на меѓународни институции, вклучително и Обединетите Нации."}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {isEn
                      ? "Her interests focus on governance, minority rights, self-determination in international law, and the preservation and promotion of Macedonian heritage. Within GMFE, she contributes independent perspectives at the intersection of law, policy and long-term institutional development."
                      : "Нејзините интереси се насочени кон управување, малцински права, самоопределување во меѓународното право, како и зачувување и промоција на македонското наследство. Во рамки на ГМФВ, таа придонесува со независни перспективи на пресекот меѓу правото, политиките и долгорочниот институционален развој."}
                  </p>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/iva-divkovi%C4%87-09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-secondary hover:underline text-sm font-medium w-fit"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SeniorFellows;
