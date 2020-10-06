const userInput = '18234'.split('').map(x => parseInt(x, 10));
console.log(userInput);

let sum = 0;
for(i in userInput) {
  sum += userInput[i];
}
console.log(sum);