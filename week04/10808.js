const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on("line", function (line) {
    const result = analyzeStr(line);
    console.log(result.join(" ")); // result 배열 요소를 공백으로 구분해 문자열로 변환한 후, 콘솔에 출력
});


function analyzeStr(str) {
    let alphabetNumber = new Array(26).fill(0); // 알파벳 개수를 저장할 배열을 26개의 요소로 초기화하고 모두 0으로 채웁니다.

    for (let i = 0; i < str.length; i++) { // for문으로 str의 길이까지 돌리기
        const charCode = str.charCodeAt(i);
        if (charCode >= 97 && charCode <= 122) { //알파벳 소문자임을 확인한다.
            /*문자가 소문자 알파벳(a-z)인지 확인. ASCII 코드에서 97은 'a'이고, 122는 'z'. 
            따라서 charCode 값이 97 이상 122 이하인 경우, 해당 문자는 소문자.*/
            let alphabetOrder = parseInt(charCode - 97);// alphabetOrder(알파벳 순서를 의미하는 변수), 알파벳 순서를 구하고 변수에 저장
            
            alphabetNumber[alphabetOrder]++;// 해당 알파벳 순서에 해당하는 배열 요소의 값을 1 증가
        } 
    }
    return alphabetNumber; // 배열 자체를 반환
}

