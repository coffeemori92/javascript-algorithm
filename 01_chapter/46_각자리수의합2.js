const arr = [];
let total = 0;

for(let i = 0; i < 20; i++) {
  arr[i] = i + 1;
}

console.log(arr);

arr.forEach((n) => {
  while(n) {
    total = total + n % 10;
    n = Math.floor(n / 10);
  }
});

console.log(total);