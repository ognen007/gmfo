import { Linkedin, Code, Cloud, Shield, Brain } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const ITSupport = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-playfair">
              {language === "en"
                ? "Platform Development Support"
                : "Поддршка за развој на платформа"}
            </h2>
            <p className="text-xl text-gray-600">
              {language === "en" ? "By Ognen Veljanovski" : "Од Огнен Вељановски"}
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary to-primary/95 rounded-3xl shadow-2xl overflow-hidden">
            <div className="md:grid md:grid-cols-5">
              <div className="md:col-span-2 relative">
                <img
                  src="https://media.licdn.com/dms/image/v2/D4E03AQHMwSRKtwcjNw/profile-displayphoto-scale_400_400/B4EZ9.9OGRJYAg-/0/1784541406413?e=1789603200&v=beta&t=nNrk1UXH6UtZq7h0Ni5g857ScbaAA2nGfTfBK1DnIz8"
                  alt="Ognen Veljanovski"
                  className="w-full h-full object-cover min-h-[400px]"
                />
                <img
                  src="https://flagcdn.com/w80/de.png"
                  alt="German flag"
                  className="absolute bottom-4 right-4 w-12 h-9 rounded-sm shadow-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent"></div>
              </div>
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-white mb-3 font-playfair">
                    Ognen Veljanovski
                  </h3>
                  <p className="text-secondary text-lg font-medium mb-6">
                    Software Developer @ PCG
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Cloud, Cybersecurity, AI & Strategic Technology Partnerships in
                    Enterprise Digital Transformation & International Business
                    Development
                  </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                    <Code className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-white/80 text-sm">
                      {language === "en" ? "Development" : "Развој"}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                    <Cloud className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-white/80 text-sm">
                      {language === "en" ? "Cloud" : "Облак"}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                    <Shield className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-white/80 text-sm">
                      {language === "en" ? "Security" : "Безбедност"}
                    </p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4 text-center backdrop-blur-sm">
                    <Brain className="h-6 w-6 text-secondary mx-auto mb-2" />
                    <p className="text-white/80 text-sm">AI</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <a
                    href="https://www.linkedin.com/in/ognen-veljanovski/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    {language === "en" ? "Connect on LinkedIn" : "Поврзи се на LinkedIn"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSupport;
