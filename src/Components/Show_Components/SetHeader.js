import React from 'react';

const SetHeader = (props) => {
    let { duration, setKey } = props
    var keyString = ""

    if (setKey === "E" || setKey === "e") {
        keyString = (<h6 className="set-header-field">Encore</h6>)
    } else {
        keyString = (<h6 className="set-header-field">Set {setKey}</h6>)
    }

    return (
        <div className="set-header">
            {keyString}
            <h6 className="set-header-field-length">Length: {duration}</h6>
        </div>
    );
};

export default SetHeader;