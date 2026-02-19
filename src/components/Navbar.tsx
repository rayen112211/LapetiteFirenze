import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages, Language } from "@/i18n/translations";
import logo from "@/assets/logo-petite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.menu, path: "/menu" },
    { label: t.nav.cocktails, path: "/cocktails" },
    { label: t.nav.reservations, path: "/reservations" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="La Petite" className="h-10" />
            <span className="font-heading text-2xl tracking-widest text-secondary-foreground">LA PETITE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm tracking-wider uppercase transition-colors duration-300 ${location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary-foreground/70 hover:text-primary"
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side: Language Switcher + Reserve CTA */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Language Switcher */}
            <div className="flex items-center gap-1">
              {languages.map((lang, i) => (
                <span key={lang.code} className="flex items-center">
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={`text-xs tracking-wider transition-colors duration-200 px-1 py-0.5 ${language === lang.code
                        ? "text-primary font-bold"
                        : "text-secondary-foreground/50 hover:text-secondary-foreground/80"
                      }`}
                    aria-label={`Switch to ${lang.label}`}
                  >
                    {lang.label}
                  </button>
                  {i < languages.length - 1 && (
                    <span className="text-secondary-foreground/20 text-xs mx-0.5">|</span>
                  )}
                </span>
              ))}
            </div>

            <Link
              to="/reservations"
              className="px-6 py-2.5 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark transition-colors duration-300"
            >
              {t.nav.reserve}
            </Link>
          </div>

          {/* Mobile: Language + Toggle */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Compact language switcher for mobile */}
            <div className="flex items-center gap-0.5">
              {languages.map((lang, i) => (
                <span key={lang.code} className="flex items-center">
                  <button
                    onClick={() => setLanguage(lang.code)}
                    className={`text-[10px] tracking-wider transition-colors duration-200 px-0.5 ${language === lang.code
                        ? "text-primary font-bold"
                        : "text-secondary-foreground/40"
                      }`}
                  >
                    {lang.label}
                  </button>
                  {i < languages.length - 1 && (
                    <span className="text-secondary-foreground/15 text-[10px]">|</span>
                  )}
                </span>
              ))}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-foreground"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-gold/20 overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-wider uppercase py-2 ${location.pathname === link.path
                      ? "text-primary"
                      : "text-secondary-foreground/70"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservations"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-6 py-3 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold text-center"
              >
                {t.nav.makeReservation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
