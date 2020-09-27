const weightLimit = '100';
const memberCount = '5';
let count = 0;
let totalWeight = 0;

for(let i = 0; i < memberCount; i++) {
  totalWeight = totalWeight + parseInt('50', 10);
  if(totalWeight <= weightLimit) {
    count++;
  }
}

console.log(totalWeight);
console.log(count);