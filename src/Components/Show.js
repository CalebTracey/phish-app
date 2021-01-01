import '../style.css';
import React from 'react';
import MetaData from './Show_Components/MetaData'
import SetList from './Show_Components/SetList'

const Show = (props) => {
    let { show } = props
    return (
        <div clasName="meta-data-comp">
            <div>
                <MetaData show={show} />
            </div>
            <div>
                <SetList show={show} />
            </div>
        </div>

    );
};

export default Show