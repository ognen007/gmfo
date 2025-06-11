import React from 'react';
import { Mail, MapPin, Heart, Linkedin, Facebook, Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('contact.us')}</h3>
            <div className="space-y-3">
              <div className="flex">
                <MapPin className="h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium">Global Macedonian Foundation Eternal</p>
                  <p>Ul. 127 br. 5</p>
                  <p>1220 Tetovo</p>
                  <p>Macedonia</p>
                </div>
              </div>
              <div className="pt-2">
                <p className="font-medium mb-1">{t('general.inquiries')}</p>
                <p className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" /> 
                  <a href="mailto:contact@gmfe.org" className="hover:text-yellow-400">contact@gmfe.org</a>
                </p>
              </div>
              <div className="pt-4">
                <p className="font-medium mb-2">Bank Details</p>
                <div className="text-sm space-y-1">
                  <p>GLOBALNA MAKEDONSKA FONDACIJA VECNA</p>
                  <p>Domestic Account (MKD): 250-0003026762-92</p>
                  <p>IBAN: MK07 2507 2200 0042 008</p>
                  <p>SWIFT/BIC: INSBMK22</p>
                  <p>Bank: Sparkasse Bank Macedonia AD Skopje</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('quick.links')}</h3>
            <ul className="space-y-2">
              <li><a href="#mission" className="hover:text-yellow-400">Mission</a></li>
              <li><a href="#endeavors" className="hover:text-yellow-400">Endeavors</a></li>
              <li><a href="#board" className="hover:text-yellow-400">Board</a></li>
              <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('connect.with.us')}</h3>
            <ul className="flex flex-wrap gap-4">
              <li>
                <a href="https://www.linkedin.com/company/global-macedonian-foundation-eternal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 inline-flex items-center">
                  <Linkedin className="h-5 w-5" />
                </a>
              </li>
              <li className="flex items-center">
                <a href="https://x.com/gmf_eternal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 inline-flex items-center justify-center">
                  <img 
                    src="https://i.ibb.co/rG5fL1vP/image-removebg-preview.png"
                    alt="X (formerly Twitter)"
                    className="h-5 w-5"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/share/18kjijLX24/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 inline-flex items-center">
                  <Facebook className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 inline-flex items-center">
                  <Instagram className="h-5 w-5" />
                </a>
              </li>
              <li>
                <a href="https://www.youtube.com/@GMF_Eternal" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 inline-flex items-center">
                  <Youtube className="h-5 w-5" />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('support.cause')}</h3>
            <p className="mb-4">{t('help.preserve')}</p>
            <a
              href="https://pay.raisenow.io/ndyvq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-secondary text-white px-6 py-2 rounded-md hover:opacity-90 transition-colors font-semibold"
            >
              <Heart className="h-5 w-5 mr-2 text-white" /> {t('donate.now')}
            </a>
            <div className="mt-10">
              <img 
                src="https://i.ibb.co/MypN8Tkj/Logo-Wort-Bildmarke-SCREEN-RGB.png"
                alt="GMFE Logo"
                className="max-w-[250px] md:mx-auto ml-0"
              />
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p>© 2025 Global Macedonian Foundation Eternal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
