import { SET_SHOWS, API, FETCH_SHOWS } from "./types";

export function getYearShow(year) {
    return apiAction({
        url: "/years/" + year,
        onSuccess: setYearShows,
        onFailure: () => console.log("Error occured loading years"),
        label: FETCH_SHOWS
    });
}

function setYearShows(data) {
    return {
        type: SET_SHOWS,
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