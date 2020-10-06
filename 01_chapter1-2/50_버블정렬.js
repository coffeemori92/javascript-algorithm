const arr = '4 2 3 8 5'.split(' ').map(x => parseInt(x, 10));

function bubble(arr) {
  let result = arr.slice();
  for(let i = 0; i < result.length - 1; i++) {
    for(let j = 0; j < result.length - i; j++) {
      if(result[j] > result[j + 1]) {
        let store = result[j];
        result[j] = result[j + 1];
        result[j + 1] = store;
      }
    }
  }
  return result;
}

console.log(bubble(arr));