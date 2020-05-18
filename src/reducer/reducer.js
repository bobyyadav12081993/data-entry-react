import { ADD_DAY_DATA, RESET_STATE, EDIT_DAY_DATA, CHANGE_IS_REVIEW, CHANGE_THEME } from "./../constants/actionType";
import { combineReducers } from "redux";

const initialState = {
  dayData: {
    dateReported: new Date(),
    recovered: "",
    deceased: "",
    name: "",
    stateName: "",
    newCases: "",
  },
  isReview: false,
  isUpdate: false,
  theme: "light",
};

function dataEntry(state = initialState, action) {
  switch (action.type) {
    case ADD_DAY_DATA:
      return Object.assign({}, state, {
        dayData: JSON.parse(JSON.stringify(action.dayData)),
      });
    case RESET_STATE:
      return Object.assign({}, state, {
        dayData: JSON.parse(JSON.stringify(initialState.dayData)),
        isUpdate: initialState.isUpdate,
        isReview: initialState.isReview,
      });
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
    case CHANGE_THEME:
      return Object.assign({}, state, {
        theme: action.theme ? "dark" : "light",
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataEntry,
});

export default rootReducer;
