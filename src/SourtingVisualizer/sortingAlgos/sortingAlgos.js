export const mergeSort = (arr, auxiliaryArr, trackerArr) => {
  // console.log(ogArr);
  if (arr.length < 2) return arr; // if the array has only one element, no need for sorting
  const midIdx = Math.floor(arr.length / 2); //middle idx
  const left = mergeSort(arr.slice(0, midIdx), auxiliaryArr, trackerArr); //shallow copy [0,midIdx)
  const right = mergeSort(arr.slice(midIdx), auxiliaryArr, trackerArr); //shallow copy [midIdx, ...arr]
  const resultArr = [];
  let i = 0,
    m = 0,
    k = 0;
  // console.log(auxiliaryArr);
  // Compares and pushes the smaller element to result array
  while (i < left.length && k < right.length) {

    trackerArr.push([
      auxiliaryArr.indexOf(left[i]),
      auxiliaryArr.indexOf(right[k]),
    ]);
    trackerArr.push([
      auxiliaryArr.indexOf(left[i]),
      auxiliaryArr.indexOf(right[k]),
    ]);
    if (left[i] < right[k]) {
      resultArr.push(left[i]);
      trackerArr.push([
        auxiliaryArr.indexOf(arr[m++]),
        auxiliaryArr[auxiliaryArr.indexOf(left[i])],
      ]);
      
      i++;
    } else {
      // debugger
      resultArr.push(right[k]);
      trackerArr.push([
        auxiliaryArr.indexOf(arr[m++]),
        auxiliaryArr[auxiliaryArr.indexOf(right[k])],
      ]);
      k++;
    }
  }

  //   after comparing loop, push all the remaining elements to result array
  while (i < left.length) {
    trackerArr.push([
      auxiliaryArr.indexOf(left[i]),
      auxiliaryArr.indexOf(left[i]),
    ]);
    trackerArr.push([
      auxiliaryArr.indexOf(left[i]),
      auxiliaryArr.indexOf(left[i]),
    ]);
    trackerArr.push([
      auxiliaryArr.indexOf(arr[m++]),
      auxiliaryArr[auxiliaryArr.indexOf(left[i])],
    ]);
    resultArr.push(left[i++]);
  }
  while (k < right.length) {
    trackerArr.push([
      auxiliaryArr.indexOf(right[k]),
      auxiliaryArr.indexOf(right[k]),
    ]);
    trackerArr.push([
      auxiliaryArr.indexOf(right[k]),
      auxiliaryArr.indexOf(right[k]),
    ]);
    trackerArr.push([
      auxiliaryArr.indexOf(arr[m++]),
      auxiliaryArr[auxiliaryArr.indexOf(right[k])],
    ]);

    resultArr.push(right[k++]);
  }

  
  return resultArr;

  // Original merge sort algorithm
  //   if (arr.length === 1 || arr.length === 0) return arr; // if the array has only one element, no need for sorting
  //   const midIdx = Math.floor(arr.length / 2); //middle idx
  //   const left = mergeSort(arr.slice(0, midIdx)); //shallow copy [0,midIdx)
  //   const right = mergeSort(arr.slice(midIdx)); //shallow copy [midIdx, ...arr]
  //   const resultArr = [];
  //   let i = 0,
  //     k = 0;

  //   // Compares and pushes the smaller element to result array
  //   while (i < left.length && k < right.length) {
  //     left[i] < right[k] ? resultArr.push(left[i++]) : resultArr.push(right[k++]);
  //   }

  //   //   after comparing loop, push all the remaining elements to result array
  //   while (i < left.length) resultArr.push(left[i++]);
  //   while (k < right.length) resultArr.push(right[k++]);
  //   return resultArr;
};
