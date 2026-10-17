// Ravenna recommendations. See faenza/places.js for the meaning of each field.
// Without a mapsUrl, the "Open in Google Maps" button searches for name + address.

window.INTRO = {
  en: "A few of our favourite places to explore while you are here.",
  it: "Alcuni dei nostri posti preferiti da esplorare durante il vostro soggiorno."
};

window.CATEGORIES = [
  {
    id: "mosaics", color: "#b08a4a", en: "Mosaic Tour", it: "Percorso dei mosaici",
    intro: {
      en: "We recommend booking a guided tour: it will take you to all the places listed below.",
      it: "Vi consigliamo di prenotare una visita guidata, che vi porterà in tutti i luoghi elencati qui sotto."
    }
  },
  { id: "culture", color: "#6a7a8c", en: "More Culture", it: "Altra cultura" }
];

window.PLACES = [
  // Mosaic Tour
  {
    category: "mosaics",
    name: "San Vitale & Galla Placidia",
    address: "Via San Vitale 17, Ravenna",
    lat: 44.42058, lng: 12.19631,
    en: "The basilica's mosaics of Emperor Justinian and Empress Theodora, and next door the tiny mausoleum with its starry blue vault.",
    it: "I mosaici dell'imperatore Giustiniano e dell'imperatrice Teodora nella basilica e, accanto, il piccolo mausoleo con la sua volta stellata."
  },
  {
    category: "mosaics",
    name: "Sant'Apollinare Nuovo",
    address: "Via di Roma 53, Ravenna",
    lat: 44.41673, lng: 12.20486,
    en: "Long processions of saints and virgins in gold mosaic along both sides of the nave.",
    it: "Lunghe processioni di santi e vergini su fondo oro lungo le pareti della navata."
  },
  {
    category: "mosaics",
    name: "Battistero Neoniano",
    address: "Piazza Duomo, Ravenna",
    lat: 44.41559, lng: 12.19736,
    en: "The oldest monument in Ravenna, with the Baptism of Christ in the dome.",
    it: "Il monumento più antico di Ravenna, con il Battesimo di Cristo nella cupola."
  },

  // More Culture
  {
    category: "culture",
    name: "Sant'Apollinare in Classe",
    address: "Via Romea Sud 224, Classe",
    lat: 44.38028, lng: 12.23302,
    en: "More mosaics, a few kilometres south of the centre: worth the short trip for its green and gold apse.",
    it: "Altri mosaici, a pochi chilometri dal centro: vale la breve gita per la sua abside verde e oro."
  },
  {
    category: "culture",
    name: "Tomba di Dante",
    address: "Via Dante Alighieri 9, Ravenna",
    lat: 44.41615, lng: 12.20091,
    en: "Dante spent his last years in Ravenna, and is buried here.",
    it: "Dante trascorse gli ultimi anni a Ravenna, ed è sepolto qui."
  },
  {
    category: "culture",
    name: "Mausoleo di Teodorico",
    address: "Via delle Industrie 14, Ravenna",
    lat: 44.42504, lng: 12.20915,
    en: "The tomb of the Gothic king Theodoric, topped by a dome carved from a single enormous stone.",
    it: "La tomba del re goto Teodorico, coperta da una cupola ricavata da un unico enorme blocco di pietra."
  },
  {
    category: "culture",
    name: "Piazza del Popolo",
    address: "Piazza del Popolo, Ravenna",
    lat: 44.41777, lng: 12.19970,
    en: "The elegant main square, with its Venetian columns. Perfect for a coffee between visits.",
    it: "L'elegante piazza principale, con le sue colonne veneziane. Perfetta per un caffè tra una visita e l'altra."
  }
];
