import { SET_TOURS, API, FETCH_TOURS } from "./types";

const getTours = (page) => {
  // console.log("********" + page)
  return apiAction({
    url: "/tours?page=" + page,
    onSuccess: setTours,
    onFailure: () => console.log("Error occured loading years"),
    label: FETCH_TOURS,
  });
};

// function getTourInfo() {
//   return apiAction({
//     url: "/tours",
//     onSuccess: setTours,
//     onFailure: () => console.log("Error occured loading years"),
//     label: FETCH_TOURS,
//   });
// }

function setTours(data) {
  return {
    type: SET_TOURS,
    payload: data,
  };
}

function apiAction({
  url = "",
  method = "GET",
  data = null,
  //accessToken = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = "",
  headersOverride = { headers: { params: { per_page: 1000 } } },
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
      headersOverride,
    },
  };
}
const exportAll = { getTours, setTours };
export default exportAll;
