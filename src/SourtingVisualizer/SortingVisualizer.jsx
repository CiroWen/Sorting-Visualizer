import { useState, useEffect } from "react";
import "./SortingVisualizer.css";

const App = props => {
  const [arr, setArr] = useState([]); //variable stored in state, useState returns the current state and a function that updates it.
  /**
   *
   * @param {number} min inclusive lower bound
   * @param {number} max inclusive upper bound
   * @returns {number} a random integer range from [min,max]
   */
  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * max + min);
  };
  /**
   * method to generate an array containing random numbers
   */
  const resetArr = () => {
    const temp = [];
    for (let i = 0; i < 120; i++) {
      let rnd;
      do {
        rnd = randomIntFromInterval(5, 600);
      } while (temp.includes(rnd));
      temp.push(rnd);
    }
    setArr(temp);
  };

  const mergeSort = () => {
    console.log(1);
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
