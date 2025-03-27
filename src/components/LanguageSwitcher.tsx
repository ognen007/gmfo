import React from 'react';
import { useLanguage } from '../context/LanguageContext';

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ className = '' }) => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'mk' : 'en')}
      className={`${className} font-medium text-white hover:text-secondary transition-colors`}
      aria-label={language === 'en' ? 'Switch to Macedonian' : 'Switch to English'}
    >
      {language === 'en' ? 'MK' : 'EN'}
    </button>
  );
};

export default LanguageSwitcher;
