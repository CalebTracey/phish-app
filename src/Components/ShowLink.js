import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const ShowLink = ({ show }) => {
  return (
    <Nav  className="mr-auto">
      <Link to={"/shows/" + show.date} className="nav-link">
        {show.date} {show.venue.name}
      </Link>
    </Nav>
  );
};

export default ShowLink;
