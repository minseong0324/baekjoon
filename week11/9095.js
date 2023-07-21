let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let T = Number(input[0]); // 테스트 케이스 개수
let numbers = input.slice(1).map(Number); // 테스트 케이스
let dp = Array(11).fill(0); // Dynamic Programming table

dp[1] = 1; // 1은 1가지 방법으로 표현
dp[2] = 2; // 2는 2가지 방법으로 표현
dp[3] = 4; // 3은 4가지 방법으로 표현

// n을 1, 2, 3의 합으로 나타내는 방법의 수를 찾는 과정
for (let i = 4; i <= 10; i++) {
  dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
}

// 각각의 테스트 케이스에 대해 방법의 수를 출력
for (let i = 0; i < T; i++) {
  console.log(dp[numbers[i]]);
}
