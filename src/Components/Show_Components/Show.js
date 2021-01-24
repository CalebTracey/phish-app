import '../../style.css';
import React from 'react';
import MetaData from './MetaData'
import SetList from './SetList'

const Show = (props) => {
    let { show } = props
    return (
        <div className="show-details">
            <div className="meta"><MetaData show={show} /></div>
            <div className="set-list"><SetList show={show} /></div>
        </div>
    );
};

export default Show