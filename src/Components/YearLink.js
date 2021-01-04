import React from "react";
import { Nav } from "react-bootstrap";

const YearLink = (year) => {
  return (
    <button type="button" class="btn btn-primary">
      <Nav.Link href={`/PhishApp/years/${year.year}`}>{year.year} </Nav.Link>
    </button>
  );
};

export default YearLink;
