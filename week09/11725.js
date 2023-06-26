const fs = require("fs");

const input = fs.readFileSync("/dev/stdin").toString().split("\n");

// input 배열의 첫 번째 요소(input[0])는 트리의 노드 개수를 의미.
// 이를 정수형으로 변환해 n에 저장.
const n = Number(input[0]);

// n + 1 크기의 2차원 배열 graph를 생성합니다. 이 배열은 그래프의 연결 정보를 저장하는 데 사용.
// 예를 들어 graph[i]는 노드 i와 연결된 노드들의 목록.
const graph = Array.from(Array(n + 1), () => []);

// n + 1 크기의 배열 visited를 생성하고, 모든 요소를 false로 초기화함.
// 이 배열은 DFS를 수행하면서 각 노드의 방문 여부를 확인하는 데 사용된다.
const visited = new Array(n + 1).fill(false);

// n + 1 크기의 배열 parent를 생성하고, 모든 요소를 0으로 초기화함.
// 이 배열은 각 노드의 부모 노드를 저장하는 데 사용된다
const parent = new Array(n + 1).fill(0);

// 노드들의 연결 정보를 입력받아 그래프를 구성한다.
for (let i = 1; i < n; i++) {
  // input[i]는 노드와 노드 사이의 연결을 나타내는 문자열.
  // 이를 공백으로 분리한 후 각 요소를 정수형으로 변환한다.
  const [a, b] = input[i].split(" ").map(Number);

  // 노드 a와 노드 b가 연결되어 있으므로, 각 노드의 연결 목록에 상대 노드를 추가합니다.
  graph[a].push(b);
  graph[b].push(a);
}

// 입력받은 노드(start)를 시작으로 DFS를 수행하며, 각 노드의 부모 노드를 찾아 parent 배열에 저장하는 함수.
function dfs(start) {
  // 시작 노드를 방문했다고 표시합니다. DFS를 수행하면서 해당 노드를 다시 방문하지 않기 위함.
  visited[start] = true;

  // 현재 노드와 연결된 모든 노드를 순회.
  for (let i of graph[start]) {
    // 만약 방문하지 않은 노드라면,
    if (!visited[i]) {
      // 그 노드의 부모 노드를 현재 노드로 설정.
      parent[i] = start;
      // 그 노드를 시작 노드로 하는 깊이 우선 탐색을 수행.
      dfs(i);
    }
  }
}

// 1번 노드부터 깊이 우선 탐색을 시작합니다.
dfs(1);

// 결과를 출력합니다. 부모 노드가 없는 1번 노드를 제외하고, 2번 노드부터 n번 노드까지의 부모 노드를 출력합니다.
let result = "";
for (let i = 2; i <= n; i++) {
  result += `${parent[i]}\n`;
}

// trim 함수를 이용해 문자열의 앞뒤 공백을 제거하고, 결과를 출력합니다.
console.log(result.trim());
