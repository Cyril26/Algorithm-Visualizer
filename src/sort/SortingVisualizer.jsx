import React, { Component } from "react";

// .. COMPONENTS .. //
import Header from "./components/Header/Header.jsx";
import ButtonsBar from "./components/ButtonsBar/ButtonsBar.jsx";
import ArrayBar from "./components/ArrayBar/ArrayBar.jsx";
import RangeSlider from "./components/RangeSlider/RangeSlider.jsx"

// .. HELPER FUNCTIONS .. //
import { randomIntFromInterval, playAudio } from "../helpers.js"

// .. ALGORITHMS .. //
import Info from "./algorithms/info/Info.jsx";

// .. STYLE .. //
import "./SortingVisualizer.css";

// .. SOUNDS .. //
import ResetEffect from "./sounds/ResetEffect.mp3";
import SelectionSort from "./algorithms/selection/SelectionSort.js";
import BubbleSort from "./algorithms/bubble/BubbleSort.js";
import InsertionSort from "./algorithms/insertion/InsertionSort.js";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      animationSpeed: 50,
      numberOfArrayBars: 5,
      running: "",
    };

    this.generateNewArray = this.generateNewArray.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.onChangeArrayBarRangeSlider =
      this.onChangeArrayBarRangeSlider.bind(this);
    this.onChangeAnimationSpeedRangeSlider =
      this.onChangeAnimationSpeedRangeSlider.bind(this);
  }

  // ## This function generates the array before the page is rendere. ## //
  componentDidMount() {
    this.generateNewArray();
  }

  // ## This function generates new random array of size "numberOfArrayBars". ## //
  generateNewArray() {
    const array = [];
    for (let i = 0; i < this.state.numberOfArrayBars; i++) {
      // ## Generates an element between 5 and 70, and pushes it into the array. ## //
      array.push(randomIntFromInterval(5, 70));
    }
    playAudio(ResetEffect);
    this.setState({ array: array }, function () {
      let color_bar = document.getElementsByClassName("color-bar");
      let bottom_color_bar = document.getElementsByClassName("bottom");

      for (let k = 0; k < color_bar.length; k++) {
        color_bar[k].style.backgroundColor = "rgba(61, 90, 241, 0.5)";
        color_bar[k].style.boxShadow = "none";
      }

      for (let k = 0; k < bottom_color_bar.length; k++) {
        bottom_color_bar[k].style.backgroundColor = "rgba(61, 90, 241, 0.5)";
        bottom_color_bar[k].style.boxShadow = "none";
      }
    });
  }

  generateSteps = () => {
    let array = this.state.array.slice();

    this.setState({
      array: array,
    });
  };

  changeArray = (index, value) => {
    let arr = this.state.array;
    arr[index] = value;
    this.setState(
      {
        array: arr,
      },
      () => {
        this.generateSteps();
      }
    );
  };

  // ******************************************************************************* //

  // ## Handles if the "Array Size" slider is changed. ## //
  onChangeArrayBarRangeSlider = (event, value) => {
    this.setState({ numberOfArrayBars: value }, () => {
      this.generateNewArray()
    })
  };

  // ## Handles if the "Animation Speed" slider is changed. ## //
  onChangeAnimationSpeedRangeSlider = (animationSpeed) => {
    this.setState({ animationSpeed });
  };

  // ******************************************************************************* //

  // ## Calls the BubbleSort component/function. ## //
  bubbleSort = () => {
    this.setState({ running: "bs" }, function () {
      BubbleSort(this.state.array, this.state.animationSpeed);
    });
  };

  // ## Calls the SelectionSort component/function. ## //
  selectionSort = () => {
    this.setState({ running: "ss" }, function () {
      SelectionSort(this.state.array, this.state.animationSpeed);
    });
  };

  // ## Calls the InsertionSort component/function. ## //
  insertionSort = () => {
    this.setState({ running: "is" }, function () {
      InsertionSort(this.state.array, this.state.animationSpeed);
    });
  };

  // ******************************************************************************* //

  render() {
    /* Setting Bar Properties */
    let bars = this.state.array.map((value, index) => (
      <ArrayBar
        index={index}
        length={value}
        changeArray={this.changeArray}
      />
    ));

    return (
      <div className="sv">
        <div className="main-container">
          <Header />
          <ButtonsBar
            generateNewArray={this.generateNewArray}
            bubbleSort={this.bubbleSort}
            selectionSort={this.selectionSort}
            insertionSort={this.insertionSort}
          />

          <div className="bar-cont"> {bars}</div>

          <RangeSlider
            numberOfArrayBars={this.state.numberOfArrayBars}
            animationSpeed={this.state.animationSpeed}
            onChangeArrayBarRangeSlider={this.onChangeArrayBarRangeSlider}
            onChangeAnimationSpeedRangeSlider={
              this.onChangeAnimationSpeedRangeSlider
            }
          />

          <Info runningAlgo={this.state.running}></Info>
        </div>
      </div>
    );
  }
}
