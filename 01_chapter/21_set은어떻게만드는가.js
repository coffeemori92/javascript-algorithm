const list = [1, 2, 2, 3, 4, 5, 5, 5, 6];

// set은 중복되지 않는 데이터를 저장하는 데이터 구조
let setVal = new Set(list);
setVal.add(10);
setVal.delete(1);

console.log(setVal);
console.log(setVal.has(10));