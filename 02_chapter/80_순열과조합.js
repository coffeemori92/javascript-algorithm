function combination(charsArray, user_input_n) {
  let combi = [];
  const f = (pre, charsArray) => {
    for(let i = 0; i < charsArray.length; i++) {
      combi.push(pre + charsArray[i]);
      combi.push(pre + charsArray[i]);
      f(pre + charsArray[i], charsArray.slice(i + 1));
    }
  }
  f('', charsArray);
}

const arr = 'A,B,C,D'.split(',');
const user_input_n = 3;
console.log(arr);

console.log(combination(arr, user_input_n))