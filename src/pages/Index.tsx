import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import heroImg from "@/assets/new-hero.jpg";
import foodImg from "@/assets/518744326_18350509651092097_602565288484619036_n.jpeg";
import cocktailImg from "@/assets/527392386_18352222912092097_6700914939774869081_n.jpg";
import locationImg from "@/assets/LaPetiteFirenze-980x1470.jpg";
import SectionHeading from "@/components/SectionHeading";
import InstagramSection from "@/components/InstagramSection";
import { useState } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import logo from "@/assets/logo-petite.png";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

const reviewers = [
  {
    name: "Sarah M.",
    avatar: "SM",
    date: "2 months ago",
    color: "bg-rose-600",
  },
  {
    name: "Marco R.",
    avatar: "MR",
    date: "3 weeks ago",
    color: "bg-blue-600",
  },
  {
    name: "Emily & James",
    avatar: "EJ",
    date: "1 month ago",
    color: "bg-emerald-600",
  },
  {
    name: "Giulia T.",
    avatar: "GT",
    date: "2 weeks ago",
    color: "bg-amber-600",
  },
];

const Index = () => {
  const [email, setEmail] = useState("");
  const { t } = useLanguage();

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      alert(t.home.newsletterThank);
      setEmail("");
    }
  };

  const testimonials = [
    t.home.testimonial1,
    t.home.testimonial2,
    t.home.testimonial3,
    t.home.testimonial4,
  ];

  const features = [
    {
      img: foodImg,
      title: t.home.featureRestaurantTitle,
      desc: t.home.featureRestaurantDesc,
      link: "/menu",
      cta: t.home.featureRestaurantCta,
    },
    {
      img: cocktailImg,
      title: t.home.featureCocktailTitle,
      desc: t.home.featureCocktailDesc,
      link: "/cocktails",
      cta: t.home.featureCocktailCta,
    },
    {
      img: locationImg,
      title: t.home.featureLocationTitle,
      desc: t.home.featureLocationDesc,
      link: "/about",
      cta: t.home.featureLocationCta,
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="La Petite restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-secondary/70" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative z-10 text-center px-6 max-w-3xl"
        >
          <img
            src={logo}
            alt="La Petite Logo"
            className="h-20 md:h-28 mx-auto mb-8 drop-shadow-2xl"
          />
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-6">
            {t.home.heroSubtitle}
          </p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-secondary-foreground mb-6 leading-tight">
            {t.home.heroTitle}
          </h1>
          <p className="text-secondary-foreground/70 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            {t.home.heroDesc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservations"
              className="px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark transition-colors duration-300"
            >
              {t.home.makeReservation}
            </Link>
            <Link
              to="/menu"
              className="px-8 py-4 border border-secondary-foreground/30 text-secondary-foreground text-xs tracking-widest uppercase font-bold hover:border-primary hover:text-primary transition-colors duration-300"
            >
              {t.home.viewMenu}
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
              {t.home.introSubtitle}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              {t.home.introTitle}
            </h2>
            <div className="gold-divider mb-8" />
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
              {t.home.introDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Features */}
      <section className="section-padding bg-cream-dark">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group"
            >
              <div className="overflow-hidden mb-6">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {item.desc}
              </p>
              <Link
                to={item.link}
                className="inline-flex items-center gap-2 text-primary text-xs tracking-widest uppercase font-bold hover:gap-3 transition-all duration-300"
              >
                {item.cta} <ArrowRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Instagram Section */}
      <InstagramSection />

      {/* Testimonials — Google Reviews Style */}
      <section className="section-padding bg-secondary">
        <SectionHeading
          subtitle={t.home.testimonialsSubtitle}
          title={t.home.testimonialsTitle}
          description={t.home.testimonialsDesc}
          light
        />
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 md:p-8 rounded-lg border border-secondary-foreground/10 hover:border-primary/30 transition-colors duration-300"
            >
              {/* Header: Avatar + Name + Rating */}
              <div className="flex items-start gap-4 mb-4">
                <div
                  className={`w-10 h-10 rounded-full ${reviewers[i].color} flex items-center justify-center text-white text-sm font-bold shrink-0`}
                >
                  {reviewers[i].avatar}
                </div>
                <div className="flex-1">
                  <p className="text-secondary-foreground text-sm font-bold">
                    {reviewers[i].name}
                  </p>
                  <p className="text-secondary-foreground/40 text-xs">
                    {reviewers[i].date}
                  </p>
                </div>
                {/* Google "G" icon */}
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold bg-gradient-to-br from-blue-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    G
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                "{text}"
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-cream-dark">
        <div className="max-w-xl mx-auto text-center">
          <motion.div {...fadeUp}>
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
              {t.home.newsletterSubtitle}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              {t.home.newsletterTitle}
            </h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground mb-8">
              {t.home.newsletterDesc}
            </p>
            <form
              onSubmit={handleNewsletter}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.home.newsletterPlaceholder}
                required
                className="flex-1 px-4 py-3 bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark transition-colors duration-300"
              >
                {t.home.newsletterSubmit}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
