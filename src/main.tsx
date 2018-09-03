import React from "react";
import ReactDOM from "react-dom";

import styles from './main.scss';

import Sidebar from "@components/Sidebar/Sidebar";

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className={styles.header}>App Title</h1>
        <Sidebar />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
