const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (sentence) {
    let result = ""; //빈 문자열로 초기화된 변수 result를 선언

    for (let i = 0; i < sentence.length; i++) {
        const charCode = sentence.charCodeAt(i);//입력 문자열 sentence에서 i번째 문자의 ASCII 코드를 얻는 작업을 수행

        if (charCode >= 65 && charCode <= 90) {
            /*문자가 대문자 알파벳(A-Z)인지 확인. ASCII 코드에서 65는 'A'이고, 90은 'Z'. 
            따라서 charCode 값이 65 이상 90 이하인 경우, 해당 문자는 대문자.*/
            result += String.fromCharCode(((charCode - 65 + 13) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            /*문자가 소문자 알파벳(a-z)인지 확인. ASCII 코드에서 97은 'a'이고, 122는 'z'. 
            따라서 charCode 값이 97 이상 122 이하인 경우, 해당 문자는 소문자.*/
            result += String.fromCharCode(((charCode - 97 + 13) % 26) + 97);
        } else {
            //알파벳이 아닌 경우
            result += sentence.charAt(i);
        }
    }
    console.log(result);
});
