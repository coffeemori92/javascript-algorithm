let primeNumber = [];
let judgePrimeNumber = true;

for(let i = 2; i < 101; i++) {
  for(let j = 2; j < i; j++) {
    if(i % j === 0) {
      judgePrimeNumber = false;
    }
  }
  if(judgePrimeNumber) {
    primeNumber.push(i);
  }
  judgePrimeNumber = true;
}

console.log(primeNumber);

const num = 100;
let turn = 0;
let store = [];
for(let n of primeNumber) {
  if(primeNumber.includes(num - n)) {
    store.push([n, num -n]);
  }
  if(turn > parseInt(primeNumber.length / 2, 10)) break;
  turn++;
}

console.log(store);

let gap = store.map(e => e[1] - e[0]);
console.log(gap);
const minGapIndex = gap.indexOf(Math.min.apply(null, gap));
console.log(store[minGapIndex]);