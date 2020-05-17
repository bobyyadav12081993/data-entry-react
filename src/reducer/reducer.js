import { ADD_DAY_DATA, RESET_STATE, EDIT_DAY_DATA, CHANGE_IS_REVIEW } from "./../constants/actionType";
import { combineReducers } from "redux";

const initialState = {
  dayData: {
    dateReported: "",
    recovered: "",
    deceased: "",
    name: "",
    stateName: "",
    newCases: "",
  },
  isReview: false,
  isUpdate: false,
};

function dataEntry(state = initialState, action) {
  switch (action.type) {
    case ADD_DAY_DATA:
      return Object.assign({}, state, {
        dayData: JSON.parse(JSON.stringify(action.dayData)),
      });
    case RESET_STATE:
      return initialState;
    case EDIT_DAY_DATA:
      return Object.assign({}, state, {
        dayData: JSON.parse(JSON.stringify(action.data.dayData)),
        isUpdate: action.data.isUpdate,
        isReview: action.data.isReview,
      });
    case CHANGE_IS_REVIEW:
      return Object.assign({}, state, {
        isReview: action.isReview,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataEntry,
});

export default rootReducer;
