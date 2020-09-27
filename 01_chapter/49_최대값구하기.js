const arr = ['10', '9', '8', '7', '6', '5'];

const result = arr.map((n) => {
  return parseInt(n, 10);
});

console.log(result.sort((a, b) => a - b));