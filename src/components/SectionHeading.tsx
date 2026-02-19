import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-12 lg:mb-16"
  >
    {subtitle && (
      <p className={`text-xs tracking-[0.3em] uppercase mb-3 ${light ? "text-primary" : "text-primary"}`}>
        {subtitle}
      </p>
    )}
    <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl mb-4 ${light ? "text-secondary-foreground" : "text-foreground"}`}>
      {title}
    </h2>
    <div className="gold-divider mb-6" />
    {description && (
      <p className={`max-w-2xl mx-auto leading-relaxed ${light ? "text-secondary-foreground/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
