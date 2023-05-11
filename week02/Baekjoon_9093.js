const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let inputArr = [];
let testCase = 0;
let count = 0;

rl.on('line', function(line) {
  if (testCase === 0) {
    // 첫 번째 입력값은 테스트 케이스의 개수
    testCase = Number(line);
  } else {
    // 테스트 케이스의 개수만큼 입력을 받고 처리
    inputArr.push(line);
    count++;
  }

  if (count === testCase) {
    // 모든 입력을 받았으면 각각의 문장을 뒤집어서 출력
    for (let i = 0; i < inputArr.length; i++) {
      const words = inputArr[i].split(' ');
      const reversedWords = words.map(word => word.split('').reverse().join(''));
      console.log(reversedWords.join(' '));
    }
    rl.close();
  }
});
