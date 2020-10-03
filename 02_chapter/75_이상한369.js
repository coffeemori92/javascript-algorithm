function solution(n) {
  let answer = 0;
  let count = 1;
  const obj = {
    3: 1,
    6: 2,
    9: 3,
  };
  while(n.length !== 0) {
    answer += obj[parseInt(n.pop(), 10)]*count;
    count *= 3;
  }
  return answer;
}

const user_input = '93'.split('');

console.log(solution(user_input));