const mathBrackets = array => {
  let count = 0;
  for(let i = 0; i < array.length; i++) {
    if(array[i] === '(') count++;
    if(array[i] === ')') count--;
  }
  if(count !== 0) return false;
  let bracket = [];
  for(let i in array) {
    if(array[i] === '(') {
      bracket.push('(');
    }
    if(array[i] === ')') {
      if(bracket.length === 0) return false;
      bracket.pop();
    }
    return true;
  }
};