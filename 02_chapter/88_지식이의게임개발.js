function makeApp(n, m, char, obs) {
  let worldMap = [];
  for(let i = 0; i < m + 2; i++) {
    worldMap.push(Array(n + 2).fill(0));
  }
  //console.log(worldMap);
  for(let i in worldMap) {
    for(let j in worldMap[0]) {
      if(i == 0 || j == 0 || j == worldMap[0].length - 1 || worldMap.length - 1) {
        worldMap[i][j] = 2;
      }
    }
  }
  //console.log(worldMap);
  worldMap[char[0] + 1][char[1] + 1] = 1;
  //console.log(worldMap);
  for(let e of obs) {
    if(worldMap[e[0] + 1][e[1] + 1] == 1) {
      worldMap[e[0] + 1][e[1] + 1] = 1;
    } else {
      worldMap[e[0] + 1][e[1] + 1] = 2;
    }
  }
  for(let e of worldMap) {
    console.log(e);
  }
}

console.log(makeApp(5, 4, [0, 0], [[0, 1], [1, 1], [2, 3], [1, 3]]));