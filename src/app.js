
import React, { Component } from "react";
import Header from "./layout/Header";
import Table from "./components/Table";

import "./style.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Table />
      </>
    );
  }
}
export default App;