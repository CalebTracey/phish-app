import React from "react";
import { Link } from "react-router-dom";

const TourLink = (tour) => {
    let showString = "show"
    if (tour.tour.shows.length > 1) {
        showString = "shows"
    }
    return (
        <Link to={`/PhishApp/tours/${tour.tour.id}`} style={{ color: "white" }} className="btn btn-primary shows">
            <div className="year-info">
                <h5 className="year-info-year">{tour.tour.name}</h5>
                <div className="year-info-show">
                    <div className="container">
                        <span className="badge badge-light">
                            <div className="year-info-badge">
                                <div className="year-info-count">{tour.tour.shows.length}</div>
                                <div> {showString} </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default TourLink;
