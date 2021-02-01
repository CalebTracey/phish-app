import {
    SET_TOURS,
  } from "../actions/types";
  
  export default function(tours = {}, action) {
    console.log("action type => ", action.type);
    switch (action.type) {
      case SET_TOURS:
        return { ...tours,
          ...action.payload.data };
      default:
        return tours;
    }
  }