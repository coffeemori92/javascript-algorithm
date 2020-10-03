let k = 1;
let stamp = [
  [1, 1, 1, 2],
  [2, 0, 0, 0],
  [1, 1, 1, 1],
  [0, 0, 0, 0]
];

function rotate(stamp) {
  let n = stamp.length;
  let rot = [];
  for(let i = 0; i < n; i++) {
    rot.push(Array(n).fill(0));
  }
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      rot[j][n-1-i] = stamp[i][j];
    }
  }
  return rot;
}

function sum_matrix(p, stamp) {
  let n = stamp.length;
  for(let i = 0; i < n; i++) {
    for(let j = 0; j < n; j++) {
      p[i][j] += stamp[i][j];
    }
  }
  return p;
}

function solution(stamp, k) {
  let n = stamp.length;
  let p = [];
  for(let i = 0; i < n; i++) {
    p.push(Array(n).fill(0))
  }
  p = sum_matrix(p, stamp);
  for(let i = 0; i < k; i++) {
    stamp = rotate(stamp);
    p = sum_matrix(p, stamp);
  }
  return p;
}

console.log(solution(stamp, k));