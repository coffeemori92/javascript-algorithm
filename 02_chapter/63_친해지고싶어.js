// 앞글자만 줄여 출력하는 프로그램
const s = '복잡한 세상 편하게 살자'.split(' ');
console.log(s);
let result = '';

for(let e of s) {
  console.log(e.slice(0, 1));
  result += e[0]
}

console.log(result);