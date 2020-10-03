const times = ['12:30', '13:20', '14:13', '12:40'];
const nowTime = '12:40';

function solution(nowTime, times) {
  let answer = [];
  nowTime = nowTime.split(':').map(n => parseInt(n, 10));
  nowTime = nowTime[0]*60 + nowTime[1];
  console.log(nowTime);

  for(let i = 0; i < times.length; i++) {
    console.log(times[i]);
    let time = times[i].split(':').map(n => parseInt(n, 10));
    time = time[0]*60 + time[1];
    if(time < nowTime) {
      answer.push('지나갔습니다.');
    } else {
      let h = parseInt((time - nowTime) / 60, 10);
      let m = parseInt((time - nowTime) % 60, 10);
      answer.push(String(h).padStart(2, 0) + '시간 ' + String(m).padStart(2, 0) + '분 남았습니다.');
    }
  }

  return answer;
}

console.log(solution(nowTime, times));