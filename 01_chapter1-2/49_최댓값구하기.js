const userInput = '10 9 8 7 6 5 4 3 2 17'.split(' ');
console.log(userInput);

console.log(Math.max.apply(null, userInput));