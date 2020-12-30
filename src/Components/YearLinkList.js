import { Component } from "react";
import YearLink from './YearLink'


const YearLinkList = ({ data }) => {
    // Map through the todos
    const yearNode = data.length == 0 ? "Loading..." :
        data.map((year, i) => {
            return (<YearLink year={year} key={i} />)
        });
    return (
        
        <div>
            <div>{yearNode}</div>
        </div>
    );
}

export default YearLinkList