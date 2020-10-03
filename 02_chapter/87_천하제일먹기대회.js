const name = '손오공 야모챠 베지터 피콜로'.split(' ');
const point = '70 10 55 40'.split(' ');
const point_int = point.map(e => parseInt(e, 10));

function solution(name, point_int) {
  let temp = [];
  for(let e of name) {
    let obj = {};
    obj.name = e;
    obj.value = point_int[name.indexOf(e)];
    temp.push(obj);
  }
  // console.log(temp);
  temp.sort((a, b) => {
    return a.value < b.value 
           ? 1 
           : a.value > b.value
           ? -1
           : 0
  });
  //console.log(temp);
  let result = {};
  for(let e of temp) {
    //console.log(e);
    result[e['name']] = temp.indexOf(e) + 1;
  }
  return result;
}

console.log(solution(name, point_int));