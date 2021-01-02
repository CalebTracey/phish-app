import '../style.css';
import React from 'react';
import MetaData from './Show_Components/MetaData'
import SetList from './Show_Components/SetList'

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