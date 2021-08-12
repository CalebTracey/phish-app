import {
  SET_YEARS,
  FETCH_YEARS,
  API_START,
  API_END,
} from "../actions/types";

/**
 * Years Reducer
 * 
 * @param {*} state 
 * @param {*} action 
 */

const years = (state = {isLoadingData: {}, yearList: {}}, action) => {
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_YEARS:
      return {
        ...state,
        yearList: action.payload.data
      }
    
    case API_START:
      if (action.payload === FETCH_YEARS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_YEARS) {
        return {
          ...state,
          isLoadingData: false
        };
      }
      break;
    default:
    }
      return state;
}
export default years