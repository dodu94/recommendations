(function () {
  "use strict";

  const TEXT = {
    en: {
      title: "Our Recommendations",
      intro: "A few of our favourite places to eat, drink and explore while you are here. Pick a city to start.",
      cityIntro: "A few of our favourite places to eat, drink and explore while you are here.",
      allCities: "All cities",
      all: "All",
      open: "Open in Google Maps",
      back: "Back to the wedding website"
    },
    it: {
      title: "I nostri consigli",
      intro: "Alcuni dei nostri posti preferiti dove mangiare, bere ed esplorare durante il vostro soggiorno. Scegliete una città.",
      cityIntro: "Alcuni dei nostri posti preferiti dove mangiare, bere ed esplorare durante il vostro soggiorno.",
      allCities: "Tutte le città",
      all: "Tutti",
      open: "Apri in Google Maps",
      back: "Torna al sito del matrimonio"
    }
  };

  // Storage can throw when blocked (private mode, strict privacy, in-app browsers).
  function loadLang() {
    try {
      const lang = localStorage.getItem("lang");
      return TEXT[lang] ? lang : null;
    } catch (e) { return null; }
  }

  function saveLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (e) { /* not remembered */ }
  }

  const cities = window.CITIES || [];
  const categories = window.CATEGORIES || [];
  const places = (window.PLACES || []).map((p, i) => ({ ...p, id: i }));
  const state = {
    lang: loadLang() ||
      ((navigator.language || "").toLowerCase().startsWith("it") ? "it" : "en"),
    filter: "all"
  };

  const citiesEl = document.getElementById("cities");
  const sectionsEl = document.getElementById("sections");
  const filtersEl = document.querySelector(".filters");
  const mapEl = document.getElementById("map");
  const markers = new Map();
  let map = null;
  let markerLayer = null;

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function mapsUrl(p) {
    if (p.mapsUrl) return p.mapsUrl;
    const query = [p.name, p.address].filter(Boolean).join(", ");
    return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(query);
  }

  function mapsLink(p) {
    const label = p.linkLabel ? p.linkLabel[state.lang] || p.linkLabel.en : TEXT[state.lang].open;
    const a = el("a", "maps-link", label);
    a.href = mapsUrl(p);
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    return a;
  }

  function hasCoords(p) {
    return typeof p.lat === "number" && typeof p.lng === "number";
  }

  function visible(p) {
    return state.filter === "all" || p.category === state.filter;
  }

  function renderText() {
    document.documentElement.lang = state.lang;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = TEXT[state.lang][node.dataset.i18n];
    });
    document.querySelectorAll(".lang-switch button").forEach((b) => {
      b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang));
    });
  }

  function renderCities() {
    citiesEl.replaceChildren();
    cities.forEach((c) => {
      const a = el("a", "card city-card");
      a.href = c.id + "/";
      a.appendChild(el("h2", null, c.name));
      const desc = c[state.lang] || c.en;
      if (desc) a.appendChild(el("p", "desc", desc));
      citiesEl.appendChild(a);
    });
  }

  function renderFilters() {
    filtersEl.replaceChildren();
    const options = [{ id: "all", label: TEXT[state.lang].all }].concat(
      categories.map((c) => ({ id: c.id, label: c[state.lang], color: c.color }))
    );
    options.forEach((o) => {
      const b = el("button", "chip", o.label);
      b.type = "button";
      b.setAttribute("aria-pressed", String(state.filter === o.id));
      if (o.color) b.style.setProperty("--dot", o.color);
      b.addEventListener("click", () => {
        state.filter = o.id;
        render();
        fitMap();
      });
      filtersEl.appendChild(b);
    });
  }

  function renderSections() {
    sectionsEl.replaceChildren();
    categories.forEach((c) => {
      const items = places.filter((p) => p.category === c.id);
      if (!items.length || (state.filter !== "all" && state.filter !== c.id)) return;

      const section = el("section", "category");
      section.style.setProperty("--accent", c.color);
      section.appendChild(el("h2", null, c[state.lang]));
      if (c.intro) section.appendChild(el("p", "section-intro", c.intro[state.lang] || c.intro.en));

      const list = el("div", "cards");
      items.forEach((p) => {
        const card = el("article", "card");
        if (p.tag) card.appendChild(el("p", "tag", p.tag[state.lang] || p.tag.en));
        card.appendChild(el("h3", null, p.name));
        if (p.address) card.appendChild(el("p", "address", p.address));
        const desc = p[state.lang] || p.en;
        if (desc) card.appendChild(el("p", "desc", desc));
        card.appendChild(mapsLink(p));

        if (hasCoords(p) && map) {
          card.classList.add("clickable");
          card.addEventListener("click", (e) => {
            if (e.target.closest("a")) return;
            focusPlace(p);
          });
        }
        list.appendChild(card);
      });
      section.appendChild(list);
      sectionsEl.appendChild(section);
    });
  }

  function popupContent(p) {
    const box = el("div", "popup");
    box.appendChild(el("strong", null, p.name));
    box.appendChild(mapsLink(p));
    return box;
  }

  function renderMarkers() {
    if (!map) return;
    markerLayer.clearLayers();
    markers.clear();
    places.filter((p) => hasCoords(p) && visible(p)).forEach((p) => {
      const cat = categories.find((c) => c.id === p.category);
      const m = L.circleMarker([p.lat, p.lng], {
        radius: 8,
        color: "#fff",
        weight: 2,
        fillColor: cat ? cat.color : "#888",
        fillOpacity: 0.95
      }).bindPopup(popupContent(p));
      markerLayer.addLayer(m);
      markers.set(p.id, m);
    });
  }

  function fitMap() {
    if (!map || !markers.size) return;
    const bounds = L.latLngBounds([...markers.values()].map((m) => m.getLatLng()));
    map.fitBounds(bounds, { padding: [40, 40], maxZoom: 15 });
  }

  function focusPlace(p) {
    const m = markers.get(p.id);
    if (!m) return;
    mapEl.scrollIntoView({ behavior: "smooth", block: "center" });
    map.flyTo(m.getLatLng(), Math.max(map.getZoom(), 15), { duration: 0.6 });
    m.openPopup();
  }

  function initMap() {
    if (!mapEl) return;
    if (typeof L === "undefined" || !places.some(hasCoords)) {
      mapEl.hidden = true;
      return;
    }
    map = L.map(mapEl, {
      scrollWheelZoom: false,
      // One-finger drag on phones would hijack page scrolling; pinch-zoom still works.
      dragging: !L.Browser.mobile
    });
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    markerLayer = L.layerGroup().addTo(map);
  }

  function render() {
    renderText();
    if (citiesEl) renderCities();
    if (sectionsEl) {
      renderFilters();
      renderSections();
      renderMarkers();
    }
  }

  document.querySelectorAll(".lang-switch button").forEach((b) => {
    b.addEventListener("click", () => {
      state.lang = b.dataset.lang;
      saveLang(state.lang);
      render();
    });
  });

  initMap();
  render();
  fitMap();
})();
