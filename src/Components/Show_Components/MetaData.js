import React from 'react';

const MetaData = (props) => {
    let {show: {date, venue_name, venue}} = props
    return (
        <div className="meta-data">
            <div className="field">{date}</div>
            <div className="field">{venue_name}</div>
            <div className="field">{venue.location}</div>
        </div>

    );
};

export default MetaData;

