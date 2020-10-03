let studentScore = [];
let classScore = [];
let totalScore = [];

for(let k = 0; k < 7; k++) {
  classScore = [];
  for(let i = 0; i < 30; i++) {
    studentScore = [];
    for(let j = 0; j < 5; j++) {
      studentScore.push(Math.floor(Math.random() * 100));
    }
    classScore.push(studentScore);
  }
  totalScore.push(classScore);
}

// console.log(studentScore);
// console.log(classScore);
// console.log(totalScore);

let totalAverage = [];
let classAverage = [];
let studentAverage = 0;
let studentSum = 0;
let classSum = 0;

for(let c of totalScore) {
  // console.log(c);
  for(let s of c) {
    studentSum = s.reduce((a, b) => a + b);
    studentAverage = studentSum / 5;
    classAverage.push(studentAverage);
  }
  totalAverage.push(classAverage.reduce((a, b) => (a + b) / 30));
  classAverage = [];
  
}
console.log(totalAverage.reduce((a, b) => (a + b) / 7));
