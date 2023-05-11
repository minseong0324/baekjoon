const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stack = [];
let top = -1;

rl.on('line', function(line) {
  const input = line.trim().split(' ');
  const command = input[0];

  switch (command) {
    case 'push':
      const num = Number(input[1]);
      stack[++top] = num;
      break;
    case 'pop':
      if (top === -1) {
        console.log(-1);
      } else {
        console.log(stack[top--]);
      }
      break;
    case 'size':
      console.log(top + 1);
      break;
    case 'empty':
      console.log(top === -1 ? 1 : 0);
      break;
    case 'top':
      console.log(top === -1 ? -1 : stack[top]);
      break;
    default:
      break;
  }
});

