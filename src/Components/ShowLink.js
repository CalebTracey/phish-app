import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowLink = ({ show }) => {
  return (
    // <Nav  className="mr-auto">
      <Link to={"/PhishApp/shows/" + show.date} style={{color: "white"}} className="btn btn-primary shows">
        {show.date} {show.venue.name}
      </Link>
    // </Nav>
  );
};

export default ShowLink;
