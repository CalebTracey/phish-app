import React from "react";
import SetPage from "./SetPage";

const SetList = (props) => {
  let {
    show: { tracks },
  } = props;

  //console.log("*********TRACKS" + JSON.stringify(tracks))
  let sets = tracks.map((track) => {
    return track.set;
  });

  let setKeys = [...new Set(sets)];

  //console.log("*********SETS" + JSON.stringify(one))

  const setNodes = setKeys.map((setKey) => {
    return (
      <div className="set-page">
        <SetPage tracks={tracks} setKey={setKey} />
      </div>
    );
  });

  return (
    <div className="set-details">
      <h2 className="set-title">Set List</h2>
      {setNodes}
    </div>
  );
};

export default SetList;
