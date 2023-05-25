const readline = require("readline"); // readline 모듈을 import 합니다.
const rl = readline.createInterface({
  // readline 인터페이스를 생성합니다.
  input: process.stdin,
  output: process.stdout,
});

const input = []; // 입력값을 저장할 배열을 선언합니다.
rl.on("line", (line) => {
  input.push(Number(line)); // 각 줄마다 입력값을 숫자로 변환해 배열에 저장합니다.
}).on("close", () => {
  // 입력이 종료되면 실행할 로직을 정의합니다.
  const n = input.shift(); // 첫 번째 입력값 (숫자의 개수)을 n으로 설정합니다.
  const numbers = input; // 나머지 입력값 (숫자들)을 numbers에 저장합니다.
  numbers.sort((a, b) => a - b); // 숫자들을 오름차순으로 정렬합니다.

  // 산술평균 구하기: 숫자들의 합을 숫자의 개수로 나누고 반올림합니다.
  const average = Math.round(numbers.reduce((a, b) => a + b, 0) / n);

  // 중앙값 구하기: 숫자들 중 중앙에 위치한 값을 찾습니다.
  const median = numbers[Math.floor(n / 2)];

  // 최빈값 구하기
  const counts = {}; // 각 숫자의 등장 횟수를 저장할 객체를 생성합니다.
  numbers.forEach((number) => {
    counts[number] = (counts[number] || 0) + 1; // 각 숫자의 등장 횟수를 카운트합니다.
  });

  const modes = [];
  const max = Math.max(...Object.values(counts)); // 등장 횟수의 최댓값을 찾습니다.
  for (let [key, value] of Object.entries(counts)) {
    // 객체를 순회하며
    if (value === max) modes.push(Number(key)); // 등장 횟수가 최댓값과 같은 숫자를 모두 찾습니다.
  }
  modes.sort((a, b) => a - b); // 최빈값 후보들을 오름차순으로 정렬합니다.

  const mode = modes.length > 1 ? modes[1] : modes[0]; // 최빈값이 하나면 그대로, 두 개 이상이면 두 번째로 작은 값을 최빈값으로 선택합니다.

  // 범위 구하기: 가장 큰 값에서 가장 작은 값을 뺍니다.
  const range = numbers[numbers.length - 1] - numbers[0];

  // 출력: -0이 출력되는 경우를 방지하기 위해 0으로 변경해 출력합니다.
  console.log(average === -0 ? 0 : average);
  console.log(median);
  console.log(mode);
  console.log(range);
});
