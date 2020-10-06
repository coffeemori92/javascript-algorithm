const number = '10 2'.split(' ').map(x => parseInt(x, 10));

const 몫 = Math.floor(number[0] / number[1]);
const 나머지 = number[0] % number[1]

console.log(몫);
console.log(나머지);