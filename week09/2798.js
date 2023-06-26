// fs 모듈을 불러옵니다.
const fs = require("fs");
// 입력 값을 불러오고, 줄바꿈으로 구분합니다.
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
// 첫 번째 줄의 숫자들을 파싱하여 배열에 담습니다.
const [N, M] = input[0].split(" ").map(Number);
// 두 번째 줄의 숫자들을 파싱하여 배열에 담습니다.
const cards = input[1].split(" ").map(Number);

// 최대한 가까운 수를 저장할 변수를 선언합니다. 초기값은 0입니다.
let maxSum = 0;

// 첫 번째 카드를 선택하는 반복문
for (let i = 0; i < N; i++) {
  // 두 번째 카드를 선택하는 반복문
  for (let j = i + 1; j < N; j++) {
    // 세 번째 카드를 선택하는 반복문
    for (let k = j + 1; k < N; k++) {
      // 세 카드의 합을 계산합니다.
      const sum = cards[i] + cards[j] + cards[k];
      // 세 카드의 합이 M을 넘지 않으면서 기존의 최대합보다 크다면 값을 갱신합니다.
      if (sum <= M && sum > maxSum) {
        maxSum = sum;
      }
    }
  }
}

// 결과를 출력합니다.
console.log(maxSum);
