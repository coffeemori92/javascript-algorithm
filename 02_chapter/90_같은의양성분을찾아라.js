let l = [];

for(let i = 65; i < 91; i++) {
  l.push(String.fromCharCode(i));
}

//console.log(l);

function randomItem(a) {
  let string = [];
  while(string.length !== 8) {
    let b = a[Math.floor((Math.random() * a.length))];
    if(!string.includes(b)) {
      string.push(b);
    }
  }
  let medicine = string.join('');
  return medicine;
}

let totalMedicine = [];

while(totalMedicine.length !== 100) {
  let m = randomItem(l);
  if(!totalMedicine.includes(m)) {
    totalMedicine.push(m);
  }
}


console.log(totalMedicine);

const userInput = 'ABCDEFGH 4'.split(' ');
let result = [];

for(let i of totalMedicine) {
  let setUserData = new Set(userInput[0]);
  let setMedicine = new Set(i);

  let intersection = new Set([...setUserData].filter(x => setMedicine.has(x)));
  // console.log(intersection);
  if(intersection.size === parseInt(userInput[1], 10)) {
    result.push(i);
  }
}

console.log(result);
console.log(result.length);