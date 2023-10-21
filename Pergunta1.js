const array = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21];

function order(arr) {
  let oneCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      const temp = arr[i];
      arr[i] = arr[oneCount];
      arr[oneCount] = temp;
      oneCount++;
    }
  }
}

order(array);

console.log(array);
