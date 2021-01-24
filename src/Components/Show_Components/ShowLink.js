import { Link } from "react-router-dom";

const ShowLink = ({ show }) => {

  function getVenueName() {
    let venueName = null
    let venueCheck = show.hasOwnProperty('venue')

    if (venueCheck) {
      venueName = show.venue.name
    } else {
      venueName = show.venue_name
    }
    return venueName
  }

  function getDate() {
    let date = null
    let dateCheck = show.hasOwnProperty('date')

    if (dateCheck) {
      date = show.date
    } else {
      date = show.show_date
    }
    return date
  }

  return (
      <Link to={"/PhishApp/shows/" + getDate()} style={{color: "white"}} className="btn btn-primary shows">
        {getDate()} {getVenueName()}
      </Link>
  );
};

export default ShowLink;
