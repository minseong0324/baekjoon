// Node.js의 파일 시스템 모듈을 불러옵니다.
const fs = require("fs");

// 주어진 두 자릿수에 대해 원래의 수로 돌아오는데 필요한 연산의 횟수를 계산하는 함수입니다.
function cycle(n1, n2) {
  let originNum = n1 * 10 + n2;  // 주어진 두 숫자로 원래의 수를 만듭니다.
  let num = originNum;  // 현재의 수를 저장하는 변수를 만듭니다.
  let count = 0;  // 연산의 횟수를 저장하는 카운터를 초기화합니다.
  let isFirst = true;  // 첫 번째 반복인지를 확인하는 데 사용하는 플래그입니다.

  // 첫 번째 반복이거나 현재의 수가 원래의 수와 다른 경우에 계속 반복합니다.
  while (isFirst || originNum !== num) {
    let sum = Math.floor(num / 10) + (num % 10);  // 현재의 수의 각 자릿수를 더합니다.
    num = (num % 10) * 10 + (sum % 10);  // 새로운 수를 만듭니다.
    count++;  // 연산의 횟수를 증가시킵니다.
    isFirst = false;  // 첫 번째 반복 후에는 이 플래그를 false로 설정합니다.
  }

  return count;  // 필요한 연산의 횟수를 반환합니다.
}

// 주어진 수를 문자열로 변환하고 각 자릿수를 분리하는 함수입니다.
function splitNumber1(n) {
  var str = n.toString();  // 숫자를 문자열로 변환합니다.
  var arr = str.split("");  // 문자열을 분리하여 배열로 만듭니다.
  var numArr = arr.map(Number);  // 각 문자열을 다시 숫자로 변환합니다.

  return numArr;  // 숫자의 배열을 반환합니다.
}

// 위의 함수와 비슷하지만, 한 자릿수에 대해 작동하도록 0을 붙여줍니다.
function splitNumber2(n) {
  var str = n.toString();  // 숫자를 문자열로 변환합니다.
  str = "0" + str;  // 한 자릿수의 경우 앞에 '0'을 추가합니다.
  var arr = str.split("");  // 문자열을 분리하여 배열로 만듭니다.
  var numArr = arr.map(Number);  // 각 문자열을 다시 숫자로 변환합니다.

  return numArr;  // 숫자의 배열을 반환합니다.
}

// 표준 입력을 읽어들이고, 앞뒤 공백을 제거하여 입력을 가져옵니다.
let input = fs.readFileSync("/dev/stdin").toString().trim();
input = parseInt(input);  // 입력을 정수로 변환합니다.
var numArr = [];  // 입력의 각 자릿수를 저장할 배열을 초기화합니다.

// 입력이 두 자릿수인 경우에 대한 처리입니다.
if (input >= 10 && input <= 99) {
  numArr = splitNumber1(input);
} 
// 입력이 한 자릿수인 경우에 대한 처리입니다. 
else if (input >= 0 && input <= 9) {
  numArr = splitNumber2(input);
}

// cycle 함수를 호출하여 필요한 연산의 횟수를 계산하고 이를 NLength에 저장합니다.
const NLength = cycle(numArr[0], numArr[1]);

// 계산된 연산의 횟수를 콘솔에 출력합니다.
console.log(NLength);

