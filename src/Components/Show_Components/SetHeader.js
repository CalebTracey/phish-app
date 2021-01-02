import React from 'react';

const SetHeader = (props) => {
    let { duration, setKey } = props

    return (
        <div className="set-header">
            <h6 className="set-header-field">Set {setKey}</h6>
            <h6 className="set-header-field-length">Length: {duration}</h6>
        </div>
    );
};

export default SetHeader;