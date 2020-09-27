let a = 1;
let b = 1;

for(let i = 0; i < 6; i++) {
  let c = a + b;
  a = b;
  b = c;
}

console.log(b);

function fibonacci(number) {
  if(number === 1 || number === 2) return 1;
  return fibonacci(number - 1) + fibonacci(number - 2);
}

console.log(fibonacci(7));