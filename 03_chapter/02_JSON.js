// HTML -> 마크업언어
// CSS  -> 스타일시트
// Javascript -> 프로그래밍 언어
// XML
/**
 * <호텔>
 *   <이름>하나호텔</이름>
 *   ...
 * </호텔>
 **/
let l = [10, 20, 30];
console.log(JSON.stringify(l));
let a = JSON.parse(JSON.stringify(l));
a[0] = 1000;
console.log(l);
// JSON.parse(JSON.stringify())