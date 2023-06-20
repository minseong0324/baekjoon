const fs = require("fs"); // Node.js의 파일 시스템 모듈을 가져옵니다.

// 입력값을 받아오는 코드입니다. 입력은 줄바꿈('\n')을 기준으로 split 하여 배열로 저장합니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(input[0]); // 첫 번째 입력값은 정렬할 숫자들의 개수입니다.

// Counting sort 알고리즘에 사용할 배열을 선언합니다. 이 때 숫자의 범위는 1 ~ 10000이므로 배열의 크기를 10001로 설정합니다.
let count = Array(10001).fill(0);

// 입력받은 숫자들을 하나씩 확인하면서 해당 숫자의 개수를 세는 코드입니다.
for (let i = 1; i <= n; i++) {
  count[Number(input[i])]++;
}

// 출력할 결과를 저장할 변수를 선언합니다.
let output = "";

// 숫자 1 ~ 10000까지의 개수를 확인하여 결과 문자열을 만드는 코드입니다.
for (let i = 1; i <= 10000; i++) {
  // 숫자 i가 등장한 횟수만큼 숫자 i를 결과 문자열에 추가합니다. 이때 숫자는 개행 문자('\n')로 구분됩니다.
  output += `${i}\n`.repeat(count[i]);
}

console.log(output); // 결과를 출력하는 코드입니다.
