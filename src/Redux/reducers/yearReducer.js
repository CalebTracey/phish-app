import {
    SET_YEARS,
  } from "../actions/types";
  
  export default function(years = {}, action) {
    console.log("action type => ", action.type);
    switch (action.type) {
      case SET_YEARS:
        return { ...years,
          ...action.payload.data };
      default:
        return years;
    }
  }