import { connect } from "react-redux";
import ReviewData from "../components/day-review/day-review.component";

const mapStateToProps = (state, ownProps) => {
  return {
    dayData: state.dataEntry.dayData,
    cancelReview: ownProps.cancelReview,
    confirmReview: ownProps.confirmReview,
    theme: state.dataEntry.theme,
  };
};

export default connect(mapStateToProps)(ReviewData);
