const userInput = '97 86 75 66 55 97 85 97 97 95'.split(' ')
                  .map(x => parseInt(x, 10))
                  .sort((a, b) => b - a);
console.log(userInput);

let count = 0;
let rank = 1;
let store = userInput[0];

for(i in userInput) {
  if(store === userInput[i]) {
    count++;
  } else {
    rank++;
    if(rank === 4) break;
    store = userInput[i];
    count++;
  }
}

console.log(count);