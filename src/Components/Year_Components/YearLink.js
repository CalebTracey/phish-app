import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import allActions from "../../Redux/actions";

const YearLink = ({ year }) => {
  const dispatch = useDispatch();

  return (
    <Link
      to={`/PhishApp/years/${year}`}
      style={{ color: "white" }}
      className="btn btn-primary home-year"
      onClick={() => dispatch(allActions.showsAction.setYear(year))}
    >
      <div className="home-year-item">{year}</div>{" "}
    </Link>
  );
};

export default YearLink;
