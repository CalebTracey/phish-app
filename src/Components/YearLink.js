import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const YearLink = (year) => {
    return (
        <div>
            <Link to={"/years/" + year.year}>{year.year}</Link>
        </div>
    );
};

export default YearLink;