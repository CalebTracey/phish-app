import React from "react";
import { Link } from "react-router-dom";
import allActions from "../../Redux/actions";
import { useDispatch } from "react-redux";

const YearLinkInfo = ({ year, showCount }) => {

    const dispatch = useDispatch()

    let showString = "show"
    if (showCount > 1) {
        showString = "shows"
    }

    return (
        <Link to={`/PhishApp/years/${year}`} style={{ color: "white" }} className="btn btn-primary " onClick={() =>
            dispatch(allActions.showsAction.setYear(year))
        }>
            <div className="year-info">
                <h5 className="year-info-year">{year}</h5>
                <div className="year-info-show">
                    <div className="container">
                        <span className="badge badge-light">
                            <div className="year-info-badge">
                                <div className="year-info-count">{showCount}</div>
                                <div> {showString} </div>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default YearLinkInfo;
