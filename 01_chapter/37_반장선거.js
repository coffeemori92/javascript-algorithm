const data = ['원범', '원범', '혜원', '혜원', '혜원', '혜원', '유진', '유진', '철수', '철수'];

let result = {};
let winner ='';

for(let index in data) {
  result[data[index]] = result[data[index]] === undefined
                        ? 1
                        : result[data[index]] += 1 
}

console.log(result);
console.log(Object.keys(result));
winner = Object.keys(result).reduce((a, b) => {
  console.log(a, b);
  return result[a] > result[b] ? a : b
});

console.log(winner);