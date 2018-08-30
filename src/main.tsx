import React from "react";
import ReactDOM from "react-dom";

import CssModules from "react-css-modules";
const style = require("./main.css");

@CssModules(style)
class App extends React.Component {
  render() {
    return (
      <>
        <h1 styleName="header">App Title</h1>
        <h2 styleName="second-header">Second Header</h2>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
