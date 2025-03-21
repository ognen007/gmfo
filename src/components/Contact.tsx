import React from 'react';
import { Send, Mail, Users, Globe, Heart } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import emailjs from '@emailjs/browser';
import { useLanguage } from '../context/LanguageContext';

emailjs.init({
  publicKey: 'dSJNVJa5OB6GyjC9t',
});

const Contact = () => {
  const [captchaValue, setCaptchaValue] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string>('');
  const [sending, setSending] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const { t } = useLanguage();

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
      await emailjs.send(
        'service_x2c8ued',
        'template_58bqmq6',
        {
          subject: formData.get('subject'),
          message: formData.get('message'),
          name: formData.get('name'),
          email: formData.get('email'),
        },
        'dSJNVJa5OB6GyjC9t'
      );
      
      // Clear form
      formRef.current?.reset();
      recaptchaRef.current?.reset();
      setCaptchaValue(null);
      setError(t('message.sent'));
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError(`Failed to send message: ${err instanceof Error ? err.message : 'Please try again.'}`);
    } finally {
      setSending(false);
    }
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value);
    setError('');
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-4xl font-bold text-primary mb-6 font-playfair">
              {t('shape.future')}
            </h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t('support.difference')}
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {t('donation.confirmation')}
              </p>
              <a
                href="https://pay.raisenow.io/ndyvq"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-secondary text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-colors"
              >
                {t('donate.now')} <Heart className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Stay Connected</h3>
                <p className="text-gray-500 text-sm">Get the latest updates and insights</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Join Our Community</h3>
                <p className="text-gray-500 text-sm">Be part of our growing network</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Impact</h3>
                <p className="text-gray-500 text-sm">Help spread our message worldwide</p>
              </div>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center font-playfair">
              {t('get.in.touch')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
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
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
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
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
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
              {error && (
                <p className="text-red-600 text-sm">{error}</p>
              )}
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
      </div>
    </section>
  );
}

export default Contact;
