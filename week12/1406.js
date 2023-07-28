const fs = require("fs");
let [str, n, ...cmds] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let leftStack = str.split(""); // 커서의 왼쪽에 있는 문자들을 스택으로 관리
let rightStack = []; // 커서의 오른쪽에 있는 문자들을 스택으로 관리

for (let i = 0; i < n; i++) {
  let cmd = cmds[i].split(" ");
  switch (cmd[0]) {
    case "L": // 커서를 왼쪽으로 한 칸 옮김
      if (leftStack.length) rightStack.push(leftStack.pop());
      break;
    case "D": // 커서를 오른쪽으로 한 칸 옮김
      if (rightStack.length) leftStack.push(rightStack.pop());
      break;
    case "B": // 커서 왼쪽의 문자를 삭제함
      if (leftStack.length) leftStack.pop();
      break;
    case "P": // 커서 왼쪽에 문자를 추가함
      leftStack.push(cmd[1]);
      break;
  }
}

console.log(`${leftStack.join("")}${rightStack.reverse().join("")}`);
