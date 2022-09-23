export const mergeSort = arr => {
  if (arr.length < 2) return arr; // if the array has only one element, no need for sorting
  const midIdx = Math.floor(arr.length / 2); //middle idx
  const left = mergeSort(arr.slice(0, midIdx)); //shallow copy [0,midIdx)
  const right = mergeSort(arr.slice(midIdx)); //shallow copy [midIdx, ...arr]
  const resultArr = [];
  let i = 0,
    k = 0;

  // Compares and pushes the smaller element to result array
  while (i < left.length && k < right.length) {
    const leftHeight = parseInt(left[i].style.height.replace("px", ""));
    const rightHeight = parseInt(right[k].style.height.replace("px", ""));

    let m = i,
      n = k;
    // debugger;
    setTimeout(() => {
      left[m].style.backgroundColor = "blue";
      right[n].style.backgroundColor = "blue";
      setTimeout(() => {
        left[m].style.backgroundColor = "#ff7782";
        right[n].style.backgroundColor = "#ff7782";
      }, m + 1 * 10);
    }, m * 10);
    if (leftHeight <= rightHeight) {
      resultArr.push(left[i]);
      i++;
    } else {
      resultArr.push(right[k]);
      k++;
    }
  }

  //   after comparing loop, push all the remaining elements to result array
  while (i < left.length) resultArr.push(left[i++]);
  while (k < right.length) resultArr.push(right[k++]);

  return resultArr;

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
