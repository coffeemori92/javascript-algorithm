const n = 1000000000;
console.log(n.toLocaleString());

const n2 = '1000000000';

function comma(s) {
  if(s.length <= 3) {
    return s;
  } else {
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3);
  }
}

console.log(comma(n2));