const hotel = [{
  name: '하나호텔',
  location: '제주도 제주시 001',
  price: {A: 500000, B: 300000, C: 15000},
  rooms: 50,
  reservation: 25,
  D: () => this.rooms - this.reservation
},
{
  name: '둘호텔',
  location: '제주도 제주시 001',
  price: {A: 500000, B: 300000, C: 15000},
  rooms: 100,
  reservation: 30,
  D: () => this.rooms - this.reservation
},
{
  name: '셋호텔',
  location: '제주도 제주시 001',
  price: {A: 500000, B: 300000, C: 15000},
  rooms: 120,
  reservation: 80,
  D: () => this.rooms - this.reservation
}];

// for(let i = 0; i < hotel.length; i++) {
//   if(hotel[i].name === '셋호텔') {
//     console.log(hotel[i]);
//   }
// }

console.log(hotel.filter(hotel => hotel.name === '셋호텔'));
console.log(hotel.map(h => (
  {
    name: '셋호텔',
    location: '제주도 제주시 001',
    price: {A: 500000, B: 300000, C: 15000},
    rooms: 120,
    reservation: 80,
    D: h.rooms - h.reservation
  }
)));

let hotel2 = hotel.map(h => (
  {
    name: '셋호텔',
    location: '제주도 제주시 001',
    price: {A: 500000, B: 300000, C: 15000},
    rooms: 120,
    reservation: 80,
    D: h.rooms - h.reservation
  }
));

let a = [5, 4, 3, 2, 1];
console.log(a.sort((a, b) => a - b));

console.log(hotel2.sort((a, b) => b.D - a.D));