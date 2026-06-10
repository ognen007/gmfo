import React, { useState } from "react";
import {
  Briefcase,
  BookOpen,
  GraduationCap,
  MessageSquare,
  Compass,
  CheckCircle2,
  Send,
  Users,
  Clock,
  FolderKanban,
  ArrowRight,
} from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useLanguage } from "../context/LanguageContext";

const Services = () => {
  const { language } = useLanguage();
  const isEn = language === "en";

  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    country: "",
    email: "",
    areaOfInterest: "",
    briefDescription: "",
    preferredTimeline: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Service Inquiry – ${formData.areaOfInterest || "General"}`,
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nOrganization: ${formData.organization}\nCountry: ${formData.country}\nEmail: ${formData.email}\nArea of Interest: ${formData.areaOfInterest}\nPreferred Timeline: ${formData.preferredTimeline}\n\n${formData.briefDescription}`,
    );
    window.location.href = `mailto:services@gmfe.org?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const dropdownOptions = isEn
    ? [
        "Advisory",
        "Research",
        "Training",
        "Partnership",
        "Dialogue Format",
        "Fellowship Expertise",
        "Other",
      ]
    : [
        "Советување",
        "Истражување",
        "Обука",
        "Партнерство",
        "Формат за дијалог",
        "Експертиза од Fellowship мрежата",
        "Друго",
      ];

  const services = [
    {
      icon: Briefcase,
      image: "https://i.ibb.co/0y9w4b9s/image.png",
      title: isEn
        ? "Grant & Project Development"
        : "Развој на грантови и проекти",
      subtitle: isEn
        ? "From funding opportunity analysis to project structuring and partnership support."
        : "Од анализа на можности за финансирање до структурирање на проект и поддршка за партнерства.",
      description: isEn
        ? "We support institutions and organizations in identifying relevant funding opportunities and developing well-structured, mission-aligned projects."
        : "Нудиме поддршка на институции и организации во идентификување релевантни можности за финансирање и развој на добро структурирани проекти усогласени со нивната мисија.",
      bullets: isEn
        ? [
            "Funding opportunity analysis",
            "Grant scouting",
            "Concept note development",
            "Proposal structuring and review",
            "Consortium and partnership support",
            "Impact logic and project framework development",
          ]
        : [
            "Анализа на можности за финансирање",
            "Истражување на грантови",
            "Развој на концепт-ноти",
            "Структурирање и ревизија на апликации",
            "Поддршка за конзорциуми и партнерства",
            "Развој на impact logic и проектна рамка",
          ],
    },
    {
      icon: BookOpen,
      image: "https://i.ibb.co/FLkp6R7M/image.png",
      title: isEn
        ? "Research & Knowledge Services"
        : "Истражувачки и знаење-базирани услуги",
      subtitle: isEn
        ? "Research-based content, thematic expertise and knowledge synthesis for strategic and institutional use."
        : "Истражувачки содржини, тематска експертиза и синтеза на знаење за стратешка и институционална употреба.",
      description: isEn
        ? "We provide research and knowledge support for organizations, initiatives and partners that need strong intellectual grounding and well-structured outputs."
        : "Обезбедуваме истражувачка и содржинска поддршка за организации, иницијативи и партнери на кои им е потребна силна интелектуална основа и квалитетно структурирани резултати.",
      bullets: isEn
        ? [
            "Research papers",
            "Thematic studies",
            "Policy briefs",
            "Literature reviews",
            "Historical or cultural research support",
            "Expert synthesis and publication support",
          ]
        : [
            "Истражувачки трудови",
            "Тематски студии",
            "Policy briefs",
            "Прегледи на литература",
            "Историска и културна истражувачка поддршка",
            "Експертска синтеза и поддршка за публикации",
          ],
    },
    {
      icon: GraduationCap,
      image: "https://i.ibb.co/nN62fG9J/image.png",
      title: isEn ? "Education / Workshops" : "Едукација / Работилници",
      subtitle: isEn
        ? "Training, seminars and knowledge transfer formats designed for practical learning and institutional growth."
        : "Обуки, семинари и формати за пренос на знаење насочени кон практично учење и институционален развој.",
      description: isEn
        ? "We design and deliver learning-oriented formats that strengthen knowledge, skills and long-term capacity."
        : "Дизајнираме и реализираме едукативни формати кои придонесуваат за зајакнување на знаењата, вештините и долгорочните капацитети.",
      bullets: isEn
        ? [
            "Workshops and training sessions",
            "Executive seminars",
            "Capacity-building programmes",
            "Youth empowerment modules",
            "Cultural literacy formats",
            "AI, digital literacy and knowledge transfer sessions",
          ]
        : [
            "Работилници и обуки",
            "Извршни семинари",
            "Програми за градење капацитети",
            "Модули за зајакнување на млади",
            "Програми за културна писменост",
            "Сесии за AI, дигитална писменост и пренос на знаење",
          ],
    },
    {
      icon: MessageSquare,
      image: "https://i.ibb.co/4Cc5dDF/image.png",
      title: isEn ? "Dialogue Formats" : "Формати за дијалог",
      subtitle: isEn
        ? "Curated forums, expert panels and thought leadership formats with substance and structure."
        : "Курирани форуми, експертски панели и thought leadership формати со содржина и структура.",
      description: isEn
        ? "GMFE develops and facilitates content-led dialogue formats that bring together expertise, public engagement and institutional relevance."
        : "ГМФЕ развива и фасилитира дијалошки формати базирани на содржина, кои обединуваат експертиза, јавен ангажман и институционална релевантност.",
      bullets: isEn
        ? [
            "Curated panel discussions",
            "Expert roundtables",
            "Public dialogue forums",
            "Intellectual salons",
            "Moderation and thematic curation",
            "Diaspora and institutional engagement formats",
          ]
        : [
            "Курирани панел-дискусии",
            "Експертски тркалезни маси",
            "Јавни форуми за дијалог",
            "Интелектуални салони",
            "Модерација и тематско курирање",
            "Формати за вклучување на дијаспора и институции",
          ],
    },
    {
      icon: Compass,
      image: "https://i.ibb.co/pvgMc8kd/image.png",
      title: isEn ? "Strategic Advisory" : "Стратешко советување",
      subtitle: isEn
        ? "Institutional strategy, partnership development and stakeholder-oriented advisory."
        : "Институционална стратегија, развој на партнерства и советодавна поддршка ориентирана кон чинители.",
      description: isEn
        ? "We support organizations and initiatives that seek long-term positioning, stronger partnerships and more coherent institutional development."
        : "Поддржуваме организации и иницијативи кои бараат долгорочно позиционирање, посилни партнерства и покохерентен институционален развој.",
      bullets: isEn
        ? [
            "Institutional positioning",
            "Partnership development",
            "International collaboration support",
            "Stakeholder mapping and engagement",
            "Basic governance advisory",
            "Strategic development support",
          ]
        : [
            "Институционално позиционирање",
            "Развој на партнерства",
            "Поддршка за меѓународна соработка",
            "Мапирање и ангажирање на чинители",
            "Основно governance советување",
            "Поддршка за стратешки развој",
          ],
    },
  ];

  const partners = isEn
    ? [
        "NGOs and civil society organisations",
        "Universities and research centres",
        "Cultural institutions and initiatives",
        "Municipalities and local actors",
        "Diaspora organizations",
        "Foundations and mission-driven partners",
        "Educational institutions",
        "International collaborators and networks",
      ]
    : [
        "Граѓански организации и здруженија",
        "Универзитети и истражувачки центри",
        "Културни институции и иницијативи",
        "Општини и локални чинители",
        "Организации од дијаспората",
        "Фондации и партнери со мисија",
        "Образовни институции",
        "Меѓународни соработници и мрежи",
      ];

  const workModels = [
    {
      icon: Briefcase,
      title: "Fixed Fee",
      description: isEn
        ? "A clearly defined service package with a specific scope and timeframe."
        : "Јасно дефиниран пакет на услуги со конкретен опсег и временска рамка.",
      example: isEn
        ? "Example: workshop, advisory session, expert input day."
        : "Пример: работилница, советодавна сесија, експертски ангажман за еден ден.",
    },
    {
      icon: Clock,
      title: "Retainer",
      description: isEn
        ? "Ongoing advisory or strategic support on a monthly basis."
        : "Тековна советодавна или стратешка поддршка на месечна основа.",
      example: isEn
        ? "Suitable for organizations that need continuous guidance and accompaniment."
        : "Погодно за организации кои имаат потреба од континуирано насочување и придружба.",
    },
    {
      icon: FolderKanban,
      title: "Project-Based",
      description: isEn
        ? "A tailored model for grants, research assignments, training programmes or strategic initiatives with a defined objective and delivery framework."
        : "Прилагоден модел за грантови, истражувања, обуки или стратешки иницијативи со јасно дефинирана цел и рамка на испорака.",
      example: "",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Section 1 – Hero */}
      <section className="pt-16 relative">
        <div className="absolute inset-0 z-0">
          <img
            src="https://i.ibb.co/jvT3qhr7/toa-heftiba-4-Czza-Jn-Qh0c-unsplash.jpg"
            alt="Services background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-playfair leading-tight">
              {isEn ? "Services" : "Услуги"}
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6 text-white/95">
              {isEn
                ? "Knowledge, expertise and institutional collaboration for long-term impact."
                : "Знаење, експертиза и институционална соработка за долгорочно влијание."}
            </p>
            <p className="text-base md:text-lg max-w-3xl mx-auto leading-relaxed text-white/85">
              {isEn
                ? "GMFE offers mission-aligned advisory, educational and strategic services for institutions, organizations and partners seeking meaningful cultural, academic and societal impact."
                : "ГМФЕ нуди советодавни, едукативни и стратешки услуги усогласени со својата мисија, наменети за институции, организации и партнери кои бараат суштинско културно, академско и општествено влијание."}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {isEn ? "Contact our team" : "Контактирајте го нашиот тим"}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:services@gmfe.org"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
              >
                {isEn ? "Request a conversation" : "Побарајте разговор"}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600 leading-relaxed text-lg">
            {isEn
              ? "We work with institutions, cultural organizations, academic partners, civil society actors and mission-driven stakeholders who seek high-quality support in project development, knowledge creation, capacity building and strategic collaboration."
              : "Работиме со институции, културни организации, академски партнери, граѓански актери и други чинители кои имаат потреба од квалитетна поддршка во развој на проекти, создавање знаење, градење капацитети и стратешка соработка."}
          </p>
          <p className="text-gray-600 leading-relaxed text-lg mt-4">
            {isEn
              ? "Our services are rooted in GMFE's mission and long-term vision: to connect knowledge, identity, culture and institutional development in ways that create durable impact."
              : "Нашите услуги произлегуваат од мисијата и долгорочната визија на ГМФЕ: да ги поврзува знаењето, идентитетот, културата и институционалниот развој на начин што создава трајно влијание."}
          </p>
        </div>
      </section>

      {/* Section 2 – Service Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair text-center mb-12">
            {isEn ? "What We Offer" : "Што нудиме"}
          </h2>

          <div className="space-y-10">
            {services.map((service, idx) => {
              const Icon = service.icon;
              const isReversed = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div
                    className={`md:grid md:grid-cols-5 ${isReversed ? "md:flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`relative h-56 md:h-auto md:col-span-2 ${isReversed ? "md:order-2" : ""}`}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                    <div
                      className={`p-8 md:p-10 md:col-span-3 ${isReversed ? "md:order-1" : ""}`}
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2.5 bg-secondary/10 rounded-lg">
                          <Icon className="h-5 w-5 text-secondary" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-primary font-playfair">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-secondary font-medium text-sm mb-3">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <p className="text-sm font-semibold text-gray-800 mb-3">
                        {isEn
                          ? "Services may include:"
                          : "Услугите може да вклучуваат:"}
                      </p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {service.bullets.map((bullet) => (
                          <li
                            key={bullet}
                            className="flex items-start gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 3 – Who We Work With */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-4">
              {isEn ? "Who We Work With" : "Со кого соработуваме"}
            </h2>
            <p className="text-gray-600">
              {isEn
                ? "We collaborate selectively with:"
                : "Селективно соработуваме со:"}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {partners.map((partner) => (
              <div
                key={partner}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <Users className="h-5 w-5 text-secondary flex-shrink-0" />
                <span className="text-gray-700 text-sm">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 – How We Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair mb-4">
              {isEn ? "How We Work" : "Како работиме"}
            </h2>
            <p className="text-gray-600">
              {isEn
                ? "GMFE offers flexible cooperation models depending on the nature and scope of the request."
                : "ГМФЕ нуди флексибилни модели на соработка, во зависност од природата и обемот на барањето."}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {workModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="bg-white rounded-xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-5">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-xl font-bold text-primary font-playfair mb-3">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {model.description}
                  </p>
                  {model.example && (
                    <p className="text-gray-500 text-sm mt-3 italic">
                      {model.example}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 5 – Contact Form */}
      <section id="contact-form" className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-playfair text-center mb-3">
            {isEn ? "Contact our team" : "Контактирајте го нашиот тим"}
          </h2>
          <p className="text-gray-600 text-center mb-10">services@gmfe.org</p>

          {submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <p className="text-green-800 font-semibold text-lg">
                {isEn
                  ? "Your email client should open with the inquiry. Thank you!"
                  : "Вашиот е-мејл клиент треба да се отвори со барањето. Ви благодариме!"}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {isEn ? "Name" : "Име и презиме"} *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {isEn ? "Organization" : "Организација"}
                  </label>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {isEn ? "Country" : "Држава"}
                  </label>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    {isEn ? "Email" : "Е-пошта"} *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {isEn ? "Area of Interest" : "Област на интерес"} *
                </label>
                <select
                  name="areaOfInterest"
                  required
                  value={formData.areaOfInterest}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition bg-white"
                >
                  <option value="">
                    {isEn ? "Select an option" : "Изберете опција"}
                  </option>
                  {dropdownOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {isEn ? "Brief Description" : "Краток опис"}
                </label>
                <textarea
                  name="briefDescription"
                  rows={4}
                  value={formData.briefDescription}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition resize-none"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  {isEn ? "Preferred Timeline" : "Посакувана временска рамка"}
                </label>
                <input
                  type="text"
                  name="preferredTimeline"
                  value={formData.preferredTimeline}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition"
                />
              </div>

              <p className="text-xs text-gray-400">
                {isEn
                  ? "By submitting this form, you agree that your data will be used solely to respond to your inquiry. See our privacy policy for details."
                  : "Со поднесување на оваа форма, се согласувате дека вашите податоци ќе се користат исклучиво за одговор на вашето барање. Видете ја нашата политика за приватност за повеќе детали."}
              </p>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 w-full sm:w-auto"
              >
                <Send className="h-4 w-4" />
                {isEn ? "Contact our team" : "Контактирајте го нашиот тим"}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Section 6 – Closing CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-primary font-playfair mb-4">
              {isEn
                ? "Let's explore how GMFE can support your initiative."
                : "Да разгледаме како ГМФЕ може да ја поддржи вашата иницијатива."}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              {isEn
                ? "If you are looking for a thoughtful, mission-aligned partner in research, education, strategic collaboration or project development, we would be glad to hear from you."
                : "Доколку барате промислен и мисионски усогласен партнер за истражување, едукација, стратешка соработка или развој на проекти, ќе ни биде задоволство да слушнеме повеќе."}
            </p>
            <a
              href="#contact-form"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {isEn ? "Contact our team" : "Контактирајте го нашиот тим"}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
