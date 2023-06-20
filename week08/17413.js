const fs = require("fs");

// fs.readFileSync 함수를 이용해 stdin을 통해 입력받습니다.
const input = fs.readFileSync("/dev/stdin").toString().trim();

// 원본 문자열을 복사해 str 변수에 저장합니다.
const str = input;

// 결과 문자열을 저장할 변수입니다.
let result = "";

// 임시 문자열을 저장할 변수입니다. 태그 내부 문자열 또는 단어를 저장하는데 사용됩니다.
let temp = "";

// 현재 문자가 태그(<>) 내에 있는지 확인하는 데 사용되는 boolean 변수입니다.
let isTag = false;

// 입력 문자열을 한 문자씩 순회합니다.
for (let i = 0; i < str.length; i++) {
  if (str[i] === "<") {
    // 태그 시작 부분을 만난 경우
    isTag = true; // 태그 내부로 진입했음을 표시합니다.
    result += temp.split("").reverse().join("") + str[i]; // 지금까지 누적된 문자를 뒤집어 result에 추가합니다.
    temp = ""; // temp 변수를 초기화합니다.
  } else if (str[i] === ">") {
    // 태그 종료 부분을 만난 경우
    isTag = false; // 태그 내부를 벗어났음을 표시합니다.
    result += temp + str[i]; // 태그 내부의 문자열을 result에 추가합니다.
    temp = ""; // temp 변수를 초기화합니다.
  } else if (isTag) {
    // 태그 내부의 문자를 만난 경우
    temp += str[i]; // 태그 내부의 문자를 temp에 추가합니다.
  } else {
    // 태그 외부의 문자를 만난 경우
    if (str[i] === " ") {
      // 공백을 만나면 단어가 끝난 것으로 간주합니다.
      result += temp.split("").reverse().join("") + str[i]; // 지금까지 누적된 단어를 뒤집어 result에 추가합니다.
      temp = ""; // temp 변수를 초기화합니다.
    } else {
      temp += str[i]; // 단어 내부의 문자를 temp에 추가합니다.
    }
  }
}

// 마지막에 남아있는 temp 변수의 내용을 뒤집어 result에 추가합니다.
result += temp.split("").reverse().join("");

// 결과 문자열을 콘솔에 출력합니다.
console.log(result);
