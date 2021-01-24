import React from "react";
import { Link } from "react-router-dom";

const YearLink = (year) => {
    return (
            <Link to={`/PhishApp/years/${year.year}`} style={{ color: "white" }} className="btn btn-primary"> {year.year} </Link>
    );
};

export default YearLink;
