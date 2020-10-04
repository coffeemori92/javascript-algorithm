const socres = '25 30 40'.split(' ');
const socresNum = socres.map(x => parseInt(x, 10));
console.log(socresNum);

let sum = 0;
for(v of socresNum) {
  sum += v;
}

console.log(Math.floor(sum / socresNum.length));