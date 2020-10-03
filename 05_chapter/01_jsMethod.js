console.log(Infinity);
console.log(Infinity + 1);
console.log(Infinity - 1);
console.log(Infinity / 1);
console.log(Infinity * 1);
console.log(100 / 0);
console.log(Math.pow(100, 1000000));
console.log('--------------');
console.log(NaN);
console.log(isNaN(NaN));
console.log('--------------');
console.log(undefined);
let x;
console.log(x);
console.log('--------------');
console.log(null);
console.log(null + 1);
console.log(null - 1);
console.log(null === undefined);
console.log(null == undefined);
console.log(typeof(null));
console.log(typeof(undefined));
console.log('--------------');
console.log(eval('100 + 100'));
console.log(parseInt('100', 10));
console.log(parseInt('100', 16));
console.log(parseInt('100', 8));
console.log(parseInt('100', 2));
console.log(parseInt('100adfsdafsadfsad', 10));
console.log(parseFloat('100.1000.123.abc!!10.%abc', 10));
console.log(parseFloat('100,1000,123.abc!!10.%abc', 10));
console.log('--------------');
// Boolean(), Number(), String(), Array(), Object(), RegExp()
// Map(), Set()
let arr = [10, 2, 3, 22, 33, 100, 11];
let arrTwo = [12, 13];
console.log(arr.concat(arrTwo));
// stack
console.log(arr);
console.log(arr.pop());
console.log(arr);
console.log(arr.push(1000));
console.log(arr);
// queue
console.log(arr);
console.log(arr.push(1000));
console.log(arr.shift());
console.log(arr);
console.log('--------------');
console.log(arr.length);
console.log(arrTwo.fill(100));
console.log(arrTwo);
// 문자였다면
// console.log(arr.filter(x => x > 30));
console.log(arr.filter(x => x > 30));
let arrThree = [1, 2, 3, [1, 2, 3, [10, 20]]];
console.log(arrThree.flat());
console.log(arrThree.flat(2));
console.log(arr.includes(10));
console.log(arr);
console.log(arr.join('!'));
console.log(arr.join('-'));
console.log(arr.map(e => e**2));
console.log(['1', '2', '3'].map(e => parseInt(e, 10)));
console.log(arr.sort());
console.log(arr.reverse());
console.log(arr.splice(2, 1, 'hello')); // 요소를 삭제하거나 교체
console.log(arr.slice(3, 6));  // 요소를 인덱스 기준으로 잘라낸다.
console.log(arr);
console.log('--------------');
arr = [1, 1, 2, 2, 3, 3, 3, 3, 4, 4, 5];
let s = new Set(arr);
console.log(s);
console.log(s.size);
console.log(s.has(1));
console.log('--------------');
let m = new Map();
m.set('하나', 'one');
m.set('둘', 'two');
m.set('셋', 'three');
console.log(m);
console.log(m.has('하나'));
console.log(m.get('하나'));
console.log(m);
for(let value of m) {
  console.log(value);
}
console.log('--------------');
let str = 'abc abc de de abcde defg ABC';
console.log(str);
console.log(str.concat('hello world'));
console.log(str);
console.log(str.includes('abc'));
console.log(str.split(' '));
console.log(str.replace(/abc/g, '!'));
console.log(str.replace(/ /g, '-'));
console.log(str.slice(3, 6));
console.log(str.indexOf('abcde'));
console.log(str.slice(14, 20));
console.log(str.length);
let re = /abc/ig
console.log(str.match(re));