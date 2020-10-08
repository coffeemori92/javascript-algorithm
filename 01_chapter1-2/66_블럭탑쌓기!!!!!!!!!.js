const tower = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const rule = 'ABD';

function solution(tower, rule) {
  let result = [];
  for(let v of tower) {
    result.push(check(v, rule));
  }
  return result;
}

function check(v, rule) {
  let temp = rule.indexOf(rule[0]);
  for(let e of v) {
    if(rule.includes(e)) {
      if(temp > rule.indexOf(e)) {
        return '불가능';
      }
      temp = rule.indexOf(e);
    }
  }
  return '가능';
}

console.log(solution(tower, rule));