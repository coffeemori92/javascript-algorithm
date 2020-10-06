const arr = '4 2 3 8 5'.split(' ').map(x => parseInt(x, 10));

function quickSort(arr) {
  if(arr.length <= 1) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];
  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

console.log(quickSort(arr));