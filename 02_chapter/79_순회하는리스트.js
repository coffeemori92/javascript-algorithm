const l = [10, 20, 25, 27, 34, 35, 39];
const turn = 3;


function rotate(a, t) {
  let b = a.slice();
  let c = [];
  for(let i = 0; i < t; i++) {
    b.unshift(b.pop());
  }
  for(let i in b) {
    c.push(Math.abs(a[i] - b[i]));
  }
  console.log(a);
  console.log(b);
  console.log(c);

  const m = Math.min.apply(null, c);
  let index = c.indexOf(m);
  console.log(index);
  console.log(a[index], b[index]);
}

console.log(rotate(l, turn));
