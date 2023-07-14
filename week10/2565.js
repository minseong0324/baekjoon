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

// 전깃줄 문제 풀이 함수
function solveElectricWire(n, wires) {
  wires.sort((a, b) => a[0] - b[0]); // A 전봇대를 기준으로 오름차순 정렬

  const dp = new Array(n).fill(1); // DP 테이블 초기화

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      // B 전봇대의 위치가 증가하면서, 연결할 수 있는 전깃줄의 개수를 계산
      if (wires[i][1] > wires[j][1] && dp[i] <= dp[j]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  // 전깃줄의 개수에서 연결된 전깃줄의 최대 개수를 뺀 값이 제거해야 할 전깃줄의 최소 개수
  return n - Math.max(...dp);
}

// 입력을 받기 위한 준비
rl.on("line", inputLine);
rl.on("close", () => {
  const n = Number(input[0]); // 전깃줄의 개수
  const wires = []; // 전깃줄의 정보를 담을 배열

  // 전깃줄의 정보를 2차원 배열로 변환
  for (let i = 1; i <= n; i++) {
    wires.push(input[i].split(" ").map(Number));
  }

  const result = solveElectricWire(n, wires); // 전깃줄 문제 풀이

  console.log(result); // 결과 출력
});
