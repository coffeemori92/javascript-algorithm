// 입력
// yujin Hyewon
// 70 100

const students = ['Yujin', 'Hyewon'];
const scores = [70, 100];
let obj = {};

for(let i = 0; i < students.length; i++) {
  obj[students[i]] = scores[i];
}

console.log(obj);