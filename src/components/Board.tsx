import React from "react";
import { Linkedin, Facebook } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

const Board = () => {
  const { t, language } = useLanguage();

  return (
    <section id="board" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-playfair">
          {t("who.we.are")}
        </h2>
        <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {t("board.subtitle")}
        </p>

        <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto mb-16">
          <p>{t("board.description")}</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-16">
          <div className="md:grid md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src="https://i.ibb.co/QFFsfF9H/0715d1f0-7ce6-4a0a-8ff2-21ae7cf10069.jpg"
                alt="Founders of GMFE"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 font-playfair">
                {t("founders.board")}
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600">{t("founders.description")}</p>
                <p className="text-gray-600">{t("founders.mission")}</p>
                <p className="text-gray-600">{t("founders.invitation")}</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 font-playfair">
          {t("advisory.board")}
        </h3>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img
                  src="https://i.ibb.co/sp55fxkV/image.png"
                  alt="Prof. Žila, Lenina"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://flagcdn.com/w80/mk.png"
                  alt="Macedonian flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "en"
                  ? "Prof. Žila, Lenina"
                  : "Проф. Жила, Ленина"}
              </h3>
              <p className="text-secondary font-medium mb-4">
                {t("zila.title")}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {t("zila.description")}
              </p>
              <div className="flex justify-center space-x-4"></div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img
                  src="https://i.ibb.co/Kx3xFvdX/image.png"
                  alt="Prof. Sardzoski, Pero"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://flagcdn.com/w80/mk.png"
                  alt="Macedonian flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "en"
                  ? "Prof. Sardzoski, Pero"
                  : "Проф. Сарџоски, Перо"}
              </h3>
              <p className="text-secondary font-medium mb-4">
                {t("sardzoski.title")}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {t("sardzoski.description")}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/pegasusels2002/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/perica.sardzoski?locale=mk_MK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img
                  src="https://i.ibb.co/RT6R1W38/image.png"
                  alt="Prof. Lazarova-Molnar, Sanja"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://flagcdn.com/w80/de.png"
                  alt="German flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "en"
                  ? "Prof. Lazarova-Molnar, Sanja"
                  : "Проф. Лазарова-Молнар, Сања"}
              </h3>
              <p className="text-secondary font-medium mb-4">
                {t("lazarova.title")}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {t("lazarova.description")}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/sanja-lazarova-molnar-0188b12/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/sanja.lazarovamolnar?locale=mk_MK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://x.com/sanjamolnar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-secondary flex items-center justify-center"
                >
                  <img
                    src="https://i.ibb.co/rG5fL1vP/image-removebg-preview.png"
                    alt="X (formerly Twitter)"
                    className="h-5 w-5 invert"
                  />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img
                  src="https://i.ibb.co/Q7rpcbvs/image.png"
                  alt="Dr. Vladimir Poposki"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://flagcdn.com/w80/es.png"
                  alt="Spanish flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "en"
                  ? "Dr. Vladimir Poposki"
                  : "Д-р Владимир Попоски"}
              </h3>
              <p className="text-secondary font-medium mb-4">
                {t("poposki.title")}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {t("poposki.description")}
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 text-center">
              <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
                <img
                  src="https://i.ibb.co/XxkkXR7b/image.png"
                  alt="Dr. Predrag Nikolovski"
                  className="w-full h-full object-cover"
                />
                <img
                  src="https://flagcdn.com/w80/it.png"
                  alt="Italian flag"
                  className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {language === "en"
                  ? "Dr. Predrag Nikolovski"
                  : "Д-р Предраг Николовски"}
              </h3>
              <p className="text-secondary font-medium mb-4">
                {t("nikolovski.title")}
              </p>
              <p className="text-gray-600 text-sm mb-4">
                {t("nikolovski.description")}
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://www.linkedin.com/in/predrag-nikolovski-08603176/"
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

        {/* Team Members Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dimitar Vasilkoski */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
              <img
                src="https://i.ibb.co/dvGqB3K/a1861cc8-6527-4251-9c36-efd36453e6b8.jpg"
                alt="Dimitar Vasilkoski"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/mk.png"
                alt="Macedonian flag"
                className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center">
              {language === "en" ? "Dimitar Vasilkoski" : "Димитар Василкоски"}
            </h4>
            <p className="text-secondary font-medium mb-4 text-center text-sm">
              {language === "en"
                ? "Grant Research & Eligibility Lead"
                : "Водач за истражување на грантови и услови"}
            </p>
            <p className="text-gray-600 mb-6 text-center text-sm">
              {language === "en"
                ? "Leads grant research, eligibility checks and donor compliance."
                : "Одговорен за истражување на грантови, проверка на услови и усогласеност со донатори."}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/dimitar-vasilkoski-56923b251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Matea Kargovska */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
              <img
                src="https://i.ibb.co/spYc83zX/fb946b5c-3972-457a-96d9-293534b0ef54.jpg"
                alt="Matea Kargovska"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/mk.png"
                alt="Macedonian flag"
                className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center">
              {language === "en" ? "Matea Kargovska" : "Матеа Карговска"}
            </h4>
            <p className="text-secondary font-medium mb-4 text-center text-sm">
              {language === "en"
                ? "Grant Development & Proposal Support"
                : "Развој на грантови и поддршка за апликации"}
            </p>
            <p className="text-gray-600 mb-6 text-center text-sm">
              {language === "en"
                ? "Develops project concepts and supports grant proposal preparation."
                : "Развива проектни концепти и поддржува подготовка на апликации."}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/matea-kargovska-aba3932a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-secondary"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Irena Angelovska */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="w-32 h-32 mx-auto mb-4 rounded-xl overflow-hidden relative">
              <img
                src="https://i.ibb.co/1fbpBKH7/cfdd5a2d-278a-4c53-bec4-fb79b702963a.jpg"
                alt="Irena Angelovska"
                className="w-full h-full object-cover"
              />
              <img
                src="https://flagcdn.com/w80/mk.png"
                alt="Macedonian flag"
                className="absolute bottom-0 right-0 w-8 h-6 rounded-sm shadow-md"
              />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-center">
              {language === "en" ? "Irena Angelovska" : "Ирена Ангеловска"}
            </h4>
            <p className="text-secondary font-medium mb-4 text-center text-sm">
              {language === "en"
                ? "Grant & Project Support / Partner Coordination"
                : "Поддршка за грантови и проекти / Координација со партнери"}
            </p>
            <p className="text-gray-600 mb-6 text-center text-sm">
              {language === "en"
                ? "Supports project implementation and coordinates partners and reporting."
                : "Поддржува имплементација на проекти и координација со партнери и извештаи."}
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com/in/irenaangelovska?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
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
    </section>
  );
};

export default Board;
