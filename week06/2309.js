// readline 모듈을 사용하기 위해 필요한 require 구문
const readline = require("readline");

// readline 인터페이스 객체 생성
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let heights = [];
rl.on("line", (line) => {
  heights.push(parseInt(line));
  if (heights.length === 9) {
    rl.close();
  }
});

rl.on("close", () => {
  let total = heights.reduce((a, b) => a + b, 0); // 모든 난쟁이의 키의 합을 구합니다.
  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (total - (heights[i] + heights[j]) === 100) {
        // 두 난쟁이를 제외했을 때 합이 100이 되면
        heights.splice(j, 1); // 더 큰 인덱스를 먼저 제거합니다.
        heights.splice(i, 1); // 그 다음 작은 인덱스를 제거합니다.
        heights.sort((a, b) => a - b); // 오름차순 정렬합니다.
        console.log(heights.join("\n")); // 각 키를 개행 문자로 구분하여 출력합니다.
        return;
      }
    }
  }
});
