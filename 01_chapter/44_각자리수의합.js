let number = 1234;
let sum = 0;

while(number) {
  sum = sum + number % 10;
  number = Math.floor(number / 10);
}

console.log(sum);