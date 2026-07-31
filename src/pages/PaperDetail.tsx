import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  Share2,
  Copy,
  Mail,
  Linkedin,
  ExternalLink,
  Link2,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { papers, categories } from "../data/papers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PaperDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [copiedCitation, setCopiedCitation] = useState(false);
  const [copiedSection, setCopiedSection] = useState<string | null>(null);

  const paper = papers.find((p) => p.id === id || p.number === id);

  if (!paper) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <Navbar />
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {t("paper.not.found")}
          </h1>
          <button
            onClick={() => navigate("/research-papers")}
            className="text-secondary hover:text-primary font-semibold"
          >
            {t("paper.back")}
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  const sharePaper = async () => {
    const shareData = {
      title: paper.title[language],
      text: `A GMFE Research Paper by ${paper.author[language]}.`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled – no action needed
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedSection("share");
        setTimeout(() => setCopiedSection(null), 2000);
      } catch {
        // clipboard not available
      }
    }
  };

  const copyCitation = async () => {
    try {
      await navigator.clipboard.writeText(paper.citation[language]);
      setCopiedCitation(true);
      setTimeout(() => setCopiedCitation(false), 2000);
    } catch {
      // clipboard not available
    }
  };

  const copySectionLink = async (sectionId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedSection(sectionId);
      setTimeout(() => setCopiedSection(null), 2000);
    } catch {
      // clipboard not available
    }
  };

  const SectionHeading: React.FC<{
    id: string;
    children: React.ReactNode;
  }> = ({ id, children }) => (
    <div className="flex items-center gap-2 group">
      <h3 className="text-xl font-semibold text-gray-900">{children}</h3>
      <button
        onClick={() => copySectionLink(id)}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-gray-400 hover:text-secondary"
        aria-label="Copy section link"
      >
        {copiedSection === id ? (
          <CheckCircle2 className="h-4 w-4 text-green-600" />
        ) : (
          <Link2 className="h-4 w-4" />
        )}
      </button>
      {copiedSection === id && (
        <span className="text-xs text-green-600">{t("paper.link.copied")}</span>
      )}
    </div>
  );

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
            {t("paper.back")}
          </button>
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-3">
            {paper.title[language]}
          </h1>
          <p className="text-lg md:text-xl text-white/85 font-playfair italic mb-4">
            {paper.subtitle[language]}
          </p>
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
              <div className="flex flex-wrap gap-2">
                {paper.categories.map((cat) => {
                  const category = categories.find((c) => c.id === cat);
                  return (
                    <span
                      key={cat}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm capitalize"
                    >
                      {category
                        ? language === "en"
                          ? category.nameEn
                          : category.nameMk
                        : cat}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Abstract */}
          <section id="abstract" className="mb-8 scroll-mt-24">
            <SectionHeading id="abstract">{t("paper.abstract")}</SectionHeading>
            <p className="text-gray-700 leading-relaxed mt-4">
              {paper.abstract[language]}
            </p>
          </section>

          {/* Keywords */}
          <section id="keywords" className="mb-8 scroll-mt-24">
            <SectionHeading id="keywords">{t("paper.keywords")}</SectionHeading>
            <div className="flex flex-wrap gap-2 mt-4">
              {paper.keywords[language].map((keyword, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </section>

          {/* Research Context */}
          <section id="research-context" className="mb-8 scroll-mt-24">
            <SectionHeading id="research-context">
              {t("paper.research.context")}
            </SectionHeading>
            <p className="text-gray-700 leading-relaxed mt-4">
              {paper.researchContext[language]}
            </p>
          </section>

          {/* Citation */}
          <section id="citation" className="mb-8 scroll-mt-24">
            <SectionHeading id="citation">
              {language === "en" ? "Recommended Citation" : "Препорачан цитат"}
            </SectionHeading>
            <div className="p-4 bg-gray-50 rounded-lg mt-4">
              <p className="text-gray-700 italic">
                {paper.citation[language]}
              </p>
            </div>
          </section>

          {/* Download / Share / Copy Citation buttons */}
          <div className="mb-8 flex flex-wrap gap-3">
            <a
              href={paper.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary transition-colors"
            >
              <Download className="h-5 w-5" />
              {t("paper.download.pdf")}
            </a>
            <button
              onClick={sharePaper}
              className="inline-flex items-center gap-2 bg-white border border-secondary text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-secondary/5 transition-colors"
            >
              <Share2 className="h-5 w-5" />
              {t("paper.share.paper")}
            </button>
            <button
              onClick={copyCitation}
              className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              {copiedCitation ? (
                <>
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-green-600">
                    {t("paper.citation.copied")}
                  </span>
                </>
              ) : (
                <>
                  <Copy className="h-5 w-5" />
                  {t("paper.copy.citation")}
                </>
              )}
            </button>
          </div>

          {/* About the Author */}
          <section id="author" className="border-t border-gray-200 pt-8 scroll-mt-24">
            <SectionHeading id="author">{t("paper.about.author")}</SectionHeading>

            <div className="mt-6 flex flex-col md:flex-row gap-8">
              {/* Photo */}
              <div className="flex-shrink-0">
                <img
                  src={paper.authorSection.photo}
                  alt={
                    language === "en"
                      ? "Portrait of Barbora Tomečková"
                      : "Портрет на Барбора Томечкова"
                  }
                  className="w-30 h-30 rounded-2xl object-cover shadow-md"
                  style={{ width: 120, height: 120 }}
                />
              </div>

              <div className="flex-1 space-y-6">
                {/* Name */}
                <div>
                  <h4 className="text-lg font-bold text-gray-900 font-playfair">
                    {paper.authorSection.name[language]}
                  </h4>
                </div>

                {/* Roles */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    {t("paper.roles.affiliations")}
                  </h5>
                  <ul className="space-y-1">
                    {paper.authorSection.roles[language].map((role, idx) => (
                      <li
                        key={idx}
                        className="text-gray-700 text-sm flex items-start gap-2"
                      >
                        <span className="text-secondary mt-1">•</span>
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Short Bio */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    {t("paper.short.biography")}
                  </h5>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {paper.authorSection.shortBio[language]}
                  </p>
                </div>

                {/* Research Areas */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-2">
                    {t("paper.research.areas")}
                  </h5>
                  <ul className="grid sm:grid-cols-2 gap-1">
                    {paper.authorSection.researchAreas[language].map(
                      (area, idx) => (
                        <li
                          key={idx}
                          className="text-gray-700 text-sm flex items-start gap-2"
                        >
                          <span className="text-secondary mt-1">•</span>
                          <span>{area}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Contact and Academic Profiles */}
                <div>
                  <h5 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    {t("paper.contact.profiles")}
                  </h5>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href={`mailto:${paper.authorSection.email}`}
                      className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      <Mail className="h-4 w-4 text-secondary" />
                      {paper.authorSection.email}
                    </a>
                    <a
                      href={paper.authorSection.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      <Linkedin className="h-4 w-4 text-secondary" />
                      LinkedIn
                    </a>
                    <a
                      href={paper.authorSection.orcidUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4 text-secondary" />
                      ORCID: {paper.authorSection.orcid}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer Info */}
          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-600 mb-2">
              {t("paper.published.by")}
            </p>
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
