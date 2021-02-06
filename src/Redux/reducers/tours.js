import {
    SET_TOURS,
    FETCH_TOURS,
    LOADING_TOURS,
    API_START,
    API_END,
} from "../actions/types";

/**
 * Tours Reduer
 * 
 * @param {*} state 
 * @param {*} action 
 */

const tours = (state = {}, action) => {
    console.log("action type => ", action.type);
    switch (action.type) {
        case SET_TOURS:
            return {
                ...state,
                tourList: action.payload.data
            };
        case API_START:
            if (action.payload === FETCH_TOURS ) {
                return {
                    ...state,
                    isLoadingData: true
                };
            }
            if (action.payload === LOADING_TOURS) {
                return {
                    ...state,
                    tourList: action.payload.data
                }
            }

            break;
        case API_END:
            if (action.payload === FETCH_TOURS) {
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
export default tours