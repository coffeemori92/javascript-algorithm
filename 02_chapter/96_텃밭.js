let 텃밭 = `0 0 0 0 0
0 1 0 0 0
0 1 0 0 0
0 0 1 0 0
0 0 0 1 0
`;


// let n = 6;
// let memo = Array(n + 1).fill(0);
// console.log(memo);
// function f(n) {
//   if(n === 1 || n === 2 ) {
//     memo[n] = 1;
//     return 1;
//   } else if(memo[n] !== 0) {
//     return memo[n];
//   } else {
//     memo[n] = f(n - 1) + f(n - 2);
//     return memo[n];
//   } 
// }

// console.log(f(n));

// function factorial(n) {
//   if(n < 2) {
//     return 1;
//   } else {
//     return factorial(n - 1) * n;
//   }
// }

console.log(factorial(5));

// let answer = 1;
// for(let i = 1; i < 6; i++) {
//   answer *= i;
// }
// console.log(answer);

// let answer = [];
// answer[1] = 1;
// answer[2] = 1;
// for(let i = 3; i < 8; i++) {
//   answer[i] = answer[i - 2] + answer[i - 1];
// }
// console.log(answer);
