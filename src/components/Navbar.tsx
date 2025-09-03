import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    
    if (location.pathname === '/') {
      // Already on homepage, just scroll
      scrollToSection(sectionId);
    } else {
      // Navigate to homepage first, then scroll
      navigate('/');
      // Use setTimeout to ensure the page has loaded before scrolling
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const handleRouteNavigation = (path: string) => {
    setIsOpen(false);
    navigate(path);
  };

  const navItems = [
    { 
      name: language === 'en' ? 'About' : 'За нас', 
      action: () => handleNavigation('mission')
    },
    { 
      name: language === 'en' ? 'Projects' : 'Проекти', 
      action: () => handleNavigation('endeavors')
    },
    { 
      name: language === 'en' ? 'Ambassadors' : 'Амбасадори', 
      action: () => handleNavigation('ambassadors')
    },
    { 
      name: language === 'en' ? 'Contact' : 'Контакт', 
      action: () => handleNavigation('contact')
    },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => navigate('/')} className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
              {/* Mobile: Show icon + GMFE text */}
              <div className="md:hidden flex items-center space-x-2">
                <div className="h-14 w-14 text-yellow-500">
                  <img 
                    src="https://i.ibb.co/N2LRZchC/Logo-Bildmarke-SCREEN-RGB.png"
                    alt="Vergina Sun"
                    className="h-full w-full"
                  />
                </div>
                <span className="font-playfair font-bold text-2xl">GMFE</span>
              </div>
              
              {/* Desktop: Show language-specific logo only */}
              <div className="hidden md:block">
                <img 
                  src={language === 'en' 
                    ? "https://i.ibb.co/wNPzhH8h/image.png"
                    : "https://i.ibb.co/4rB2ncT/image.png"
                  }
                  alt={language === 'en' 
                    ? "Global Macedonian Foundation Eternal" 
                    : "Глобална Македонска Фондација Вечна"
                  }
                  className="h-14"
                />
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-white hover:text-secondary px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                {item.name}
              </button>
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
              <button
                key={item.name}
                onClick={item.action}
                className="text-white hover:text-secondary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
              >
                {item.name}
              </button>
            ))}
            <LanguageSwitcher className="mx-3 my-2" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;