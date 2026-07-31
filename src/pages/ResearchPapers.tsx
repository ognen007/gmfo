import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Download } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { papers, categories } from "../data/papers";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResearchPapers = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPapers = papers.filter((paper) => {
    const matchesSearch =
      searchQuery === "" ||
      paper.title[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.author[language].toLowerCase().includes(searchQuery.toLowerCase()) ||
      paper.keywords[language].some((keyword) =>
        keyword.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      paper.abstract[language].toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || paper.categories.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  const handlePaperClick = (paperId: string) => {
    navigate(`/research-papers/${paperId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      {/* Header */}
      <div className="bg-primary text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
            {t("research.papers.title")}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            {t("research.papers.subtitle")}
          </p>
          <p className="text-lg text-white/80 max-w-3xl">
            {t("research.papers.description")}
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder={t("search.papers")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-secondary focus:border-transparent text-lg"
            />
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {t("categories")}
          </h3>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-secondary text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {language === "en" ? category.nameEn : category.nameMk}
              </button>
            ))}
          </div>
        </div>

        {/* Papers Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    {t("paper.no")}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    {t("paper.title")}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    {t("paper.author")}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    {t("paper.year")}
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-semibold">
                    {t("paper.download")}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredPapers.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-12 text-center text-gray-500"
                    >
                      {language === "en"
                        ? "No papers found matching your search."
                        : "Не се пронајдени трудови што одговараат на вашето пребарување."}
                    </td>
                  </tr>
                ) : (
                  filteredPapers.map((paper) => (
                    <tr
                      key={paper.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {paper.number}
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handlePaperClick(paper.id)}
                          className="text-secondary font-semibold hover:text-primary transition-colors text-left"
                        >
                          {paper.title[language]}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {paper.author[language]}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        {paper.year}
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={paper.pdfUrl}
                          className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-colors"
                        >
                          <Download className="h-4 w-4" />
                          <span className="text-sm font-medium">PDF</span>
                        </a>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ResearchPapers;
