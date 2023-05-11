const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputNum = [];
let testNum = 0;
let count = 0;
rl.on('line', function(line) {
    if (testNum === 0) {
      //testNum이 0일 때, 즉 테스트 케이스의 값이 0일 때,
      // 첫 번째 입력값은 테스트 케이스의 개수
        testNum = Number(line);
    } else {
      // 테스트 케이스의 개수만큼 입력을 받고 처리
        inputNum.push(Number(line));
        count++;
    }

    if (count === testNum) {
      // 모든 입력을 받았으면 
        const sortedNum =inputNum.sort((a, b) => a - b); // 오름차순 정렬
        //Array.sort() 함수를 사용하여 입력받은 숫자들을 오름차순으로 정렬
        console.log(sortedNum.join("\n")); // 결과 출력
        rl.close();
    }
});