const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (line) {
    const result = analyzeStr(line);
    console.log(result.join(" ")); // result 배열 요소를 공백으로 구분해 문자열로 변환한 후, 콘솔에 출력
});

function analyzeStr(str) {
    let lower = 0; //소문자
    let upper = 0; //대문자
    let number = 0; //숫자
    let space = 0; //공백

    for (let i = 0; i < str.length; i++) { // for문으로 str의 길이까지 돌리기
        const char = str.charAt(i); // str의 i번째 인덱스에 있는 문자를 반환
        if (char >= "a" && char <= "z") { //소문자
            lower++;
        } else if (char >= "A" && char <= "Z") { //대문자
            upper++;
        } else if (char >= "0" && char <= "9") { //숫자
            number++;
        } else if (char === " ") { // 공백
            space++;
        }
    } 

    return [lower, upper, number, space];
}
