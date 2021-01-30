import React from "react";
import { Link } from "react-router-dom";

const YearLink = (year) => {
    return (
        <Link to={`/PhishApp/years/${year.year}`} style={{ color: "white" }} className="btn btn-primary home-year"> 
        <div className = "home-year-item">{year.year}</div> </Link>
    );
};

export default YearLink;
