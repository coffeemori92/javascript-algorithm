const userInput = 'aaabbbbcdded'.split('').sort();

console.log(userInput);

let count = 1;
let result = '';
for(let i = 0; i < userInput.length; i++) {
  if(userInput[i] === userInput[i + 1]) {
    count++;
  } else {
    result += userInput[i] + count;
    count = 1;
  }
}

console.log(result);