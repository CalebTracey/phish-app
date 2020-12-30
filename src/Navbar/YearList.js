import { Component } from "react";
import Year from './Year'

const YearList = ({ data }) => {
    // Map through the todos
    const yearNode = data.length == 0 ? "Loading..." :
        data.map((year, i) => {
            return (<Year year={year} key={i} />)
        });
    return (
        <div>
            <div>{yearNode}</div>
        </div>
    );
}

export default YearList