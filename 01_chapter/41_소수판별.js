const number = 1;

const primeFunc = n => {
  if(n === 1) {
    return console.log('No');
  }
  for(let i = 2; i < n; i++) {
    if(n % i === 0) {
      console.log('No');
    }
  }
  console.log('Yes');
};

primeFunc(number);