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
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-10 mt-16">
          {/* Card 1 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary leading-tight">
                {t('support.mission.title')}
              </h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('support.mission.description')}
            </p>
            <div className="mb-6 text-gray-700">
              <span className="text-blue-600">🔹</span>{' '}
              {t('support.mission.highlight')}
            </div>
            <div className="mt-auto pt-6">
              <a
                href="https://pay.raisenow.io/ndyvq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {t('donate.now')} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary leading-tight">
                {t('young.researchers.title')}
              </h3>
            </div>
            <div className="text-lg font-semibold text-secondary mb-6">
              {t('young.researchers.goal')}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('young.researchers.description')}
            </p>
            <div className="mb-6 text-gray-700">
              <span className="text-blue-600">🔹</span>{' '}
              {t('young.researchers.highlight')}
            </div>
            <div className="mt-auto pt-6">
              <a
                href="https://donate.raisenow.io/gmtzs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {t('young.researchers.button')}{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Library className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary leading-tight">
                {t('preserving.knowledge.title')}
              </h3>
            </div>
            <div className="text-lg font-semibold text-secondary mb-6">
              {t('preserving.knowledge.goal')}
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('preserving.knowledge.description')}
            </p>
            <div className="mb-6 text-gray-700">
              <span className="text-blue-600">🔹</span>{' '}
              {t('preserving.knowledge.highlight')}
            </div>
            <div className="mt-auto pt-6">
              <a
                href="https://donate.raisenow.io/knqgq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {t('preserving.knowledge.button')}{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white/90 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all flex flex-col min-h-[420px] hover:-translate-y-1">
            <div className="inline-flex items-center gap-3 mb-5">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-primary leading-tight">
                {t('friends.gmfe.title')}
              </h3>
            </div>
            <div className="text-lg font-semibold text-secondary mb-6">
              {t('friends.gmfe.goal')}
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">
              {t('friends.gmfe.description')}
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              {t('friends.gmfe.highlight')}
            </p>
            <div className="mb-6 text-gray-700">
              <span className="text-blue-600">🔹</span>{' '}
              {t('friends.gmfe.cta')}
            </div>
            <div className="mt-auto pt-6">
              <a
                href={`https://donate.raisenow.io/pcyxk?lng=${language}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 hover:scale-[1.03] transition-all w-full justify-center"
              >
                {t('friends.gmfe.button')}{' '}
                <ArrowRight className="ml-2 h-5 w-5" />
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
              <span>{sending ? 'Sending...' : t('send.message')}</span>
              <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
