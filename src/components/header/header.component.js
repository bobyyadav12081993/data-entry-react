import React from "react";
import { changeBodyTheme } from "../../services/utility";

class Navbar extends React.Component {
  componentWillReceiveProps(props) {
    changeBodyTheme(props.theme);
  }

  render() {
    return (
      <nav className={"navbar navbar-expand-lg navbar-" + this.props.theme + " bg-" + this.props.theme}>
        <a className="navbar-brand" href="/">
          Data Entry Covid 19
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
    );
  }
}

export default Navbar;
