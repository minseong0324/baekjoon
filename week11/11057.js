let fs = require("fs");
let input = Number(fs.readFileSync("/dev/stdin").toString().trim());
let dp = Array.from(Array(input + 1), () => Array(10).fill(0));
let mod = 10007;

// DP table 초기화 과정
for (let i = 0; i < 10; i++) {
  dp[1][i] = 1;
}

// 2 ~ N까지의 각 자릿수에 대한 오르막 수를 찾는 과정
for (let i = 2; i <= input; i++) {
  for (let j = 0; j < 10; j++) {
    for (let k = 0; k <= j; k++) {
      dp[i][j] += dp[i - 1][k];
      dp[i][j] %= mod;
    }
  }
}

let result = dp[input].reduce((acc, curr) => (acc + curr) % mod, 0);
console.log(result);
