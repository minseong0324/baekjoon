const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let inputBraket = [];
let testNum = 0;
let count = 0;

rl.on("line", function (line) {
// 후위 표기식을 순회합니다.
    if (testNum === 0) {
        //testNum이 0일 때, 즉 테스트 케이스의 값이 0일 때,
        // 첫 번째 입력값은 테스트 케이스의 개수
        testNum = Number(line);
    } else {
        // 테스트 케이스의 개수만큼 입력을 받고 처리
        inputBraket.push(line);
        count++;

        if (count === testNum) {// 모든 입력을 받았으면 stack으로 괄호의 짝을 맞춰보자.
            rl.close();
        }
    }
});

    //스택 안에 괄호가 남아있다면, NO 출력. 안남아있다면 YES를 출력
    rl.on("close", function () {
        for (let a = 0; a < count; a++) {
            let BraketStack = [];
            let YN = "";   
            //'('가 제일 처음으로 나온다면, '('만 stack에 넣고, 
            //')'을 만날 때까지 계속 스택에 넣다가 만나면 빼내기.
            for (let b = 0; b < inputBraket[a].length; b++) {
                if (inputBraket[a].charAt(b) == "(") {
                    BraketStack.push(inputBraket[a].charAt(b));
                } else if (inputBraket[a].charAt(b) == ")") {
                    if (BraketStack.length > 0) {
                        BraketStack.pop();
                    } else {
                        YN = "NO";
                        break;
                    }
                }
            }
            if (YN === "") {
                YN = BraketStack.length === 0 ? "YES" : "NO";
            }
            console.log(YN);
        }     
});
