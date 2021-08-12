import {
  SET_TOURS,
  FETCH_TOURS,
  FETCHING_TOURS,
  API_START,
  API_END,
} from "../actions/types";

/**
 * Tours Reduer
 *
 * @param {*} state
 * @param {*} action
 */

const initialState = {
  isLoadingData: {},
  tourData: [],
  tourList: [],
};

const tours = (state = initialState, action) => {
  console.log("action type => ", action);
  switch (action.type) {
    case SET_TOURS:
      return {
        ...state,
        tourData: [...state.tourData, ...action.payload.data],
      };
    case API_START:
      if (action.payload === FETCH_TOURS) {
        return {
          ...state,
          isLoadingData: true,
        };
      }
      break;
    case API_END:
      if (action.payload === FETCH_TOURS) {
        return {
          ...state,
          isLoadingData: false,
        };
      }
      break;
    default:
  }
  return state;
};
export default tours;
