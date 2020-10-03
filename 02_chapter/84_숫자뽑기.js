const num = '1723';
const len = 2;

function solution(chars, length) {
  let result = [];
  const f = (pre, chars) => {
    for(let i = 0; i < chars.length; i++) {
      result.push(pre + chars[i]);
      f(pre + chars[i], chars.slice(i + 1));
    }
  }
  f('', chars);
  console.log(result);
  result = result.filter(x => x.length === length);
  console.log(result);
  result.sort((a, b) => b - a);
  return result[0];
}

console.log(solution(num, len));