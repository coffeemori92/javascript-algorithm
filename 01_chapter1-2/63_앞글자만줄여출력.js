const userInput = '복잡한 세상 편하게 살자.'.split(' ');

console.log(userInput);

let result = '';
for(let i = 0; i < userInput.length; i++) {
  result += userInput[i][0];
}

console.log(result);