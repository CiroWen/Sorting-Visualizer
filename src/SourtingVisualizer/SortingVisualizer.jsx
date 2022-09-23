import { useState, useEffect } from "react";
import "./SortingVisualizer.css";
import * as algos from "./sortingAlgos/sortingAlgos";
const App = props => {
  const [arr, setArr] = useState([]); //variable stored in state, useState returns the current state and a function that updates it.
  const [barArr, setBarArr] = useState([])
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
  const resetArr = async() => {
    const temp = [];
    for (let i = 0; i < 130; i++) {
      let rnd;
      do {
        rnd = randomIntFromInterval(5, 600);
      } while (temp.includes(rnd));
      temp.push(rnd);
    }
     await setArr(temp);
    setBarArr(document.querySelectorAll('.array-bar'))
  };

  const mergeSort = () => {
    
    const jsSortedArr = arr.slice().sort((a, b) => a - b);
    const selfSortedArr = algos.mergeSort(Array.prototype.slice.call(barArr))
    console.log(jsSortedArr);
    const tempArr = []
    selfSortedArr.map((val,idx) => {
      tempArr.push(parseInt(val.style.height.replace('px','')))
    })
    console.log(isEqual(jsSortedArr,tempArr));
  };

  const isEqual = (arrA, arrB) => {
    if (arrA.length !== arrB.length) return false;
    for (let i = 0; i < arrA.length; i++) {
      if (arrA[i] !== arrB[i]) return false;
    }
    return true;
  };

  /**
   * componentDidMount alternative
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
