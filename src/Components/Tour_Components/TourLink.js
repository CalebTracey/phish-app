import React from "react";
import { Link } from "react-router-dom";

const TourLink = (tour) => {
    return (
        <Link to={`/PhishApp/tours/${tour.tour.id}`} style={{ color: "white" }} className="btn btn-primary shows">  
          <div className = "year-info">
        <div className = "year-info-year">{tour.tour.name}</div> 
        <div className = "year-info-show">
            <div> Shows: </div> 
            <div className = "year-info-count">{tour.tour.shows.length}</div>
            </div>
            </div>
        </Link>
    );
};

export default TourLink;
