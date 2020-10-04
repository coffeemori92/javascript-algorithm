function solution(n, l) {
  let answer = 0;
  let man = new Array(n).fill(0);
  console.log(man);

  while(l.length !== 0) {
    for(let j = 0; j < man.length; j++) {
      if(man[j] == 0 && l) {
        man[j] += l.shift();
      }
    }
    man = man.map(x => x - 1);
    console.log(map);
    answer += 1;
  }
}

const 배달원 = 3;
const 배달시간 = [1, 2, 1, 3, 3, 3];

console.log(solution(배달원, 배달시간));