let a = [10, 20, 30, 1, 2, 3, 5, 9, 11];

const reducer = (a, b) => a > b ? a : b;

console.log(a.reduce(reducer));