// Faenza recommendations. Edit this file to add, remove or change places.
//
// Each place needs:
//   category : one of the ids in CATEGORIES below
//   name     : the name of the place
//   address  : street/area shown under the name
//   lat, lng : for the map pin (worked out from the Google Maps link)
//   mapsUrl  : the Google Maps "Share" link
//   linkLabel: optional button text { en, it } when mapsUrl isn't Google Maps
//   tag      : optional small label above the name, in English and Italian
//   en, it   : short description in English and Italian
//
// A category can also have an intro: { en, it } sentence shown under its heading.
//
// Entries marked "[...]" are placeholders still to be written.

window.CATEGORIES = [
  { id: "restaurants", color: "#9a6b4f", en: "Restaurants",     it: "Ristoranti" },
  { id: "drinks",      color: "#8c5a6a", en: "Wine & Drinks",   it: "Vino & Drink" },
  { id: "breakfast",   color: "#b08a4a", en: "Breakfast",       it: "Colazione" },
  { id: "todo",        color: "#6a7a8c", en: "Things to Do",    it: "Cosa fare" }
];

window.PLACES = [
  // Restaurants
  {
    category: "restaurants",
    tag: { en: "Pizza", it: "Pizza" },
    name: "Farena",
    address: "Viale Stradone 2, Faenza",
    lat: 44.28297, lng: 11.87633,
    mapsUrl: "https://maps.app.goo.gl/UEfzUXCZYPyzMNvA7",
    en: "Excellent Neapolitan-style pizza and craft beer.",
    it: "Ottima pizza in stile napoletano e birra artigianale"
  },
  {
    category: "restaurants",
    tag: { en: "Romagnolo DOC", it: "Romagnolo DOC" },
    name: "La Baita",
    address: "Via Naviglio 25/C, Faenza",
    lat: 44.28820, lng: 11.88323,
    mapsUrl: "https://maps.app.goo.gl/FZrgixyzWinhjHvz5",
    en: "Perhaps the best restaurant in town. A bit expensive, but worth it. Make sure to try the cheeses.",
    it: "Forse il più buon ristorante. Un po' cara, ma ne vale la pena. Mi raccomando, provate i formaggi."
  },
  {
    category: "restaurants",
    tag: { en: "Romagnolo DOC", it: "Romagnolo DOC" },
    name: "La Locanda della Fortuna",
    address: "Via San Mamante 136, Faenza",
    lat: 44.21499, lng: 11.91055,
    mapsUrl: "https://maps.app.goo.gl/omqC67JtcaU7j2Xx5",
    en: "A farmhouse restaurant on the hills around Faenza, with typical Romagna cooking.",
    it: "Agriturismo sulle colline intorno a Faenza, cibo tipicamente romagnolo."
  },
  {
    category: "restaurants",
    tag: { en: "Iconic pasta", it: "Pasta iconica" },
    name: "Spaghetti Notte",
    address: "Via Zanelli 2, Faenza",
    lat: 44.28619, lng: 11.88092,
    mapsUrl: "https://maps.app.goo.gl/sx7BLV7Uaofw391A8",
    en: "Huge portions of spaghetti with iconic sauces.",
    it: "Maxi porzioni di spaghetti con salse iconiche"
  },
  {
    category: "restaurants",
    tag: { en: "Burgers & drinks", it: "Hamburger & drink" },
    name: "Mens Sana",
    address: "Via Mura Diamante Torelli 67, Faenza",
    lat: 44.28268, lng: 11.88326,
    mapsUrl: "https://maps.app.goo.gl/qesmVMiidJVxv9AT7",
    en: "Gourmet burgers and craft beers in a relaxed outdoor space.",
    it: "Hamburger gourmet e birre artigianali in uno spazio all'aperto e chill."
  },

  // Wine & Drinks
  {
    category: "drinks",
    name: "Quinto",
    address: "Corso Aurelio Saffi 5, Faenza",
    lat: 44.28551, lng: 11.88381,
    mapsUrl: "https://maps.app.goo.gl/WeDEKznXu7eZvSrd7",
    en: "Right in the centre, with good drinks and wines.",
    it: "In pieno centro, buoni drinks e vini."
  },
  {
    category: "drinks",
    name: "19.86",
    address: "Corso Giacomo Matteotti 25/A, Faenza",
    lat: 44.28390, lng: 11.88065,
    mapsUrl: "https://maps.app.goo.gl/SoyS3UmaXT8nTU3p6",
    en: "Signature cocktails.",
    it: "Cocktail d'autore."
  },

  // Breakfast
  {
    category: "breakfast",
    name: "FM",
    address: "Piazza della Libertà 21, Faenza",
    lat: 44.28568, lng: 11.88378,
    mapsUrl: "https://maps.app.goo.gl/jChJEEWyAXhTzueK6",
    en: "A local classic for both breakfast and aperitivo, overlooking the square.",
    it: "Un grande classico, sia per colazione che aperitivi. Vista sulla piazza"
  },
  {
    category: "breakfast",
    name: "Frankie",
    address: "Viale Alfredo Baccarini 42, Faenza",
    lat: 44.28927, lng: 11.88012,
    mapsUrl: "https://maps.app.goo.gl/aKqaKbGSaQY9L19F8",
    en: "Great sweet and savoury breakfasts.",
    it: "Ottime colazioni salate e dolci."
  },
  {
    category: "breakfast",
    tag: { en: "Pastry shop", it: "Pasticceria" },
    name: "Pasticceria Caridi",
    address: "Corso Aurelio Saffi 48/A, Faenza",
    lat: 44.28468, lng: 11.88627,
    mapsUrl: "https://maps.app.goo.gl/ERMavufTHpDyuzNk9",
    en: "An award-winning pastry shop. The breakfast for when you want to treat yourself.",
    it: "Pasticceria premiata. La colazione per quando ci si vuole trattare bene."
  },

  // Things to Do
  {
    category: "todo",
    name: "Old town",
    address: "Piazza del Popolo, Faenza",
    lat: 44.28517, lng: 11.88285,
    mapsUrl: "https://maps.app.goo.gl/FnUiaprrKif46hFE6",
    en: "Stroll through Piazza del Popolo and Piazza della Molinella, and stop by Teatro Masini.",
    it: "Passeggiate tra Piazza del Popolo e Piazza della Molinella, e fate un salto al Teatro Masini."
  },
  {
    category: "todo",
    name: "Palazzo Milzetti",
    address: "Via Tonducci 15, Faenza",
    lat: 44.28510, lng: 11.87847,
    mapsUrl: "https://maps.app.goo.gl/FUAcgfWU6VDg24Wc8",
    en: "Visit for a dive into Faenza's neoclassical past.",
    it: "Visitare per un tuffo nel neoclassicismo faentino."
  },
  {
    category: "todo",
    name: "Museo delle Ceramiche",
    address: "Viale Alfredo Baccarini 19, Faenza",
    lat: 44.28947, lng: 11.88106,
    mapsUrl: "https://maps.app.goo.gl/8icA7KD5J4r3mghX6",
    en: "Faenza is world-famous for its ceramics. The museum's collection spans hundreds of years of history.",
    it: "Faenza è conosciuta a livello mondiale per le sue ceramiche. Il museo ha una collezione che copre centinaia di anni di storia."
  },
  {
    category: "todo",
    tag: { en: "Ceramics", it: "Ceramica" },
    name: "Mirta Morigi",
    address: "Corso Mazzini 64, Faenza",
    lat: 44.28720, lng: 11.87963,
    mapsUrl: "https://maps.app.goo.gl/PF5Qmjf7jhopDQNZ7",
    en: "Artisanal ceramics workshop. One of the best souvenirs from Faenza.",
    it: "Bottega artigiana di ceramica. Uno dei migliori souvenir a Faenza."
  },
  {
    category: "todo",
    tag: { en: "Ceramics", it: "Ceramica" },
    name: "Ceramica Gatti",
    address: "Via Pompignoli 4, Faenza",
    lat: 44.28157, lng: 11.89223,
    mapsUrl: "https://maps.app.goo.gl/voxhbzvRxbGexxiCA",
    en: "Artisanal ceramics workshop. One of the best souvenirs from Faenza.",
    it: "Bottega artigiana di ceramica. Uno dei migliori souvenir a Faenza."
  },
  {
    category: "todo",
    tag: { en: "Ceramics", it: "Ceramica" },
    name: "Elvira Keller",
    address: "Corso Mazzini 63, Faenza",
    lat: 44.28713, lng: 11.88034,
    mapsUrl: "https://maps.app.goo.gl/gN59fcPJCPiuZ8in6",
    en: "Artisanal ceramics workshop. One of the best souvenirs from Faenza.",
    it: "Bottega artigiana di ceramica. Uno dei migliori souvenir a Faenza."
  },
  {
    category: "todo",
    tag: { en: "Ceramics", it: "Ceramica" },
    name: "Spazio Ceramica",
    address: "Via Pistocchi 16, Faenza",
    lat: 44.28572, lng: 11.88198,
    mapsUrl: "https://maps.app.goo.gl/8kTxhzNXjV4kSee76",
    en: "A shop with works by many local ceramic artists.",
    it: "Un negozio con le opere di tanti ceramisti faentini."
  }
];
