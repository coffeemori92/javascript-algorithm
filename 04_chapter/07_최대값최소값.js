let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];
a.sort((a, b) => a - b);
console.log(a);
console.log(a[0]);
console.log(a[a.length-1]);

console.log(Math.max.apply(null, a));
console.log(Math.min.apply(null, a));

let m = a[0];
for(let e of a) {
  if(e > m) m = e;
}

console.log(m);