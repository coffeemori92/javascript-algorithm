const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', number => {
  if(number % 3 == 0 && number != 0) {
    console.log('짝');
  } else {
    console.log(number);
  }
  rl.close();
}).on('close', () => {
  process.exit();
});