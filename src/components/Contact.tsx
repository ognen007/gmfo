import React from 'react';
import { Send, Heart, ArrowRight, GraduationCap, Library } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

// Initialize EmailJS with your public key (only once)
emailjs.init({
  publicKey: 'dSJNVJa5OB6GyjC9t',
});

const Contact = () => {
  const [captchaValue, setCaptchaValue] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string>('');
  const [sending, setSending] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const { t, language } = useLanguage();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!captchaValue) {
      setError(t('captcha.error'));
      return;
    }

    setError('');
    setSending(true);

    const formData = new FormData(formRef.current!);

    try {
      await emailjs.send('service_x2c8ued', 'template_58bqmq6', {
        user: {
          subject: formData.get('subject'),
          message: formData.get('message'),
          name: formData.get('name'),
          email: formData.get('email'),
        },
        reply_to: formData.get('email'),
      });

      formRef.current?.reset();
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
      setError(t('message.sent'));
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(
        `Failed to send message: ${
          err instanceof Error ? err.message : 'Please try again.'
        }`
      );
    } finally {
      setSending(false);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    setError('');
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tl from-secondary/10 to-transparent rounded-full blur-3xl opacity-30 transform -translate-x-1/3 translate-y-1/3 animate-pulse"></div>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-20 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 font-playfair">
            {t('shape.future')}
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {t('support.difference')}
            </p>
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              {t('donation.confirmation')}
            </p>
          </div>
        </div>

        {/* Grid for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-10 mt-16">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary leading-tight">
                {language === 'en' ? 'Project Partnerships' : 'Проектни партнерства'}
              </h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {language === 'en' 
                ? 'Support specific projects in research, culture, and education. Project partnerships enable targeted engagement with clearly defined goals, timelines, and impact.'
                : 'Поддршка на конкретни проекти во областа на истражувањето, културата и образованието. Проектните партнерства овозможуваат насочено учество со јасно дефинирани цели, временски рамки и мерливо влијание.'}
            </p>
            <div className="mt-auto pt-6">
              <a
                href="https://donate.raisenow.io/jsdvv"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {language === 'en' ? 'Explore Projects' : 'Истражете ги проектите'} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <BookOpen className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-bold text-secondary leading-tight">
                {language === 'en' ? 'Research & Knowledge Programs' : 'Програми за истражување и знаење'}
              </h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {language === 'en' 
                ? 'Support research initiatives, publications, and academic cooperation that preserve and advance Macedonian knowledge and heritage.'
                : 'Поддршка на истражувачки иницијативи, публикации и академска соработка кои го зачувуваат и унапредуваат македонското знаење и културно наследство.'}
            </p>
            <div className="mt-auto pt-6">
              <a
                href="https://donate.raisenow.io/mvfdt"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {language === 'en' ? 'Support Research Programs' : 'Поддржете ги истражувачките програми'} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary leading-tight">
                {language === 'en' ? 'Endowment & Long-Term Support' : 'Endowment и долгорочна поддршка'}
              </h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {language === 'en' 
                ? 'Contribute to the long-term institutional strength of the Foundation. Endowment contributions ensure sustainable impact beyond individual projects.'
                : 'Придонес кон долгорочната институционална стабилност и независност на Фондацијата. Endowment придонесите обезбедуваат одржливо влијание кое ги надминува поединечните проекти.'}
            </p>
            <div className="mt-auto pt-6">
              <a
                href="https://donate.raisenow.io/qrykn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {language === 'en' ? 'Learn About Endowment' : 'Дознајте повеќе за Endowment'} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <svg className="h-6 w-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-secondary leading-tight">
                {language === 'en' ? 'Impact-Oriented Funding' : 'Финансирање насочено кон влијание'}
              </h3>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {language === 'en' 
                ? 'For selected initiatives, we offer structured funding models such as recoverable grants or program-related investments, aligned with measurable impact.'
                : 'За одбрани иницијативи, применуваме структуриран пристап на финансирање, како што се повратни грантови или program-related investments, усогласени со јасно дефинирани и мерливи резултати.'}
            </p>
            <div className="mt-auto pt-6">
              <a
                href="https://donate.raisenow.io/vscvc"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {language === 'en' ? 'Discover Impact Models' : 'Откријте ги моделите за влијание'} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form (unchanged) */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6 mt-12"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center font-playfair">
            {t('get.in.touch')}
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('name')} <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder={t('your.name')}
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                {t('email')} <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                maxLength={100}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                placeholder={t('your.email')}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t('subject')} <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              maxLength={200}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
              placeholder={t('message.about')}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              {t('message')} <span className="text-red-600">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              maxLength={1000}
              rows={6}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none bg-gray-50"
              placeholder={t('your.message')}
            ></textarea>
          </div>

          <div className="flex flex-col items-center space-y-4">
            <ReCAPTCHA
              sitekey="6LfwXMEqAAAAANjAb2QkjYaFKr39iGH7KlkFBrOU"
              ref={recaptchaRef}
              onChange={handleCaptchaChange}
              className="mx-auto"
            />
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={sending}
              className="inline-flex justify-center items-center bg-secondary text-white px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-all transform hover:scale-105 hover:shadow-lg group"
            >
              <span>{sending ? (language === 'en' ? 'Sending...' : 'Се испраќа...') : t('send.message')}</span>
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
