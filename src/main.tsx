import React from "react";
import ReactDOM from "react-dom";

import './scss/main.scss';

import Sidebar from "@components/Sidebar/Sidebar";

class App extends React.Component {
  render() {
    return (
      <>
        <Sidebar />
        <main>Random Text</main>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
