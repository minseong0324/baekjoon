const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("단어를 입력하세요:", function(word) {
  const charCount = new Map();
  const upperCaseWord = word.toUpperCase();

  for (let i = 0; i < upperCaseWord.length; i++) {
    const char = upperCaseWord[i];
    if (charCount.has(char)) {
      charCount.set(char, charCount.get(char) + 1);
    } else {
      charCount.set(char, 1);
    }
  }

  let maxCount = 0;
  let maxChar = '';
  charCount.forEach(function(count, char) {
    if (count > maxCount) {
      maxCount = count;
      maxChar = char;
    }
  });

  let isDuplicate = false;
  charCount.forEach(function(count, char) {
    if (count === maxCount && char !== maxChar) {
      isDuplicate = true;
    }
  });

  if (isDuplicate) {
    console.log('?');
  } else {
    console.log(maxChar);
  }

  rl.close();
});
