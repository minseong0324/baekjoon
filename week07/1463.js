const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function makeOne(n) {
  const dp = new Array(n + 1).fill(0); // 최소 연산 횟수를 저장하기 위한 배열

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1; // 현재 수에서 1을 뺀 경우의 연산 횟수

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1); // 현재 수를 2로 나눈 경우의 연산 횟수
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1); // 현재 수를 3으로 나눈 경우의 연산 횟수
    }
  }

  return dp[n];
}

rl.on("line", (input) => {
  const n = parseInt(input); // 입력값을 받아 정수로 변환
  const answer = makeOne(n);
  console.log(answer);

  rl.close();
}).on("close", () => {
  process.exit(0);
});
