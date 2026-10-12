// Edit this file to add, remove or change places.
//
// Each place needs:
//   category : "restaurants", "bars" or "todo"
//   name     : the name of the place
//   address  : street/area (also used to search Google Maps)
//   lat, lng : optional, for the map pin. In Google Maps, right-click the place
//              and click the numbers at the top of the menu to copy them.
//   mapsUrl  : optional, paste the Google Maps "Share" link for an exact match
//   en, it   : short description in English and Italian
//
// The entries below are EXAMPLES - replace them with your own.

window.CATEGORIES = [
  { id: "restaurants", color: "#9a6b4f", en: "Restaurants",   it: "Ristoranti" },
  { id: "bars",        color: "#7d8a6a", en: "Bars & Cafés",  it: "Bar & Caffè" },
  { id: "todo",        color: "#6a7a8c", en: "Things to Do",  it: "Cosa fare" }
];

window.PLACES = [
  {
    category: "restaurants",
    name: "Example Trattoria",
    address: "Piazza Navona, Roma",
    lat: 41.8992, lng: 12.4731,
    en: "Our favourite spot for cacio e pepe. Book ahead on weekends.",
    it: "Il nostro posto preferito per la cacio e pepe. Prenotate nel weekend."
  },
  {
    category: "bars",
    name: "Example Café",
    address: "Campo de' Fiori, Roma",
    lat: 41.8956, lng: 12.4722,
    en: "Great espresso and cornetti in the morning, spritz at sunset.",
    it: "Ottimo espresso e cornetti al mattino, spritz al tramonto."
  },
  {
    category: "todo",
    name: "Pantheon",
    address: "Piazza della Rotonda, Roma",
    lat: 41.8986, lng: 12.4769,
    en: "Go early in the morning to enjoy it without the crowds.",
    it: "Andate la mattina presto per godervelo senza folla."
  }
];
