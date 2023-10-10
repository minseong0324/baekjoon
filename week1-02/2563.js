// 노드의 파일시스템 모듈을 이용하기 위해 fs를 가져옵니다.
const fs = require("fs");
// 입력을 받아옵니다. split('\n')을 통해 입력의 각 행을 배열 요소로 나눕니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 100x100 크기의 2차원 배열을 0으로 초기화합니다.
const paper = Array.from({ length: 100 }, () => Array(100).fill(0));

// 색종이의 수를 가져옵니다.
const n = parseInt(input[0]);

// 각 색종이에 대해서
for (let i = 1; i <= n; i++) {
  // 색종이의 왼쪽 아래 모서리 좌표를 구합니다.
  const [x, y] = input[i].split(" ").map(Number);

  // 해당 좌표를 기준으로 10x10 크기의 영역을 1로 설정합니다.
  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      paper[j][k] = 1;
    }
  }
}

// 2차원 배열에서 1의 값인 칸의 개수를 구합니다.
const result = paper.flat().filter((val) => val === 1).length;

console.log(result); // 결과를 출력합니다.
