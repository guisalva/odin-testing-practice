export function analyzeArray(array) {
  const length = array.length;

  let average =
    Math.round((array.reduce((total, value) => total + value) / length) * 100) /
    100;

  const min = findMinValue(array);

  const max = findMaxValue(array);

  return {
    average,
    min,
    max,
    length,
  };
}

function findMinValue(array) {
  let length = array.length;
  let min = Infinity;

  while (length--) {
    if (array[length] < min) {
      min = array[length];
    }
  }

  return min;
}

function findMaxValue(array) {
  let length = array.length;
  let max = -Infinity;

  while (length--) {
    if (array[length] > max) {
      max = array[length];
    }
  }

  return max;
}
