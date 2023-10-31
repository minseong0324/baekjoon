11; // 입력을 처리하기 위한 fs 모듈을 사용합니다.
const fs = require("fs");
// 입력을 받아옵니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 첫 번째 줄에 있는 점의 개수 N을 파싱합니다.
const N = parseInt(input[0]);
// 점들을 저장할 배열을 초기화합니다.
const points = [];

// 점들을 points 배열에 저장합니다.
for (let i = 1; i <= N; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  points.push([x, y]);
}

// y 좌표 기준으로 정렬하고, y 좌표가 같다면 x 좌표 기준으로 정렬합니다.
points.sort((a, b) => {
  if (a[1] === b[1]) {
    return a[0] - b[0];
  }
  return a[1] - b[1];
});

// 결과를 출력합니다.
points.forEach((point) => {
  console.log(point[0] + " " + point[1]);
});
