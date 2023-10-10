// 노드의 파일시스템 모듈을 이용하기 위해 fs를 가져옵니다.
const fs = require("fs");
// 입력을 받아옵니다. split('\n')을 통해 입력의 각 행을 배열 요소로 나눕니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// 첫 번째 줄에 있는 과목의 수는 문제 풀이에 직접적으로 사용되지 않으므로 받기만 하고 사용하지 않습니다.
// const n = parseInt(input[0]);

// 두 번째 줄의 점수들을 공백을 기준으로 나눠 숫자 배열로 만듭니다.
const scores = input[1].split(" ").map(Number);

// 점수 중 최대값을 찾습니다.
const maxScore = Math.max(...scores);

// 각 점수를 `(점수 / 최대점수 * 100)` 으로 바꾼 뒤, 그 총합을 구합니다.
const newSum = scores.reduce((acc, score) => acc + (score / maxScore) * 100, 0);

// 새로운 평균을 계산하고 출력합니다. scores.length로 과목의 수를 알 수 있습니다.
console.log(newSum / scores.length);
