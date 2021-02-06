import {
  SET_SHOWS,
  FETCH_SHOWS,
  API_START,
  API_END,
  SET_YEAR,
} from "../actions/types";

/**
 * Shows Reducer
 * 
 * @param {*} state 
 * @param {*} action 
 */


const shows = (state = {isLoadingData: {}, year: {}, showList: {}}, action) =>{
  console.log("action type => ", action.type);
  switch (action.type) {
    case SET_SHOWS:
      return {
        ...state,
        showList: action.payload.data
    };
    case SET_YEAR:
      return {
        ...state,
        year: action.payload
      }
    case API_START:
      if (action.payload === FETCH_SHOWS) {
        return {
          ...state,
          isLoadingData: true
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_SHOWS) {
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
export default shows