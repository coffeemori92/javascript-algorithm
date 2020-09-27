let result = 0;
let x = '123123';

while(true) {
  if(x.length === 1) {
    result += parseInt(x, 10);
    break;
  }
  let y = x.split('');
  console.log(y);
  result += parseInt(y.pop(), 10);
  x = y.join('');
  console.log(x);
}

console.log(result);