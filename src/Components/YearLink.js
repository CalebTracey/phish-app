import React from "react";
import { Nav } from "react-bootstrap";
import {Link} from "react-router-dom";

const YearLink = (year) => {
  return (
    <Nav  className="mr-auto">
      <Link to={`/years/${year.year}`} className="nav-link"> {year.year} </Link>
    </Nav>
  );
};

export default YearLink;
