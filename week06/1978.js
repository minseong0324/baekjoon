// readline 모듈을 사용하기 위해 필요한 require 구문
const readline = require("readline");

// readline 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 주어진 숫자가 소수인지 판별하는 화살표 함수
const isPrime = (num) => {
  if (num <= 1) return false; // 숫자가 1 이하일 경우 소수가 아님
  for (let i = 2; i <= Math.sqrt(num); i++) {
    // num의 제곱근까지만 반복문 실행
    if (num % i === 0) return false; // i로 나누어 떨어진다면 소수가 아님
  }
  return true; // 반복문에서 걸리지 않은 경우 소수임
};

// 라인을 읽을 때마다 실행되는 이벤트 리스너
rl.on("line", (line) => {
  const input = line.split(" ").map(Number); // 입력받은 문자열을 공백을 기준으로 분리하고 숫자로 변환
  if (input.length === 1) return; // 숫자의 개수를 나타내는 첫 번째 입력이면 무시하고 리턴
  const primeCount = input.filter(isPrime).length; // 배열에서 소수만 필터링하고 개수를 구함
  console.log(primeCount); // 소수의 개수 출력
  rl.close(); // readline 인터페이스 종료
});
