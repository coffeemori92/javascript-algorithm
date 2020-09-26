// 입력 20, 30, 40
// 출력 30

const score = prompt().split(' ');
let sum = 0;

for(let i = 0; i < score.length; i++) {
  sum = sum + parseInt(score[i], 10);
}

// Math.floor : 주어진 값보다 이하의 가장 큰 정수를 반환
console.log(Math.floor(sum / score.length));