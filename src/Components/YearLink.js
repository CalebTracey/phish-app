import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const YearLink = (year) => {
    return (
        // <Nav className="mr-auto" >
            <Link to={`/PhishApp/years/${year.year}`} style={{ color: "white" }} className="btn btn-primary"> {year.year} </Link>
        // </Nav> 
    );
};

export default YearLink;
