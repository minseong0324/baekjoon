const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on("line", function (sentence) {
    let sentenceLength = sentence.length;
    console.log(sentenceLength);
});
