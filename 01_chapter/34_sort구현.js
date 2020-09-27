const str = '176 156 155 165 166 169';
let sorted = '';

console.log(str.split(' ').sort((a, b) => {
  return a - b;
}).join(' '));
