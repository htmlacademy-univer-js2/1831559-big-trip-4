const destinations = [
  {
    id: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    description: 'Chamonix, is a beautiful city, a true asian pearl, with crowded streets.',
    name: 'Chamonix',
    pictures: [
      {
        src: 'img/photos/1.jpg',
        description: 'photo 1'
      }, {
        src: 'img/photos/2.jpg',
        description: 'photo 2'
      }, {
        src: 'img/photos/3.jpg',
        description: 'photo 3'
      }, {
        src: 'img/photos/4.jpg',
        description: 'photo 4'
      }, {
        src: 'img/photos/5.jpg',
        description: 'photo 5'
      } 
    ]
  }, {
    id: 'e96bad49-e3d9-41cb-bf6b-560dd553083f',
    description: 'Amsterdam - City of canals, culture and infinite charm. Amsterdam. Capital of the Netherlands. With its famously scenic canals, rich history and iconic cultural scene, Amsterdam is one of the world\'s most vibrant cities.',
    name: 'Amsterdam',
    pictures: [
      {
        src: 'img/photos/1.jpg',
        description: 'photo 1'
      }, {
        src: 'img/photos/2.jpg',
        description: 'photo 2'
      }, {
        src: 'img/photos/3.jpg',
        description: 'photo 3'
      }, {
        src: 'img/photos/4.jpg',
        description: 'photo 4'
      }, {
        src: 'img/photos/5.jpg',
        description: 'photo 5'
      }
    ]
  }, {
    id: 'dd739c4b-b7be-48bf-a53b-ef23d9efff27',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    name: 'Geneva',
    pictures: [
      {
        src: 'img/photos/1.jpg',
        description: 'photo 1'
      }, {
        src: 'img/photos/2.jpg',
        description: 'photo 2'
      }, {
        src: 'img/photos/3.jpg',
        description: 'photo 3'
      }, {
        src: 'img/photos/4.jpg',
        description: 'photo 4'
      }, {
        src: 'img/photos/5.jpg',
        description: 'photo 5'
      }
    ]
  }
];

// offers ипользуются по id
// eslint-disable-next-line no-unused-vars
const offers = [{
  type: 'taxi',
  offers: [{
    id: 'c088d9d5-fe0b-4a33-80ac-cd3fc7d470e4',
    title: 'Order Uber',
    price: 20
  }, {
    id: '81adca7b-a088-4a9b-a1c5-6718b5a741ad',
    title: 'Book a local taxi',
    price: 15
  }]
}, {
  type: 'bus',
  offers: [{
    id: '0318e75f-082b-49d7-8d82-62dde141f8a0',
    title: 'Buy city bus ticket',
    price: 5
  }, {
    id: '15bc4b0c-840c-44c9-9c10-3cd55cfe4528',
    title: 'Reserve express bus seat',
    price: 12
  }]
}, {
  type: 'flight',
  offers: [{
    id: '1b5907f3-b04e-4c41-9855-b2b192f11531',
    title: 'Add luggage',
    price: 50
  }, {
    id: '7d6495e9-ead4-4cb7-a520-3deaa3db16e9',
    title: 'Switch to comfort',
    price: 80
  }]
}, {
  type: 'sightseeing',
  offers: [{
    id: '0fb0a3bd-30f1-4d55-84f6-fb05d684c47b',
    title: 'Guided city tour',
    price: 25
  }, {
    id: 'bf6f4a32-46cc-4bd4-8676-c2aef7755594',
    title: 'Skip-the-line museum ticket',
    price: 35
  }]
}, {
  type: 'drive',
  offers: [{
    id: 'c824a0be-96ec-4bb3-814e-1471782a98b2',
    title: 'Rent a car',
    price: 50
  }, {
    id: 'c3076640-0690-4a66-a2d2-df67dc869b03',
    title: 'Add GPS navigation',
    price: 10
  }]
}];

const mockEvents = [
  {
    id: '76a5b90e-be6e-4717-9700-12a866ec8286',
    type: 'taxi',
    destination: 'e96bad49-e3d9-41cb-bf6b-560dd553083f',
    dateFrom: new Date(2019, 3, 18, 10, 30),
    dateTo: new Date(2019, 3, 18, 11),
    isFavorite: false,
    basePrice: 20,
    offers: ['c088d9d5-fe0b-4a33-80ac-cd3fc7d470e4']
  }, {
    id: '5bfb7b62-1f00-4d29-a314-87cd8ae471f9',
    type: 'flight',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    dateFrom: new Date(2019, 3, 18, 12, 25),
    dateTo: new Date(2019, 3, 18, 13, 35),
    basePrice: 160,
    isFavorite: true,
    offers: ['1b5907f3-b04e-4c41-9855-b2b192f11531', '7d6495e9-ead4-4cb7-a520-3deaa3db16e9']
  }, {
    id: 'f5038dbf-8d0c-4bc2-a582-eba11e199693',
    type: 'drive',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    dateFrom: new Date(2019, 3, 18, 14, 30),
    dateTo: new Date(2019, 3, 18, 16, 5),
    basePrice: 160,
    isFavorite: true,
    offers: ['c824a0be-96ec-4bb3-814e-1471782a98b2']
  }, {
    id: 'e904679c-ada5-4981-b1c9-19d8120f5f83',
    type: 'check-in',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    dateFrom: new Date(2019, 3, 18, 12, 25),
    dateTo: new Date(2019, 3, 18, 13, 35),
    basePrice: 600,
    isFavorite: false,
    offers: []
  }, {
    id: '7971767e-f36d-4555-88fb-523a87177cb5',
    type: 'sightseeing',
    destination: 'cfe416cq-10xa-ye10-8077-2fs9a01edcab',
    dateFrom: new Date(2019, 3, 19, 11, 20),
    dateTo: new Date(2019, 3, 19, 13),
    basePrice: 50,
    isFavorite: false,
    offers: ['0fb0a3bd-30f1-4d55-84f6-fb05d684c47b', 'bf6f4a32-46cc-4bd4-8676-c2aef7755594']
  }, {
    id: '8a6f994e-5164-4d7c-b838-e38af484ffca',
    type: 'drive',
    destination: destinations.geneva,
    dateFrom: new Date(2019, 3, 19, 10),
    dateTo: new Date(2019, 3, 19, 11),
    basePrice: 20,
    isFavorite: true,
    offers: []
  }, {
    id: 'd752002b-8da5-4f79-9e31-cd6020be3847',
    type: 'flight',
    destination: destinations.geneva,
    dateFrom: new Date(2019, 3, 19, 18),
    dateTo: new Date(2019, 3, 19),
    basePrice: 20,
    isFavorite: false,
    offers: ['7d6495e9-ead4-4cb7-a520-3deaa3db16e9']
  }, {
    id: '9a7b5cf5-1b82-44c5-b5dd-32610c6e3363',
    type: 'drive',
    destination: destinations.geneva,
    dateFrom: new Date(2019, 3, 19, 8, 25),
    dateTo: new Date(2019, 3, 19, 9, 25),
    basePrice: 20,
    isFavorite: false,
    offers: []
  }, {
    id: '05a3fbea-c0ac-462e-bd9c-7bd72e16321e',
    type: 'sightseeing',
    destination: destinations.geneva,
    dateFrom: new Date(2019, 3, 20, 11, 15),
    dateTo: new Date(2019, 3, 20, 12, 15),
    basePrice: 180,
    offers: ['0fb0a3bd-30f1-4d55-84f6-fb05d684c47b']
  }
];

export function getEvents() {
  return [...mockEvents];
}

export function getDestinationById(id) {
  return destinations.find((destination) => destination.id === id);
}

export function getOfferByTypeAndId(type, id) {
  const filteredOffersByType = offers.find((offer) => offer.type === type && offer.offers.length > 0);

  return filteredOffersByType.offers.find((offer) => offer.id === id);
}

export function getOffersVariantsByType(type) {
  const existedOffer = offers.find((offer) => offer.type === type);
  if (existedOffer) {
    return existedOffer.offers;
  }
  return [];
}


