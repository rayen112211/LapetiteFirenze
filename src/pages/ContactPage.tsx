import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Instagram, Facebook, Send } from "lucide-react";
import { z } from "zod";
import { useLanguage } from "@/i18n/LanguageContext";

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ContactPage = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const contactSchema = z.object({
    name: z.string().trim().min(1, t.validation.nameRequired).max(100),
    email: z.string().trim().email(t.validation.emailInvalid).max(255),
    subject: z.string().min(1, t.validation.subjectRequired),
    message: z.string().trim().min(1, t.validation.messageRequired).max(1000),
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((issue) => {
        if (issue.path[0]) fieldErrors[issue.path[0] as string] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = "w-full px-4 py-3 bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors";
  const labelClass = "block text-xs tracking-widest uppercase text-muted-foreground mb-2";

  return (
    <main className="pt-20">
      <section className="bg-secondary section-padding">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3">{t.contactPage.heroSubtitle}</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary-foreground">{t.contactPage.heroTitle}</h1>
        </motion.div>
      </section>

      <section className="section-padding bg-background">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="font-heading text-2xl text-foreground mb-6">{t.contactPage.formTitle}</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">{t.contactPage.formDesc}</p>

            <div className="space-y-5">
              <a href="tel:+39055212701" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Phone size={18} className="text-primary" /><span className="text-sm">+39 055 212 701</span>
              </a>
              <a href="https://wa.me/393311222676" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <span className="text-primary"><WhatsAppIcon size={18} /></span><span className="text-sm">WhatsApp: +39 331 122 2676</span>
              </a>
              <a href="mailto:info@lapetitefirenze.com" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                <Mail size={18} className="text-primary" /><span className="text-sm">info@lapetitefirenze.com</span>
              </a>
              <a href="https://maps.google.com/?q=Via+Pellicceria+30R+50121+Firenze" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 text-foreground hover:text-primary transition-colors">
                <MapPin size={18} className="text-primary mt-0.5" /><span className="text-sm">Via Pellicceria, 30/R, 50121 Firenze</span>
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/lapetitefirenze/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram"><Instagram size={22} /></a>
              <a href="https://www.facebook.com/lapetitefirenze/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook"><Facebook size={22} /></a>
              <a href="https://wa.me/393311222676" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp"><WhatsAppIcon size={22} /></a>
            </div>

            <div className="mt-10 p-6 bg-cream-dark border border-border">
              <h3 className="font-heading text-lg text-foreground mb-3">{t.contactPage.openingHours}</h3>
              <div className="text-sm text-muted-foreground space-y-1">
                <div className="flex justify-between"><span>{t.footer.monThu}</span><span>12:00 – 23:00</span></div>
                <div className="flex justify-between"><span>{t.footer.friSat}</span><span>12:00 – 00:00</span></div>
                <div className="flex justify-between"><span>{t.footer.sunday}</span><span>12:00 – 22:00</span></div>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            {submitted ? (
              <div className="text-center py-16">
                <Send size={48} className="text-primary mx-auto mb-6" />
                <h2 className="font-heading text-2xl text-foreground mb-4">{t.contactPage.messageSent}</h2>
                <div className="gold-divider mb-6" />
                <p className="text-muted-foreground">{t.contactPage.messageSentDesc}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={labelClass}>{t.contactPage.nameLabel}</label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder={t.contactPage.yourName} className={inputClass} />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className={labelClass}>{t.contactPage.emailLabel}</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder={t.contactPage.yourEmail} className={inputClass} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className={labelClass}>{t.contactPage.subjectLabel}</label>
                  <select name="subject" value={form.subject} onChange={handleChange} className={inputClass}>
                    <option value="">{t.contactPage.selectSubject}</option>
                    <option value="general">{t.contactPage.generalInquiry}</option>
                    <option value="reservation">{t.contactPage.reservationQuestion}</option>
                    <option value="event">{t.contactPage.privateEvent}</option>
                    <option value="feedback">{t.contactPage.feedback}</option>
                    <option value="other">{t.contactPage.other}</option>
                  </select>
                  {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className={labelClass}>{t.contactPage.messageLabel}</label>
                  <textarea name="message" value={form.message} onChange={handleChange} placeholder={t.contactPage.howCanWeHelp} rows={5} className={inputClass} />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <button type="submit" className="w-full px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark transition-colors duration-300">{t.contactPage.sendMessage}</button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <section className="h-[350px]">
        <iframe title="La Petite Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.5!2d11.2502!3d43.7711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ2JzE2LjAiTiAxMcKwMTUnMDAuNyJF!5e0!3m2!1sen!2sit!4v1" width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </section>
    </main>
  );
};

export default ContactPage;
