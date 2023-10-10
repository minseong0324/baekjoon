// 노드의 파일시스템 모듈을 이용하기 위해 fs를 가져옵니다.
const fs = require("fs");
// 입력을 받아옵니다. split('\n')을 통해 입력의 각 행을 배열 요소로 나눕니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let result = ""; // 결과를 저장할 빈 문자열을 선언합니다.

// 최대 문자열 길이가 15이므로 0부터 14까지 반복합니다.
for (let i = 0; i < 15; i++) {
  // 각 문자열에 대하여 반복합니다.
  for (let j = 0; j < 5; j++) {
    // 해당 위치에 문자가 있으면 결과 문자열에 추가합니다.
    if (input[j][i]) {
      result += input[j][i];
    }
  }
}

console.log(result); // 결과 문자열을 출력합니다.
