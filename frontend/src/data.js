const data = [
  {
    id: 1,
    title: 'Gutmann, DuBuque and Feil',
    items: [
      {
        name: 'Pasta - Penne Primavera, Single',
        cost: 888,
      },
      {
        name: 'Shrimp - Prawn',
        cost: 105,
      },
      {
        name: 'Bay Leaf Fresh',
        cost: 443,
      },
    ],
  },
  {
    id: 2,
    title: 'Larkin, Hirthe and Parker',
    items: [
      {
        name: 'Pastry - Butterscotch Baked',
        cost: 195,
      },
      {
        name: 'Salt - Sea',
        cost: 388,
      },
      {
        name: 'Fond - Neutral',
        cost: 316,
      },
      {
        name: 'Plasticspoonblack',
        cost: 890,
      },
    ],
  },
  {
    id: 3,
    title: 'Rippin Inc',
    items: [
      {
        name: 'Bay Leaf Ground',
        cost: 397,
      },
      {
        name: 'Anchovy Fillets',
        cost: 436,
      },
      {
        name: 'Wine - Red, Harrow Estates, Cab',
        cost: 951,
      },
    ],
  },
  {
    id: 4,
    title: 'Kunde, Swift and Cartwright',
    items: [
      {
        name: 'Pepper - Chipotle, Canned',
        cost: 253,
      },
      {
        name: 'Jagermeister',
        cost: 779,
      },
      {
        name: 'Mints - Striped Red',
        cost: 850,
      },
    ],
  },
  {
    id: 5,
    title: 'Cassin Inc',
    items: [
      {
        name: 'Wine - Winzer Krems Gruner',
        cost: 304,
      },
      {
        name: 'Chocolate Bar - Reese Pieces',
        cost: 156,
      },
      {
        name: 'Cheese - Colby',
        cost: 452,
      },
      {
        name: 'Syrup - Golden, Lyles',
        cost: 346,
      },
    ],
  },
]

const getShops = () => {
  return data
}

const getShop = (number) => {
  return data.find((shop) => shop.id === number)
}

export { getShops, getShop }
