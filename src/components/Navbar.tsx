import React, { useState } from 'react';
import { Menu, X, Sun } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  const navItems = [
    { name: language === 'en' ? 'Mission' : t('mission'), href: '#mission' },
    { name: language === 'en' ? 'Endeavors' : t('endeavors'), href: '#endeavors' },
    { name: language === 'en' ? 'Board' : t('board'), href: '#board' },
    { name: language === 'en' ? 'Ambassadors' : t('ambassadors'), href: '#board' },
    { name: language === 'en' ? 'Donate' : t('donate'), href: '#contact' },
    { name: language === 'en' ? 'Contact' : t('contact'), href: '#contact' },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center space-x-2">
              <div className="h-14 w-14 text-yellow-500">
                <img 
                  src="https://i.ibb.co/N2LRZchC/Logo-Bildmarke-SCREEN-RGB.png"
                  alt="Vergina Sun"
                  className="h-full w-full"
                />
              </div>
              <span className="font-playfair font-bold text-2xl md:hidden">GMFE</span>
              <span className="font-playfair font-bold text-2xl hidden md:block">
                {language === 'en' ? 'Global Macedonian Foundation Eternal' : 'Глобална Македонска Фондација Вечна'}
              </span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-white hover:text-secondary px-3 py-2 rounded-md text-base font-medium text-base	 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-white hover:text-secondary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <LanguageSwitcher className="mx-3 my-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
