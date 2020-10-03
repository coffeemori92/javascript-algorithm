// let result = '';

// for(let i = 0; i < 10001; i++) {
//   result += i;
// }

// console.log(result.match(/8/g).length);

const user_input = 6;

function rule(answer) {
  let answerMax = Math.max(...answer);
  let result = '';
  for(let i = 1; i < answerMax; i++) {
    let re = new RegExp(i, 'g');
    let count = (answer.match(re) || []).length;
    if(count >= 1) {
      result = result + String(i) + String(count);
    }
  }
  return result;
}

function solution(n) {
  let answer = '1';
  if(n === 1) return 1;
  for(let i = 1; i < n; i++) {
    
  }
  return answer;
}

console.log(solution(user_input));