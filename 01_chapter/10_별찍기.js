// 입력 5
// 출력 5단 짜리 트리 1, 3, 5, 7, 9
const level = 5;
let tree = '';

for(let i = 1; i <= level; i++) {
  let tree = '';
  // 공백증가
  for(let k = 1; k <= level - i; k++) {
    tree = tree + ' ';
  }
  // 별증가
  for(let j = 1; j <= i * 2 - 1; j++) {
    tree = tree + '*';
  }
  console.log(tree);
}
