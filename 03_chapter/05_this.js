let hotel = [
  {
    name: '하나호텔',
    location: '제주도 제주시 00',
    price: { A: 50000, B: 30000, C: 15000 },
    rooms: 50,
    resevation: 25,
    D: function() { return this.rooms - this.resevation }
  },
  {
    name: '둘호텔',
    location: '제주도 제주시 00',
    price: { A: 50000, B: 30000, C: 15000 },
    rooms: 50,
    resevation: 25
  },
  {
    name: '셋호텔',
    location: '제주도 제주시 00',
    price: { A: 50000, B: 30000, C: 15000 },
    rooms: 50,
    resevation: 25
  }
];

console.log(hotel[0]['D']());