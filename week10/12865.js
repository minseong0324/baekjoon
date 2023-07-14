// 입력 받기 위한 readline 모듈 불러오기
const readline = require("readline");

// 표준 입력, 출력을 위한 인터페이스 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 입력을 받을 배열
let input = [];

// 한 줄씩 입력 받는 함수
function inputLine(line) {
  input.push(line);
}

// 평범한 배낭 문제 풀이 함수
function solveKnapsack(n, k, weights, values) {
  const dp = new Array(n + 1).fill(0).map(() => new Array(k + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= k; j++) {
      if (weights[i] <= j) {
        // 현재 물건을 포함하는 경우와 포함하지 않는 경우 중 최댓값을 선택
        dp[i][j] = Math.max(
          values[i] + dp[i - 1][j - weights[i]],
          dp[i - 1][j]
        );
      } else {
        // 현재 물건을 포함하지 못하는 경우, 이전 상태의 최대값을 그대로 저장
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  // 배낭에 담을 수 있는 최대 가치 반환
  return dp[n][k];
}

// 입력을 받기 위한 준비
rl.on("line", inputLine);
rl.on("close", () => {
  const [n, k] = input[0].split(" ").map(Number); // 물건의 개수, 최대 무게
  const weights = [0]; // 물건의 무게를 담을 배열
  const values = [0]; // 물건의 가치를 담을 배열

  // 물건의 무게와 가치를 각각의 배열에 저장
  for (let i = 1; i <= n; i++) {
    const [w, v] = input[i].split(" ").map(Number);
    weights.push(w);
    values.push(v);
  }

  const result = solveKnapsack(n, k, weights, values); // 평범한 배낭 문제 풀이

  console.log(result); // 결과 출력
});
