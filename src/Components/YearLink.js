import React from "react";

const YearLink = (year) => {
    return (
    <button type="button" class="btn btn-primary" >
    <a style={{color: "white"}} href={`/PhishApp/years/${year.year}`}>{year.year}
    </a>
    </button >
  );
};

export default YearLink;
