const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Queue { //this로 접근, 조작, 호출
    constructor() {
        this.queue = []; 
    }

    push(value) { //push X: 정수 X를 큐에 넣는 연산이다.
        this.queue.push(value);
    }

    pop() { //pop: 큐에서 가장 앞에 있는 정수를 빼고, 
        //그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        return this.queue.length ? this.queue.shift() : -1; //삼항연산자
    } //this.queue.length->큐의 길이 가져오기

    size() { //size: 큐에 들어있는 정수의 개수를 출력한다.
        return this.queue.length;
    }

    empty() { //empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
        return this.queue.length === 0 ? 1 : 0; //삼항연산자
    }

    front() { //front: 큐의 가장 앞에 있는 정수를 출력한다. 
        //만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        return this.queue.length ? this.queue[0] : -1; //삼항연산자
    }

    back() { //back: 큐의 가장 뒤에 있는 정수를 출력한다. 
        //만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
        return this.queue.length ? this.queue[this.queue.length - 1] : -1; //삼항연산자
    }
}

const queue = new Queue();
let commandNum; //첫 번쨰에 입력하는 정수. 명령어의 개수

rl.on("line", function (line) {
    if (!commandNum) {
        commandNum = parseInt(line);
        return;
    }

    const command = line.split(" "); //명령어와 명령어와 사용되는 값을 공백으로 분리
    switch (command[0]) {//위에서 공백으로 분리했으므로 0번째 인덱스는 명령어,
        case "push":
            queue.push(parseInt(command[1]));//1번쨰 인덱스는 입력 값인데, parseInt를 써 정수로 변환
        break;
        case "pop":
            console.log(queue.pop());
        break;
        case "size":
            console.log(queue.size());
        break;
        case "empty":
            console.log(queue.empty());
        break;
        case "front":
            console.log(queue.front());
        break;
        case "back":
            console.log(queue.back());
        break;
    }
    });
