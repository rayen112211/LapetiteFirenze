export type Language = "it" | "en" | "fr" | "es";

export const languages: { code: Language; label: string; flag: string }[] = [
  { code: "it", label: "IT", flag: "🇮🇹" },
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "es", label: "ES", flag: "🇪🇸" },
];

type TranslationKeys = {
  // Nav
  nav: {
    home: string;
    menu: string;
    cocktails: string;
    reservations: string;
    about: string;
    contact: string;
    reserve: string;
    makeReservation: string;
  };
  // Footer
  footer: {
    tagline: string;
    navigate: string;
    hours: string;
    contact: string;
    monThu: string;
    friSat: string;
    sunday: string;
    rights: string;
  };
  // Home
  home: {
    heroSubtitle: string;
    heroTitle: string;
    heroDesc: string;
    makeReservation: string;
    viewMenu: string;
    introSubtitle: string;
    introTitle: string;
    introDesc: string;
    featureRestaurantTitle: string;
    featureRestaurantDesc: string;
    featureRestaurantCta: string;
    featureCocktailTitle: string;
    featureCocktailDesc: string;
    featureCocktailCta: string;
    featureLocationTitle: string;
    featureLocationDesc: string;
    featureLocationCta: string;
    testimonialsSubtitle: string;
    testimonialsTitle: string;
    testimonialsDesc: string;
    testimonial1: string;
    testimonial2: string;
    testimonial3: string;
    testimonial4: string;
    instagramTitle: string;
    instagramDesc: string;
    instagramCta: string;
    newsletterSubtitle: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterSubmit: string;
    newsletterThank: string;
  };
  // Menu
  menuPage: {
    subtitle: string;
    title: string;
    intro: string;
    readyTitle: string;
    readyDesc: string;
    // Dish descriptions
    antipasti: string;
    primiPiatti: string;
    secondiPiatti: string;
    dolci: string;
    burrata: string;
    carpaccio: string;
    crostini: string;
    polpo: string;
    pici: string;
    risotto: string;
    pappardelle: string;
    ravioli: string;
    bistecca: string;
    branzino: string;
    agnello: string;
    tagliata: string;
    tiramisu: string;
    pannaCotta: string;
    cantucci: string;
  };
  // Cocktails
  cocktailsPage: {
    subtitle: string;
    title: string;
    intro: string;
    signatureTitle: string;
    classicTitle: string;
    nonAlcTitle: string;
    ctaTitle: string;
    ctaDesc: string;
    firenzeSour: string;
    petiteNegroni: string;
    mediciSpritz: string;
    ponteVecchio: string;
    negroni: string;
    aperolSpritz: string;
    espressoMartini: string;
    amarettoSour: string;
    gardenSpritz: string;
    tuscanSunset: string;
    virginEspresso: string;
  };
  // Reservations
  reservationsPage: {
    heroSubtitle: string;
    heroTitle: string;
    intro: string;
    whatsappUs: string;
    dateLabel: string;
    timeLabel: string;
    selectTime: string;
    partySize: string;
    numberOfGuests: string;
    guest: string;
    guests: string;
    fullName: string;
    yourName: string;
    phone: string;
    email: string;
    specialRequests: string;
    specialRequestsPlaceholder: string;
    confirm: string;
    confirmedTitle: string;
    thankYou: string;
    receivedReservation: string;
    guestWord: string;
    on: string;
    at: string;
    confirmationSent: string;
    questions: string;
  };
  // About
  aboutPage: {
    heroSubtitle: string;
    heroTitle: string;
    philosophySubtitle: string;
    philosophyTitle: string;
    philosophyP1: string;
    philosophyP2: string;
    philosophyP3: string;
    locationTitle: string;
    hoursTitle: string;
    contactTitle: string;
    getDirections: string;
    callNow: string;
  };
  // Contact
  contactPage: {
    heroSubtitle: string;
    heroTitle: string;
    formTitle: string;
    formDesc: string;
    nameLabel: string;
    emailLabel: string;
    subjectLabel: string;
    messageLabel: string;
    selectSubject: string;
    generalInquiry: string;
    reservationQuestion: string;
    privateEvent: string;
    feedback: string;
    other: string;
    sendMessage: string;
    messageSent: string;
    messageSentDesc: string;
    openingHours: string;
    yourName: string;
    yourEmail: string;
    howCanWeHelp: string;
  };
  // Validation
  validation: {
    nameRequired: string;
    emailInvalid: string;
    phoneRequired: string;
    dateRequired: string;
    timeRequired: string;
    partySizeRequired: string;
    subjectRequired: string;
    messageRequired: string;
  };
};

export const translations: Record<Language, TranslationKeys> = {
  it: {
    nav: {
      home: "Home",
      menu: "Menu",
      cocktails: "Cocktail",
      reservations: "Prenotazioni",
      about: "Chi Siamo",
      contact: "Contatti",
      reserve: "Prenota",
      makeReservation: "Prenota un Tavolo",
    },
    footer: {
      tagline: "Ristorante italiano e cocktail bar nel cuore di Firenze.",
      navigate: "Naviga",
      hours: "Orari",
      contact: "Contatti",
      monThu: "Lunedì – Giovedì",
      friSat: "Venerdì – Sabato",
      sunday: "Domenica",
      rights: "Tutti i diritti riservati.",
    },
    home: {
      heroSubtitle: "Il Meglio di Firenze",
      heroTitle: "Dove la Tradizione Italiana Incontra l'Eleganza Moderna",
      heroDesc: "Alta cucina e cocktail d'autore nel cuore del centro storico di Firenze.",
      makeReservation: "Prenota un Tavolo",
      viewMenu: "Vedi il Menu",
      introSubtitle: "Benvenuti",
      introTitle: "Una Doppia Esperienza",
      introDesc: "La Petite è più di un ristorante — è un viaggio attraverso i sapori più raffinati della Toscana, accompagnati da cocktail sapientemente preparati. Di giorno, un'esperienza culinaria italiana raffinata. Di sera, un cocktail bar sofisticato dove i classici incontrano la creatività.",
      featureRestaurantTitle: "Il Ristorante",
      featureRestaurantDesc: "Ingredienti locali trasformati in piatti indimenticabili, celebrando la tradizione toscana con un tocco moderno.",
      featureRestaurantCta: "Vedi il Menu",
      featureCocktailTitle: "Il Cocktail Bar",
      featureCocktailDesc: "Dalle nostre creazioni d'autore ai grandi classici, ogni drink è preparato con precisione e passione.",
      featureCocktailCta: "Vedi i Cocktail",
      featureLocationTitle: "La Posizione",
      featureLocationDesc: "Nel cuore del centro storico di Firenze, in Via Pellicceria, a pochi passi da Piazza della Repubblica.",
      featureLocationCta: "Scopri di Più",
      testimonialsSubtitle: "I Nostri Ospiti",
      testimonialsTitle: "Parole che ci Scaldano",
      testimonialsDesc: "Cosa dicono i nostri ospiti della loro esperienza a La Petite.",
      testimonial1: "Una serata indimenticabile. La pasta era diversa da qualsiasi cosa abbia mai provato — si sente davvero l'amore per gli ingredienti locali.",
      testimonial2: "Il cocktail bar è un gioiello nascosto. Drink d'autore che raccontano una storia, in un ambiente che fa tornare indietro nel tempo.",
      testimonial3: "Dall'accoglienza calorosa all'ultimo sorso di Amarone, ogni dettaglio a La Petite è perfezione. Da visitare assolutamente a Firenze.",
      testimonial4: "La schiacciata e i cocktail sono semplicemente perfetti. L'atmosfera intima e il servizio impeccabile rendono ogni visita speciale. Torneremo sicuramente!",
      instagramTitle: "Segui il Nostro Viaggio",
      instagramDesc: "Resta connesso con noi su Instagram per gli ultimi piatti, cocktail e momenti dietro le quinte.",
      instagramCta: "Seguici su Instagram",
      newsletterSubtitle: "Resta in Contatto",
      newsletterTitle: "Unisciti alla Nostra Community",
      newsletterDesc: "Sii il primo a conoscere eventi speciali, nuove aggiunte al menu e offerte esclusive.",
      newsletterPlaceholder: "Il tuo indirizzo email",
      newsletterSubmit: "Iscriviti",
      newsletterThank: "Grazie per esserti unito alla nostra community! Ti contatteremo presto.",
    },
    menuPage: {
      subtitle: "La Petite",
      title: "Il Menu",
      intro: "Ogni piatto de La Petite racconta una storia della Toscana — dalle colline del Chianti ai vivaci mercati di Firenze. Selezioniamo i migliori ingredienti locali, onorando la tradizione e abbracciando la creatività.",
      readyTitle: "Pronti a Cenare?",
      readyDesc: "Prenotate il vostro tavolo e lasciate che creiamo una serata indimenticabile per voi.",
      antipasti: "Antipasti",
      primiPiatti: "Primi Piatti",
      secondiPiatti: "Secondi Piatti",
      dolci: "Dolci",
      burrata: "Burrata cremosa con pomodori antichi, olio al basilico e aceto balsamico invecchiato",
      carpaccio: "Manzo Chianina affettato sottilmente con rucola, Parmigiano e olio al tartufo",
      crostini: "Tradizionale paté di fegatini toscano su pane tostato con capperi",
      polpo: "Polpo alla griglia con crema di patate, olive e paprika affumicata",
      pici: "Pici fatti a mano con sugo all'aglione, un classico toscano",
      risotto: "Riso Carnaroli con tartufo nero, crema di Parmigiano e burro al tartufo",
      pappardelle: "Pappardelle fresche con ragù di cinghiale a cottura lenta",
      ravioli: "Ravioli fatti in casa con burro alla salvia e pinoli tostati",
      bistecca: "T-bone di Chianina (1,2kg) alla griglia su legna di quercia, per due",
      branzino: "Branzino al forno con olive liguri, capperi e pomodorini",
      agnello: "Costolette d'agnello alla griglia con rosmarino, aglio e patate arrosto",
      tagliata: "Controfiletto di Chianina con rucola, pomodorini e Parmigiano",
      tiramisu: "Il nostro tiramisù con mascarpone, espresso e cacao",
      pannaCotta: "Panna cotta alla vaniglia con coulis di frutti di bosco di stagione",
      cantucci: "Tradizionali biscotti alle mandorle serviti con Vin Santo",
    },
    cocktailsPage: {
      subtitle: "La Petite Bar",
      title: "Cocktail",
      intro: "Il nostro bar celebra l'arte del cocktail — dalle nostre creazioni d'autore ispirate a Firenze, ai classici intramontabili preparati con i migliori spiriti e ingredienti freschi.",
      signatureTitle: "Creazioni d'Autore",
      classicTitle: "Cocktail Classici",
      nonAlcTitle: "Analcolici",
      ctaTitle: "Vieni al Bar",
      ctaDesc: "Passa a trovarci o prenota — saremo felici di prepararti qualcosa di speciale.",
      firenzeSour: "Gin toscano, limone Meyer, albume, sciroppo di miele e lavanda, Angostura",
      petiteNegroni: "Gin invecchiato in botte, Campari, vermut dolce, olio d'arancia — la nostra versione del classico",
      mediciSpritz: "Prosecco, aperitivo all'arancia rossa, fiori di sambuco, acqua frizzante",
      ponteVecchio: "Bourbon, amaretto, sciroppo di fichi, bitter alle noci, scorza d'arancia affumicata",
      negroni: "London dry gin, Campari, vermut dolce",
      aperolSpritz: "Prosecco, Aperol, acqua frizzante, fetta d'arancia",
      espressoMartini: "Vodka, Kahlúa, espresso fresco, vaniglia",
      amarettoSour: "Disaronno, succo di limone, albume, Angostura bitter",
      gardenSpritz: "Seedlip Garden, tonica al sambuco, cetriolo, menta",
      tuscanSunset: "Arancia rossa, frutto della passione, ginger beer, rosmarino",
      virginEspresso: "Espresso fresco, acqua tonica, sciroppo di vaniglia, twist d'arancia",
    },
    reservationsPage: {
      heroSubtitle: "Prenota il Tuo Tavolo",
      heroTitle: "Prenotazioni",
      intro: "Compila i dettagli qui sotto e confermeremo la tua prenotazione a breve. In alternativa, chiamaci al",
      whatsappUs: "scrivici su WhatsApp",
      dateLabel: "Data *",
      timeLabel: "Orario *",
      selectTime: "Seleziona un orario",
      partySize: "Numero di Ospiti *",
      numberOfGuests: "Numero di ospiti",
      guest: "ospite",
      guests: "ospiti",
      fullName: "Nome Completo *",
      yourName: "Il tuo nome",
      phone: "Telefono *",
      email: "Email *",
      specialRequests: "Richieste Speciali",
      specialRequestsPlaceholder: "Esigenze alimentari, celebrazioni, preferenze di posto...",
      confirm: "Conferma Prenotazione",
      confirmedTitle: "Prenotazione Confermata",
      thankYou: "Grazie",
      receivedReservation: "Abbiamo ricevuto la tua prenotazione per",
      guestWord: "ospite/i",
      on: "il",
      at: "alle",
      confirmationSent: "Una conferma sarà inviata a",
      questions: "Domande? Chiamaci al",
    },
    aboutPage: {
      heroSubtitle: "La Nostra Storia",
      heroTitle: "Chi Siamo",
      philosophySubtitle: "La Nostra Filosofia",
      philosophyTitle: "Una Passione per l'Autentica Cucina Italiana",
      philosophyP1: "Nata da un profondo amore per la cucina toscana e l'arte dell'ospitalità, La Petite unisce i migliori ingredienti locali con ricette tramandate di generazione in generazione.",
      philosophyP2: "La nostra cucina lavora fianco a fianco con agricoltori locali, pescatori e produttori artigianali — perché crediamo che il grande cibo inizi con grandi ingredienti. Ogni piatto è una celebrazione della terra e del mare che ci circonda.",
      philosophyP3: "Di sera, il nostro cocktail bar trasforma lo spazio in un rifugio sofisticato dove maestri barman preparano drink ispirati alla ricca storia e allo spirito vibrante di Firenze.",
      locationTitle: "Posizione",
      hoursTitle: "Orari",
      contactTitle: "Contatti",
      getDirections: "Indicazioni",
      callNow: "Chiama Ora",
    },
    contactPage: {
      heroSubtitle: "Contattaci",
      heroTitle: "Contatti",
      formTitle: "Saremo Felici di Sentirti",
      formDesc: "Che tu abbia una domanda sul nostro menu, voglia organizzare un evento speciale, o semplicemente vuoi salutarci — non esitare a contattarci.",
      nameLabel: "Nome *",
      emailLabel: "Email *",
      subjectLabel: "Oggetto *",
      messageLabel: "Messaggio *",
      selectSubject: "Seleziona un oggetto",
      generalInquiry: "Richiesta Generale",
      reservationQuestion: "Domanda Prenotazione",
      privateEvent: "Evento Privato",
      feedback: "Feedback",
      other: "Altro",
      sendMessage: "Invia Messaggio",
      messageSent: "Messaggio Inviato",
      messageSentDesc: "Grazie per averci contattato! Ti risponderemo il prima possibile.",
      openingHours: "Orari di Apertura",
      yourName: "Il tuo nome",
      yourEmail: "la-tua@email.com",
      howCanWeHelp: "Come possiamo aiutarti?",
    },
    validation: {
      nameRequired: "Il nome è obbligatorio",
      emailInvalid: "Email non valida",
      phoneRequired: "Il telefono è obbligatorio",
      dateRequired: "La data è obbligatoria",
      timeRequired: "L'orario è obbligatorio",
      partySizeRequired: "Il numero di ospiti è obbligatorio",
      subjectRequired: "L'oggetto è obbligatorio",
      messageRequired: "Il messaggio è obbligatorio",
    },
  },
  en: {
    nav: {
      home: "Home",
      menu: "Menu",
      cocktails: "Cocktails",
      reservations: "Reservations",
      about: "About",
      contact: "Contact",
      reserve: "Reserve",
      makeReservation: "Make a Reservation",
    },
    footer: {
      tagline: "Fine Italian dining & cocktail bar in the heart of Florence.",
      navigate: "Navigate",
      hours: "Hours",
      contact: "Contact",
      monThu: "Monday – Thursday",
      friSat: "Friday – Saturday",
      sunday: "Sunday",
      rights: "All rights reserved.",
    },
    home: {
      heroSubtitle: "Florence's Finest",
      heroTitle: "Where Italian Tradition Meets Modern Elegance",
      heroDesc: "Fine dining & signature cocktails in the heart of Florence's historic center.",
      makeReservation: "Make a Reservation",
      viewMenu: "View Menu",
      introSubtitle: "Benvenuti",
      introTitle: "A Dual Experience",
      introDesc: "La Petite is more than a restaurant — it's a journey through Tuscany's finest flavours, paired with artfully crafted cocktails. By day, a refined Italian dining experience. By evening, a sophisticated cocktail bar where classics meet creativity.",
      featureRestaurantTitle: "The Restaurant",
      featureRestaurantDesc: "Locally sourced ingredients transformed into unforgettable dishes, celebrating Tuscan tradition with a modern touch.",
      featureRestaurantCta: "View Menu",
      featureCocktailTitle: "The Cocktail Bar",
      featureCocktailDesc: "From our signature creations to timeless classics, each drink is crafted with precision and passion.",
      featureCocktailCta: "View Cocktails",
      featureLocationTitle: "The Location",
      featureLocationDesc: "Nestled in Florence's historic center on Via Pellicceria, steps from Piazza della Repubblica.",
      featureLocationCta: "Discover More",
      testimonialsSubtitle: "Our Guests",
      testimonialsTitle: "Words That Warm Us",
      testimonialsDesc: "What our guests say about their experience at La Petite.",
      testimonial1: "An unforgettable evening. The pasta was unlike anything I've ever tasted — you can truly feel the love for local ingredients.",
      testimonial2: "The cocktail bar is a hidden gem. Signature drinks that tell a story, in a setting that feels like stepping back in time.",
      testimonial3: "From the warm welcome to the last sip of Amarone, every detail at La Petite is perfection. A must-visit in Florence.",
      testimonial4: "The schiacciata and cocktails are simply perfect. The intimate atmosphere and impeccable service make every visit special. We'll definitely be back!",
      instagramTitle: "Follow Our Journey",
      instagramDesc: "Stay connected with us on Instagram for the latest dishes, cocktails, and behind-the-scenes moments.",
      instagramCta: "Follow Us on Instagram",
      newsletterSubtitle: "Stay in Touch",
      newsletterTitle: "Join Our Community",
      newsletterDesc: "Be the first to know about special events, new menu additions, and exclusive offers.",
      newsletterPlaceholder: "Your email address",
      newsletterSubmit: "Subscribe",
      newsletterThank: "Thank you for joining our community! We'll be in touch.",
    },
    menuPage: {
      subtitle: "La Petite",
      title: "The Menu",
      intro: "Every dish at La Petite tells a story of Tuscany — from the rolling hills of Chianti to the bustling markets of Florence. We source the finest local ingredients, honouring tradition while embracing creativity.",
      readyTitle: "Ready to Dine?",
      readyDesc: "Reserve your table and let us create an unforgettable evening for you.",
      antipasti: "Antipasti",
      primiPiatti: "Primi Piatti",
      secondiPiatti: "Secondi Piatti",
      dolci: "Dolci",
      burrata: "Creamy burrata with heirloom tomatoes, basil oil, and aged balsamic",
      carpaccio: "Thinly sliced Chianina beef with rocket, Parmigiano, and truffle oil",
      crostini: "Traditional Tuscan liver pâté on toasted bread with capers",
      polpo: "Chargrilled octopus with potato cream, olives, and smoked paprika",
      pici: "Hand-rolled pici pasta with garlic tomato sauce, a Tuscan classic",
      risotto: "Carnaroli rice with black truffle, Parmigiano cream, and truffle butter",
      pappardelle: "Fresh pappardelle with slow-cooked wild boar ragù",
      ravioli: "Housemade ravioli with sage brown butter and toasted pine nuts",
      bistecca: "Chianina T-bone steak (1.2kg) grilled over oak, for two",
      branzino: "Oven-roasted sea bass with Ligurian olives, capers, and cherry tomatoes",
      agnello: "Grilled lamb chops with rosemary, garlic, and roasted potatoes",
      tagliata: "Sliced Chianina sirloin with rocket, cherry tomatoes, and Parmigiano",
      tiramisu: "Our signature tiramisù with mascarpone, espresso, and cocoa",
      pannaCotta: "Vanilla bean panna cotta with seasonal berry coulis",
      cantucci: "Traditional almond biscotti served with Vin Santo dessert wine",
    },
    cocktailsPage: {
      subtitle: "La Petite Bar",
      title: "Cocktails",
      intro: "Our bar celebrates the art of the cocktail — from our signature creations inspired by Florence, to the timeless classics prepared with the finest spirits and fresh ingredients.",
      signatureTitle: "Signature Creations",
      classicTitle: "Classic Cocktails",
      nonAlcTitle: "Non-Alcoholic",
      ctaTitle: "Join Us at the Bar",
      ctaDesc: "Walk in or reserve a spot — we'd love to pour you something special.",
      firenzeSour: "Tuscan gin, Meyer lemon, egg white, lavender honey syrup, Angostura",
      petiteNegroni: "Barrel-aged gin, Campari, sweet vermouth, orange oil — our take on the classic",
      mediciSpritz: "Prosecco, blood orange aperitivo, elderflower, sparkling water",
      ponteVecchio: "Bourbon, amaretto, fig syrup, walnut bitters, smoked orange peel",
      negroni: "London dry gin, Campari, sweet vermouth",
      aperolSpritz: "Prosecco, Aperol, sparkling water, orange slice",
      espressoMartini: "Vodka, Kahlúa, fresh espresso, vanilla",
      amarettoSour: "Disaronno, lemon juice, egg white, Angostura bitters",
      gardenSpritz: "Seedlip Garden, elderflower tonic, cucumber, mint",
      tuscanSunset: "Blood orange, passion fruit, ginger beer, rosemary",
      virginEspresso: "Fresh espresso, tonic water, vanilla syrup, orange twist",
    },
    reservationsPage: {
      heroSubtitle: "Book Your Table",
      heroTitle: "Reservations",
      intro: "Fill in the details below and we'll confirm your reservation shortly. Alternatively, call us at",
      whatsappUs: "WhatsApp us",
      dateLabel: "Date *",
      timeLabel: "Time *",
      selectTime: "Select a time",
      partySize: "Party Size *",
      numberOfGuests: "Number of guests",
      guest: "guest",
      guests: "guests",
      fullName: "Full Name *",
      yourName: "Your name",
      phone: "Phone *",
      email: "Email *",
      specialRequests: "Special Requests",
      specialRequestsPlaceholder: "Dietary needs, celebrations, seating preferences...",
      confirm: "Confirm Reservation",
      confirmedTitle: "Reservation Confirmed",
      thankYou: "Thank you",
      receivedReservation: "We've received your reservation for",
      guestWord: "guest(s)",
      on: "on",
      at: "at",
      confirmationSent: "A confirmation will be sent to",
      questions: "Questions? Call us at",
    },
    aboutPage: {
      heroSubtitle: "Our Story",
      heroTitle: "About La Petite",
      philosophySubtitle: "Our Philosophy",
      philosophyTitle: "A Passion for Authentic Italian Dining",
      philosophyP1: "Born from a deep love for Tuscan cuisine and the art of hospitality, La Petite brings together the finest local ingredients with time-honoured recipes passed down through generations.",
      philosophyP2: "Our kitchen works hand-in-hand with local farmers, fishermen, and artisan producers — because we believe great food starts with great ingredients. Every dish is a celebration of the land and sea that surrounds us.",
      philosophyP3: "By evening, our cocktail bar transforms the space into a sophisticated haven where master mixologists craft drinks inspired by Florence's rich history and vibrant spirit.",
      locationTitle: "Location",
      hoursTitle: "Hours",
      contactTitle: "Contact",
      getDirections: "Get Directions",
      callNow: "Call Now",
    },
    contactPage: {
      heroSubtitle: "Get in Touch",
      heroTitle: "Contact Us",
      formTitle: "We'd Love to Hear From You",
      formDesc: "Whether you have a question about our menu, want to plan a special event, or simply want to say hello — don't hesitate to reach out.",
      nameLabel: "Name *",
      emailLabel: "Email *",
      subjectLabel: "Subject *",
      messageLabel: "Message *",
      selectSubject: "Select a subject",
      generalInquiry: "General Inquiry",
      reservationQuestion: "Reservation Question",
      privateEvent: "Private Event",
      feedback: "Feedback",
      other: "Other",
      sendMessage: "Send Message",
      messageSent: "Message Sent",
      messageSentDesc: "Thank you for reaching out! We'll get back to you as soon as possible.",
      openingHours: "Opening Hours",
      yourName: "Your name",
      yourEmail: "your@email.com",
      howCanWeHelp: "How can we help?",
    },
    validation: {
      nameRequired: "Name is required",
      emailInvalid: "Invalid email",
      phoneRequired: "Phone is required",
      dateRequired: "Date is required",
      timeRequired: "Time is required",
      partySizeRequired: "Party size is required",
      subjectRequired: "Subject is required",
      messageRequired: "Message is required",
    },
  },
  fr: {
    nav: {
      home: "Accueil",
      menu: "Menu",
      cocktails: "Cocktails",
      reservations: "Réservations",
      about: "À Propos",
      contact: "Contact",
      reserve: "Réserver",
      makeReservation: "Réserver une Table",
    },
    footer: {
      tagline: "Restaurant italien et bar à cocktails au cœur de Florence.",
      navigate: "Navigation",
      hours: "Horaires",
      contact: "Contact",
      monThu: "Lundi – Jeudi",
      friSat: "Vendredi – Samedi",
      sunday: "Dimanche",
      rights: "Tous droits réservés.",
    },
    home: {
      heroSubtitle: "Le Meilleur de Florence",
      heroTitle: "Là où la Tradition Italienne Rencontre l'Élégance Moderne",
      heroDesc: "Haute cuisine et cocktails signature au cœur du centre historique de Florence.",
      makeReservation: "Réserver une Table",
      viewMenu: "Voir le Menu",
      introSubtitle: "Benvenuti",
      introTitle: "Une Double Expérience",
      introDesc: "La Petite est plus qu'un restaurant — c'est un voyage à travers les saveurs les plus raffinées de la Toscane, accompagnées de cocktails savamment préparés. Le jour, une expérience culinaire italienne raffinée. Le soir, un bar à cocktails sophistiqué où classiques et créativité se rencontrent.",
      featureRestaurantTitle: "Le Restaurant",
      featureRestaurantDesc: "Des ingrédients locaux transformés en plats inoubliables, célébrant la tradition toscane avec une touche moderne.",
      featureRestaurantCta: "Voir le Menu",
      featureCocktailTitle: "Le Bar à Cocktails",
      featureCocktailDesc: "De nos créations signatures aux classiques intemporels, chaque boisson est préparée avec précision et passion.",
      featureCocktailCta: "Voir les Cocktails",
      featureLocationTitle: "L'Emplacement",
      featureLocationDesc: "Niché dans le centre historique de Florence, Via Pellicceria, à quelques pas de la Piazza della Repubblica.",
      featureLocationCta: "En Savoir Plus",
      testimonialsSubtitle: "Nos Invités",
      testimonialsTitle: "Des Mots qui Nous Réchauffent",
      testimonialsDesc: "Ce que nos invités disent de leur expérience à La Petite.",
      testimonial1: "Une soirée inoubliable. Les pâtes étaient incomparables — on ressent vraiment l'amour des ingrédients locaux.",
      testimonial2: "Le bar à cocktails est un joyau caché. Des cocktails signatures qui racontent une histoire, dans un cadre qui fait remonter le temps.",
      testimonial3: "De l'accueil chaleureux à la dernière gorgée d'Amarone, chaque détail à La Petite est perfection. Un incontournable à Florence.",
      testimonial4: "La schiacciata et les cocktails sont tout simplement parfaits. L'atmosphère intime et le service impeccable rendent chaque visite spéciale. Nous reviendrons!",
      instagramTitle: "Suivez Notre Voyage",
      instagramDesc: "Restez connectés avec nous sur Instagram pour les derniers plats, cocktails et moments en coulisses.",
      instagramCta: "Suivez-nous sur Instagram",
      newsletterSubtitle: "Restez en Contact",
      newsletterTitle: "Rejoignez Notre Communauté",
      newsletterDesc: "Soyez les premiers informés des événements spéciaux, nouveautés au menu et offres exclusives.",
      newsletterPlaceholder: "Votre adresse email",
      newsletterSubmit: "S'inscrire",
      newsletterThank: "Merci d'avoir rejoint notre communauté ! Nous vous contacterons bientôt.",
    },
    menuPage: {
      subtitle: "La Petite",
      title: "Le Menu",
      intro: "Chaque plat de La Petite raconte une histoire de Toscane — des collines du Chianti aux marchés animés de Florence. Nous sélectionnons les meilleurs ingrédients locaux, honorant la tradition tout en embrassant la créativité.",
      readyTitle: "Prêts à Dîner ?",
      readyDesc: "Réservez votre table et laissez-nous créer une soirée inoubliable pour vous.",
      antipasti: "Antipasti",
      primiPiatti: "Primi Piatti",
      secondiPiatti: "Secondi Piatti",
      dolci: "Dolci",
      burrata: "Burrata crémeuse avec tomates anciennes, huile de basilic et balsamique vieilli",
      carpaccio: "Bœuf Chianina finement tranché avec roquette, Parmigiano et huile de truffe",
      crostini: "Pâté de foie toscan traditionnel sur pain grillé avec câpres",
      polpo: "Poulpe grillé avec crème de pommes de terre, olives et paprika fumé",
      pici: "Pâtes pici roulées à la main avec sauce tomate à l'ail, un classique toscan",
      risotto: "Riz Carnaroli avec truffe noire, crème de Parmigiano et beurre de truffe",
      pappardelle: "Pappardelle fraîches avec ragù de sanglier mijoté",
      ravioli: "Ravioli maison avec beurre de sauge et pignons de pin grillés",
      bistecca: "T-bone de Chianina (1,2kg) grillé au chêne, pour deux",
      branzino: "Bar rôti au four avec olives ligures, câpres et tomates cerises",
      agnello: "Côtelettes d'agneau grillées avec romarin, ail et pommes de terre rôties",
      tagliata: "Faux-filet de Chianina tranché avec roquette, tomates cerises et Parmigiano",
      tiramisu: "Notre tiramisù signature avec mascarpone, espresso et cacao",
      pannaCotta: "Panna cotta à la vanille avec coulis de fruits rouges de saison",
      cantucci: "Traditionnels biscuits aux amandes servis avec Vin Santo",
    },
    cocktailsPage: {
      subtitle: "La Petite Bar",
      title: "Cocktails",
      intro: "Notre bar célèbre l'art du cocktail — de nos créations signatures inspirées par Florence, aux classiques intemporels préparés avec les meilleurs spiritueux et ingrédients frais.",
      signatureTitle: "Créations Signature",
      classicTitle: "Cocktails Classiques",
      nonAlcTitle: "Sans Alcool",
      ctaTitle: "Rejoignez-nous au Bar",
      ctaDesc: "Passez ou réservez — nous serons ravis de vous préparer quelque chose de spécial.",
      firenzeSour: "Gin toscan, citron Meyer, blanc d'œuf, sirop miel-lavande, Angostura",
      petiteNegroni: "Gin vieilli en fût, Campari, vermouth doux, huile d'orange — notre version du classique",
      mediciSpritz: "Prosecco, apéritif orange sanguine, fleur de sureau, eau pétillante",
      ponteVecchio: "Bourbon, amaretto, sirop de figue, amer aux noix, zeste d'orange fumé",
      negroni: "London dry gin, Campari, vermouth doux",
      aperolSpritz: "Prosecco, Aperol, eau pétillante, tranche d'orange",
      espressoMartini: "Vodka, Kahlúa, espresso frais, vanille",
      amarettoSour: "Disaronno, jus de citron, blanc d'œuf, Angostura bitters",
      gardenSpritz: "Seedlip Garden, tonic au sureau, concombre, menthe",
      tuscanSunset: "Orange sanguine, fruit de la passion, ginger beer, romarin",
      virginEspresso: "Espresso frais, eau tonique, sirop de vanille, twist d'orange",
    },
    reservationsPage: {
      heroSubtitle: "Réservez Votre Table",
      heroTitle: "Réservations",
      intro: "Remplissez les détails ci-dessous et nous confirmerons votre réservation sous peu. Sinon, appelez-nous au",
      whatsappUs: "WhatsApp",
      dateLabel: "Date *",
      timeLabel: "Heure *",
      selectTime: "Sélectionnez une heure",
      partySize: "Nombre de Convives *",
      numberOfGuests: "Nombre de convives",
      guest: "convive",
      guests: "convives",
      fullName: "Nom Complet *",
      yourName: "Votre nom",
      phone: "Téléphone *",
      email: "Email *",
      specialRequests: "Demandes Spéciales",
      specialRequestsPlaceholder: "Régimes alimentaires, célébrations, préférences de place...",
      confirm: "Confirmer la Réservation",
      confirmedTitle: "Réservation Confirmée",
      thankYou: "Merci",
      receivedReservation: "Nous avons reçu votre réservation pour",
      guestWord: "convive(s)",
      on: "le",
      at: "à",
      confirmationSent: "Une confirmation sera envoyée à",
      questions: "Questions ? Appelez-nous au",
    },
    aboutPage: {
      heroSubtitle: "Notre Histoire",
      heroTitle: "À Propos de La Petite",
      philosophySubtitle: "Notre Philosophie",
      philosophyTitle: "Une Passion pour l'Authentique Cuisine Italienne",
      philosophyP1: "Née d'un profond amour pour la cuisine toscane et l'art de l'hospitalité, La Petite réunit les meilleurs ingrédients locaux avec des recettes transmises de génération en génération.",
      philosophyP2: "Notre cuisine travaille main dans la main avec des agriculteurs locaux, des pêcheurs et des producteurs artisanaux — car nous croyons que la grande cuisine commence par de grands ingrédients.",
      philosophyP3: "Le soir, notre bar à cocktails transforme l'espace en un havre sophistiqué où des maîtres barmen préparent des boissons inspirées par la riche histoire et l'esprit vibrant de Florence.",
      locationTitle: "Emplacement",
      hoursTitle: "Horaires",
      contactTitle: "Contact",
      getDirections: "Itinéraire",
      callNow: "Appeler",
    },
    contactPage: {
      heroSubtitle: "Contactez-nous",
      heroTitle: "Contact",
      formTitle: "Nous Serions Ravis de Vous Entendre",
      formDesc: "Que vous ayez une question sur notre menu, souhaitiez organiser un événement spécial, ou vouliez simplement dire bonjour — n'hésitez pas à nous contacter.",
      nameLabel: "Nom *",
      emailLabel: "Email *",
      subjectLabel: "Objet *",
      messageLabel: "Message *",
      selectSubject: "Sélectionnez un objet",
      generalInquiry: "Demande Générale",
      reservationQuestion: "Question Réservation",
      privateEvent: "Événement Privé",
      feedback: "Avis",
      other: "Autre",
      sendMessage: "Envoyer le Message",
      messageSent: "Message Envoyé",
      messageSentDesc: "Merci de nous avoir contactés ! Nous vous répondrons dans les plus brefs délais.",
      openingHours: "Heures d'Ouverture",
      yourName: "Votre nom",
      yourEmail: "votre@email.com",
      howCanWeHelp: "Comment pouvons-nous vous aider ?",
    },
    validation: {
      nameRequired: "Le nom est obligatoire",
      emailInvalid: "Email invalide",
      phoneRequired: "Le téléphone est obligatoire",
      dateRequired: "La date est obligatoire",
      timeRequired: "L'heure est obligatoire",
      partySizeRequired: "Le nombre de convives est obligatoire",
      subjectRequired: "L'objet est obligatoire",
      messageRequired: "Le message est obligatoire",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      menu: "Menú",
      cocktails: "Cócteles",
      reservations: "Reservas",
      about: "Nosotros",
      contact: "Contacto",
      reserve: "Reservar",
      makeReservation: "Reservar Mesa",
    },
    footer: {
      tagline: "Restaurante italiano y bar de cócteles en el corazón de Florencia.",
      navigate: "Navegación",
      hours: "Horarios",
      contact: "Contacto",
      monThu: "Lunes – Jueves",
      friSat: "Viernes – Sábado",
      sunday: "Domingo",
      rights: "Todos los derechos reservados.",
    },
    home: {
      heroSubtitle: "Lo Mejor de Florencia",
      heroTitle: "Donde la Tradición Italiana se une a la Elegancia Moderna",
      heroDesc: "Alta cocina y cócteles de autor en el corazón del centro histórico de Florencia.",
      makeReservation: "Reservar Mesa",
      viewMenu: "Ver Menú",
      introSubtitle: "Benvenuti",
      introTitle: "Una Doble Experiencia",
      introDesc: "La Petite es más que un restaurante — es un viaje a través de los sabores más refinados de la Toscana, acompañados de cócteles magistralmente preparados. De día, una experiencia culinaria italiana refinada. De noche, un sofisticado bar de cócteles donde los clásicos encuentran la creatividad.",
      featureRestaurantTitle: "El Restaurante",
      featureRestaurantDesc: "Ingredientes locales transformados en platos inolvidables, celebrando la tradición toscana con un toque moderno.",
      featureRestaurantCta: "Ver Menú",
      featureCocktailTitle: "El Bar de Cócteles",
      featureCocktailDesc: "Desde nuestras creaciones de autor hasta los clásicos atemporales, cada bebida se prepara con precisión y pasión.",
      featureCocktailCta: "Ver Cócteles",
      featureLocationTitle: "La Ubicación",
      featureLocationDesc: "En el corazón del centro histórico de Florencia, en Via Pellicceria, a pocos pasos de la Piazza della Repubblica.",
      featureLocationCta: "Descubrir Más",
      testimonialsSubtitle: "Nuestros Huéspedes",
      testimonialsTitle: "Palabras que nos Calientan",
      testimonialsDesc: "Lo que dicen nuestros huéspedes sobre su experiencia en La Petite.",
      testimonial1: "Una velada inolvidable. La pasta era diferente a todo lo que había probado — realmente se siente el amor por los ingredientes locales.",
      testimonial2: "El bar de cócteles es una joya escondida. Bebidas de autor que cuentan una historia, en un ambiente que te transporta en el tiempo.",
      testimonial3: "Desde la cálida bienvenida hasta el último sorbo de Amarone, cada detalle en La Petite es perfección. Imprescindible en Florencia.",
      testimonial4: "La schiacciata y los cócteles son simplemente perfectos. El ambiente íntimo y el servicio impecable hacen que cada visita sea especial. ¡Volveremos seguro!",
      instagramTitle: "Sigue Nuestro Viaje",
      instagramDesc: "Mantente conectado con nosotros en Instagram para los últimos platos, cócteles y momentos detrás de escena.",
      instagramCta: "Síguenos en Instagram",
      newsletterSubtitle: "Mantente en Contacto",
      newsletterTitle: "Únete a Nuestra Comunidad",
      newsletterDesc: "Sé el primero en conocer eventos especiales, novedades en el menú y ofertas exclusivas.",
      newsletterPlaceholder: "Tu dirección de email",
      newsletterSubmit: "Suscribirse",
      newsletterThank: "¡Gracias por unirte a nuestra comunidad! Nos pondremos en contacto pronto.",
    },
    menuPage: {
      subtitle: "La Petite",
      title: "El Menú",
      intro: "Cada plato de La Petite cuenta una historia de la Toscana — desde las colinas del Chianti hasta los bulliciosos mercados de Florencia. Seleccionamos los mejores ingredientes locales, honrando la tradición mientras abrazamos la creatividad.",
      readyTitle: "¿Listos para Cenar?",
      readyDesc: "Reserva tu mesa y déjanos crear una velada inolvidable para ti.",
      antipasti: "Antipasti",
      primiPiatti: "Primi Piatti",
      secondiPiatti: "Secondi Piatti",
      dolci: "Dolci",
      burrata: "Burrata cremosa con tomates heredados, aceite de albahaca y balsámico añejo",
      carpaccio: "Ternera Chianina finamente cortada con rúcula, Parmigiano y aceite de trufa",
      crostini: "Paté de hígado toscano tradicional sobre pan tostado con alcaparras",
      polpo: "Pulpo a la brasa con crema de patata, aceitunas y pimentón ahumado",
      pici: "Pasta pici hechos a mano con salsa de tomate al ajo, un clásico toscano",
      risotto: "Arroz Carnaroli con trufa negra, crema de Parmigiano y mantequilla de trufa",
      pappardelle: "Pappardelle frescas con ragú de jabalí a fuego lento",
      ravioli: "Ravioli caseros con mantequilla de salvia y piñones tostados",
      bistecca: "Chuletón de Chianina (1,2kg) a la brasa con roble, para dos",
      branzino: "Lubina al horno con aceitunas ligures, alcaparras y tomates cherry",
      agnello: "Chuletas de cordero a la brasa con romero, ajo y patatas asadas",
      tagliata: "Solomillo de Chianina con rúcula, tomates cherry y Parmigiano",
      tiramisu: "Nuestro tiramisú con mascarpone, espresso y cacao",
      pannaCotta: "Panna cotta de vainilla con coulis de frutos rojos de temporada",
      cantucci: "Tradicionales biscotti de almendra servidos con vino Vin Santo",
    },
    cocktailsPage: {
      subtitle: "La Petite Bar",
      title: "Cócteles",
      intro: "Nuestro bar celebra el arte del cóctel — desde nuestras creaciones de autor inspiradas en Florencia, hasta los clásicos atemporales preparados con los mejores destilados e ingredientes frescos.",
      signatureTitle: "Creaciones de Autor",
      classicTitle: "Cócteles Clásicos",
      nonAlcTitle: "Sin Alcohol",
      ctaTitle: "Ven al Bar",
      ctaDesc: "Pasa a visitarnos o reserva — nos encantaría prepararte algo especial.",
      firenzeSour: "Gin toscano, limón Meyer, clara de huevo, jarabe de miel y lavanda, Angostura",
      petiteNegroni: "Gin envejecido en barrica, Campari, vermú dulce, aceite de naranja — nuestra versión del clásico",
      mediciSpritz: "Prosecco, aperitivo de naranja sanguina, flor de saúco, agua con gas",
      ponteVecchio: "Bourbon, amaretto, jarabe de higo, amargo de nuez, cáscara de naranja ahumada",
      negroni: "London dry gin, Campari, vermú dulce",
      aperolSpritz: "Prosecco, Aperol, agua con gas, rodaja de naranja",
      espressoMartini: "Vodka, Kahlúa, espresso fresco, vainilla",
      amarettoSour: "Disaronno, zumo de limón, clara de huevo, Angostura bitters",
      gardenSpritz: "Seedlip Garden, tónica de saúco, pepino, menta",
      tuscanSunset: "Naranja sanguina, maracuyá, ginger beer, romero",
      virginEspresso: "Espresso fresco, agua tónica, jarabe de vainilla, twist de naranja",
    },
    reservationsPage: {
      heroSubtitle: "Reserva Tu Mesa",
      heroTitle: "Reservas",
      intro: "Completa los datos a continuación y confirmaremos tu reserva en breve. También puedes llamarnos al",
      whatsappUs: "WhatsApp",
      dateLabel: "Fecha *",
      timeLabel: "Hora *",
      selectTime: "Selecciona una hora",
      partySize: "Número de Comensales *",
      numberOfGuests: "Número de comensales",
      guest: "comensal",
      guests: "comensales",
      fullName: "Nombre Completo *",
      yourName: "Tu nombre",
      phone: "Teléfono *",
      email: "Email *",
      specialRequests: "Peticiones Especiales",
      specialRequestsPlaceholder: "Necesidades dietéticas, celebraciones, preferencias de asiento...",
      confirm: "Confirmar Reserva",
      confirmedTitle: "Reserva Confirmada",
      thankYou: "Gracias",
      receivedReservation: "Hemos recibido tu reserva para",
      guestWord: "comensal(es)",
      on: "el",
      at: "a las",
      confirmationSent: "Se enviará una confirmación a",
      questions: "¿Preguntas? Llámanos al",
    },
    aboutPage: {
      heroSubtitle: "Nuestra Historia",
      heroTitle: "Sobre La Petite",
      philosophySubtitle: "Nuestra Filosofía",
      philosophyTitle: "Una Pasión por la Auténtica Cocina Italiana",
      philosophyP1: "Nacida de un profundo amor por la cocina toscana y el arte de la hospitalidad, La Petite une los mejores ingredientes locales con recetas transmitidas de generación en generación.",
      philosophyP2: "Nuestra cocina trabaja codo a codo con agricultores locales, pescadores y productores artesanales — porque creemos que la gran cocina empieza con grandes ingredientes.",
      philosophyP3: "Por la noche, nuestro bar de cócteles transforma el espacio en un refugio sofisticado donde maestros barman preparan bebidas inspiradas en la rica historia y el espíritu vibrante de Florencia.",
      locationTitle: "Ubicación",
      hoursTitle: "Horarios",
      contactTitle: "Contacto",
      getDirections: "Cómo Llegar",
      callNow: "Llamar",
    },
    contactPage: {
      heroSubtitle: "Contáctanos",
      heroTitle: "Contacto",
      formTitle: "Nos Encantaría Saber de Ti",
      formDesc: "Ya sea que tengas una pregunta sobre nuestro menú, quieras planificar un evento especial, o simplemente quieras saludar — no dudes en contactarnos.",
      nameLabel: "Nombre *",
      emailLabel: "Email *",
      subjectLabel: "Asunto *",
      messageLabel: "Mensaje *",
      selectSubject: "Selecciona un asunto",
      generalInquiry: "Consulta General",
      reservationQuestion: "Pregunta de Reserva",
      privateEvent: "Evento Privado",
      feedback: "Opinión",
      other: "Otro",
      sendMessage: "Enviar Mensaje",
      messageSent: "Mensaje Enviado",
      messageSentDesc: "¡Gracias por contactarnos! Te responderemos lo antes posible.",
      openingHours: "Horarios de Apertura",
      yourName: "Tu nombre",
      yourEmail: "tu@email.com",
      howCanWeHelp: "¿Cómo podemos ayudarte?",
    },
    validation: {
      nameRequired: "El nombre es obligatorio",
      emailInvalid: "Email inválido",
      phoneRequired: "El teléfono es obligatorio",
      dateRequired: "La fecha es obligatoria",
      timeRequired: "La hora es obligatoria",
      partySizeRequired: "El número de comensales es obligatorio",
      subjectRequired: "El asunto es obligatorio",
      messageRequired: "El mensaje es obligatorio",
    },
  },
};
