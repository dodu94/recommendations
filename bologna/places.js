// Bologna recommendations. See faenza/places.js for the meaning of each field.
// Without a mapsUrl, the "Open in Google Maps" button searches for name + address.

window.CATEGORIES = [
  { id: "todo",        color: "#6a7a8c", en: "Things to Do", it: "Cosa fare" },
  { id: "restaurants", color: "#9a6b4f", en: "Restaurants",  it: "Ristoranti" },
  { id: "gelato",      color: "#5f8f8b", en: "Gelato",       it: "Gelato" },
  { id: "drinks",      color: "#8c5a6a", en: "Drinks",       it: "Drink" },
  { id: "breakfast",   color: "#b08a4a", en: "Breakfast",    it: "Colazione" }
];

window.PLACES = [
  // Things to Do
  {
    category: "todo",
    name: "Piazza Maggiore & Quadrilatero",
    address: "Piazza Maggiore, Bologna",
    lat: 44.49366, lng: 11.34305,
    en: "The heart of the city, with the huge Basilica di San Petronio and the Neptune Fountain. Just behind is the Quadrilatero, the medieval market streets full of food shops, perfect for an aperitivo.",
    it: "Il cuore della città, con l'enorme Basilica di San Petronio e la Fontana del Nettuno. Subito dietro c'è il Quadrilatero, le vie medievali del mercato piene di botteghe alimentari, perfette per un aperitivo."
  },
  {
    category: "todo",
    name: "Le Due Torri",
    address: "Piazza di Porta Ravegnana, Bologna",
    lat: 44.49420, lng: 11.34677,
    en: "The symbol of Bologna: the leaning Asinelli and Garisenda towers. Check ahead whether the Asinelli climb is open.",
    it: "Il simbolo di Bologna: le torri pendenti degli Asinelli e della Garisenda. Verificate prima se la salita sugli Asinelli è aperta."
  },
  {
    category: "todo",
    tag: { en: "Neighbourhood", it: "Quartiere" },
    name: "Santo Stefano",
    address: "Piazza Santo Stefano, Bologna",
    lat: 44.49203, lng: 11.34872,
    en: "The calmest and most beautiful area of the city centre. Start from the square of the \"Seven Churches\" and walk along Via Santo Stefano towards Porta Santo Stefano.",
    it: "La zona più tranquilla e bella del centro. Partite dalla piazza delle \"Sette Chiese\" e proseguite lungo Via Santo Stefano verso Porta Santo Stefano."
  },
  {
    category: "todo",
    tag: { en: "Neighbourhood", it: "Quartiere" },
    name: "University district & Jewish Ghetto",
    address: "Piazza Verdi, Bologna",
    lat: 44.49621, lng: 11.35076,
    en: "Via Zamboni, Via Mascarella, Piazza Verdi and the old Jewish Ghetto: the student heart of the city.",
    it: "Via Zamboni, Via Mascarella, Piazza Verdi e il vecchio Ghetto ebraico: il cuore studentesco della città."
  },
  {
    category: "todo",
    tag: { en: "Neighbourhood", it: "Quartiere" },
    name: "Via del Pratello & Piazza San Francesco",
    address: "Piazza San Francesco, Bologna",
    lat: 44.49481, lng: 11.33498,
    en: "The place to hang out at night.",
    it: "Il posto dove uscire la sera."
  },
  {
    category: "todo",
    tag: { en: "Walk", it: "Passeggiata" },
    name: "San Luca",
    address: "Via di San Luca 36, Bologna",
    lat: 44.47910, lng: 11.29817,
    en: "Walk up the world's longest portico, 666 arches, to the sanctuary on the hill, with views over the city.",
    it: "Salite lungo il portico più lungo del mondo, 666 archi, fino al santuario sul colle, con vista sulla città."
  },
  {
    category: "todo",
    tag: { en: "Festival · 19–27 June", it: "Festival · 19–27 giugno" },
    name: "Il Cinema Ritrovato",
    address: "Piazza Maggiore, Bologna",
    // ~40 m north of the Piazza Maggiore pin, still inside the square, so the two don't stack.
    lat: 44.49400, lng: 11.34305,
    mapsUrl: "https://ilcinemaritrovato.it/edizioni/2027/?tab=program",
    linkLabel: { en: "Festival programme", it: "Programma del festival" },
    en: "During the festival you can watch a film under the stars on the big screen in Piazza Maggiore. Remember to book! If you love cinema, also visit Cinema Lumière that week.",
    it: "Durante il festival potete vedere un film sotto le stelle sul grande schermo di Piazza Maggiore. È importante prenotare! Se amate il cinema, quella settimana passate anche al Cinema Lumière."
  },

  // Restaurants
  {
    category: "restaurants",
    tag: { en: "Osteria", it: "Osteria" },
    name: "Osteria Le Sette Chiese",
    address: "Via Borgonuovo 6/B, Bologna",
    lat: 44.49175, lng: 11.35055,
    mapsUrl: "https://maps.app.goo.gl/NDjAXVgZNce5uiFG6",
    en: "A historic osteria, delicious and still very affordable. Hard to get a table, but so good. Please, try the tortellini in Parmigiano cream.",
    it: "Osteria storica buonissima, con prezzi ancora molto abbordabili. Difficile trovare posto, ma super buona. Per favore, provate i tortellini in crema di parmigiano."
  },
  {
    category: "restaurants",
    tag: { en: "Osteria", it: "Osteria" },
    name: "Trattoria Da Giampi e Ciccio",
    address: "Via Farini 31, Bologna",
    lat: 44.49131, lng: 11.34767,
    mapsUrl: "https://maps.app.goo.gl/sRDmB9MMpaKjAXvz5",
    en: "A traditional osteria just a short walk from Santo Stefano.",
    it: "Osteria tradizionale a due passi da Santo Stefano."
  },
  {
    category: "restaurants",
    tag: { en: "Fresh pasta", it: "Pasta fresca" },
    name: "Sfoglia Rina",
    address: "Via Castiglione 5/B, Bologna",
    lat: 44.49310, lng: 11.34633,
    mapsUrl: "https://maps.app.goo.gl/mefFgSnZaMdab8Hz8",
    en: "One of the few places that doesn't take bookings, handy if everywhere else is full. Go early to avoid the queue.",
    it: "Uno dei pochi posti dove non si può prenotare. Utile se tutto il resto è già pieno. Andare sul presto per evitare la fila."
  },
  {
    category: "restaurants",
    tag: { en: "Trattoria", it: "Trattoria" },
    name: "Trattoria Nonna Rosa",
    address: "Via Piave 31/B, Bologna",
    lat: 44.50098, lng: 11.31520,
    mapsUrl: "https://maps.app.goo.gl/N6U5DinkNqAiN2Mk9",
    en: "Outside the centre, but probably the best \"Cotoletta alla petroniana\" (Bologna's breaded veal cutlet topped with ham and Parmigiano). Everything is delicious.",
    it: "Fuori dal centro ma ha probabilmente la miglior \"Cotoletta alla petroniana\". Tutto buonissimo."
  },
  {
    category: "restaurants",
    tag: { en: "Street food", it: "Street food" },
    name: "Indegno",
    address: "Via del Pratello 84/A, Bologna",
    lat: 44.49539, lng: 11.33034,
    en: "Great \"gnocco fritto\" (fried dough puffs, eaten with cured meats) as street food. Open late, too.",
    it: "Ottimo gnocco fritto in versione street food. Aperto anche fino a tardi."
  },
  {
    category: "restaurants",
    tag: { en: "Sharing boards", it: "Taglieri" },
    name: "La Taglieria",
    address: "Via delle Lame 108/A, Bologna",
    lat: 44.50086, lng: 11.33397,
    en: "Boards of cured meats, cheeses and vegetables, straight from its own farms.",
    it: "Taglieri di salumi, formaggi e verdure direttamente dalle sue aziende agricole."
  },

  // Gelato
  {
    category: "gelato",
    name: "Cremeria La Vecchia Stalla",
    address: "Via Santo Stefano 14/A, Bologna",
    lat: 44.49294, lng: 11.34752,
    mapsUrl: "https://maps.app.goo.gl/FFUuFnGS2xcSYDW99",
    en: "One of the most famous gelato shops in Bologna. Expect a queue.",
    it: "Uno dei gelati più famosi di Bologna. Ci sarà fila."
  },
  {
    category: "gelato",
    name: "Cremeria Cavour",
    address: "Piazza Cavour 1/D, Bologna",
    lat: 44.49128, lng: 11.34432,
    mapsUrl: "https://maps.app.goo.gl/9GTLH5K7YFn9ZMnm9",
    en: "Another excellent gelato shop.",
    it: "Altra ottima gelateria."
  },

  // Drinks
  {
    category: "drinks",
    name: "Ruggine",
    address: "Vicolo Alemagna 2/C, Bologna",
    lat: 44.49307, lng: 11.34801,
    mapsUrl: "https://maps.app.goo.gl/PU8zF7eoWX5397U9A",
    en: "Good drinks with an underground vibe.",
    it: "Buoni drink in un vibe underground."
  },
  {
    category: "drinks",
    name: "Macondo",
    address: "Via del Pratello 22/C, Bologna",
    lat: 44.49548, lng: 11.33452,
    mapsUrl: "https://maps.app.goo.gl/ZosKgHs5WteR5gDz9",
    en: "A cocktail bar on Via del Pratello, the heart of Bologna's nightlife.",
    it: "Cocktail bar in Via del Pratello, centro della vita notturna bolognese."
  },

  // Breakfast
  {
    category: "breakfast",
    name: "Papparè",
    address: "Via dei Giudei 2, Bologna",
    lat: 44.49470, lng: 11.34655,
    en: "[Description to add]",
    it: "[Descrizione da aggiungere]"
  },
  {
    category: "breakfast",
    name: "Corner Bar",
    address: "Via Saragozza 37/A, Bologna",
    lat: 44.49010, lng: 11.33435,
    en: "Near Porta Saragozza, where the portico up to San Luca begins: a good stop before the walk.",
    it: "Vicino a Porta Saragozza, da dove parte il portico per San Luca: una buona tappa prima della camminata."
  }
];
