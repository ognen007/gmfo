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
      className={`${className}`}
      aria-label={language === 'en' ? 'Switch to Macedonian' : 'Switch to English'}
    >
      {language === 'en' ? (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Flag_of_North_Macedonia.svg/800px-Flag_of_North_Macedonia.svg.png"
          alt="Macedonian flag"
          className="w-6 h-6 object-contain"
        />
      ) : (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg"
          alt="USA flag"
          className="w-6 h-6 object-contain"
        />
      )}
    </button>
  );
};

export default LanguageSwitcher;