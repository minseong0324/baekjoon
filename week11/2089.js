let input = require("fs").readFileSync("/dev/stdin").toString().trim();
let n = parseInt(input);
let result = "";

// 체크할 수가 0이 아니라면 계속 실행
while (n !== 0) {
  // n이 음수일 경우에는 (-2)로 나눠주어도 나머지가 음수가 되는 경우가 있음.
  // 그래서 이 경우를 고려하여 나머지가 양수가 되도록 조정
  if (n % -2) {
    n = n / -2 + 0.5;
    result = "1" + result;
  } else {
    n = n / -2;
    result = "0" + result;
  }
}

console.log(result ? result : "0");
