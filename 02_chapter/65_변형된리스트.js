const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];

let c = a.map((e, i) => {
  if(i % 2 === 0) {
    return [e, b[i]];
  } else {
    return [b[i], e];
  }
});

console.log(c);

