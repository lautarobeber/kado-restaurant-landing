// Contenido del restaurante "Kadō", organizado siguiendo la misma
// arquitectura de información detectada en la referencia visual (menu.png):
// Hero -> Bienvenida + galería -> Menú (tarjetas con precio) ->
// Platos insignia (bento) -> Eventos / degustación del chef -> Reservas -> CTA final.

export const galleryStrip = [
  {
    src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600&auto=format&fit=crop',
    alt: 'Cóctel de autor con guarnición cítrica',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=600&auto=format&fit=crop',
    alt: 'Salón principal de Kadō con luz cálida',
  },
  {
    src: 'https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=600&auto=format&fit=crop',
    alt: 'Plato de autor visto desde arriba',
  },
  {
    src: 'https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=600&auto=format&fit=crop',
    alt: 'Corte a la parrilla entre llamas',
  },
  {
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=600&auto=format&fit=crop',
    alt: 'Ceviche fresco de temporada',
  },
  {
    src: 'https://images.unsplash.com/photo-1541014741259-de529411b96a?q=80&w=600&auto=format&fit=crop',
    alt: 'Postre de cierre con frutos rojos',
  },
]

export const signatureMenu = [
  {
    id: 'atun',
    name: 'Atún sellado en costra de sésamo',
    description: 'Sésamo negro y blanco, palta, emulsión de soja y yuzu',
    price: 18,
    badge: 'Favorito de la casa',
    img: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'ribeye',
    name: 'Bife de chorizo a la parrilla',
    description: 'Manteca de hierbas, chimichurri ahumado, papas rústicas',
    price: 34,
    badge: 'Plato insignia',
    img: 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'vieiras',
    name: 'Vieiras selladas',
    description: 'Puré de coliflor asada, beurre noisette, panceta crocante',
    price: 26,
    badge: null,
    img: 'https://images.unsplash.com/photo-1625944230945-1b7dd3b949ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'cordero',
    name: 'Chuletas de cordero al carbón',
    description: 'Costra de romero, reducción de vino tinto, verduras de estación',
    price: 32,
    badge: 'Edición limitada',
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
  },
]

export const bentoDishes = [
  {
    id: 'risotto',
    name: 'Risotto de hongos trufados',
    price: 24,
    img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=700&auto=format&fit=crop',
    span: 'row-span-2',
  },
  {
    id: 'costillas',
    name: 'Costillas braseadas 48 h',
    price: 29,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=700&auto=format&fit=crop',
    span: '',
  },
  {
    id: 'tartaro',
    name: 'Tártaro de salmón',
    price: 19,
    img: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=700&auto=format&fit=crop',
    span: '',
  },
  {
    id: 'pasta',
    name: 'Pasta fresca al nero di seppia',
    price: 22,
    img: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=700&auto=format&fit=crop',
    span: '',
  },
  {
    id: 'ceviche',
    name: 'Ceviche de temporada',
    price: 21,
    img: 'https://images.unsplash.com/photo-1615361200141-f45961202a9d?q=80&w=700&auto=format&fit=crop',
    span: '',
  },
]

export const testimonialCards = [
  {
    id: 't1',
    quote:
      'El codillo de cerdo braseado y su maridaje con Malbec fueron una experiencia sensorial completa. Cada capa de sabor estaba pensada al detalle.',
    name: 'Sofía Ramírez',
    role: 'Comensal habitual',
    tone: 'blush',
    dish: 'Codillo braseado + copa de Malbec',
    price: 27,
  },
  {
    id: 't2',
    quote:
      'La vieira sellada con beurre noisette y el Sauvignon Blanc bien frío fueron el maridaje perfecto para cerrar la noche.',
    name: 'Martín Otero',
    role: 'Crítico gastronómico',
    tone: 'mint',
    dish: 'Vieiras selladas + copa de Sauvignon Blanc',
    price: 31,
  },
]

export const eventsInfo = {
  eyebrow: 'Eventos y menús de temporada',
  heading: 'Que no te vas a querer perder',
  text: 'Cenas a puertas cerradas, maridajes exclusivos y menús cápsula que celebran lo mejor de cada estación.',
  cta: 'Ver calendario de eventos',
}

export const chefTasting = {
  label: 'Chef',
  heading: 'Degustación de temporada del chef',
  text: 'Un recorrido guiado de 7 pasos por los mejores ingredientes de la estación, maridado con etiquetas seleccionadas.',
  price: 65,
  cta: 'Reservar degustación',
}

export const contactInfo = {
  address: 'Av. Costanera 482, Buenos Aires',
  phone: '+54 9 11 2345 6789',
  whatsapp: '5491123456789',
  email: 'reservas@kado.rest',
  hours: [
    { day: 'Martes a jueves', time: '19:00 – 23:30' },
    { day: 'Viernes y sábado', time: '19:00 – 00:30' },
    { day: 'Domingo', time: '12:30 – 16:00' },
  ],
}
