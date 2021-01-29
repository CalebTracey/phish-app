import React from "react";
import { Link } from "react-router-dom";

const YearLink = (props) => {
    let {year, showCount} = props
    return (
        <Link to={`/PhishApp/years/${year}`} style={{ color: "white" }} className="btn btn-primary "> 
        <div className = "year-info">
        <div className = "year-info-year">{year}</div> 
        <div className = "year-info-show">
            <div> Shows: </div> 
            <div className = "year-info-count">{showCount}</div>
            </div>
            </div>
        </Link>
    );
};

export default YearLink;
