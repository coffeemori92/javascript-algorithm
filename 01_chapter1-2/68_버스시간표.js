const userInput = '12:30 13:20 14:13'.split(' ');
const now = '12:40';

console.log(userInput);

function solution(userInput, now) {
  let result = [];
  now = now.split(':').map(x => parseInt(x, 10));
  now = now[0] * 60 + now[1];
  for(let i in userInput) {
    let time = userInput[i].split(':').map(x => parseInt(x, 10));
    time = time[0] * 60 + time[1]
    if(time < now) {
      result.push('지나갔습니다.');
    } else {
      let h = parseInt((time - now) / 60, 10);
      let m = parseInt((time - now) % 60, 10);
      result.push([String(h).padStart(2, '0'), String(m).padStart(2, '0')]);
    }
  }
  console.log(now);
  return result;
}

console.log(solution(userInput, now));