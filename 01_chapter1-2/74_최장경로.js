const graph = {
  1: [2, 3, 4],
  2: [1, 3, 4, 5, 6],
  3: [1, 2, 7],
  4: [1, 2, 5, 6],
  5: [2, 4, 6, 7],
  6: [2, 4, 5, 7],
  7: [3, 5, 6],
};

const userInput = [1, 7];
const start = parseInt(userInput[0], 10);
const end = parseInt(userInput[1], 10);

let queue = [start];
let visited = [];

const solution = (queue, visited) => {
  let node = queue[queue.length - 1];
  let length = 0;

  if(node == end) {
    return visited.length;
  }

  if(visited.includes(node)) {
    return visited.length;
  } else {
    visited.push(node);
  }

  let max = [];

  for(let next_node in graph[node]) {
    queue.push(graph[node][next_node]);
    max.push(length, solution(queue, visited));
    length = Math.max.apply(null, max);
  }

  return length;
};

console.log(solution(queue, visited));
