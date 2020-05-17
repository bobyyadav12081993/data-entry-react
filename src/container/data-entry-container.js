import { connect } from "react-redux";
import DataEntry from "../components/data-entry/data-entry.component";
import { editDayData, resetState, changeTheme } from "../action/action";

const mapStateToProps = (state) => {
  return {
    theme: state.dataEntry.theme,
  };
};
export default connect(mapStateToProps, { editDayData, resetState, changeTheme })(DataEntry);
