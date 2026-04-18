import React from "react";
import { useState } from "react";
import { Linkedin, ChevronDown, ChevronUp, Facebook } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Ambassadors = () => {
  const { t, language } = useLanguage();
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const truncateText = (text: string, wordLimit: number = 30) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) return text;
    return words.slice(0, wordLimit).join(" ") + "...";
  };

  const toggleExpanded = (cardId: string) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section id="ambassadors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-playfair text-center">
            {t("ambassadors")}
          </h3>
          <p className="text-xl text-gray-600 text-center">
            {t("ambassadors.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Kostov */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img
                src="https://i.ibb.co/4RfLf983/image.png"
                alt="Assoc. Prof. Dr. Stojanche Kostov"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/mk.png"
                alt="Macedonian flag"
                className="absolute bottom-2 right-2 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-playfair">
                {language === "en"
                  ? "Assoc. Prof. Dr. Stojanche Kostov"
                  : "Доц. д-р Стојанче Костов"}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {t("kostov.title")}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === "kostov"
                    ? t("kostov.description")
                    : truncateText(t("kostov.description"))}
                </p>

                {expandedCard === "kostov" && (
                  <>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      📍 {t("kostov.focus")}
                    </p>
                    <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                      {t("kostov.quote")}
                    </blockquote>
                  </>
                )}

                <button
                  onClick={() => toggleExpanded("kostov")}
                  className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {expandedCard === "kostov" ? t("show.less") : t("read.more")}
                  {expandedCard === "kostov" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/stojance.kostov.2025/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://igeografija.academia.edu/StojanceKostov"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary flex items-center justify-center"
                >
                  <div className="h-5 w-5 bg-gray-600 hover:bg-secondary rounded-sm flex items-center justify-center text-white text-xs font-bold transition-colors">
                    A
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Samuel */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img
                src="https://i.ibb.co/s9pXDXTm/image.png"
                alt="Samuel Naumovski Vickius"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/se.png"
                alt="Swedish flag"
                className="absolute bottom-2 right-2 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-playfair">
                {t("samuel.name")}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {t("samuel.title")}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === "samuel"
                    ? t("samuel.description")
                    : truncateText(t("samuel.description"))}
                </p>

                {expandedCard === "samuel" && (
                  <>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      📍 {t("samuel.focus")}
                    </p>
                    <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                      {t("samuel.quote")}
                    </blockquote>
                  </>
                )}

                <button
                  onClick={() => toggleExpanded("samuel")}
                  className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {expandedCard === "samuel" ? t("show.less") : t("read.more")}
                  {expandedCard === "samuel" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/samuel-naumovski-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Vasil */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img
                src="https://i.ibb.co/pjV64TkK/image.png"
                alt="Vasil Sterjovski"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/mk.png"
                alt="Macedonian flag"
                className="absolute bottom-2 right-2 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-playfair">
                {t("vasil.name")}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {t("vasil.title")}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === "vasil"
                    ? t("vasil.project.description")
                    : truncateText(t("vasil.project.description"))}
                </p>

                {expandedCard === "vasil" && (
                  <>
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        {t("our.support")}
                      </h4>
                      <p className="text-gray-600 mb-2 text-sm">
                        {t("vasil.support.description")}
                      </p>
                      <ul className="text-gray-600 text-xs space-y-1 ml-4">
                        <li>• {t("vasil.support.tuition")}</li>
                        <li>• {t("vasil.support.mentorship")}</li>
                        <li>• {t("vasil.support.publication")}</li>
                        <li>• {t("vasil.support.visibility")}</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        {language === "en" ? "Impact" : "Влијание"}
                      </h4>
                      <p className="text-gray-600 mb-2 text-sm">
                        {t("vasil.impact.description")}
                      </p>
                      <ul className="text-gray-600 text-xs space-y-1 ml-4">
                        <li>• {t("vasil.impact.preserving")}</li>
                        <li>• {t("vasil.impact.strengthening")}</li>
                        <li>• {t("vasil.impact.awareness")}</li>
                        <li>• {t("vasil.impact.inspiring")}</li>
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 text-sm">
                        {t("vasil.focus.title")}
                      </h4>
                      <ul className="text-gray-600 text-xs space-y-1 ml-4">
                        <li>• {t("vasil.focus.policies")}</li>
                        <li>• {t("vasil.focus.archival")}</li>
                        <li>• {t("vasil.focus.identity")}</li>
                      </ul>
                    </div>
                  </>
                )}

                <button
                  onClick={() => toggleExpanded("vasil")}
                  className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {expandedCard === "vasil" ? t("show.less") : t("read.more")}
                  {expandedCard === "vasil" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100064082676439"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/vasil.sterjovski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Stefan Ivanovski */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img
                src="https://i.ibb.co/cKPZRpH6/aedd4c20-1c03-4ae9-a6ff-15547ecfb084.jpg"
                alt="Stefan Ivanovski"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/mk.png"
                alt="Macedonian flag"
                className="absolute bottom-2 right-2 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-playfair">
                {t("stefan.name")}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {t("stefan.title")}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === "stefan"
                    ? t("stefan.description")
                    : truncateText(t("stefan.description"))}
                </p>

                {expandedCard === "stefan" && (
                  <>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      📍 {t("stefan.focus")}
                    </p>
                    <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                      {t("stefan.quote")}
                    </blockquote>
                  </>
                )}

                <button
                  onClick={() => toggleExpanded("stefan")}
                  className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {expandedCard === "stefan" ? t("show.less") : t("read.more")}
                  {expandedCard === "stefan" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/stefanivanovski/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Marko Vidachek */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="relative h-80">
              <img
                src="https://i.ibb.co/q3hpTcnw/58e03b0c-c501-40f6-ac6f-081ceb2046b4.jpg"
                alt="Marko Vidachek"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/mk.png"
                alt="Macedonian flag"
                className="absolute bottom-2 right-2 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 font-playfair">
                {language === "en" ? "Marko Vidachek" : "Марко Видачек"}
              </h3>
              <p className="text-secondary font-medium mb-3 text-sm">
                {language === "en"
                  ? "PhD Candidate in Security Sciences, LLM in Constitutional Law and MA in Strategic Communication Management"
                  : "Докторанд по безбедносни науки, магистер по уставно право и магистер по менаџмент на стратегиска комуникација"}
              </p>

              <div className="mb-4">
                <p className="text-gray-600 mb-3 leading-relaxed text-sm">
                  {expandedCard === "marko"
                    ? language === "en"
                      ? "Marko Vidachek is a PhD Candidate in Security Sciences, with a focus on the rights of future generations and climate security. He holds a Master's degree in Constitutional Law, as well as a Master's degree in Strategic Communication Management. He works as a lecturer and consultant in the fields of constitutional law, security and strategic communication."
                      : "Марко Видачек е докторанд по безбедносни науки, со фокус во областа на правата на идните генерации и климатската безбедност. Има магистирано уставно право, како и менаџмент на стратегиска комуникација. Работи како предавач и консултант во областите уставно право, безбедност и стратегиската комуникација."
                    : truncateText(
                        language === "en"
                          ? "Marko Vidachek is a PhD Candidate in Security Sciences, with a focus on the rights of future generations and climate security. He holds a Master's degree in Constitutional Law, as well as a Master's degree in Strategic Communication Management. He works as a lecturer and consultant in the fields of constitutional law, security and strategic communication."
                          : "Марко Видачек е докторанд по безбедносни науки, со фокус во областа на правата на идните генерации и климатската безбедност. Има магистирано уставно право, како и менаџмент на стратегиска комуникација. Работи како предавач и консултант во областите уставно право, безбедност и стратегиската комуникација.",
                      )}
                </p>

                {expandedCard === "marko" && (
                  <>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {language === "en"
                        ? "With a strong academic and analytical background, his work focuses on the intersection between governance, institutional development and strategic communication in complex social contexts."
                        : "Со силна академска и аналитичка позадина, неговата работа се фокусира на пресекот помеѓу управувањето, институционалниот развој и стратегиската комуникација во комплексни општествени контексти."}
                    </p>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {language === "en"
                        ? "📍 Focus: Constitutional Law, Security Studies, Rights of Future Generations, Climate Security"
                        : "📍 Фокус: Уставно право, безбедносни студии, права на идни генерации, климатска безбедност"}
                    </p>
                    <blockquote className="border-l-4 border-secondary pl-3 italic text-gray-700 mb-4 text-sm">
                      {language === "en"
                        ? "As an ambassador of the GMFE, I have the obligation to protect the past to preserve a better world for future generations - who undoubtedly have the right to cultural continuity and identity. Through my work, I aim to contribute to the building of long-term cultural institutions and a more efficient and sustainable transfer of knowledge and skills."
                        : "Како амбасадор на ГМФВ, ја имам обврската штитејќи го минатато да зачуваме подобар свет за идните генерации - кои несомнено го имаат правото на културен континуитет и идентитет. Преку мојата работа насочен сум да придонесам кон изградбата на долгорочни културни институции и поефикасен и одржлив пренос на знаењата и вештините."}
                    </blockquote>
                  </>
                )}

                <button
                  onClick={() => toggleExpanded("marko")}
                  className="flex items-center text-secondary hover:text-primary transition-colors text-sm font-medium"
                >
                  {expandedCard === "marko" ? t("show.less") : t("read.more")}
                  {expandedCard === "marko" ? (
                    <ChevronUp className="ml-1 h-4 w-4" />
                  ) : (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </button>
              </div>

              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/marko-vidachek-55491721a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;
