import {
    SET_SHOWS,
    API,
    FETCH_SHOWS,
    SET_YEAR
} from "./types";

const getYearShows = (year) => {
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

function setYear(year) {
    return {
        type: SET_YEAR,
        payload: year
    }
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
const allExports = {getYearShows, setYear}
export default allExports
    

