let primeNumber = [];
let checkPrimeNumber = false;

for(let i = 2; i < 101; i++) {
  for(let j = 2; j < i; j++) {
    if(i % j === 0) {
      checkPrimeNumber = false;
    }
  }
  if(checkPrimeNumber) {
    primeNumber.push(i);
  }
  checkPrimeNumber = true;
}

console.log(primeNumber);