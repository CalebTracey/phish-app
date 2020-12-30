import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";

const Tour = (tour) => {
    return (
        <div>
            <Link to="/tours/">{tour}</Link>
        </div>
    );
};

export default Tour;