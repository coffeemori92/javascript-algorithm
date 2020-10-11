// stack -> current -> 방문경로 -- 깊이 우선탐색

const graph = {
  E: ['D', 'A'],
  F: ['D'],
  A: ['E', 'C', 'B'],
  B: ['A'],
  C: ['A'],
  D: ['E', 'F'],
};

console.log(graph);

function dfs(graph, start) {
  let visited = [];
  let stack = [start];

  while(stack.length) {
    let n = stack.pop();
    if(!visited.includes(n)) {
      visited.push(n);
      console.log('visited', visited);
      let sub = graph[n].filter(x => !visited.includes(x));
      console.log('sub', sub);
      for(let v of sub) {
        stack.push(v);
      }
      console.log('stack', stack);
    }
  }

  return visited;
}

console.log(dfs(graph, 'E'));