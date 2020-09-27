let result = '';
let x = 'leehojun';

while(true) {
  if(x.length === 1) {
    result += x;
    break;
  }
  let y = x.split('');
  result += String(y.pop());
  x = y.join('');
}

console.log(result);