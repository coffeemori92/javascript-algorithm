const userInput = 5;

function star(userInput) {
  let tree = '';
  for(let i = 0; i < userInput; i++) {
    tree = '';
    for(let j = 0; j < userInput - i; j++) {
      tree += ' ';
    }
    for(let k = 0; k < (i + 1) * 2 - 1; k++) {
      tree += '*';
    }
    console.log(tree);
  }
}

star(userInput);