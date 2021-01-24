import React from "react";
import { Link } from "react-router-dom";

const TourLink = (tour) => {
    return (
        <Link to={`/PhishApp/tours/${tour.tour.id}`} style={{ color: "white" }} className="btn btn-primary shows"> {tour.tour.name} </Link>
    );
};

export default TourLink;
