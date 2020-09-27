const str = 'a';

const checkWord = word => {
  if(word === word.toUpperCase()) {
    return true;
  }
  return false;
};

console.log(checkWord(str));