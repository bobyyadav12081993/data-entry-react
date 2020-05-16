import { ADD_DAY_DATA, RESET_STATE, EDIT_DAY_DATA } from "./../constants/actionType";

export const addDayData = (dayData) => ({ type: ADD_DAY_DATA, dayData });
export const resetState = (state) => ({ type: RESET_STATE, state });
export const editDayData = (data) => ({ type: EDIT_DAY_DATA, data });
