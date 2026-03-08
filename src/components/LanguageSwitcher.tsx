import React from "react";
import { useLanguage } from "../context/LanguageContext";

interface LanguageSwitcherProps {
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  className = "",
}) => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === "en" ? "mk" : "en")}
      className={`inline-flex h-9 min-w-[3.1rem] items-center justify-center rounded-full border border-white/30 bg-white/8 px-3 text-xs font-bold tracking-[0.14em] text-white transition hover:bg-white/14 ${className}`}
      aria-label={
        language === "en" ? "Switch to Macedonian" : "Switch to English"
      }
    >
      {language === "en" ? "MK" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
