import type { TripSource } from "./trips";

export const tripsEs: TripSource[] = [
  {
    id: "palau",
    slug: "palaos",
    country: "Palaos",
    title: "Mantas, pecios y las Rock Islands",
    route: "Koror · Rock Islands · Babeldaob",
    duration: "10 días",
    season: "De noviembre a abril",
    seasonShort: "Nov – abr",
    seasonWhy: ["El mar suele estar más calmado.", "La visibilidad es excelente."],
    tags: ["Buceo y snorkel", "Conservación marina", "Selva tropical"],
    summary:
      "Canales de mantas, pecios de la Segunda Guerra Mundial, un lago de medusas doradas y la selva de Babeldaob.",
    intro: [
      "Una ruta de 10 días por Palaos centrada en la naturaleza y la fauna, entre cientos de islotes de piedra caliza cubiertos de selva que emergen de una laguna turquesa.",
      "Esta ruta combina algunos de los mejores puntos de buceo del planeta, paisajes únicos, selva tropical y proyectos de conservación marina, ofreciendo una experiencia muy completa para los amantes de la naturaleza.",
    ],
    hero: "palau/hero",
    stages: [
      {
        days: "Días 1–2",
        place: "España → Koror",
        title: "Cruzando el Pacífico",
        photo: "palau/koror",
        schedule: [
          {
            label: "Día 1",
            title: "Salida desde España",
            items: [
              "Vuelo desde España con destino a Palaos (normalmente con escalas en Asia).",
              "Noche en vuelo.",
            ],
          },
          {
            label: "Día 2",
            title: "Llegada a Koror",
            items: [
              "Llegada a Koror y traslado al alojamiento.",
              "Paseo por el puerto al atardecer.",
              "Visita al mercado local si el horario lo permite.",
              "Descanso para adaptarse al clima.",
            ],
          },
        ],
      },
      {
        days: "Días 3–5",
        place: "Rock Islands · German Channel · Blue Corner",
        title: "La laguna y el arrecife abierto",
        photo: "palau/manta",
        schedule: [
          {
            label: "Día 3",
            title: "Rock Islands",
            items: [
              "Tour de día completo por las Rock Islands Southern Lagoon.",
              "Kayak entre islotes.",
              "Snorkel en arrecifes.",
              "Picnic en una playa desierta.",
            ],
          },
          {
            label: "Día 4",
            title: "Mantas y arrecifes",
            items: [
              "Buceo o snorkel en German Channel para observar mantarrayas.",
              "Segunda inmersión en Blue Corner, considerado uno de los mejores puntos de buceo del mundo.",
            ],
          },
          {
            label: "Día 5",
            title: "Pecios de la Segunda Guerra Mundial",
            items: [
              "Buceo o snorkel entre barcos y aviones hundidos de la Segunda Guerra Mundial.",
              "Tarde libre en Koror.",
            ],
          },
        ],
      },
      {
        days: "Días 6–7",
        place: "Biota Palau · Jellyfish Lake",
        title: "Granjas de coral y medusas doradas",
        photo: "palau/jellyfish",
        schedule: [
          {
            label: "Día 6",
            title: "Granja de peces y corales Biota",
            items: [
              "Visita a Biota Palau y recorrido por sus instalaciones de reproducción de peces ornamentales y corales.",
              "Explicación sobre acuicultura, restauración de arrecifes y conservación marina.",
              "Snorkel en un arrecife cercano para observar la biodiversidad marina.",
              "Regreso a Koror.",
            ],
          },
          {
            label: "Día 7",
            title: "Lago de las medusas",
            items: [
              "Visita al Jellyfish Lake (si está abierto al público).",
              "Snorkel con millones de medusas doradas no urticantes.",
              "Snorkel adicional en lagunas cercanas.",
            ],
          },
        ],
      },
      {
        days: "Días 8–9",
        place: "Ngardmau · Long Beach · Milky Way",
        title: "Cascadas, bancos de arena y barro blanco",
        photo: "palau/ngardmau",
        schedule: [
          {
            label: "Día 8",
            title: "Cascada de Ngardmau",
            items: [
              "Excursión a Ngardmau Waterfall.",
              "Senderismo por la selva tropical.",
              "Baño en la cascada.",
            ],
          },
          {
            label: "Día 9",
            title: "Long Beach y Milky Way",
            items: [
              "Paseo por Long Beach (visible solo con marea baja).",
              "Baño de barro natural en Milky Way.",
              "Snorkel en arrecifes cercanos.",
            ],
          },
        ],
      },
      {
        days: "Día 10",
        place: "Koror → España",
        title: "Regreso a casa",
        photo: "palau/rock",
        items: ["Traslado al aeropuerto.", "Vuelo de regreso a España."],
      },
    ],
    fauna: [
      { name: "Manta oceánica", photo: "palau/fauna-manta" },
      { name: "Tiburón gris de arrecife", photo: "palau/fauna-greyreef" },
      { name: "Bancos de barracudas y jureles", photo: "palau/fauna-jacks" },
      { name: "Corales duros y blandos", note: "En una gran diversidad", photo: "palau/fauna-coral" },
      { name: "Tiburón punta negra de arrecife" },
      { name: "Tiburón punta blanca de arrecife" },
      { name: "Nautilo", note: "En excursiones especializadas" },
      { name: "Tortuga verde" },
      { name: "Tortuga carey" },
      { name: "Dugongo", note: "Muy difícil de observar" },
      { name: "Medusa dorada" },
      { name: "Delfín girador" },
      { name: "Pez mandarín" },
      { name: "Pez loro gigante" },
    ],
  },
  {
    id: "indonesia",
    slug: "indonesia",
    country: "Indonesia",
    title: "Orangutanes, estorninos y dragones",
    route: "Borneo · Bali · Komodo",
    duration: "10 días",
    season: "De abril a junio y de septiembre a noviembre",
    seasonShort: "Abr – jun · sep – nov",
    seasonWhy: [
      "La mejor combinación de clima y observación de fauna.",
      "Buenas condiciones para el buceo.",
    ],
    tags: [
      "Orangutanes",
      "Conservación",
      "Reptiles nocturnos",
      "Estornino de Bali",
      "Dragones de Komodo",
      "Mantas",
      "Buceo",
    ],
    summary:
      "La rehabilitación de orangutanes en Borneo, la recuperación del estornino de Bali y dos días en barco por el Parque Nacional de Komodo.",
    intro: [
      "Este itinerario reúne tres de las experiencias naturales más espectaculares de Indonesia: la conservación de orangutanes en Borneo, el estornino de Bali y una travesía de dos días por el Parque Nacional de Komodo.",
      "En Komodo recorremos Komodo, Rinca, Pink Beach y Manta Point, y pasamos una noche a bordo bajo las estrellas junto a la espectacular salida de miles de zorros voladores.",
    ],
    hero: "indonesia/hero",
    stages: [
      {
        days: "Días 1–3",
        place: "Parque Nacional Tanjung Puting (Borneo)",
        title: "Río arriba hasta Camp Leakey",
        photo: "indonesia/orangutan",
        items: [
          "Crucero en klotok por la selva.",
          "Visita a Camp Leakey para conocer los proyectos de conservación y rehabilitación del orangután de Borneo.",
          "Observación de orangutanes en libertad.",
          "Avistamiento de mono narigudo, gibones, macacos y cálaos.",
          "Caminatas guiadas por la selva.",
          "Salida nocturna de herping para buscar la víbora de foseta de Wagler, el gecko tokay, el lagarto volador, la rana voladora de Wallace y otras serpientes, ranas e invertebrados tropicales.",
        ],
      },
      {
        days: "Días 4–6",
        place: "Bali",
        title: "El regreso del estornino de Bali",
        photo: "indonesia/starling",
        items: [
          "Visita al Sacred Monkey Forest Sanctuary.",
          "Visita a la Begawan Foundation para conocer el programa de recuperación del estornino de Bali.",
          "Excursión al Parque Nacional de Bali Occidental para intentar observar ejemplares reintroducidos en libertad.",
          "Buceo o snorkel en Menjangan Island.",
        ],
      },
      {
        days: "Días 7–10",
        place: "Parque Nacional de Komodo",
        title: "Dragones, mantas y una noche en cubierta",
        photo: "indonesia/komodo",
        schedule: [
          {
            label: "Día 7",
            title: "Labuan Bajo",
            items: [
              "Llegada a Labuan Bajo (Flores).",
              "Tarde libre para recorrer el puerto y el pueblo.",
              "Noche en hotel en Labuan Bajo.",
            ],
          },
          {
            label: "Día 8",
            title: "Isla de Komodo",
            items: [
              "Salida en barco hacia el Parque Nacional de Komodo.",
              "Trekking por la isla de Komodo para observar el dragón de Komodo.",
              "Snorkel en Pink Beach.",
              "Al atardecer, parada en Kalong Island para contemplar la salida de miles de zorros voladores.",
              "Noche durmiendo en la cubierta del barco.",
            ],
          },
          {
            label: "Día 9",
            title: "Rinca y Manta Point",
            items: [
              "Trekking por la isla de Rinca para observar dragones de Komodo.",
              "Snorkel en Manta Point con posibilidad de observar la manta oceánica.",
              "Regreso en barco a Labuan Bajo y noche en hotel.",
            ],
          },
          {
            label: "Día 10",
            title: "Regreso",
            items: ["Vuelo de regreso hacia Europa."],
          },
        ],
      },
    ],
    fauna: [
      { name: "Orangután de Borneo", photo: "indonesia/fauna-orangutan" },
      { name: "Mono narigudo", photo: "indonesia/fauna-proboscis" },
      { name: "Víbora de foseta de Wagler", photo: "indonesia/fauna-wagler" },
      { name: "Dragón de Komodo", photo: "indonesia/fauna-komodo" },
      { name: "Cálaos y otras aves de la selva" },
      { name: "Rana voladora de Wallace" },
      { name: "Estornino de Bali" },
      { name: "Manta oceánica" },
      { name: "Tiburones de arrecife" },
      { name: "Tortugas marinas" },
    ],
  },
  {
    id: "honduras",
    slug: "honduras",
    country: "Honduras",
    title: "Tiburones ballena e iguanas isleñas",
    route: "Roatán · Utila · Cayos Cochinos",
    duration: "10 días",
    season: "Agosto y septiembre",
    seasonShort: "Ago – sep",
    seasonWhy: [
      "La mayor probabilidad de avistar tiburón ballena en Utila.",
      "Excelentes condiciones para el buceo, el snorkel y la exploración de los arrecifes y Cayos Cochinos.",
    ],
    tags: ["Buceo en arrecife", "Tiburón ballena", "Herpetología", "Conservación de iguanas"],
    summary:
      "Arrecifes del Caribe, tiburones ballena en Utila y trabajo de campo con los equipos que protegen la iguana de Utila y la boa rosada.",
    intro: [
      "Diez días por las Islas de la Bahía de Honduras, en el Sistema Arrecifal Mesoamericano. Buceamos entre tiburones de arrecife del Caribe, salimos en busca del tiburón ballena en Utila y recorremos bosques y manglares tras reptiles que no existen en ningún otro lugar del mundo.",
      "En Utila acompañamos a los equipos de conservación que trabajan con la iguana de Utila, en peligro crítico de extinción, y en Cayos Cochinos buscamos su famosa boa rosada.",
    ],
    hero: "honduras/hero",
    stages: [
      {
        days: "Días 1–3",
        place: "Roatán",
        title: "Arrecifes, jardines y una noche en el bosque",
        photo: "honduras/roatan",
        schedule: [
          {
            label: "Día 1",
            title: "Llegada",
            items: ["Llegada a Roatán.", "Descanso y primer contacto con la isla."],
          },
          {
            label: "Día 2",
            title: "La barrera coralina",
            items: [
              "Buceo o snorkel en la barrera coralina.",
              "Avistamiento de tiburón de arrecife del Caribe y tiburón nodriza.",
              "Senderismo por Carambola Botanical Gardens.",
            ],
          },
          {
            label: "Día 3",
            title: "Un día con un herpetólogo",
            items: [
              "Jornada completa con un guía local experto en fauna y herpetología.",
              "Exploración de bosque seco, selva secundaria, manglares y zonas costeras.",
              "Búsqueda de aves, reptiles, anfibios e invertebrados, e interpretación de la biodiversidad de Roatán.",
              "Al anochecer, sesión de herping nocturno en busca de serpientes, ranas, geckos y anolis.",
            ],
          },
        ],
      },
      {
        days: "Días 4–7",
        place: "Utila",
        title: "El tiburón ballena y la iguana de Utila",
        photo: "honduras/whaleshark",
        schedule: [
          {
            label: "Día 4",
            title: "Utila",
            items: ["Traslado a Utila.", "Buceo y snorkel en los arrecifes de la isla."],
          },
          {
            label: "Día 5",
            title: "Tiburón ballena",
            items: [
              "Salida en busca del tiburón ballena (según la temporada).",
              "Segunda inmersión o snorkel.",
            ],
          },
          {
            label: "Día 6",
            title: "Centros de investigación",
            items: [
              "Visita a Kanahau Utila Research & Conservation Facility.",
              "Visita a Utila Iguana Research & Breeding Station.",
              "Conocer los programas de reproducción, investigación y conservación de la iguana de Utila.",
            ],
          },
          {
            label: "Día 7",
            title: "Los manglares",
            items: [
              "Recorrido por los manglares junto a los equipos de conservación.",
              "Monitoreo de la población silvestre de iguanas y, si el programa lo permite, liberación de las crías criadas ese año.",
              "Al anochecer, buceo nocturno.",
            ],
          },
        ],
      },
      {
        days: "Días 8–9",
        place: "Cayos Cochinos",
        title: "En busca de la boa rosada",
        photo: "honduras/cochinos",
        schedule: [
          {
            label: "Día 8",
            title: "Cayos Cochinos",
            items: [
              "Traslado a Cayos Cochinos.",
              "Snorkel en arrecifes protegidos.",
              "Observación de aves marinas.",
            ],
          },
          {
            label: "Día 9",
            title: "La boa rosada",
            items: [
              "Caminata para buscar la boa rosada de Cayos Cochinos.",
              "Snorkel en diferentes arrecifes y playas vírgenes.",
              "Regreso a Roatán por la tarde.",
            ],
          },
        ],
      },
      {
        days: "Día 10",
        place: "Roatán",
        title: "Regreso a casa",
        photo: "honduras/beach",
        items: ["Vuelo de regreso."],
      },
    ],
    fauna: [
      { name: "Tiburón ballena", photo: "honduras/fauna-whaleshark" },
      {
        name: "Iguana de Utila",
        note: "Endémica y en peligro crítico de extinción",
        photo: "honduras/fauna-iguana",
      },
      { name: "Tortuga carey", photo: "honduras/fauna-hawksbill" },
      { name: "Mantarraya águila", photo: "honduras/fauna-eagleray" },
      { name: "Tiburón de arrecife del Caribe" },
      { name: "Tiburón nodriza" },
      { name: "Tortuga verde" },
      { name: "Boa rosada de Cayos Cochinos" },
      { name: "Delfines", note: "Ocasionalmente" },
      {
        name: "Pulpos, morenas, calamares y langostas",
        note: "Y una enorme diversidad de peces y corales del Caribe",
      },
    ],
  },
  {
    id: "philippines",
    slug: "filipinas",
    country: "Filipinas",
    title: "Filipinas Salvaje",
    route: "Palawan · Bohol · Ticao · Samal",
    duration: "12 días",
    season: "Marzo es ideal; de febrero a abril también es excelente",
    seasonShort: "Feb – abr",
    seasonWhy: [
      "Máxima probabilidad de mantarrayas oceánicas en Ticao Island.",
      "Buena posibilidad de avistar tiburón ballena en la misma zona.",
      "Clima generalmente seco y excelentes condiciones para el buceo.",
    ],
    tags: [
      "Conservación de cocodrilos",
      "Tarseros",
      "Mantas oceánicas",
      "Murciélagos frugívoros",
      "Almejas gigantes",
    ],
    summary:
      "Doce días por selvas, arrecifes e islas en busca de algunas de las especies más extraordinarias y amenazadas del planeta.",
    intro: [
      "Embárcate en una expedición única por algunos de los ecosistemas más fascinantes del Sudeste Asiático. Durante 12 días recorreremos selvas tropicales, arrecifes de coral e islas paradisíacas en busca de algunas de las especies más extraordinarias y amenazadas del planeta, siempre de la mano de proyectos y centros comprometidos con su conservación.",
      "Una expedición diseñada para viajeros apasionados por la fauna, que combina encuentros inolvidables con algunas de las especies más icónicas de Filipinas, paisajes espectaculares y experiencias ligadas a la conservación de la naturaleza. Un viaje donde cada destino contribuye a descubrir y proteger uno de los países con mayor biodiversidad del planeta.",
    ],
    hero: "philippines/hero",
    facts: ["4 vuelos internos"],
    stages: [
      {
        days: "Días 1–3",
        place: "Puerto Princesa (Palawan)",
        title: "Cocodrilos y el río subterráneo",
        photo: "philippines/river",
        intro:
          "La aventura comienza en Palawan, donde visitaremos un centro de conservación que protege al cocodrilo filipino, una de las especies de cocodrilo más amenazadas del mundo. Allí también conoceremos al imponente cocodrilo marino, el reptil vivo más grande del planeta. Completaremos la estancia explorando el espectacular Río Subterráneo de Puerto Princesa y los bosques de la isla, hogar de cálaos, varanos y otras especies endémicas.",
        items: [
          "Centro de conservación del cocodrilo filipino.",
          "Cocodrilo marino.",
          "Puerto Princesa Subterranean River National Park.",
          "Cálaos, varanos y monos.",
        ],
      },
      {
        days: "Días 4–6",
        place: "Bohol",
        title: "Tarseros y los arrecifes de Balicasag",
        photo: "philippines/tarsier",
        intro:
          "Continuaremos hacia Bohol, donde visitaremos un centro de conservación del tarsero filipino, uno de los primates más pequeños del mundo, para observar esta emblemática especie de forma responsable. Además, bucearemos en las aguas cristalinas de Balicasag, uno de los mejores arrecifes del país, famoso por sus abundantes tortugas marinas y enormes bancos de peces.",
        items: [
          "Centro de conservación del tarsero filipino.",
          "Buceo en Balicasag Island.",
          "Tortugas marinas y bancos de jureles.",
        ],
      },
      {
        days: "Días 7–9",
        place: "Ticao Island",
        title: "Mantas oceánicas",
        photo: "philippines/ticao",
        intro:
          "Nuestra siguiente parada será Ticao Island, uno de los secretos mejor guardados de Filipinas para los amantes del océano. Aquí realizaremos inmersiones en busca de las majestuosas mantarrayas oceánicas, con posibilidades de avistar también tiburones ballena según la temporada. Entre inmersión e inmersión, exploraremos las cascadas y piscinas naturales escondidas entre la exuberante selva tropical de la isla.",
        items: [
          "Inmersiones con mantarrayas oceánicas.",
          "Posibilidad de tiburón ballena.",
          "Excelente biodiversidad marina.",
          "Visita a las cascadas de la isla y sus piscinas naturales, rodeadas de selva tropical.",
        ],
      },
      {
        days: "Días 10–12",
        place: "Samal Island",
        title: "Murciélagos, almejas gigantes y jardines de coral",
        photo: "philippines/samal",
        intro:
          "Finalizaremos la expedición en Samal Island, donde presenciaremos la mayor colonia conocida del mundo de murciélagos frugívoros, un espectáculo natural verdaderamente impresionante. También visitaremos el Giant Clam Sanctuary, dedicado a la conservación de las almejas gigantes tropicales, y disfrutaremos de los coloridos arrecifes del Coral Garden, uno de los mejores lugares de la zona para practicar snorkel y buceo.",
        items: [
          "Monfort Bat Sanctuary, la mayor colonia conocida de murciélagos frugívoros del mundo.",
          "Giant Clam Sanctuary: conservación de almejas gigantes tropicales.",
          "Coral Garden: snorkel o buceo en uno de los arrecifes mejor conservados de la zona.",
        ],
      },
    ],
    fauna: [
      { name: "Tarsero filipino", photo: "philippines/fauna-tarsier" },
      { name: "Cocodrilo filipino", photo: "philippines/fauna-croc" },
      { name: "Manta oceánica", photo: "philippines/fauna-manta" },
      { name: "Almejas gigantes", photo: "philippines/fauna-clam" },
      { name: "Cocodrilo marino" },
      { name: "Tortugas marinas" },
      { name: "Tiburón ballena", note: "Posible en Ticao" },
      { name: "Murciélagos frugívoros", note: "La mayor colonia conocida del mundo" },
    ],
  },
];
