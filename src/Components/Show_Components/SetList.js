import React from "react";
import SetPage from "./SetPage";

const SetList = (props) => {
  let {
    show: { tracks },
  } = props;

  let sets = tracks.map((track) => {
    return track.set;
  });

  let setKeys = [...new Set(sets)];

  const setNodes = setKeys.map((setKey) => {
    return (
      <div className="set-page" key={setKey}>
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
