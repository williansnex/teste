function findMissingNumbers(arr) {
  const n = Math.max(...arr);
  const missingNumbers = [];

  for (let i = 0; i <= n; i++) {
    if (!arr.includes(i)) {
      missingNumbers.push(i);
    }
  }

  arr.push(...missingNumbers);
  return arr;
}

const arr = [9, 2, 3, 1, 4];
const result = findMissingNumbers(arr);

console.log(result);
