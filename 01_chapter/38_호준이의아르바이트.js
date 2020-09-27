// 입력 97, 86, 75, 66, 55, 97, 85, 97, 97, 95
// 출력 6

const scores = ['97', '86', '75', '66', '55', '97', '85', '97', '97', '95'];
scores.sort((a, b) => a - b);
let score = [];
let count = 0;

while(score.length < 3) {
  let value = scores.pop();
  if(!score.includes(value)) {
    score.push(value);
  }
  count++;
}

console.log(score);
console.log(count);