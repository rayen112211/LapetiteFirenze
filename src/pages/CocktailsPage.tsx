import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import cocktailImg from "@/assets/cocktail1.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

type CocktailItem = { name: string; desc: string; price: string; vol?: string };
type CocktailSection = { title: string; subtitle?: string; items: CocktailItem[] };

const cocktails: CocktailSection[] = [
  {
    title: "Signature",
    subtitle: "Le nostre creazioni / Our creations",
    items: [
      { name: "Negroni Solera 4.0", desc: "Fusetti al cioccolato, bitter Martini, bitter chinato, vermouth Ruffino, gin Cabraboc con infusione ad ultrasuoni al caffè", price: "€12", vol: "25.6%" },
      { name: "Hazelnut Fashioned", desc: "Rum Diplomatico Mantuano, sciroppo di nocciola, liquore al tamarindo, bitter homemade, soluzione salina", price: "€12", vol: "30%" },
      { name: "iCloud", desc: "Gin Cabraboc, liquore al fico, fake lime, sciroppo al caramello salato, spuma di mela", price: "€10", vol: "24%" },
      { name: "Red Line", desc: "Altamura vodka, liquore lamponi Quaglia, Chartreuse verde, fake lime, zucchero, soda", price: "€10", vol: "17%" },
      { name: "Ginger Snapback", desc: "Liquore allo zenzero, whisky Monkey Shoulder, soda alla cannella, tè nero", price: "€12", vol: "16.5%" },
      { name: "Tommy's on Fire", desc: "Tequila, liquore Ancho Reyes verde, sciroppo pompelmo, succo di lime", price: "€12", vol: "22%" },
      { name: "The Winter is Coming", desc: "Peach Pedro, cordial alcolico di pere e cognac", price: "€11", vol: "23.3%" },
      { name: "Mediterranean Spritz", desc: "Venturo, Tanqueray 10, prosecco, soda", price: "€11", vol: "17.5%" },
    ],
  },
  {
    title: "Low Alcool",
    subtitle: "Basso contenuto alcolico / Low alcohol content",
    items: [
      { name: "Fake Kola", desc: "Jimmy gin low alcool, bitters alla kola, soluzione citrico, sciroppo di zucchero, soda", price: "€11", vol: "6.2%" },
      { name: "Fake Tea", desc: "Yerbito, limoncello ø, zucchero, fake lime, soda", price: "€11", vol: "6.7%" },
      { name: "Jimmy Tonic o Lemon", desc: "Jimmy gin low alcool, tonica o lemon", price: "€10", vol: "6.2%" },
    ],
  },
  {
    title: "Mocktail",
    subtitle: "Analcolici / Alcohol-free",
    items: [
      { name: "Spritz ø", desc: "Aperitivo rosso analcolico, splash di tonica, prosecco ø", price: "€8" },
      { name: "Spritz Limoncello ø", desc: "Limoncello ø, splash di tonica, prosecco ø", price: "€8" },
      { name: "Americano ø", desc: "Conviv rosso, San bitter rosso", price: "€8" },
      { name: "Il Conte Astemio", desc: "Tanqueray 0.0, Conviv rosso, San bitter rosso", price: "€9" },
      { name: "Vir-gin Tonic o Lemon", desc: "Tanqueray 0.0, top acqua tonica (o lemon)", price: "€8" },
      { name: "Tropical Sunset", desc: "Purea di passion fruit, succo di ananas, succo di lime, foglie di menta, Ginger Ale Organics", price: "€8" },
      { name: "Sweet Island", desc: "Succo di lime, succo d'arancia, succo d'ananas, sciroppo d'orzata, foglie di menta", price: "€7" },
      { name: "Virgin Mule", desc: "Succo di lime, purea di pesca, Ginger Beer Organics", price: "€7" },
      { name: "Virgin Mojito", desc: "Purea di fragola, succo di lime, zucchero, foglie di menta, Ginger Ale Organics", price: "€7" },
      { name: "Virgin Mary", desc: "Succo di pomodoro, succo di limone, bloody mix", price: "€8" },
    ],
  },
  {
    title: "La Petite Classici",
    subtitle: "I grandi classici / The classics",
    items: [
      { name: "Negroni", desc: "Gin, bitter, vermouth", price: "€9" },
      { name: "Negroni Sbagliato", desc: "Vermouth, bitter, prosecco", price: "€8" },
      { name: "Negroni Bianco", desc: "Gin, vermouth bianco, bitter bianco", price: "€10" },
      { name: "Old Fashioned", desc: "Whisky, zucchero, angostura", price: "€10" },
      { name: "Espresso Martini", desc: "Vodka, Kahlúa, caffè espresso", price: "€9" },
      { name: "Manhattan", desc: "Whiskey rye, vermouth rosso, angostura", price: "€9" },
      { name: "Boulevardier", desc: "Whisky, bitter, vermouth rosso", price: "€9" },
      { name: "Sazerac", desc: "Cognac o rye whisky, Peychaud's bitter, assenzio, zucchero", price: "€10" },
      { name: "Last Word", desc: "Gin, green chartreuse, maraschino, succo di limone", price: "€12" },
      { name: "Suffering Bastard", desc: "Gin, cognac, lime, angostura bitter, sciroppo di zucchero, ginger ale", price: "€12" },
      { name: "Cocktail Martini", desc: "Gin o vodka, vermouth dry", price: "€8" },
      { name: "Dirty Martini", desc: "Vodka o gin, salamoia di oliva, vermouth dry", price: "€8" },
      { name: "Vesper Martini", desc: "Vodka, gin, Lillet Blanc", price: "€9" },
      { name: "Margarita", desc: "Tequila, triple sec, succo di lime", price: "€9" },
      { name: "Spicy Margarita", desc: "Tequila, liquore al peperoncino, succo di lime", price: "€10" },
      { name: "Tommy's Margarita", desc: "Tequila, sciroppo di agave, succo di lime", price: "€9" },
      { name: "Bloody Mary", desc: "Succo pomodoro, vodka, succo limone, tabasco, worcestershire, sale, pepe", price: "€9" },
      { name: "Mai-Tai", desc: "Rum speziato, triple sec, succo di lime, sciroppo di orzata, angostura", price: "€9" },
      { name: "Clover Club", desc: "Gin, sciroppo di lampone, succo di limone", price: "€9" },
      { name: "Aviation", desc: "Gin, liquore alla violetta, sciroppo di lavanda, succo di lime", price: "€8" },
      { name: "Daiquiri", desc: "Rum bianco, succo di lime, zucchero", price: "€8" },
      { name: "Dark 'n' Stormy", desc: "Rum Gosling, ginger beer", price: "€10" },
      { name: "Porn Star Martini", desc: "Vodka, purea di passion fruit, sciroppo alla vaniglia, succo di lime, shot di prosecco", price: "€10" },
      { name: "Sour", desc: "Pisco o whisky o vodka o gin, succo di limone, zucchero", price: "€9" },
      { name: "Fizz", desc: "Gin o vodka, zucchero, succo di limone, soda", price: "€9" },
      { name: "Stinger", desc: "Cognac, crème de menthe", price: "€10" },
    ],
  },
  {
    title: "Spritz & Aperitivi",
    subtitle: "L'ora dell'aperitivo / Aperitif hour",
    items: [
      { name: "Spritz", desc: "Aperol o Campari o limoncello o Hugo, prosecco, soda", price: "€8" },
      { name: "Spritz Superior", desc: "Cynar o Select o Sarti, prosecco, soda", price: "€9" },
      { name: "Spritz Hugo St. Germain", desc: "St. Germain, prosecco, soda", price: "€10" },
      { name: "MI-TO (Milano Torino)", desc: "Punt e Mes, bitter", price: "€8" },
      { name: "Americano", desc: "Vermouth, Campari, soda", price: "€8" },
      { name: "Bellini", desc: "Purea di pesca, Franciacorta", price: "€12" },
      { name: "Rossini", desc: "Purea di fragola, Franciacorta", price: "€12" },
    ],
  },
  {
    title: "Long Drinks",
    subtitle: "I nostri long drink / Our long drinks",
    items: [
      { name: "Moscow o London Mule", desc: "Vodka o gin, ginger beer, succo di lime", price: "€9" },
      { name: "Gin Tonic o Lemon", desc: "Gin, tonica o lemon soda", price: "€8" },
      { name: "Vodka Tonic o Lemon", desc: "Vodka, tonica o lemon soda", price: "€8" },
      { name: "Cuba Libre", desc: "Rum scuro, coca cola", price: "€8" },
    ],
  },
];

const CocktailsPage = () => {
  const { t } = useLanguage();

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={cocktailImg} alt="La Petite cocktails" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/75" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3">{t.cocktailsPage.subtitle}</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary-foreground">{t.cocktailsPage.title}</h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <p className="text-muted-foreground text-lg leading-relaxed">{t.cocktailsPage.intro}</p>
        </div>

        {/* Quick Nav */}
        <div className="max-w-3xl mx-auto mb-12 flex flex-wrap justify-center gap-2">
          {cocktails.map((section) => (
            <button
              key={section.title}
              onClick={() => document.getElementById(`cocktail-${section.title}`)?.scrollIntoView({ behavior: "smooth", block: "start" })}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Cocktail Sections */}
        <div className="max-w-3xl mx-auto space-y-16">
          {cocktails.map((section, si) => (
            <motion.div
              key={section.title}
              id={`cocktail-${section.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: si * 0.05 }}
            >
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">{section.title}</h2>
                {section.subtitle && <p className="text-muted-foreground/50 text-xs tracking-widest uppercase mt-1">{section.subtitle}</p>}
                <div className="gold-divider mt-4" />
              </div>
              <div className="space-y-5">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 group">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2">
                        <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors duration-200">{item.name}</h3>
                        {item.vol && <span className="text-[10px] tracking-wider text-muted-foreground/40 uppercase">Vol {item.vol}</span>}
                      </div>
                      <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-primary font-heading text-lg shrink-0 pt-0.5">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="max-w-3xl mx-auto mt-12 p-4 bg-muted/30 border border-border text-xs text-muted-foreground leading-relaxed">
          <p>Tutti i drink della famiglia dei sour e i drink straight up con emulsione non contengono albume — viene utilizzato il Better's Bitter, completamente vegano e senza controindicazioni allergiche.</p>
          <p className="mt-2 text-muted-foreground/60">All sour-family and straight-up drinks with emulsion do not contain egg white — Better's Bitter is used, completely vegan with no allergenic contraindications.</p>
          <p className="mt-2 text-muted-foreground/60">Per cocktail fuori menu rivolgersi allo staff. / For off-menu cocktails, please ask our staff.</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-3xl md:text-4xl text-secondary-foreground mb-4">{t.cocktailsPage.ctaTitle}</h2>
          <div className="gold-divider mb-6" />
          <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">{t.cocktailsPage.ctaDesc}</p>
          <Link to="/reservations" className="inline-block px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark transition-colors duration-300">{t.nav.makeReservation}</Link>
        </motion.div>
      </section>
    </main>
  );
};

export default CocktailsPage;
