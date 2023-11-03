import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { value: "+", key: "add" },
        { value: "-", key: "subtract" },
        { value: "*", key: "add" },
        { value: "/", key: "add" },
        { value: "1", key: "one" },
        { value: "2", key: "two" },
        { value: "3", key: "three" },
        { value: "4", key: "four" },
        { value: "5", key: "five" },
        { value: "6", key: "six" },
        { value: "7", key: "seven" },
        { value: "8", key: "eight" },
        { value: "9", key: "nine" },
        { value: "0", key: "zero" },
        { value: ".", key: "decimal" },
      ],
    };
  }
  render() {
    return (
      <div id="calculatorWrap">
        <div id="calculator">
          <div class="formulaScreen">testing</div>
          <div class="outputScreen" id="display">
            Result
          </div>
          <div id="numPad">
            <button class="jumbo button" id="clear" value="AC">
              AC
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
