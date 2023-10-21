function hasSumCombination(arr, X) {
  const seenNumbers = new Set();

  for (const num of arr) {
      const complement = X - num;
      if (seenNumbers.has(complement)) {
          return true;
      }
      seenNumbers.add(num);
  }

  return false;
}

const arr = [1, 15, 2, 7, 2, 5, 7, 1, 4];
const X = 16;
const result = hasSumCombination(arr, X);

console.log(result);
