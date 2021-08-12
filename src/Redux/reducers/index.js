import {combineReducers} from 'redux'
import years from "./years"
import shows from './shows';
import tours from './tours';

const rootReducer = combineReducers({
  years,
  shows,
  tours,
})

export default rootReducer




// import {
//     SET_LIST_DETAILS,
//     API_START,
//     API_END,
//     FETCH_LIST_DETAILS,
//     FETCH_YEARS,
//     FETCH_SHOWS,
//     FETCH_TOURS,
//     LOADING_TOURS,
//   } from "../actions/types";
  
//   export default function(state = {}, action) {
//     //console.log("action type => ", action.type);
//     switch (action.type) {
//       case SET_LIST_DETAILS:
//         return { data: action.payload };
//       case API_START:
//         if (action.payload === FETCH_LIST_DETAILS || action.payload === FETCH_YEARS || action.payload === FETCH_SHOWS || 
//           action.payload === FETCH_TOURS || action.payload === LOADING_TOURS) {
//           return {
//             ...state,
//             isLoadingData: true
//           };
//         }
//         break;
//       case API_END:
//         if (action.payload === FETCH_LIST_DETAILS || action.payload === FETCH_YEARS || action.payload === FETCH_SHOWS || 
//           action.payload === FETCH_TOURS) {
//           return {
//             ...state,
//             isLoadingData: false
//           };
//         }
//         break;
//       default:
//         return state;
//     }
//   }