import React from "react";
import { Link } from "react-router-dom";

const VenueLink = (venue) => {
    return (
        <Link to={`/PhishApp/venues/${venue.venue.id}`} style={{ color: "white" }} className="btn btn-primary shows">
        <div className = "year-info">
        <div className = "year-info-year">{venue.venue.name}</div> 
        <div className = "year-info-show">
            <div> Shows: </div> 
            <div className = "year-info-count">{venue.venue.shows_count}</div>
            </div>
            </div> 
        </Link>
    );
};

export default VenueLink;