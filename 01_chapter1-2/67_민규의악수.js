const player = ['a', 'b', 'c', 'd', '민규'];
const n = 59;

function solution(n) {
  let player = 0;
  let sumN = 0;
  let temp = 0;
  while(true) {
    sumN = parseInt((player * (player - 1)) / 2, 10);
    player += 1;
    if(n < sumN) {
      break;
    }
    temp = sumN;
  }
  return temp;
}

console.log(solution(n));