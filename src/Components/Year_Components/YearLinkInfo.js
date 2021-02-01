import React from "react";
import { Link } from "react-router-dom";

const YearLinkInfo = (year) => {
    //let { year, showCount } = props
    let showString = "show"
    if (year.showCount > 1) {
        showString = "shows"
    }
    return (
        <Link to={`/PhishApp/years/${year.year}`} style={{ color: "white" }} className="btn btn-primary ">
            <div className="year-info">
                <h5 className="year-info-year">{year.year}</h5>
                <div className="year-info-show">
                    <div className="container">
                        <span className="badge badge-light">
                            <div className="year-info-badge">
                                <div className="year-info-count">{year.showCount}</div>
                                <div> {showString} </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default YearLinkInfo;
