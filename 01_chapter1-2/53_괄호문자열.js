const userInput = '))(('.split('');
console.log(userInput);
// ))((
// ()()))
function solution(userInput) {
  let count = 0;
  for(let i in userInput) {
    if(userInput[i] === '(') count++;
    if(userInput[i] === ')') count--;
  }
  if(count !== 0) {
    return 'NO';
  }
  let bracket = [];
  for(let i in userInput) {
    if(userInput[i] === '(') bracket.push('(');
    if(userInput[i] === ')') {
      if(bracket.length === 0) {
        return 'NO';
      }
      bracket.pop();
    }
  }
  return 'YES';
}

console.log(solution(userInput));