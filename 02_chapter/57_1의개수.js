let s ='';
for(let i = 0; i < 15; i++) {
  s += i;
}

console.log(s);
console.log(s.match(/1/g).length);

let count = 0;
for(let k of s) {
  if(k == 0) {
    count++;
  }
}
console.log(count);