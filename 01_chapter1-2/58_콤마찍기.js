const userInput = '123456789'.split('').reverse();
const LENGTH = userInput.length;
console.log(userInput);

let acc = 0;
for(let i = 1; i < LENGTH - 1; i++) {
  if(i % 3 === 0) {
    userInput.splice(i + acc, 0, ',');
    acc++;
  }
}
console.log(userInput.reverse().join(''));