// Faenza recommendations. Edit this file to add, remove or change places.
//
// Each place needs:
//   category : one of the ids in CATEGORIES below
//   name     : the name of the place
//   address  : street/area shown under the name
//   lat, lng : for the map pin (worked out from the Google Maps link)
//   mapsUrl  : the Google Maps "Share" link
//   tag      : optional small label above the name, in English and Italian
//   en, it   : short description in English and Italian
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
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "restaurants",
    tag: { en: "Romagnolo DOC", it: "Romagnolo DOC" },
    name: "La Baita",
    address: "Via Naviglio 25/C, Faenza",
    lat: 44.28820, lng: 11.88323,
    mapsUrl: "https://maps.app.goo.gl/FZrgixyzWinhjHvz5",
    en: "In the city centre. A bit expensive, but worth it.",
    it: "In centro. Un po' cara, ma ne vale la pena."
  },
  {
    category: "restaurants",
    tag: { en: "Romagnolo DOC", it: "Romagnolo DOC" },
    name: "Contea di Val d'Amone",
    address: "Via Molino del Rosso 18, Brisighella",
    lat: 44.24284, lng: 11.81155,
    mapsUrl: "https://maps.app.goo.gl/Tzxt7guNYVgnrY9h6",
    en: "On the hills around Faenza.",
    it: "Sulle colline intorno a Faenza."
  },
  {
    category: "restaurants",
    tag: { en: "Romagnolo DOC", it: "Romagnolo DOC" },
    name: "La Locanda della Fortuna",
    address: "Via San Mamante 136, Faenza",
    lat: 44.21499, lng: 11.91055,
    mapsUrl: "https://maps.app.goo.gl/omqC67JtcaU7j2Xx5",
    en: "On the hills around Faenza.",
    it: "Sulle colline intorno a Faenza."
  },
  {
    category: "restaurants",
    tag: { en: "Iconic pasta", it: "Pasta iconica" },
    name: "Spaghetti Notte",
    address: "Via Zanelli 2, Faenza",
    lat: 44.28619, lng: 11.88092,
    mapsUrl: "https://maps.app.goo.gl/sx7BLV7Uaofw391A8",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "restaurants",
    tag: { en: "Burgers & drinks", it: "Hamburger & drink" },
    name: "Mens Sana",
    address: "Via Mura Diamante Torelli 67, Faenza",
    lat: 44.28268, lng: 11.88326,
    mapsUrl: "https://maps.app.goo.gl/qesmVMiidJVxv9AT7",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },

  // Wine & Drinks
  {
    category: "drinks",
    name: "Quinto",
    address: "Corso Aurelio Saffi 5, Faenza",
    lat: 44.28551, lng: 11.88381,
    mapsUrl: "https://maps.app.goo.gl/WeDEKznXu7eZvSrd7",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "drinks",
    name: "19.86",
    address: "Corso Giacomo Matteotti 25/A, Faenza",
    lat: 44.28390, lng: 11.88065,
    mapsUrl: "https://maps.app.goo.gl/SoyS3UmaXT8nTU3p6",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "drinks",
    name: "Enoteca Astorre",
    address: "Piazza della Libertà 16/A, Faenza",
    lat: 44.28628, lng: 11.88398,
    mapsUrl: "https://maps.app.goo.gl/Nkx2WtzcyETTJutE6",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },

  // Breakfast
  {
    category: "breakfast",
    name: "FM",
    address: "Piazza della Libertà 21, Faenza",
    lat: 44.28568, lng: 11.88378,
    mapsUrl: "https://maps.app.goo.gl/jChJEEWyAXhTzueK6",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "breakfast",
    name: "Frankie",
    address: "Viale Alfredo Baccarini 42, Faenza",
    lat: 44.28927, lng: 11.88012,
    mapsUrl: "https://maps.app.goo.gl/aKqaKbGSaQY9L19F8",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "breakfast",
    tag: { en: "Pastry shop", it: "Pasticceria" },
    name: "Pasticceria Caridi",
    address: "Corso Aurelio Saffi 48/A, Faenza",
    lat: 44.28468, lng: 11.88627,
    mapsUrl: "https://maps.app.goo.gl/ERMavufTHpDyuzNk9",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
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
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "todo",
    name: "Museo delle Ceramiche",
    address: "Viale Alfredo Baccarini 19, Faenza",
    lat: 44.28947, lng: 11.88106,
    mapsUrl: "https://maps.app.goo.gl/8icA7KD5J4r3mghX6",
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "todo",
    tag: { en: "Ceramics", it: "Ceramica" },
    name: "Mirta Morigi",
    address: "Corso Mazzini 64, Faenza",
    lat: 44.28720, lng: 11.87963,
    mapsUrl: "https://maps.app.goo.gl/PF5Qmjf7jhopDQNZ7",
    en: "Artisanal ceramics studio and shop.",
    it: "Bottega artigiana di ceramica."
  },
  {
    category: "todo",
    tag: { en: "Ceramics", it: "Ceramica" },
    name: "Ceramica Gatti",
    address: "Via Pompignoli 4, Faenza",
    lat: 44.28157, lng: 11.89223,
    mapsUrl: "https://maps.app.goo.gl/voxhbzvRxbGexxiCA",
    en: "Artisanal ceramics studio and shop.",
    it: "Bottega artigiana di ceramica."
  },
  {
    category: "todo",
    tag: { en: "Ceramics", it: "Ceramica" },
    name: "Elvira Keller",
    address: "Corso Mazzini 63, Faenza",
    lat: 44.28713, lng: 11.88034,
    mapsUrl: "https://maps.app.goo.gl/gN59fcPJCPiuZ8in6",
    en: "Artisanal ceramics studio and shop.",
    it: "Bottega artigiana di ceramica."
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
