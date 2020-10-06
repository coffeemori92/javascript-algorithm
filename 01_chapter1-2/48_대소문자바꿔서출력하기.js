const userInput = 'AAABBBcccddd'.split('');
console.log(userInput);

for(i in userInput) {
  if(userInput[i] === userInput[i].toUpperCase()) {
    //console.log(userInput[i], userInput[i].toLowerCase());
    userInput[i] = userInput[i].toLowerCase();
    continue;
  }
  if(userInput[i] === userInput[i].toLowerCase()) {
    //console.log(userInput[i], userInput[i].toUpperCase());
    userInput[i] = userInput[i].toUpperCase();
  }
}

console.log(userInput.join(''));