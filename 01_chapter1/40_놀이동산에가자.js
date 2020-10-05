const userInput = '50 5 20 20 20 20 20'.split(' ').map(x => parseInt(x, 10));

console.log(userInput);

function 놀이동산(userInput) {
  const limitWeight = userInput[0];
  let sum = 0;
  let count = 0;
  for(i = 2; i < userInput.length; i++) {
    if(sum > limitWeight) {
      return count === 0 ? count : count - 1;
    } else {
      sum += userInput[i];
      count++;
    }
  }
}

console.log(놀이동산(userInput));