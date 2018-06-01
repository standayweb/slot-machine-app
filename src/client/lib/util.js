export const randomItem = (array, random = Math.random()) =>
  array[Math.floor(random * array.length)];

export const randomColor = () => randomItem(['red', 'blue', 'green', 'yellow']);

export const calcMatches = colors => {
  const counts = {};
  colors.forEach(x => {
    counts[x] = (counts[x] || 0) + 1;
  });
  return Math.max(...Object.values(counts));
};

export const wrap = (number, range) => {
  let num = number;
  while (num > range) {
    num -= range;
  }
  return num;
};
