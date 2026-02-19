import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import foodImg from "@/assets/cibo2.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

type MenuItem = { name: string; desc: string; price: string };
type MenuSection = { title: string; titleEn: string; items: MenuItem[] };

const menu: MenuSection[] = [
  {
    title: "Antipasti",
    titleEn: "Starters",
    items: [
      { name: "Acciughe del Cantabrico", desc: "Con pane tostato e burro / Anchovies from Cantabrico with toasted bread and butter", price: "€11" },
      { name: "Polpette di Lampredotto", desc: "Polpette fritte di lampredotto e salsa verde / Fried lampredotto meatballs and green sauce", price: "€12" },
      { name: "Coccoli con Prosciutto e Burrata", desc: "Coccoli artigianali con prosciutto crudo DOP e cuore di burrata / Fried pizza dough with ham and stracciatella cheese", price: "€8 / €14" },
      { name: "Tagliere dello Chef", desc: "Selezione di salumi, formaggi e crostini misti / Selection of cold cuts, cheese and crostini", price: "€14 / €24" },
      { name: "Carpaccio di Black Angus", desc: "Con rucola e scaglie di parmigiano / Beef with arugula and parmesan slices", price: "€22" },
      { name: "Patanegra", desc: "Con pan tostato e burro / Patanegra ham with toasted bread and butter", price: "€18" },
      { name: "Foie Gras Scottato", desc: "Su pane artigianale con riduzione di agrumi / Seared foie gras on artisan bread with citrus reduction", price: "€22" },
      { name: "Carpaccio di Carciofi", desc: "Con scaglie di parmigiano / Artichoke carpaccio with parmesan cheese", price: "€15" },
      { name: "Bruschette Miste", desc: "Pomodoro, fegatino, nduja e stracciatella / Mix of bruschette (tomato, paté, nduja with stracciatella)", price: "€11" },
      { name: "Focaccia Calda", desc: "Con olio EVO e rosmarino / Warm focaccia with extra virgin olive oil and rosemary", price: "€5" },
    ],
  },
  {
    title: "Tartare",
    titleEn: "Our Tartare",
    items: [
      { name: "Tartare di Barbabietola", desc: "Con riduzione di soia, stracciatella e pomodorino secco / Beetroot tartare with soy sauce, stracciatella and dried tomatoes", price: "€14" },
      { name: "Tartare di Fassona con Burrata", desc: "Con cuore di burrata e pomodorini secchi / Steak tartare with burrata and dried tomatoes", price: "€17" },
      { name: "Tartare di Fassona con Tartufo", desc: "Con uova di quaglia e tartufo / Steak tartare with quail egg and truffle", price: "€18" },
    ],
  },
  {
    title: "Crostoni",
    titleEn: "Our Croutons",
    items: [
      { name: "Avocado e Uovo", desc: "Crostone di pane con avocado e uovo CBT / Toasted bread with avocado and egg", price: "€10" },
      { name: "Moscardini", desc: "Crostone di pane con moscardini CBT / Toasted bread with baby octopus", price: "€17" },
      { name: "Tartare e Burrata", desc: "Crostone con tartare di manzo e cuore di burrata / Toasted bread with beef tartar and burrata cheese", price: "€17" },
      { name: "Peposo", desc: "Crostone con peposo / Toasted bread with peposo (beef stew)", price: "€14" },
      { name: "Burrata e Tartufo", desc: "Crostone con pasta d'aglio, cuore di burrata e tartufo / Toasted bread with garlic cream, burrata cheese and truffle", price: "€16" },
      { name: "Lampredotto", desc: "Crostone con lampredotto e salsa verde / Toasted bread with lampredotto and green sauce", price: "€13" },
      { name: "Salmone Flambé", desc: "Con avocado e cipollotti caramellati, marinato al Campari / Campari-marinated flambé salmon, avocado and caramel onion", price: "€14" },
    ],
  },
  {
    title: "Pinse",
    titleEn: "Pizza",
    items: [
      { name: "Margherita", desc: "Pomodorini e mozzarella di bufala / Cherry tomato sauce and bufala mozzarella", price: "€13" },
      { name: "Mortadella e Pistacchio", desc: "Mortadella, mozzarella e pistacchio / Mortadella, mozzarella cheese and pistachio", price: "€17" },
      { name: "Patanegra", desc: "Mozzarella e prosciutto Patanegra / Mozzarella, Patanegra ham", price: "€20" },
      { name: "Nduja e Tartufo", desc: "Mozzarella, stracciatella tartufata e nduja / Mozzarella, stracciatella cheese with truffle, nduja", price: "€18" },
    ],
  },
  {
    title: "I Nostri Primi",
    titleEn: "First Courses",
    items: [
      { name: "Tagliatelle al Ragù Toscano", desc: "Tagliatelle pasta with Tuscan meat sauce", price: "€15" },
      { name: "Taglierini Ciliegino e Stracciatella", desc: "Taglierini fatti in casa con pomodorini ciliegino e stracciatella / Homemade taglierini with cherry tomatoes and stracciatella cheese", price: "€14" },
      { name: "Taglierini ai Gamberi", desc: "Nella loro bisque e granella di pistacchio / Taglierini with shrimps and pistachio", price: "€19" },
      { name: "Gnocchi alla Barbabietola", desc: "Con scaglie di pecorino e cipolla croccante / Beetroot gnocchi, pecorino flakes and crispy onion", price: "€16" },
      { name: "Mezze Maniche ai Moscardini", desc: "Mezze maniche pasta with baby octopus sauce", price: "€20" },
      { name: "Tortellacci Gorgonzola e Tartufo", desc: "Ravioli con crema al gorgonzola e tartufo / Ravioli with gorgonzola cream cheese and truffle", price: "€22" },
      { name: "Taglierino Limone e Salmone", desc: "Al profumo di limone, salmone e zucchine julienne / Fresh taglierini with lemon cream, salmon and zucchini julienne", price: "€17" },
      { name: "Risotto ai Broccoli", desc: "Con scaglie di pecorino e bacon croccante / Risotto with broccoli cream, pecorino cheese and bacon", price: "€17" },
      { name: "Zuppa del Contadino", desc: "Zuppa di verdure / Vegetable soup", price: "€12" },
    ],
  },
  {
    title: "Piatti Principali",
    titleEn: "Main Courses",
    items: [
      { name: "Peposo dell'Impruneta", desc: "Con purè di patate / Black pepper beef stew with potato purée", price: "€18" },
      { name: "Caesar Salad con Pollo", desc: "Chicken Caesar salad", price: "€15" },
      { name: "Caramella di Pollo", desc: "Con bacon, pecorino, pomodori secchi e patate arrosto / Chicken rolls with bacon, pecorino and dried tomatoes", price: "€20" },
      { name: "Melanzane alla Parmigiana", desc: "Eggplant parmigiana", price: "€18" },
      { name: "Ribs di Suino", desc: "CBT in salsa barbecue con patate arrosto / Ribs in BBQ sauce with roasted potatoes", price: "€20" },
      { name: "Tagliata di Pollo al Gorgonzola", desc: "Su letto di rucola / Chicken breast with gorgonzola sauce and arugula", price: "€17" },
      { name: "Bistecca di Fassona", desc: "Porzione singola con patate arrosto / Fassona steak for 1 person with roasted potatoes", price: "€35" },
      { name: "Bistecca di Fassona Doppia", desc: "Minimo 1,2 kg / Florentine-style steak for 2", price: "€6/100g" },
      { name: "Filetto alla Griglia", desc: "Con contorno a scelta (spinaci o patate) / Grilled fillet steak with side dish", price: "€30" },
      { name: "Filetto al Tartufo", desc: "Con contorno a scelta (spinaci o patate) / Fillet steak with truffle and side dish", price: "€36" },
      { name: "Filetto al Vin Santo", desc: "Con contorno a scelta (spinaci o patate) / Fillet steak with Vin Santo and side dish", price: "€34" },
      { name: "Milanese di Vitella", desc: "Con patate fritte / Veal schnitzel with fries", price: "€25" },
      { name: "Pancia di Maiale", desc: "Con cipolla caramellata su letto di purè / Pork belly with caramelized onion on mashed potatoes", price: "€19" },
      { name: "Polpo Croccante", desc: "CBT con purea di patate / CBT octopus with mashed potatoes", price: "€26" },
      { name: "Hamburger Gorgonzola e Tartufo", desc: "Fassona con buns artigianale, crema di gorgonzola, tartufo e patatine / Steak hamburger with gorgonzola, truffle and fries", price: "€20" },
      { name: "Hamburger Bacon e Cheddar", desc: "Fassona con buns artigianale, bacon, cheddar e patatine / Steak hamburger with bacon, cheddar and fries", price: "€16" },
      { name: "Club Sandwich", desc: "Con patate fritte (pollo, bacon, uova, maionese) / Club sandwich and fries (chicken, bacon, egg, mayo)", price: "€15" },
    ],
  },
  {
    title: "Contorni",
    titleEn: "Side Dishes",
    items: [
      { name: "Insalata Verde o Mista", desc: "Green salad or mixed", price: "€7" },
      { name: "Spinaci Saltati", desc: "Con aglio / Spinach with garlic", price: "€7" },
      { name: "Patate", desc: "Arrosto, fritte o purè / Roasted, fried or mashed", price: "€7" },
      { name: "Broccoli Saltati", desc: "Aglio e olio / Sautéed broccoli with olive oil and garlic", price: "€10" },
      { name: "Fagioli all'Uccelletto", desc: "Con salsa di pomodoro e rosmarino / Beans with tomato sauce and rosemary", price: "€10" },
    ],
  },
  {
    title: "Dessert",
    titleEn: "Dessert",
    items: [
      { name: "Cheesecake", desc: "Ai frutti di bosco, cioccolato, caramello o pistacchio / With mix berries, chocolate, caramel or pistachio", price: "€9" },
      { name: "Panna Cotta", desc: "Frutti di bosco, cioccolato o caramello / With wild berries, chocolate sauce or caramel", price: "€8" },
      { name: "Tiramisù \"La Petite\"", desc: "Il nostro tiramisù della casa / Our signature tiramisù", price: "€8" },
      { name: "Crème Brûlée", desc: "Crème brûlée classica / Classic crème brûlée", price: "€7,50" },
      { name: "Dolce di Mele", desc: "Con crema di vaniglia / Apple pie with vanilla cream", price: "€8" },
      { name: "Cantucci e Vin Santo", desc: "Cantucci di Prato con Vin Santo / Cantucci cookies with Vin Santo sweet wine", price: "€10" },
      { name: "Carrot Cake", desc: "La nostra carrot cake / Our carrot cake", price: "€7,50" },
    ],
  },
];

const MenuPage = () => {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const toggleSection = (title: string) => {
    setActiveSection(activeSection === title ? null : title);
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative h-[35vh] min-h-[250px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={foodImg} alt="La Petite cuisine" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-secondary/75" />
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-center">
          <p className="text-primary text-xs tracking-[0.4em] uppercase mb-3">{t.menuPage.subtitle}</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-secondary-foreground">{t.menuPage.title}</h1>
        </motion.div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-background">
        <div className="max-w-3xl mx-auto text-center mb-4">
          <p className="text-muted-foreground text-lg leading-relaxed">{t.menuPage.intro}</p>
          <p className="text-muted-foreground/60 text-sm mt-4">Coperto / Cover charge: €2,00</p>
        </div>

        {/* Quick Nav */}
        <div className="max-w-3xl mx-auto mb-12 flex flex-wrap justify-center gap-2">
          {menu.map((section) => (
            <button
              key={section.title}
              onClick={() => {
                setActiveSection(section.title);
                document.getElementById(section.title)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-200"
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Menu Sections */}
        <div className="max-w-3xl mx-auto space-y-16">
          {menu.map((section, si) => (
            <motion.div
              key={section.title}
              id={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: si * 0.05 }}
            >
              <div className="text-center mb-8">
                <h2 className="font-heading text-2xl md:text-3xl text-foreground">{section.title}</h2>
                <p className="text-muted-foreground/50 text-xs tracking-widest uppercase mt-1">{section.titleEn}</p>
                <div className="gold-divider mt-4" />
              </div>
              <div className="space-y-5">
                {section.items.map((item) => (
                  <div key={item.name} className="flex justify-between gap-4 group">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-heading text-lg text-foreground group-hover:text-primary transition-colors duration-200">{item.name}</h3>
                      <p className="text-muted-foreground text-sm mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                    <span className="text-primary font-heading text-lg shrink-0 pt-0.5">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-secondary text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h2 className="font-heading text-3xl md:text-4xl text-secondary-foreground mb-4">{t.menuPage.readyTitle}</h2>
          <div className="gold-divider mb-6" />
          <p className="text-secondary-foreground/70 mb-8 max-w-md mx-auto">{t.menuPage.readyDesc}</p>
          <Link to="/reservations" className="inline-block px-8 py-4 bg-primary text-primary-foreground text-xs tracking-widest uppercase font-bold hover:bg-gold-dark transition-colors duration-300">{t.nav.makeReservation}</Link>
        </motion.div>
      </section>
    </main>
  );
};

export default MenuPage;
