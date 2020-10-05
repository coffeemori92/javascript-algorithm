const userInput = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ').sort();
console.log(userInput);

function winner(userInput) {
  let result = {};
  let winner = '';

  for(let i in userInput) {
    let val = userInput[i];
    result[val] = result[val] === undefined
                  ? 1
                  : result[val] = result[val] + 1;
  }
  console.log(result);
  winner = Object.keys(result).reduce((a, b) => {
    console.log(a, b);
    return result[a] > result[b] ? a : b;
  });
  console.log(winner);
  return `${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`;
}

console.log(winner(userInput));

