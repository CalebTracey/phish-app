import React from "react";

const MetaData = (props) => {
  let {
    show: { date, venue_name, venue },
  } = props;
  return (
    <div className="meta-data">
      <h2 className="field">{date}</h2>
      <h2 className="field">{venue_name}</h2>
      <h2 className="field">{venue.location}</h2>
    </div>
  );
};

export default MetaData;
