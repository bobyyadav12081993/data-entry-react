import { connect } from "react-redux";
import DayModal from "../components/day-modal/day-modal.component";
import { addDayData, changeIsReview } from "../action/action";

const mapStateToProps = (state, ownProps) => {
  return {
    dayData: state.dataEntry.dayData,
    isReview: state.dataEntry.isReview,
    isUpdate: state.dataEntry.isUpdate,
  };
};
export default connect(mapStateToProps, { addDayData, changeIsReview }, null, { forwardRef: true })(DayModal);
