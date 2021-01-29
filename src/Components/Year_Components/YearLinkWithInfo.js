import React from "react";
import { Link } from "react-router-dom";

const YearLink = (props) => {
    let { year, showCount } = props
    let showString = "show"
    if (showCount > 1) {
        showString = "shows"
    }
    return (
        <Link to={`/PhishApp/years/${year}`} style={{ color: "white" }} className="btn btn-primary ">
            <div className="year-info">
                <h5 className="year-info-year">{year}</h5>
                <div className="year-info-show">
                    <div class="container">
                        <span class="badge badge-light">
                            <div className="year-info-badge">
                                <div className="year-info-count">{showCount}</div>
                                <div> {showString} </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default YearLink;
