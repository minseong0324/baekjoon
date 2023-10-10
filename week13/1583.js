const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let N;
let pillars = [];

function checkTruckFits(truckSize) {
  // 기둥과 트럭이 충돌하는지 확인하는 함수
  for (let i = 0; i < N; i++) {
    const x = pillars[i][0];
    const y = pillars[i][1];

    if (
      y >= truckSize ||
      200 - y >= truckSize ||
      x >= truckSize ||
      200 - x >= truckSize
    ) {
      continue; // 트럭이 기둥의 어느 쪽에서도 충돌하지 않는 경우
    } else {
      return false; // 기둥과 충돌하는 경우
    }
  }
  return true; // 트럭이 모든 기둥과 충돌하지 않는 경우
}

function findMaxTruckSize() {
  let maxTruckSize = 0;

  for (let size = 1; size <= 200; size++) {
    if (checkTruckFits(size)) {
      maxTruckSize = size;
    }
  }

  return maxTruckSize;
}

rl.on("line", (line) => {
  if (!N) {
    N = parseInt(line);
  } else {
    const [x, y] = line.split(" ").map(Number);
    pillars.push([x, y]);
  }

  if (pillars.length === N) {
    const result = findMaxTruckSize();
    console.log(result);
    rl.close();
  }
});
