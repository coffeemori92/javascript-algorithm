// queue -> current -> 방문경로 -- 너비 우선탐색

const graph = {
  E: ['D', 'A'],
  F: ['D'],
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
};

console.log(graph);

function wfs(graph, start) {
  let visited = [];
  let queue = [start];

  while(queue.length) {
    let n = queue.shift();
    if(!visited.includes(n)) {
      visited.push(n);
      console.log('visited', visited);
      let sub = graph[n].filter(x => !visited.includes(x));
      console.log('sub', sub);
      for(let v of sub) {
        queue.push(v);
      }
      console.log('queue', queue);
    }
  }

  return visited;
}

console.log(wfs(graph, 'E'));