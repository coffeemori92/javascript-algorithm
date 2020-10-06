const route = [];

function hanoi(num, start, end, sub) {
  if(num === 1) {
    route.push([start, end]);
    return 1;
  }
  
  hanoi(num - 1, start, sub, end);
  
  route.push([start, end]);

  hanoi(num - 1, sub, end, start);

  return route;
}

console.log(hanoi(3, 'A', 'C', 'B'));