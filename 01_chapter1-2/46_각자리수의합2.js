
let str = '';
for(let i = 10; i <= 15; i++) {
  str += String(i);
}
console.log(str);

const arr = str.split('').map(x => parseInt(x, 10));
console.log(arr);

let sum = 0;
for(i in arr) {
  sum += arr[i];
}

console.log(sum);