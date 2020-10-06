const nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
};

function solution(nationWidth) {
  console.log(nationWidth);
  const korea = nationWidth['korea'];
  delete nationWidth['korea'];
  console.log(nationWidth);
  
  const nation = Object.keys(nationWidth).reduce((a, b) => {
    return Math.abs(nationWidth[a] - korea) > Math.abs(nationWidth[b] - korea)
    ? b
    : a
  });

  return `${nation} ${Math.abs(nationWidth[nation] - korea)}`;
}

console.log(solution(nationWidth));

