import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        { value: "AC", key: "clear", addClass: "jumbo ", forFunction: "clear" },
        {
          value: "/",
          key: "divide",
          addClass: "funcButton button",
          forFunction: "operators",
        },
        {
          value: "*",
          key: "multiply",
          addClass: "funcButton button",
          forFunction: "operators",
        },
        {
          value: "7",
          key: "seven",
          forFunction: "numbers",
        },
        {
          value: "8",
          key: "eight",
          forFunction: "numbers",
        },
        {
          value: "9",
          key: "nine",

          forFunction: "numbers",
        },
        {
          value: "-",
          key: "subtract",
          addClass: "funcButton button",
          forFunction: "numbers",
        },
        { value: "4", key: "four", forFunction: "numbers" },
        { value: "5", key: "five", forFunction: "numbers" },
        { value: "6", key: "six", forFunction: "numbers" },
        {
          value: "+",
          key: "add",
          addClass: "funcButton button",
          forFunction: "numbers",
        },
        { value: "1", key: "one", forFunction: "numbers" },
        { value: "2", key: "two", forFunction: "numbers" },
        {
          value: "3",
          key: "three",

          forFunction: "numbers",
        },
        {
          value: "0",
          key: "zero",
          addClass: "jumbo button",
          forFunction: "numbers",
        },
        {
          value: ".",
          key: "decimal",

          forFunction: "numbers",
        },
        {
          value: "=",
          key: "equals",

          forFunction: "equals",
        },
      ],
      currentValue: 0,
      previousValue: 0,

      formula: "",
      currentSign: "pos",
      lastClicked: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (value) => {
    console.log(parseInt(value));
    switch (value) {
      case "AC":
        return () => {
          this.setState({
            currentValue: 0,
          });
        };

      default:
        return () => {
          this.setState({
            currentValue: value,
          });
        };
    }
  };

  render() {
    return (
      <div id="calculatorWrap">
        <div id="calculator">
          <div className="formulaScreen">{this.state.currentValue}</div>
          <div className="outputScreen" id="display">
            {/* <input class="inputData" placeholder="value"></input> */}
            {this.state.currentValue}
          </div>

          <div id="numPad">
            {this.state.buttons.map((item) => (
              <button
                className={item.addClass}
                id={item.key}
                value={item.value}
                onClick={this.handleClick}
              >
                {item.value}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
