import React from "react";
import "./SortingVisualizer.css";

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    // variable stored in state
    this.state = {
      array: [], //main array to store random generated  numbers
    };
  }

  /**
   * excutes when SortingVisualizer component loads
   */
  componentDidMount() {
    this.resetArray();
  }

  /**
   * method to generate and reset array
   */
  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      let rnd = randomIntFromInterval(5, 1000);
      if (!array.includes(rnd)) array.push(rnd);
    }
    this.setState({ array });
  }

  render() {
    const { array } = this.state;
    return (
      <>
        {array.map((value, idx) => (
          <div className="array-bar" key={idx}>
            {value}
          </div>
        ))}
      </>
    );
  }
}

function randomIntFromInterval(min, max) {
//   return Math.floor(Math.random() * max + min);
  return Math.floor(Math.random() * max + min);
}
