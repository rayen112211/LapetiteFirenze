import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import aboutImg from "@/assets/about-interior.jpg";
import locationImg from "@/assets/location.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

const AboutPage = () => {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <MapPin size={28} />,
      title: t.aboutPage.locationTitle,
      lines: ["Via Pellicceria, 30/R", "50121 Firenze, Italy"],
      link: "https://maps.google.com/?q=Via+Pellicceria+30R+50121+Firenze",
      cta: t.aboutPage.getDirections,
    },
    {
      icon: <Clock size={28} />,
      title: t.aboutPage.hoursTitle,
      lines: [`${t.footer.monThu}: 12:00–23:00`, `${t.footer.friSat}: 12:00–00:00`, `${t.footer.sunday}: 12:00–22:00`],
    },
    {
      icon: <Phone size={28} />,
      title: t.aboutPage.contactTitle,
      lines: ["+39 055 212 701", "WhatsApp: +39 331 122 2676"],
      link: "tel:+39055212701",
      cta: t.aboutPage.callNow,
    },
  ];

  return (
    <main className="pt-20">
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={aboutImg} alt="La Petite interior" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/75" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3">{t.aboutPage.heroSubtitle}</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary-foreground">{t.aboutPage.heroTitle}</h1>
        </motion.div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">{t.aboutPage.philosophySubtitle}</p>
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-6">{t.aboutPage.philosophyTitle}</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t.aboutPage.philosophyP1}</p>
                <p>{t.aboutPage.philosophyP2}</p>
                <p>{t.aboutPage.philosophyP3}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={locationImg} alt="Florence location" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-cream-dark">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, i) => (
            <motion.div key={card.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center p-8 bg-background border border-border">
              <div className="text-primary mb-4 flex justify-center">{card.icon}</div>
              <h3 className="font-heading text-xl text-foreground mb-3">{card.title}</h3>
              {card.lines.map((line, j) => (<p key={j} className="text-muted-foreground text-sm">{line}</p>))}
              {card.link && (
                <a href={card.link} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-primary text-xs tracking-widest uppercase font-bold hover:text-gold-dark transition-colors">{card.cta}</a>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <section className="h-[400px]">
        <iframe title="La Petite Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5!2d11.2502!3d43.7711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ2JzE2LjAiTiAxMcKwMTUnMDAuNyJF!5e0!3m2!1sen!2sit!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </main>
  );
};

export default AboutPage;
