import React from "react";
import { Link } from "react-router-dom";

const VenueLink = (venue) => {
    let showString = "show"
    if (venue.venue.shows_count > 1) {
        showString = "shows"
    }
    return (
        <Link to={`/PhishApp/venues/${venue.venue.id}`} style={{ color: "white" }} className="btn btn-primary shows">
            <div className="year-info">
                <h5 className="year-info-year">{venue.venue.name}</h5>
                <div className="year-info-show">
                    <div className="container">
                        <span className="badge badge-light">
                            <div className="year-info-badge">
                                <div className="year-info-count">{venue.venue.shows_count}</div>
                                <div> {showString} </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default VenueLink;