import { SET_LIST_DETAILS, API, FETCH_LIST_DETAILS } from "./types";

export function getData(apiUrl) {
    return apiAction({
        url: apiUrl,
        onSuccess: setListDetails,
        onFailure: () => console.log("Error occured loading years"),
        label: FETCH_LIST_DETAILS
    });
}

// export function getTours() {
//     return apiAction({
//         url: "/tours",
//         //onSuccess: setListDetails,
//         onSuccess: checkPages,
//         onFailure: () => console.log("Error occured loading tours"),
//         label: FETCH_LIST_DETAILS
//     });
// }

function setListDetails(data) {
    return {
        type: SET_LIST_DETAILS,
        payload: data
    };
}
// function checkPages(data) {
//     //console.log(data.total_pages)
//     for (var i = 0; i < data.total_pages; i++) {
//         console.log(i)
//         setListDetails(data)
//     }
// }
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