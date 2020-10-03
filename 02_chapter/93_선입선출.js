const frame = 3;
const page = 'BCBAEBCE'.split('');

function solution(frame, page) {
  let runTime = 0;
  let temp = [];

  if(frame === 0) {
    runTime = page.length * 6
    return runTime;
  }

  for(let i of page) {
    if(temp.includes(i)) {
      runTime += 1;
    } else {
      if(temp.length < frame) temp.push(i);
      temp.shift();
      temp.push(i);
    }
    runTime += 6;
  }
  return runTime;
}

console.log(solution(frame, page));
