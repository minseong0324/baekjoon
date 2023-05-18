// 'fs' 모듈을 import합니다. 백준에서는 fs 모듈을 이용하여 한 번에 전체 입력을 받아옵니다.
const fs = require("fs");

// 전체 입력을 받아와서 줄 단위로 나눕니다.
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

// Deque 클래스를 생성합니다. JavaScript 배열을 활용하여 Deque를 구현합니다.
class Deque {
  constructor() {
    // Deque의 요소들을 저장할 배열을 초기화합니다.
    this.arr = [];
  }
  // 요소를 Deque의 앞에 추가합니다.
  push_front(item) {
    this.arr.unshift(item);
  }
  // 요소를 Deque의 뒤에 추가합니다.
  push_back(item) {
    this.arr.push(item);
  }
  // Deque의 앞에서 요소를 제거하고 반환합니다. Deque가 비어 있을 경우 -1을 반환합니다.
  pop_front() {
    return this.arr.length ? this.arr.shift() : -1;
  }
  // Deque의 뒤에서 요소를 제거하고 반환합니다. Deque가 비어 있을 경우 -1을 반환합니다.
  pop_back() {
    return this.arr.length ? this.arr.pop() : -1;
  }
  // Deque의 크기(요소의 수)를 반환합니다.
  size() {
    return this.arr.length;
  }
  // Deque가 비어 있는지 확인합니다. 비어 있을 경우 1을, 그렇지 않을 경우 0을 반환합니다.
  empty() {
    return this.arr.length ? 0 : 1;
  }
  // Deque의 가장 앞에 있는 요소를 반환합니다. Deque가 비어 있을 경우 -1을 반환합니다.
  front() {
    return this.arr.length ? this.arr[0] : -1;
  }
  // Deque의 가장 뒤에 있는 요소를 반환합니다. Deque가 비어 있을 경우 -1을 반환합니다.
  back() {
    return this.arr.length ? this.arr[this.arr.length - 1] : -1;
  }
}

// Deque 객체를 생성합니다.
const deque = new Deque();

// 결과를 저장할 배열을 초기화합니다.
const output = [];

// 첫 번째 줄은 명령의 수이므로 제외하고 처리합니다.
for (let i = 1; i < input.length; i++) {
  // 각 줄의 명령어와 값을 분리합니다.
  const [command, value] = input[i].split(" ");

  // 각 명령어에 따라 해당하는 Deque 메서드를 실행하고, 필요한 경우 결과를 output 배열에 저장합니다.
  if (command === "push_front") {
    deque.push_front(Number(value));
  } else if (command === "push_back") {
    deque.push_back(Number(value));
  } else if (command === "pop_front") {
    output.push(deque.pop_front());
  } else if (command === "pop_back") {
    output.push(deque.pop_back());
  } else if (command === "size") {
    output.push(deque.size());
  } else if (command === "empty") {
    output.push(deque.empty());
  } else if (command === "front") {
    output.push(deque.front());
  } else if (command === "back") {
    output.push(deque.back());
  }
}

// 모든 명령어 처리가 완료되면, 결과를 한 번에 출력합니다.
console.log(output.join("\n"));
