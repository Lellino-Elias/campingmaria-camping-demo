import type { CampsiteConfig } from "../types";

/**
 * Camping Maria, Hollersbach im Pinzgau — honest config, abgeleitet aus raw/digest.
 * Kleiner, familiär geführter Dorfcampingplatz im Nationalpark Hohe Tauern,
 * 50 Jahre Geschichte, 2023 von Eva & Hanspeter wiedereröffnet. Du-Anrede.
 */
const IMG = "/campsites/campingmaria";

const campingmaria: CampsiteConfig = {
  name: "Camping Maria",
  shortName: "Maria",
  slug: "campingmaria",
  ort: "Hollersbach im Pinzgau",
  region: "Salzburger Land",
  brandKind: "Dorfcamping",
  regionLong: "Nationalpark Hohe Tauern · Pinzgau · Salzburger Land",

  theme: "schiefer",
  heroVariant: "left",

  claim: "Dein Dorfcamping mitten in den Hohen Tauern",
  claimEmphasis: "Hohen Tauern",
  intro:
    "Klein, fein und familiär geführt: Camping Maria liegt mitten im Dorf Hollersbach im Pinzgau — umrandet von Wiesen, Bergen und Tälern, nah am Badesee und direkt am Nationalpark Hohe Tauern.",

  logo: { src: `${IMG}/logo-249bf79727.png`, alt: "Camping Maria Hollersbach Logo" },

  statement: {
    text: "Bei uns beginnt dein Urlaub dort, wo das Dorf aufhört und die Berge anfangen.",
    emphasis: "die Berge anfangen",
  },

  pillars: [
    {
      title: "Mitten im Nationalpark",
      text: "Umrandet von Wiesen, Wäldern und den Gipfeln der Hohen Tauern — Natur beginnt direkt vor deinem Vorzelt.",
      image: { src: `${IMG}/gallery-6a58fffa92.webp`, alt: "Bergpanorama der Hohen Tauern rund um Hollersbach" },
    },
    {
      title: "Glasklares Wasser",
      text: "Der idyllische Badesee im Freizeitzentrum Holl-Idee liegt nur einen Spaziergang entfernt — erfrischende Stunden inklusive.",
      image: { src: `${IMG}/gallery-de9bb1da89.webp`, alt: "Glasklares Wasser zum Baden in der Region Hollersbach" },
    },
    {
      title: "Berge zum Greifen nah",
      text: "Vom Hollersbachtal bis auf die Gipfel: schier endlose Touren, Wanderwege und frische Bergluft im Salzburger Land.",
      image: { src: `${IMG}/gallery-d24872a9a3.webp`, alt: "Bergsommer in den Hohen Tauern bei Hollersbach" },
    },
  ],

  usps: [
    "30 Stellplätze",
    "Hundefreundlich",
    "Neuer Sanitärbereich 2025",
    "Kinderspielplatz",
    "Gratis WLAN",
    "Nah am Badesee",
  ],

  trust: {
    heading: "Klein, aber mit großer Geschichte",
    headingEmphasis: "großer Geschichte",
    intro:
      "Seit den 60er Jahren wird in Hollersbach gecampt. 2023 haben Eva & Hanspeter den Familienplatz wieder zum Leben erweckt — mit frisch renoviertem Sanitärbereich und der Herzlichkeit, die hier seit jeher zu Hause ist.",
  },

  awards: [],

  saison: { von: "Jänner", bis: "Oktober" },

  hero: {
    aerial: {
      src: `${IMG}/gallery-73b2a83228.webp`,
      alt: "Luftbild: Dorf Hollersbach mit Badesee vor den Hohen Tauern",
    },
  },

  breather: {
    image: { src: `${IMG}/gallery-ede77a0d3e.webp`, alt: "Grünes Tal mit schneebedeckten Gipfeln im Pinzgau" },
    line: "Inmitten der Berge des Salzburger Landes.",
  },

  camping: {
    heading: "Dein Platz am Dorfrand",
    intro:
      "30 ebene Stellplätze für Zelt, Wohnwagen, Wohnmobil und Campervan — Sommer wie Winter, mit dem ganzen Pinzgau direkt vor der Tür.",
    features: [
      {
        title: "Wandern im Hollersbachtal",
        text: "Für Naturfreunde bietet das Hollersbachtal im Gebiet der Hohen Tauern schier keine Grenzen an Touren und Wanderwegen.",
        image: { src: `${IMG}/gallery-adc0942470.webp`, alt: "Wandernde auf einem Bergweg im Hollersbachtal" },
      },
      {
        title: "Winterzauber & Skispaß",
        text: "Skifahren, Langlauf, Rodeln, Eislaufen oder Schneeschuhwandern — der Einstieg ins Skigebiet führt direkt über die Panoramabahn.",
        image: { src: `${IMG}/gallery-0f1a6de2c7.webp`, alt: "Verschneites Hollersbach mit beleuchteter Skipiste in der blauen Stunde" },
      },
      {
        title: "Mittendrin im Dorf",
        text: "Camping Maria liegt eingebettet im blühenden Dorf Hollersbach — kurze Wege, ruhige Lage und die Skibushaltestelle gleich nebenan.",
        image: { src: `${IMG}/gallery-1fe8320ee0.webp`, alt: "Hollersbach im Pinzgau aus der Luft im Winterkleid" },
      },
    ],
  },

  anreise: {
    heading: "Dein Weg ins Pinzgau",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die Tauern Autobahn A10 bis Bischofshofen, dann auf der B311 durchs Pinzgau bis Hollersbach — Parkplatz direkt am Platz (Bankomat nebenan).",
      },
      {
        title: "Mit der Bahn",
        text: "Bis Zell am See, weiter mit der Pinzgauer Lokalbahn bis Hollersbach im Pinzgau — von dort sind es nur wenige Minuten zum Platz.",
      },
      {
        title: "Mit dem Flugzeug",
        text: "Der Flughafen Salzburg liegt rund 1,5 Stunden entfernt, Innsbruck etwa 2 Stunden — beide gut über die Tauernrouten erreichbar.",
      },
    ],
  },

  galerie: {
    heading: "Hollersbach in Bildern",
    headingEmphasis: "Bildern",
    intro: "Von der ersten Stunde bis heute — ein paar Eindrücke vom Platz, dem Dorf und der verschneiten Bergwelt rundherum.",
    tag: "damals & heute",
    images: [
      { src: `${IMG}/gallery-8eae595d1c.webp`, alt: "Historische Ansichtskarte vom Camping Hollersbach" },
      { src: `${IMG}/gallery-85b65e6b4e.webp`, alt: "Alte Aufnahme: musizierende Großmutter im Wohnwagen" },
      { src: `${IMG}/gallery-2ce7128c7c.webp`, alt: "Tief verschneite Wälder und Bachlauf rund um Hollersbach" },
    ],
  },

  booking: {
    heading: "Bereit für deinen Urlaub bei Camping Maria?",
    headingEmphasis: "bei Camping Maria",
    intro: "Wähle Zeitraum und Stellplatz — Eva & Hanspeter melden sich persönlich mit deiner Verfügbarkeit.",
    pricesArePlaceholder: false,
    priceNote:
      "Vorsaison-ab-Preise · 2 Personen inkl. Orts- & Nächtigungsabgabe, Umwelt- & Mobilitätspauschale und Duschen · 6 kWh Strom/Tag inkl. · Cash only",
    highlight: { title: "Direkt am Nationalpark", text: "Wandern, Baden und Skifahren beginnen praktisch an deinem Stellplatz." },
    categories: [
      { id: "stellplatz-a", label: "Stellplatz A · Auto/Dachzelt, kl. Zelt + PKW", perNight: 42.5, perExtraGuest: 12 },
      { id: "stellplatz-b", label: "Stellplatz B · Wohnmobil, Campervan, gr. Zelt", perNight: 44.2, perExtraGuest: 12 },
      { id: "stellplatz-c", label: "Stellplatz C · Wohnmobil/Wohnwagen + PKW", perNight: 46.7, perExtraGuest: 12 },
    ],
  },

  kontakt: {
    tel: "+43 664 9257665",
    telHref: "tel:+436649257665",
    mail: "info@campingmaria.at",
    facebook: "https://www.facebook.com/HollersbacherDorfcamping/?locale=de_DE",
    adresse: "Hollersbach 6 · 5731 Hollersbach im Pinzgau · Österreich",
    coords: { lat: 47.2739393, lng: 12.4203844 },
  },

  story: {
    kicker: "Unsere Geschichte",
    heading: "50 Jahre Camping Maria",
    intro:
      "Eine Familiengeschichte aus dem Pinzgau — von den Anfängen in den 60er Jahren über Maria & Robert bis zum Neubeginn 2023.",
    chapters: [
      {
        no: "01",
        kicker: "Die Anfänge",
        title: "Eine Kuh namens Spike",
        text: "In den 60er Jahren graste hier noch die Hauskuh Spike. Bis Fritz, der Lebensgefährte von Großmutter Zita, meinte: Lass uns einen Campingplatz eröffnen. So fingen die Vorfahren an, Gäste willkommen zu heißen.",
        image: { src: `${IMG}/gallery-539832219a.webp`, alt: "Sepia-Aufnahme einer Kuh im verschneiten Hollersbach der 60er Jahre" },
      },
      {
        no: "02",
        kicker: "Herzlichkeit",
        title: "Maria & Robert",
        text: "Als Maria & Robert Etzelsberger den Camping übernahmen, war Maria der Sonnenschein und die gute Seele des Platzes — und Roberts Werkstatt voller Motorräder und klassischer Musik. Beide bleiben unvergessen.",
        image: { src: `${IMG}/gallery-b4573fa92d.webp`, alt: "Porträt von Maria und Robert Etzelsberger" },
      },
      {
        no: "03",
        kicker: "Neubeginn 2023",
        title: "Eva & Hanspeter packen an",
        text: "Im Frühjahr 2023 haben Eva & Hanspeter mit ihren Kindern, Hund Bailey und der Kaninchenfamilie den Platz wieder zum Leben erweckt — Ende 2025 kam ein moderner, barrierefreier Sanitärbereich dazu.",
        image: { src: `${IMG}/gallery-8d1a7fe1bd.webp`, alt: "Die Familie von Camping Maria auf der Wiese am Platz" },
      },
    ],
  },

  languages: ["DE"],

  nav: [
    { label: "Der Platz", href: "#camping", children: [
      { label: "Stellplätze", href: "#camping" },
      { label: "Lage", href: "#camping" },
    ]},
    { label: "Geschichte", href: "#story" },
    { label: "Galerie", href: "#galerie" },
    { label: "Preise & Anreise", href: "#booking", children: [
      { label: "Preise", href: "#booking" },
      { label: "Anreise", href: "#anreise" },
    ]},
    { label: "Kontakt", href: "#kontakt" },
  ],
};

export default campingmaria;
