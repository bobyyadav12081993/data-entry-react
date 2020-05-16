import { connect } from "react-redux";
import DataEntry from "../components/data-entry/data-entry.component";
import { editDayData, resetState } from "../action/action";

export default connect(null, { editDayData, resetState })(DataEntry);
