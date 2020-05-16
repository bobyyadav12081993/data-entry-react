import { connect } from "react-redux";
import DayData from "./../components/day-data/day-data.component";

const mapStateToProps = (state, ownProps) => {
  return {
    dayData: state.dataEntry.dayData,
    isUpdate: state.dataEntry.isUpdate,
    nextClick: ownProps.nextClick,
  };
};

export default connect(mapStateToProps)(DayData);
