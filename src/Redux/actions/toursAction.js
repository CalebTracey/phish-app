import { SET_TOURS, API, FETCH_TOURS, LOADING_TOURS} from "./types";

const getTours = (page, labelState) => {
    page = page === undefined ? 1 : page
    labelState = labelState === undefined ? FETCH_TOURS : labelState
    return apiAction({
        url: "/tours?page:" + page,
        //headers: {params: { page: page }},
        onSuccess: setTours,
        onFailure: () => console.log("Error occured loading years"),
        label: label
    })
}

function setTours(data, page, total_pages) {
    let labelState = FETCH_TOURS
    if (page < total_pages) {
        labelState = LOADING_TOURS
        getTours(page + 1, labelState)
    }
    return {
        type: SET_TOURS,
        payload: data
    };
}

function apiAction({
    url = "",
    method = "GET",
    data = null,
    //accessToken = null,
    onSuccess = () => { },
    onFailure = () => { },
    label = "",
    headersOverride = null
}) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            //accessToken,
            onSuccess,
            onFailure,
            label,
            headersOverride
        }
    };
}

export default {getTours}