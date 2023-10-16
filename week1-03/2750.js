// 표준 입력을 통해 데이터를 받기 위한 readline 모듈을 불러옵니다.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n = 0; // 숫자의 개수를 저장할 변수입니다.
const numbers = []; // 숫자들을 저장할 배열입니다.

// 입력을 받는 이벤트 핸들러입니다.
rl.on("line", function (line) {
  // 만약 n이 0이라면, 첫 번째 입력인 숫자의 개수를 n에 저장합니다.
  if (!n) {
    n = parseInt(line);
  } else {
    // 그렇지 않다면 숫자들을 numbers 배열에 추가합니다.
    numbers.push(parseInt(line));
    // 모든 숫자를 받았다면, 정렬과 출력을 진행합니다.
    if (numbers.length === n) {
      sortAndPrint();
    }
  }
}).on("close", function () {
  process.exit();
});

function sortAndPrint() {
  // JavaScript의 기본 sort() 메서드를 사용하여 numbers 배열을 오름차순으로 정렬합니다.
  // sort()는 유니코드 기준 정렬이기 때문에, 숫자 정렬을 위해서는 compare 함수를 제공해야 합니다.
  numbers.sort((a, b) => a - b);

  // 정렬된 숫자들을 순서대로 출력합니다.
  for (const number of numbers) {
    console.log(number);
  }

  // 모든 작업이 끝났으므로 readline 인터페이스를 종료합니다.
  rl.close();
}
