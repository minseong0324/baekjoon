const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", (numbers) => {
    const [N, K] = numbers.split(" ").map(Number); // 입력받은 N, K 값을 구조 분해 할당으로 추출
    const queue = Array.from({ length: N }, (_, i) => i + 1); // 1부터 N까지의 숫자를 가진 배열 생성
    const result = []; // 결과를 저장할 배열 초기화

    let index = 0; // 현재 위치를 나타내는 인덱스 초기화

    while (queue.length > 0) { // 배열에 원소가 있는 동안 반복
        index += K - 1; // K번째 원소로 이동
        if (index >= queue.length) { // 원소의 개수를 넘어간 경우
        index %= queue.length; // 원소의 개수로 나눈 나머지로 인덱스 갱신
        }

        result.push(queue[index]); // K번째 원소를 결과 배열에 추가
        queue.splice(index, 1); // K번째 원소를 배열에서 제거
    }

    console.log(`<${result.join(", ")}>`); // 결과 배열을 출력 형식에 맞게 출력
    rl.close();

});