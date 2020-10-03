const a = ['a', 'b', 'c', 'd'];
const n = 59;

function solution(n) {
  let people = 0;
  let totalHandShake = 0;
  let temp = 0;
  while(true) {
    totalHandShake = parseInt((people * (people - 1) / 2, 10));
    if(n < totalHandShake) {
      break;
    }
    temp = totalHandShake;
    people += 1;
  }
  return temp;
}

console.log(solution(n));