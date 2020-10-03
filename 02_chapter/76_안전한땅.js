let 사각형 = 5;
let 탐색가능지역 = 3;
let 지뢰밭 = [
  [1, 0, 0, 1, 0],
  [0, 1, 0, 0, 1],
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0]
];

let value = 0;
let valueArray = [];

for(let iAdd = 0; iAdd < 사각형-탐색가능지역; iAdd++) {
  for(let jAdd = 0; jAdd < 사각형-탐색가능지역; jAdd++) {
    for(let i = iAdd; i < 탐색가능지역 + iAdd; i++) {
      for(let j = jAdd; j < 탐색가능지역 + jAdd; j++) {
        console.log(i, j);
        value += 지뢰밭[i][j];
      }
    }
    valueArray.push(value);
    value = 0;
  }
}



console.log(valueArray);