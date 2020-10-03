const s = 'aaabbbbcddd';
let result = '';
let store = s[0];
let count = 0;

for(let i of s) {
  console.log(i);
  if(i === store) {
    count += 1;
  } else {
    result += store + String(count);
    store = i;
    count = 1;
  }
}
result += store + String(count);
console.log(result);