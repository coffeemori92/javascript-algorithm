let str = '';

for(let i = 0; i < 21; i++) {
  str += i;
}

console.log(str);

const strArr = str.split('');
let count = 0;
for(let i in strArr) {
  if(strArr[i] === '1') count++; 
}

console.log(count);