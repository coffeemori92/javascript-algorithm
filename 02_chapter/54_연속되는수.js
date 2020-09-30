const n = '1 3 4 2 5 6'.split(' ');
console.log(n);

function solution(arr) {
  arr.sort((a, b) => a - b);
  console.log(arr);
  for(let i = 0; i < arr.length - 1; i++) {
    if(parseInt(arr[i], 10) + 1 !== parseInt(arr[i+1], 10)) {
      return 'No';
    }
  }
  return 'Yes';
}

console.log(solution(n));