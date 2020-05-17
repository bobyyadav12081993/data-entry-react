import { connect } from "react-redux";
import DayModal from "../components/day-modal/day-modal.component";
import { addDayData } from "../action/action";

export default connect(null, { addDayData }, null, { forwardRef: true })(DayModal);
