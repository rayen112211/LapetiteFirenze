import { Link } from "react-router-dom";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const WhatsAppIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Footer = () => {
  const { t } = useLanguage();

  const navItems = [
    { label: t.nav.menu, path: "/menu" },
    { label: t.nav.cocktails, path: "/cocktails" },
    { label: t.nav.reservations, path: "/reservations" },
    { label: t.nav.about, path: "/about" },
    { label: t.nav.contact, path: "/contact" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <h3 className="font-heading text-2xl tracking-widest mb-4">LA PETITE</h3>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-4">{t.footer.navigate}</h4>
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link key={item.path} to={item.path} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-4">{t.footer.hours}</h4>
            <div className="text-sm text-secondary-foreground/60 space-y-1">
              <p>{t.footer.monThu}</p>
              <p className="text-secondary-foreground/80">12:00 – 23:00</p>
              <p className="mt-3">{t.footer.friSat}</p>
              <p className="text-secondary-foreground/80">12:00 – 00:00</p>
              <p className="mt-3">{t.footer.sunday}</p>
              <p className="text-secondary-foreground/80">12:00 – 22:00</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs tracking-widest uppercase text-primary mb-4">{t.footer.contact}</h4>
            <div className="text-sm text-secondary-foreground/60 space-y-3">
              <a href="https://maps.google.com/?q=Via+Pellicceria+30R+50121+Firenze" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 hover:text-primary transition-colors">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>Via Pellicceria, 30/R<br />50121 Firenze</span>
              </a>
              <a href="tel:+39055212701" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={16} className="shrink-0" />
                +39 055 212 701
              </a>
              <a href="https://wa.me/393311222676" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <WhatsAppIcon size={16} />
                WhatsApp: +39 331 122 2676
              </a>
              <a href="mailto:info@lapetitefirenze.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={16} className="shrink-0" />
                info@lapetitefirenze.com
              </a>
              <div className="flex gap-4 pt-3">
                <a href="https://www.instagram.com/lapetitefirenze/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={22} />
                </a>
                <a href="https://www.facebook.com/lapetitefirenze/" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={22} />
                </a>
                <a href="https://wa.me/393311222676" target="_blank" rel="noopener noreferrer" className="text-secondary-foreground/60 hover:text-primary transition-colors" aria-label="WhatsApp">
                  <WhatsAppIcon size={22} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-xs text-secondary-foreground/40 tracking-wider">
            © {new Date().getFullYear()} La Petite Firenze. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
