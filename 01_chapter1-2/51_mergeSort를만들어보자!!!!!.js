const arr = '4 2 3 8 5'.split(' ').map(x => parseInt(x, 10));
console.log(arr);

function divideForMergeSort(arr) {
  if(arr.length <= 1) return arr;
  const midIndex = Math.floor(arr.length / 2);
  const left = arr.slice(0, midIndex);
  console.log('left', left);
  const right = arr.slice(midIndex);
  console.log('right', right);

  console.log('divideLeftSTART');
  const divideLeft = divideForMergeSort(left);
  console.log('divideLeftEnd');
  console.log('divideRightSTART');
  const divideRight = divideForMergeSort(right);
  console.log('divideRightEnd');
  console.log('divideLeft', divideLeft);
  console.log('divideRight', divideRight);

  return mergeSort(divideLeft, divideRight);
}

function mergeSort(left, right) {
  let result = [];
  while(left.length && right.length) {
    if(left[0] < right[0]) {
      console.log('left[0] < right[0]', left[0], right[0]);
      result.push(left.shift());
      console.log(result);
    } else {
      console.log('left[0] > right[0]', left[0], right[0]);
      result.push(right.shift());
      console.log(result);
    }
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result;
}

console.log(divideForMergeSort(arr));