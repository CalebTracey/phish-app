import YearLinkWithInfo from './YearLinkWithInfo'
import Spinner from 'react-bootstrap/Spinner'


import React from 'react';

const YearLinkListWithInfo = ({ data }) => {
    const yearNode = data === undefined ? <Spinner animation="border" /> :
        data.map((year) => {
            return (<YearLinkWithInfo year={year.date} key={year.date} showCount={year.show_count} />)
        });
    return (yearNode);
}

export default YearLinkListWithInfo