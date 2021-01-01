import React from 'react';

const MetaData = (props) => {
    let {show: {date, venue_name, venue}} = props
    return (
        <div>
            <div>{date}</div>
            <div>{venue_name}</div>
            <div>{venue.location}</div>
        </div>

    );
};

export default MetaData;

