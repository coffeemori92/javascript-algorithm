const originUserInput = '155 156 165 166 169 176'.split(' ').map(x => parseInt(x, 10));
const userInput = originUserInput.slice();
const sortedUserInput = userInput.sort((a, b) => a - b);

console.log(originUserInput);
console.log(sortedUserInput);

for(let i = 0; i < originUserInput.length; i++) {
  if(originUserInput[i] !== sortedUserInput[i]) {
    console.log('NO');
    break;
  }
}

console.log('YES');