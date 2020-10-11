const userInput = '93'.split('');

function solution(n) {
  let answer = 0;
  let count = 1;
  const obj = {3: 1, 6: 2, 9: 3};
  
  while(n.length) {
    answer += obj[parseInt(n.pop(), 10)] * count;
    count *= 3;
  }
  return answer;
}

console.log(solution(userInput));