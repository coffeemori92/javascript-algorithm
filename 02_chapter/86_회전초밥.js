const point = [1, 1, 3, 2, 5];
const dish = 3;

function solution(point, dish) {
  let answer = 0;
  dish--;
  let s = point.slice();
  // console.log(s);
  s.sort((a, b) => a - b);
  console.log(s);
  while(true) {
    let p = point.shift();
    if(s[0] === p) {
      if(dish === 0) break;
      dish--;
      s.shift();
    } else {
      point.push(p);
      if(dish === 0) dish = point.length - 1;
      dish--;
    }
    answer++;
  }
  return answer;
}

console.log(solution(point, dish))