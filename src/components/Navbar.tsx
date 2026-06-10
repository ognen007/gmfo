import React, { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [networkOpen, setNetworkOpen] = useState(false);
  const [mobileNetworkOpen, setMobileNetworkOpen] = useState(false);
  const networkRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        networkRef.current &&
        !networkRef.current.contains(e.target as Node)
      ) {
        setNetworkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (sectionId: string) => {
    setIsOpen(false);
    setNetworkOpen(false);
    setMobileNetworkOpen(false);

    if (location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate("/");
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 100);
    }
  };

  const handleRouteNavigation = (path: string) => {
    setIsOpen(false);
    setNetworkOpen(false);
    setMobileNetworkOpen(false);
    navigate(path);
  };

  const navItems = [
    {
      name: language === "en" ? "Mission" : "Мисија",
      action: () => handleNavigation("mission"),
    },
    {
      name: language === "en" ? "About" : "За нас",
      action: () => handleNavigation("board"),
    },
    {
      name: language === "en" ? "Projects" : "Проекти",
      action: () => handleNavigation("endeavors"),
    },
    {
      name: "NETWORK_DROPDOWN",
      action: () => {},
    },
    {
      name: language === "en" ? "Vision 2035" : "Визија 2035",
      action: () => handleRouteNavigation("/vision-eternal-2035"),
    },
    {
      name: language === "en" ? "Services" : "Услуги",
      action: () => handleRouteNavigation("/services"),
    },
    {
      name: language === "en" ? "Contact" : "Контакт",
      action: () => handleNavigation("contact"),
    },
  ];

  const networkDropdownItems = [
    {
      name: language === "en" ? "Ambassadors" : "Амбасадори",
      action: () => handleNavigation("ambassadors"),
    },
    {
      name: "Senior Fellows",
      action: () => handleRouteNavigation("/senior-fellows"),
    },
  ];

  return (
    <nav className="bg-primary text-white shadow-lg fixed w-full z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <div className="flex shrink-0 items-center">
            <button
              onClick={() => navigate("/")}
              className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
            >
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
                  src={
                    language === "en"
                      ? "https://i.ibb.co/wNPzhH8h/image.png"
                      : "https://i.ibb.co/4rB2ncT/image.png"
                  }
                  alt={
                    language === "en"
                      ? "Global Macedonian Foundation Eternal"
                      : "Глобална Македонска Фондација Вечна"
                  }
                  className="h-10"
                />
              </div>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="ml-auto hidden items-center gap-3 md:flex">
            <div className="flex min-w-0 items-center gap-1 whitespace-nowrap">
              {navItems.map((item) =>
                item.name === "NETWORK_DROPDOWN" ? (
                  <div key="network" className="relative" ref={networkRef}>
                    <button
                      onClick={() => setNetworkOpen((prev) => !prev)}
                      className="inline-flex items-center gap-1 rounded-md px-2.5 py-2 text-sm font-semibold tracking-[0.01em] text-white/90 transition hover:bg-white/10 hover:text-white"
                    >
                      {language === "en" ? "Network" : "Мрежа"}
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform ${networkOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {networkOpen && (
                      <div className="absolute left-0 top-full mt-1 w-44 rounded-lg bg-primary shadow-xl border border-white/10 py-1 z-50">
                        {networkDropdownItems.map((sub) => (
                          <button
                            key={sub.name}
                            onClick={sub.action}
                            className="block w-full text-left px-4 py-2.5 text-sm text-white/90 hover:bg-white/10 hover:text-white transition"
                          >
                            {sub.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    key={item.name}
                    onClick={item.action}
                    className="rounded-md px-2.5 py-2 text-sm font-semibold tracking-[0.01em] text-white/90 transition hover:bg-white/10 hover:text-white"
                  >
                    {item.name}
                  </button>
                ),
              )}
            </div>

            <div className="shrink-0">
              <LanguageSwitcher className="ml-1" />
            </div>

            <a
              href="https://donate.raisenow.io/jsdvv"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {t("support.partner")}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="ml-auto flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-secondary focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) =>
              item.name === "NETWORK_DROPDOWN" ? (
                <div key="network-mobile">
                  <button
                    onClick={() => setMobileNetworkOpen((prev) => !prev)}
                    className="text-white hover:text-secondary flex items-center justify-between px-3 py-2 rounded-md text-base font-medium w-full text-left"
                  >
                    {language === "en" ? "Network" : "Мрежа"}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${mobileNetworkOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {mobileNetworkOpen && (
                    <div className="pl-6 space-y-1">
                      {networkDropdownItems.map((sub) => (
                        <button
                          key={sub.name}
                          onClick={sub.action}
                          className="text-white/80 hover:text-secondary block px-3 py-2 rounded-md text-sm font-medium w-full text-left"
                        >
                          {sub.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.name}
                  onClick={item.action}
                  className="text-white hover:text-secondary block px-3 py-2 rounded-md text-base font-medium w-full text-left"
                >
                  {item.name}
                </button>
              ),
            )}
            <LanguageSwitcher className="mx-3 my-2" />
            <a
              href="https://donate.raisenow.io/jsdvv"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-secondary text-white px-4 py-2 rounded-full font-semibold hover:opacity-90 transition-colors text-sm mx-3 my-2 text-center block"
            >
              {t("support.partner")}
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
