function solution(string) {
  let result = [];
  for(let i = 1; i < string.length + 1; i++) {
    for(let j = 0; j < i; j++) {
      result.push(string.slice(j, j + string.length + 1 - i));
    }
  }
  return result;
}

console.log(solution('ABCDEF'));