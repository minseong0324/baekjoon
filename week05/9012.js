//'('가 제일 처음으로 나온다면, '('만 stack에 넣고, 
//')'을 만날 때까지 계속 스택에 넣다가 만나면 빼내기.

const readline = require("readline"); // readline 모듈을 가져옵니다.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputBraket = []; // 입력 괄호 문자열을 저장할 배열입니다.
let testNum = 0; // 테스트 케이스 개수를 저장할 변수입니다.
let count = 0; // 현재까지 처리한 테스트 케이스 개수를 저장할 변수입니다.

rl.on("line", function (line) { // 입력을 한 줄씩 받습니다.
    if (testNum === 0) { // 테스트 케이스 개수가 지정되지 않은 경우
        testNum = Number(line); // 첫 번째 입력값을 테스트 케이스 개수로 지정합니다.
    } else {
        inputBraket.push(line); // 괄호 문자열을 inputBraket 배열에 저장합니다.
        count++; // 처리한 테스트 케이스 개수를 증가시킵니다.

        if (count === testNum) { // 모든 테스트 케이스의 입력을 받았으면
            rl.close(); // readline 인터페이스를 닫습니다.
        }
    }
});

rl.on("close", function () {
    for (let a = 0; a < count; a++) { // 각 테스트 케이스에 대해
        let BraketStack = []; // 괄호를 저장할 스택입니다.
        let YN = ""; // 결과를 저장할 변수입니다. "YES" 또는 "NO" 값을 가집니다.

        for (let b = 0; b < inputBraket[a].length; b++) { // 괄호 문자열의 각 문자에 대해
            if (inputBraket[a].charAt(b) == "(") { // 여는 괄호를 만나면
                BraketStack.push(inputBraket[a].charAt(b)); // 스택에 여는 괄호를 추가합니다.
            } else if (inputBraket[a].charAt(b) == ")") { // 닫는 괄호를 만나면
                if (BraketStack.length > 0) { // 스택에 여는 괄호가 있으면
                    BraketStack.pop(); // 스택에서 여는 괄호를 제거합니다.
                } else {
                    YN = "NO"; // 스택에 여는 괄호가 없으면 "NO" 결과를 저장하고 종료합니다.
                    break;
                }
            }
        }
        if (YN === "") { // 모든 문자를 처리한 후 결과가 없으면
            YN = BraketStack.length === 0 ? "YES" : "NO"; // 스택이 비어있으면 "YES", 아니면 "NO"를 저장합니다.
        }
        console.log(YN); // 결과를 출력합니다.
    }
});
