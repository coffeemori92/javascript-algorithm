let a = [10, 11, 9, 2, 3, 6, 5, 4];
let sorted = [];
const length = a.length;

function index(arr, e) {
  for(let i in arr) {
    if(e < arr[i]) return i;
  }
  return arr.length;
}

for(let i = 0; i < length; i++) {

}