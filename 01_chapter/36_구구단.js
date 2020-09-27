const n = 2;

const gugudan = number => {
  let result = '';
  for(let i = 0; i < 9; i++) {
    result = result + ' ' + number * (i + 1)
  }
  return result;
};

console.log(gugudan(n));