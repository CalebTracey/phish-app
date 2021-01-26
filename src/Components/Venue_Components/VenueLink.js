import React from "react";
import { Link } from "react-router-dom";

const VenueLink = (venue) => {
    return (
        <Link to={`/PhishApp/venues/${venue.venue.id}`} style={{ color: "white" }} className="btn btn-primary shows"> {venue.venue.name} </Link>
    );
};

export default VenueLink;