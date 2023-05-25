const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 재귀 함수를 이용하여 n번째 피보나치 수를 구하는 함수
function fibonacci(n) {
  if (n <= 0) return 0; // n이 0 이하일 경우 0 반환
  if (n === 1) return 1; // n이 1일 경우 1 반환

  return fibonacci(n - 1) + fibonacci(n - 2); // 재귀적으로 피보나치 수를 계산하여 반환
}

rl.on("line", (input) => {
  const n = parseInt(input); // 입력값을 받아 정수로 변환
  const result = fibonacci(n); // 피보나치 수 계산

  console.log(result); //결과 출력

  rl.close();
}).on("close", () => {
  process.exit(0);
});
