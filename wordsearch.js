const wordSearch = (letters, word) => {
  if (!letters || !word) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) return true;
  }

  const verticalJoin = [];
  for (let i = 0; i < letters.length; i++) {
    let verticalWord = "";
    for (let j = 0; j < letters[0].length; j++) {
      if (letters[j][i]) {
        verticalWord += letters[j][i];
      }
    }
    if (verticalWord) {
      verticalJoin.push(verticalWord);
    }
  }
  for (const v of verticalJoin) {
    if (v.includes(word)) return true;
  }
  return false;
};

module.exports = wordSearch;