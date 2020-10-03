let value = '0 1 0 0 0,0 0 0 0 0,0 0 0 1 0,0 0 1 0 0,0 0 0 0 0';
let sp = value.split(',');
console.log(sp);
let count = 0;

for(let i of sp) {
  sp[count] = i.replace('1', 'f').split(' ');
  count += 1;
}

console.log(sp);

count = 0;
let search = 0;

for(let s of sp) {
  
  for(let i of sp) {
    if(i === 'f') {
      if(search > 0) {
        s[search - 1] = '*'
      }
      if(search < 4) {
        s[search + 1] = '*'
      }
      if(search > 0) {
        sp[count - 1][search] = '*';
      }
      if(search < 4) {
        sp[count + 1][search] = '*';
      }
    }
    search += 1;
  }
  count += 1;
  search = 0;
  
}

