const userInput = '1 2 3 4 5'.split(' ')
                  .map(x => parseInt(x, 10))
                  .sort((a , b) => a - b);
console.log(userInput);

function solution(userInput) {
  for(let i = 0; i < userInput.length - 1; i++) {
    if(userInput[i] + 1 !== userInput[i + 1]) return 'NO';
  }
  return 'YES';
}

console.log(solution(userInput));
