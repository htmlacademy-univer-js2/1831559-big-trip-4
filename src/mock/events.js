const destinations = {
  geneva: {
    city: 'Geneva',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    photos: ['img/photos/1.jpg', 'img/photos/2.jpg', 'img/photos/3.jpg', 'img/photos/4.jpg', 'img/photos/5.jpg']
  }, amsterdam: {
    city: 'Amsterdam',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    photos: ['img/photos/1.jpg', 'img/photos/2.jpg', 'img/photos/3.jpg', 'img/photos/4.jpg', 'img/photos/5.jpg']
  }, chamonix: {
    city: 'Chamonix',
    description: 'Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.',
    photos: ['img/photos/1.jpg', 'img/photos/2.jpg', 'img/photos/3.jpg', 'img/photos/4.jpg', 'img/photos/5.jpg']
  }
};

const offers = {
  taxi: [{
    'type': 'taxi',
    'name': 'Order Uber',
    'price': 20
  },
  {
    'type': 'taxi',
    'name': 'Book a local taxi',
    'price': 15
  }],
  bus: [{
    'type': 'bus',
    'name': 'Buy city bus ticket',
    'price': 5
  },
  {
    'type': 'bus',
    'name': 'Reserve express bus seat',
    'price': 12
  }],
  flight: [{
    'type': 'flight',
    'name': 'Add luggage',
    'price': 50
  },
  {
    'type': 'flight',
    'name': 'Switch to comfort',
    'price': 80
  }],
  sightseeing: [{
    'type': 'sightseeing',
    'name': 'Guided city tour',
    'price': 25
  },
  {
    'type': 'sightseeing',
    'name': 'Skip-the-line museum ticket',
    'price': 35
  }],
  drive: [
    {
      'type': 'drive',
      'name': 'Rent a car',
      'price': 50
    },
    {
      'type': 'drive',
      'name': 'Add GPS navigation',
      'price': 10
    }]
};

const mockEvents = [
  {
    type: 'taxi',
    destination: destinations.amsterdam,
    start: new Date(2019, 3, 18, 10, 30),
    end: new Date(2019, 3, 18, 11),
    price: 20,
    offers: offers.taxi
  }, {
    type: 'flight',
    destination: destinations.chamonix,
    start: new Date(2019, 3, 18, 12, 25),
    end: new Date(2019, 3, 18, 13, 35),
    price: 160,
    offers: offers.flight
  }, {
    type: 'drive',
    destination: destinations.chamonix,
    start: new Date(2019, 3, 18, 14, 30),
    end: new Date(2019, 3, 18, 16, 5),
    price: 160,
    offers: offers.drive
  }, {
    type: 'check-in',
    destination: destinations.chamonix,
    start: new Date(2019, 3, 18, 12, 25),
    end: new Date(2019, 3, 18, 13, 35),
    price: 600,
    offers: []
  }, {
    type: 'sightseeing',
    destination: destinations.chamonix,
    start: new Date(2019, 3, 19, 11, 20),
    end: new Date(2019, 3, 19, 13),
    price: 50,
    offers: offers.sightseeing
  }, {
    type: 'drive',
    destination: destinations.geneva,
    start: new Date(2019, 3, 19, 10),
    end: new Date(2019, 3, 19, 11),
    price: 20,
    offers: []
  }, {
    type: 'flight',
    destination: destinations.geneva,
    start: new Date(2019, 3, 19, 18),
    end: new Date(2019, 3, 19),
    price: 20,
    offers: offers.flight
  }, {
    type: 'drive',
    destination: destinations.geneva,
    start: new Date(2019, 3, 19, 8, 25),
    end: new Date(2019, 3, 19, 9, 25),
    price: 20,
    offers: []
  }, {
    type: 'sightseeing',
    destination: destinations.geneva,
    start: new Date(2019, 3, 20, 11, 15),
    end: new Date(2019, 3, 20, 12, 15),
    price: 180,
    offers: []
  }
];

export function getEvents() {
  return [...mockEvents];
}
