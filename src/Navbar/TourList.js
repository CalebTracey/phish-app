import { Component } from "react";
import Tour from './Year'

const TourList = ({ data }) => {
    // Map through the todos
    const tourNode = data.map((tour) => {
        return (<Tour tour={tour} key={tour.id} />)
    });
    return (
        <div>
            <div>{tourNode}</div>
        </div>
    );
}

export default TourList