import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { papers } from "../data/papers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PaperDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  const paper = papers.find((p) => p.id === id);

  if (!paper) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === "en" ? "Paper not found" : "Трудот не е пронајден"}
          </h1>
          <button
            onClick={() => navigate("/research-papers")}
            className="text-secondary hover:text-primary font-semibold"
          >
            {language === "en" ? "Back to Papers" : "Назад кон трудовите"}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header */}
      <div className="bg-primary text-white py-12 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate("/research-papers")}
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            {language === "en" ? "Back to Papers" : "Назад кон трудовите"}
          </button>
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            {paper.title[language]}
          </h1>
          <p className="text-lg text-white/90">{paper.author[language]}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Paper Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {t("paper.no")}
              </h3>
              <p className="text-lg text-gray-900">{paper.number}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {t("paper.year")}
              </h3>
              <p className="text-lg text-gray-900">{paper.year}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {t("paper.author")}
              </h3>
              <p className="text-lg text-gray-900">{paper.author[language]}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                {t("categories")}
              </h3>
              <p className="text-lg text-gray-900 capitalize">
                {paper.category}
              </p>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("paper.abstract")}
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {paper.abstract[language]}
            </p>
          </div>

          {/* Keywords */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {t("paper.keywords")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {paper.keywords[language].map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Citation */}
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {t("paper.citation")}
            </h3>
            <p className="text-gray-700 italic">{paper.citation[language]}</p>
          </div>

          {/* Download Button */}
          <div className="mb-8">
            <a
              href={paper.pdfUrl}
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors"
            >
              <Download className="h-5 w-5" />
              {t("paper.download")} PDF
            </a>
          </div>

          {/* Footer Info */}
          <div className="border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-600 mb-2">{t("paper.published.by")}</p>
            <p className="text-sm font-semibold text-gray-900">
              {t("paper.vision")}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PaperDetail;
