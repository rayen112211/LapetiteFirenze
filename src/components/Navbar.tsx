import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { languages, Language } from "@/i18n/translations";
import logo from "@/assets/logo-petite.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const navLinks = [
    { label: t.nav.home, path: "/" },
    { label: t.nav.menu, path: "/menu" },
    { label: t.nav.cocktails, path: "/cocktails" },
    { label: t.nav.reservations, path: "/reservations" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-gold/20"
    >
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
              <motion.div key={link.path} whileHover={{ y: -2 }}>
                <Link
                  to={link.path}
                  className={`text-sm tracking-wider uppercase transition-colors duration-300 ${location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary-foreground/70 hover:text-primary"
                    }`}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side: Language Switcher + Reserve CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Redesigned Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 group py-2"
                aria-label="Toggle language menu"
              >
                <Globe size={16} className="text-primary group-hover:scale-110 transition-transform duration-300" />
                <span className="text-xs tracking-widest uppercase font-medium text-secondary-foreground/80 group-hover:text-primary transition-colors duration-300">
                  {languages.find(l => l.code === language)?.label}
                </span>
                <ChevronDown size={14} className={`text-gold transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-32 bg-secondary border border-gold/30 shadow-xl overflow-hidden pointer-events-auto"
                  >
                    <div className="py-1">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code);
                            setIsLangOpen(false);
                          }}
                          className={`w-full text-left px-4 py-3 text-xs tracking-widest uppercase transition-colors duration-200 ${language === lang.code
                            ? "bg-primary/10 text-primary font-bold"
                            : "text-secondary-foreground/70 hover:bg-gold/5 hover:text-primary"
                            }`}
                        >
                          {lang.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/reservations"
              className="px-7 py-3 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
            >
              {t.nav.reserve}
            </Link>
          </div>

          {/* Mobile: Language + Toggle */}
          <div className="flex items-center gap-4 lg:hidden">
            <button
              onClick={() => {
                const otherLang = languages.find(l => l.code !== language);
                if (otherLang) setLanguage(otherLang.code);
              }}
              className="flex items-center gap-1.5 py-1 px-2 border border-gold/30 rounded-full"
            >
              <Globe size={14} className="text-primary" />
              <span className="text-[10px] tracking-widest uppercase font-bold text-secondary-foreground">
                {language === 'en' ? 'IT' : 'EN'}
              </span>
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-secondary-foreground p-1"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
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
            <div className="px-6 py-8 flex flex-col gap-5 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-widest uppercase py-2 transition-colors ${location.pathname === link.path
                    ? "text-primary font-bold"
                    : "text-secondary-foreground/70"
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/reservations"
                onClick={() => setIsOpen(false)}
                className="mt-4 px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold shadow-lg shadow-primary/20"
              >
                {t.nav.makeReservation}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
