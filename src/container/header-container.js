import { connect } from "react-redux";
import Navbar from "./../components/header/header.component";

const mapStateToProps = (state) => {
  return {
    theme: state.dataEntry.theme,
  };
};

export default connect(mapStateToProps)(Navbar);
