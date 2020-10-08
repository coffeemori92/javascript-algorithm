const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

const result = [];

for(let i = 0; i < a.length; i++) {
  result.push([a[i], b[i]]);
}

for(let i = 0; i < result.length; i++) {
  if((i + 1) % 2 === 0) {
    result[i].reverse();
  }
}

console.log(result);