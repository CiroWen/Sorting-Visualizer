import { useState, useEffect } from "react";
import "./SortingVisualizer.css";
import * as algos from "./sortingAlgos/sortingAlgos";
const App = props => {
  const [arr, setArr] = useState([]); // useState returns the current state and a function that updates it.
  let recordArr = []; // an array that records algorithm
  /**
   *
   * @param {number} min inclusive lower bound
   * @param {number} max inclusive upper bound
   * @returns {number} a random integer range from [min,max]
   */
  const randomIntFromInterval = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  };
  /**
   * method to generate an array containing random numbers
   */
  const resetArr = () => {
    const temp = [];
    for (let i = 0; i < 130; i++) {
      let rnd;
      do {
        rnd = randomIntFromInterval(5, 600);
      } while (temp.includes(rnd));
      temp.push(rnd);
    }
    setArr(temp);
    // setBarArr(document.querySelectorAll(".array-bar"));
  };

  /**
   * manipulates the style of bars according to the record array
   */
  const recordedAnimation = () => {
    for (let i = 0; i < recordArr.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isClrChanged = i % 3 !== 2;
      if (isClrChanged) {
        const [barOneIdx, barTwoIdx] = recordArr[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? "blue" : "#ff7782";
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * 10);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = recordArr[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * 10);
      }
    }
  };

  /**
   * function bound to algorithm button.
   */
  const mergeSort = () => {
    const jsSortedArr = arr.slice().sort((a, b) => a - b);
    const selfSortedArr = algos.mergeSort(
      arr,
      arr.slice(),
      recordArr
    );
    recordedAnimation();
    // console.log(isEqual(jsSortedArr, selfSortedArr));
    // setArr(tempArr)
    // setArr(selfSortedArr);
    // console.log(recordArr);
    // console.log(tempArr);
  };

  /**
   * to test if two arrays are identical
   * @param {*} arrA 
   * @param {*} arrB 
   * @returns boolean
   */
  const isEqual = (arrA, arrB) => {
    if (arrA.length !== arrB.length) return false;
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) return false;
    }
    return true;
  };

  /**
   * componentDidMount 
   */
  useEffect(() => {
    resetArr();
  }, []);

  // html layout returned to be used elsewhere as a component.
  return (
    <div className="array-container">
      {arr.map((value, idx) => (
        <div className="array-bar" key={idx} style={{ height: `${value}px` }}>
          {/* {value} */}
        </div>
      ))}
      <button className="btn-new" onClick={resetArr}>
        Generate New Array
      </button>
      <button className="btn-new" onClick={mergeSort}>
        Merge Sort
      </button>
    </div>
  );
};

export default App;
