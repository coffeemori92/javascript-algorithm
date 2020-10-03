let n = 24;
let result = 0;

while(true) {
  if(n % 7 === 0) {
    result += parseInt(n / 7, 10);
    console.log(result);
    break;
  }
  n -= 3;
  result += 1;
  if(n < 0) {
    console.log(-1);
    break;
  }
}