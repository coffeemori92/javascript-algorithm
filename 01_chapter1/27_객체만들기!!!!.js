const names = 'Yujin Hyewon'.split(' ');
const scores = '70 100'.split(' ').map(x => parseInt(x, 10));

console.log(names, scores);

let obj = {};
for(let i in names) {
  obj[names[i]] = scores[i];
}

console.log(obj);