function bubble(arr) {
  let result = arr.slice();
  for(let i = 0; i < result.length - 1; i++) {
    for(let j = 0; j < result.length - i; j++) {
      if(result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }
  return result;
}

const items = '5 4 7 9 1 3'.split(' ').map(n => parseInt(n, 10));

console.log(bubble(items));