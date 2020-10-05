const userInput = parseInt('5', 10);
console.log(userInput);

function 소수판별(n) {
  if(n <= 1) return 'NO';
  if(n === 2) return 'YES';
  for(i = 2; i < n; i++) {
    if(n % i !== 0) {
      return 'YES';
    }
  }
  return 'NO';
}

console.log(소수판별(userInput));