import { ADD_DAY_DATA, RESET_STATE, EDIT_DAY_DATA } from "./../constants/actionType";
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
  isUpdate: false,
};

function dataEntry(state = initialState, action) {
  switch (action.type) {
    case ADD_DAY_DATA:
      return Object.assign({}, state, {
        dayData: action.dayData,
      });
    case RESET_STATE:
      return initialState;
    case EDIT_DAY_DATA:
      return Object.assign({}, state, {
        dayData: action.data.dayData,
        isUpdate: action.data.isUpdate,
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  dataEntry,
});

export default rootReducer;
