const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let stack = []; // 스택 초기화
let temp = 1;
let result = 0;

for (let i = 0; i < input.length; i++) {
  switch (input[i]) {
    case "(": // 여는 괄호 '(' 가 들어올 경우
      temp *= 2;
      stack.push("(");
      break;
    case "[": // 여는 괄호 '[' 가 들어올 경우
      temp *= 3;
      stack.push("[");
      break;
    case ")": // 닫는 괄호 ')' 가 들어올 경우
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        console.log(0);
        return;
      }
      if (input[i - 1] === "(") result += temp;
      stack.pop();
      temp /= 2;
      break;
    case "]": // 닫는 괄호 ']' 가 들어올 경우
      if (stack.length === 0 || stack[stack.length - 1] !== "[") {
        console.log(0);
        return;
      }
      if (input[i - 1] === "[") result += temp;
      stack.pop();
      temp /= 3;
      break;
  }
}

console.log(stack.length === 0 ? result : 0);
