const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let trees = {};
let total = 0;

rl.on("line", function (line) {
  trees[line] = trees[line] ? trees[line] + 1 : 1;
  total++;
}).on("close", function () {
  let names = Object.keys(trees);
  names.sort();

  names.forEach((name) => {
    console.log(`${name} ${((trees[name] / total) * 100).toFixed(4)}`);
  });

  process.exit();
});
