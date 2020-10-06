const userInput = 'ABCDEFG';

const n = 25 + parseInt((userInput.length / 2), 10);
console.log(n);

const left = userInput.padStart(n, '=');
console.log(left);
console.log(left.length);

const right = left.padEnd(50, '=');
console.log(right);
console.log(right.length);