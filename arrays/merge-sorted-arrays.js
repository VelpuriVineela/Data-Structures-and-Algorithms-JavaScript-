// [0.3,4,31], [4,6,30]
// [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2) {
  const mergeArray = [];

  //check for the input
  if (array1.length === 0) {
    return array2;
  }

  if (array2.length === 0) {
    return array1;
  }

  let array1Item = array1[0];
  let array2Item = array2[0];
  let i = 1;
  let j = 1;

  while (array1Item || array2Item) {
    if (array2Item === undefined || array1Item < array2Item) {
      mergeArray.push(array1Item);
      array1Item = array1[i];
      i++;
    } else {
      mergeArray.push(array2Item);
      array2Item = array2[j];
      j++;
    }
  }

  return mergeArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
