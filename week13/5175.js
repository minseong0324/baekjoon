const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function generateSubsets(arr) {
  const subsets = [[]];
  for (const num of arr) {
    const length = subsets.length;
    for (let i = 0; i < length; i++) {
      subsets.push([...subsets[i], num]);
    }
  }
  return subsets;
}

function findMinimalProblemSet(m, n, problems) {
  const allAlgorithms = new Set(Array.from({ length: m }, (_, i) => i + 1));
  let minimalSet = null;
  let minSize = Infinity;

  const subsets = generateSubsets(Array.from({ length: n }, (_, i) => i));
  for (const subset of subsets) {
    const algorithmsInSubset = new Set();
    for (const problemIdx of subset) {
      for (const algorithm of problems[problemIdx]) {
        algorithmsInSubset.add(algorithm);
      }
    }

    if (algorithmsInSubset.size === m && subset.length < minSize) {
      minimalSet = subset;
      minSize = subset.length;
    }
  }

  return minimalSet;
}

function main() {
  let k;
  const testCases = [];
  let currentTestCase = [];
  let currentProblemIdx = 0;

  rl.on("line", (line) => {
    if (!k) {
      k = parseInt(line);
    } else {
      if (currentTestCase.length === 0) {
        const [m, n] = line.split(" ").map(Number);
        currentTestCase.push(m, n);
      } else {
        const algorithms = line.split(" ").map(Number);
        currentTestCase.push(algorithms);
        currentProblemIdx++;

        if (currentProblemIdx === currentTestCase[1]) {
          testCases.push(currentTestCase);
          currentTestCase = [];
          currentProblemIdx = 0;
        }
      }

      if (testCases.length === k) {
        rl.close();
      }
    }
  }).on("close", () => {
    for (let i = 0; i < k; i++) {
      const [m, n, problems] = testCases[i];
      const minimalSet = findMinimalProblemSet(m, n, problems);

      const result = minimalSet
        .map((idx) => String.fromCharCode(65 + idx))
        .join(" ");
      console.log(`Data Set ${i + 1}: ${result}\n`);
    }
  });
}

main();
