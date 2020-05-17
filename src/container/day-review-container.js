import { connect } from "react-redux";
import ReviewData from "./../components/day-review-modal/day-review-modal.component";

const mapStateToProps = (state, ownProps) => {
  console.log("state in day review", state);
  return {
    dayData: state.dataEntry.dayData,
    cancelReview: ownProps.cancelReview,
    confirmReview: ownProps.confirmReview,
  };
};

export default connect(mapStateToProps)(ReviewData);
