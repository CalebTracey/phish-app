import React from "react";
import { Nav } from "react-bootstrap";

const ShowLink = ({ show }) => {
  return (
    <button type="button" class="btn btn-primary shows">
      <Nav.Link href={"/PhishApp/shows/" + show.date}>
        {show.date} {show.venue.name}
      </Nav.Link>
    </button>
  );
};

export default ShowLink;
