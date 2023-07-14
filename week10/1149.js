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

// DP 테이블 초기화 함수
function initDP(n) {
  const dp = new Array(n);

  for (let i = 0; i < n; i++) {
    dp[i] = new Array(3).fill(0);
  }

  return dp;
}

// 주어진 비용 중에서 최솟값을 구하는 함수
function getMinCost(costs) {
  return Math.min(...costs);
}

// RGB 거리 문제 풀이 함수
function solveRGBDistance(n, costs) {
  const dp = initDP(n); // DP 테이블 초기화

  // 첫 번째 집의 비용은 그대로 DP 테이블에 저장
  dp[0][0] = costs[0][0];
  dp[0][1] = costs[0][1];
  dp[0][2] = costs[0][2];

  // 두 번째 집부터 마지막 집까지 반복하며 최솟값을 구함
  for (let i = 1; i < n; i++) {
    // 이전 집과 겹치지 않는 색의 비용 중 최솟값을 현재 집의 비용과 더해서 저장
    dp[i][0] = costs[i][0] + getMinCost([dp[i - 1][1], dp[i - 1][2]]);
    dp[i][1] = costs[i][1] + getMinCost([dp[i - 1][0], dp[i - 1][2]]);
    dp[i][2] = costs[i][2] + getMinCost([dp[i - 1][0], dp[i - 1][1]]);
  }

  // 마지막 집의 색을 칠하는데 드는 비용 중 최솟값을 반환
  return getMinCost(dp[n - 1]);
}

// 입력을 받기 위한 준비
rl.on("line", inputLine);
rl.on("close", () => {
  const n = Number(input[0]); // 집의 수
  const costs = []; // 각 집을 칠하는데 드는 비용

  // 각 집을 칠하는데 드는 비용을 2차원 배열로 변환
  for (let i = 1; i <= n; i++) {
    costs.push(input[i].split(" ").map(Number));
  }

  const result = solveRGBDistance(n, costs); // RGB 거리 문제 풀이

  console.log(result); // 결과 출력
});
