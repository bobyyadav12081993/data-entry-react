import React from "react";
import "./App.scss";
// import Navbar from "./components/header/header.component";
import Navbar from "./container/header-container";
// import DataEntry from './components/data-entry/data-entry.component';
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

        {/* <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'>
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
