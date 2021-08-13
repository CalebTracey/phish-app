import { SET_YEARS, API, FETCH_YEARS } from "./types";

const getYears = () => {
  return apiAction({
    url: "/years?include_show_counts=true",
    onSuccess: setYears,
    onFailure: () => console.log("Error occured loading years"),
    label: FETCH_YEARS,
  });
};
function setYears(data) {
  return {
    type: SET_YEARS,
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
  headersOverride = null,
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
const exportAll = { getYears, setYears };

export default exportAll;
