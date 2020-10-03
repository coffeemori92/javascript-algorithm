const a = ['ABCDEF', 'BCAD', 'ADEFQRX', 'BEDFG', 'EFGHZ'];
const rule = 'ABD';

function solution(a, rule) {
  let answer = [];

  for(let part of a) {
    answer.push(ruleCheck(part, rule));
  }

  return answer;
}

function ruleCheck(part, rule) {
  let tmp = rule.indexOf(rule[0]);
  for(let word of part) {
    if(rule.includes(word)) {
      if(tmp > rule.indexOf(word)) {
        return '불가능';
      }
      tmp = rule.indexOf(word);
    }
  }
  return '가능';
}

console.log(solution(a, rule));