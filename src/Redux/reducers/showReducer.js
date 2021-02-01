import {
    SET_SHOWS,
  } from "../actions/types";
  
  export default function(shows = {}, action) {
    console.log("action type => ", action.type);
    switch (action.type) {
      case SET_SHOWS:
        return { ...shows,
          ...action.payload.data };
      default:
        return shows;
    }
  }