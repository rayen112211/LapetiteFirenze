import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "@/components/SectionHeading";

import ig1 from "@/assets/518744326_18350509651092097_602565288484619036_n.jpeg";
import ig2 from "@/assets/527392386_18352222912092097_6700914939774869081_n.jpg";
import ig3 from "@/assets/581082985_18367311322092097_567913254844100571_n.jpg";
import ig4 from "@/assets/586669253_18370146847092097_473887814758273758_n.jpg";
import ig5 from "@/assets/588347732_18369141883092097_4731822622620403623_n.jpg";
import ig6 from "@/assets/638326120_18381234280092097_422838019269367709_n.jpeg";

const photos = [ig1, ig2, ig3, ig4, ig5, ig6];

const InstagramSection = () => {
  const { t } = useLanguage();

  return (
    <section className="section-padding bg-background">
      <SectionHeading
        subtitle="@lapetitefirenze"
        title={t.home.instagramTitle}
        description={t.home.instagramDesc}
      />
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12">
        {photos.map((src, i) => (
          <motion.a
            key={i}
            href="https://www.instagram.com/lapetitefirenze/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative aspect-square overflow-hidden bg-muted"
          >
            <img
              src={src}
              alt={`La Petite Instagram ${i + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
              <Instagram
                size={32}
                className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 drop-shadow-lg"
              />
            </div>
          </motion.a>
        ))}
      </div>
      <div className="text-center">
        <a
          href="https://www.instagram.com/lapetitefirenze/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white text-xs tracking-widest uppercase font-bold hover:opacity-90 transition-opacity duration-300 rounded-sm"
        >
          <Instagram size={18} />
          {t.home.instagramCta} @lapetitefirenze
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
