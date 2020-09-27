let x = 11;
let result = '';

while(true) {
  if(x % 2 === 0) {
    result += '0';
  } else {
    result += '1';
  }
  x = Math.floor(x / 2);
  if(x === 1 || x === 0) {
    result += String(x);
    break;
  }
}

console.log(result.split('').reverse().join(''));

function 이진법(number) {
  if(number === 1 || number === 0) return String(number);
  return 이진법(Math.floor(number / 2)) + String(number % 2);
}

console.log(이진법(11));
