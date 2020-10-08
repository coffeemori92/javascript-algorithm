const userInput = 24;


function solution(N) {
  let result = 0;
  while(true) {
    if(N % 7 === 0) {
      result += parseInt(N / 7, 10);
      return result;
    }
    N -= 3;
    result += 1;
    if(N < 0) {
      return -1;
    }
  }
}

console.log(solution(userInput));