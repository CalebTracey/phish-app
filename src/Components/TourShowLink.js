import { Link } from "react-router-dom";

const TourShowLink = ({ show }) => {
  return (
    // <Nav  className="mr-auto">
      <Link to={"/PhishApp/shows/" + show.date} style={{color: "white"}} className="btn btn-primary shows">
        {show.date} {show.venue_name}
      </Link>
    // </Nav>
  );
};

export default TourShowLink;