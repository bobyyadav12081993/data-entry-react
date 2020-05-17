import React from "react";
import "./App.scss";
import Navbar from "./container/header-container";
import DataEntry from "./container/data-entry-container";
import { changeBodyTheme } from "./services/utility";

class App extends React.Component {
  componentWillMount() {
    changeBodyTheme();
  }
  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <div className="container-fluid">
          <DataEntry></DataEntry>
        </div>
      </div>
    );
  }
}

export default App;
