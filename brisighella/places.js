// Brisighella recommendations. See faenza/places.js for the meaning of each field.
//
// Entries marked "[...]" are placeholders still to be written.

window.CATEGORIES = [
  { id: "todo",        color: "#6a7a8c", en: "Things to Do", it: "Cosa fare" },
  { id: "outdoors",    color: "#6f8a5c", en: "Outdoors",     it: "All'aria aperta" },
  { id: "restaurants", color: "#9a6b4f", en: "Restaurants",  it: "Ristoranti" }
];

window.PLACES = [
  // Things to Do
  {
    category: "todo",
    name: "Torre dell'Orologio",
    address: "Brisighella",
    lat: 44.22422, lng: 11.77342,
    mapsUrl: "https://maps.app.goo.gl/9Qq39SkBSB2FKRzHA",
    en: "Walk up to the clock tower.",
    it: "Salite a piedi fino alla Torre dell'Orologio."
  },
  {
    category: "todo",
    name: "Via degli Asini",
    address: "Via del Borgo, Brisighella",
    lat: 44.22378, lng: 11.77318,
    mapsUrl: "https://maps.app.goo.gl/EWNDFhpjBzhgqEpcA",
    en: "The raised, covered medieval street, and the old lanes around it.",
    it: "La strada medievale sopraelevata e coperta, e le vecchie vie del borgo."
  },
  {
    category: "todo",
    name: "La Rocca",
    address: "Via Rontana 64, Brisighella",
    lat: 44.22478, lng: 11.77091,
    mapsUrl: "https://maps.app.goo.gl/VfPmmhknyAdrMgPXA",
    en: "Visit the Rocca Manfrediana, the medieval fortress.",
    it: "Visitate la Rocca Manfrediana, la fortezza medievale."
  },
  {
    category: "todo",
    name: "Pieve del Thò",
    address: "Via Siepi 2, Brisighella",
    lat: 44.21448, lng: 11.75299,
    mapsUrl: "https://maps.app.goo.gl/iQKQKN7K9ZZirpga8",
    en: "A very ancient Romanesque parish church.",
    it: "Un'antichissima pieve romanica."
  },

  // Outdoors
  {
    category: "outdoors",
    tag: { en: "Hiking", it: "Escursione" },
    name: "Parco Carnè",
    address: "Via Rontana 42, Brisighella",
    lat: 44.22696, lng: 11.73774,
    mapsUrl: "https://maps.app.goo.gl/G2S5SQH4MAXHwPw7A",
    en: "Hike through the Carnè park and the calanchi (clay badlands).",
    it: "Escursione nel Parco Carnè e tra i calanchi."
  },
  {
    category: "outdoors",
    tag: { en: "Hiking", it: "Escursione" },
    name: "From the Rocca to Brisighella",
    address: "Via Rontana 64, Brisighella",
    // Nudged ~20 m west of the Rocca so it doesn't sit exactly on La Rocca's pin.
    lat: 44.22478, lng: 11.77066,
    mapsUrl: "https://mapy.com/s/duvelakanu",
    linkLabel: { en: "See the route", it: "Vedi il percorso" },
    en: "A hiking route of 11.7 km, about 4 hours, starting at the Rocca Manfrediana.",
    it: "Un percorso escursionistico di 11,7 km, circa 4 ore, con partenza dalla Rocca Manfrediana."
  },

  // Restaurants
  {
    category: "restaurants",
    tag: { en: "Fine dining", it: "Alta cucina" },
    name: "La Grotta",
    address: "Via Metelli 1, Brisighella",
    lat: 44.22360, lng: 11.77403,
    mapsUrl: "https://maps.app.goo.gl/EXZG5hxNU2ykKFMdA",
    en: "A fancy restaurant inside a gypsum cave.",
    it: "Un ristorante raffinato dentro una grotta di gesso."
  },
  {
    category: "restaurants",
    tag: { en: "Romagnolo DOC", it: "Romagnolo DOC" },
    name: "Contea di Val d'Amone",
    address: "Via Molino del Rosso 18, Brisighella",
    lat: 44.24284, lng: 11.81155,
    mapsUrl: "https://maps.app.goo.gl/Tzxt7guNYVgnrY9h6",
    en: "On the hills around Faenza, with typical Romagna cooking.",
    it: "Sulle colline intorno a Faenza, cibo tipicamente romagnolo."
  },
  {
    category: "restaurants",
    name: "Podere La Berta",
    address: "Via Berta 13, Brisighella",
    lat: 44.26433, lng: 11.80481,
    mapsUrl: "https://maps.app.goo.gl/BqQuSNVT1zR19iUJA",
    en: "Great view.",
    it: "Vista bellissima."
  }
];
