import React from 'react';

const SetHeader = (props) => {
    let { duration, setKey } = props

    return (
        <div className="set-header">
            <div className="set-header-field">Set {setKey}</div>
            <div className="set-header-field-length">Length: {duration}</div>
        </div>
    );
};

export default SetHeader;