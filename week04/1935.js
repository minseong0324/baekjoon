const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 입력값을 저장할 배열입니다.
const input = [];
// 한 줄씩 입력을 받아서 input 배열에 추가합니다.
rl.on('line', line => {
    input.push(line);
}).on('close', () => {
  // 첫 번째 입력값을 정수로 변환하여 변수 n에 저장합니다.
    const n = parseInt(input[0]);
  // 두 번째 입력값을 후위 표기식 문자열로 받습니다.
    const expression = input[1];
  // 세 번째 입력값부터 숫자들을 배열에 저장합니다.
  //input.slice(2) 부분은 입력값 배열(input)에서 인덱스 2부터 끝까지의 요소들을 새로운 배열로 추출하는 것을 의미
  // 인덱스 2부터 시작하는 이유는 후위 표기식에서 대문자 알파벳에 대응하는 숫자들이 위치하기 때문
  //slice(start, end)는 start 인덱스부터 end 인덱스 전까지의 요소들을 추출. end 인자가 생략되면 배열의 끝까지 추출
  // map(Number)는 추출한 배열의 모든 요소를 숫자로 변환하는 함수
  // 이 함수는 배열의 각 요소에 대해 Number 함수를 적용하고, 새로운 배열을 생성. 이렇게 하면 각 요소가 문자열에서 숫자로 변환
    const nums = input.slice(2).map(Number);
  // 후위 표기식을 계산할 때 사용할 스택입니다.
    const stack = [];

  // 후위 표기식을 순회합니다.
    for (const char of expression) { //expression 문자열에 for문 실행
    // 문자가 대문자 알파벳일 경우
        if (char >= 'A' && char <= 'Z') {
      // nums 배열에서 해당 문자에 대응하는 숫자를 스택에 넣습니다.
      //charCodeAt(0)는 문자열의 첫 번째 문자의 유니코드(Unicode) 값을 반환하는 메소드
        //대문자 알파벳 'A'의 유니코드 값을 가져옵니다. 이 값은 65입니다.
        //nums[char.charCodeAt(0) - 'A'.charCodeAt(0)]: nums 배열에서 상대적 위치에 해당하는 값을 가져옵니다. 
        //이 값은 후위 표기식에서 대문자 알파벳에 대응하는 인덱스이다.
        stack.push(nums[char.charCodeAt(0) - 'A'.charCodeAt(0)]);
        } else {
      // 연산자를 만난 경우 스택에서 두 개의 값을 꺼냅니다.
            const b = stack.pop();
            const a = stack.pop();
            let result;

            // 연산자에 따라 결과값을 계산합니다.
            switch (char) {
                case '+':
                result = a + b;
                break;
                case '-':
                result = a - b;
                break;
                case '*':
                result = a * b;
                break;
                case '/':
                result = a / b;
                break;
            }

            // 계산한 결과값을 다시 스택에 넣습니다.
            stack.push(result);
        }
    }

    // 스택에 남은 값을 소수점 둘째자리까지 출력합니다.
    console.log(stack[0].toFixed(2));
});
