// fs 모듈을 불러옵니다.
const fs = require("fs");
// 입력 값을 불러오고, 줄바꿈으로 구분합니다.
let [N, seq] = fs.readFileSync("/dev/stdin").toString().split("\n");
// 첫 번째 줄의 숫자들을 파싱하여 배열에 담습니다.
N = N.split(" ").map((v) => Number(v));
// 두 번째 줄의 숫자들을 파싱하여 배열에 담습니다.
seq = seq.split(" ").map((v) => Number(v));

let deque = Array.from({ length: N[0] }, (_, i) => i + 1); // 큐를 생성합니다.
let count = 0; // 회전 횟수를 세는 변수를 초기화합니다.

for (let i = 0; i < N[1]; i++) {
  // 찾아야 하는 수의 갯수만큼 반복합니다.
  const index = deque.indexOf(seq[i]); // 찾아야 하는 수의 인덱스를 가져옵니다.
  if (index > deque.length / 2) {
    // 수가 큐의 뒤쪽에 있을 경우
    deque.unshift(...deque.splice(index)); // 해당 수를 앞으로 이동합니다.
    // unshift() : 배열 맨 앞에 요소를 추가
    count += deque.length - index; // 회전 횟수를 더합니다.
  } else {
    // 수가 큐의 앞쪽에 있을 경우
    deque.push(...deque.splice(0, index)); // 해당 수를 뒤로 이동합니다.
    // push() : 배열 끝에 요소를 추가
    count += index; // 회전 횟수를 더합니다.
  }
  deque.shift(); // 큐의 첫 번째 수를 제거합니다.
}

console.log(count); // 총 회전 횟수를 출력합니다.
